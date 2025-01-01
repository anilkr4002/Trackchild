

import { useState, useEffect } from "react";
import "../styles/ChildDashboard.css"; // Import your CSS for styling

function ChildDashboard({ onLocationUpdate }) {
  const [Gpslati, setGpslati] = useState(null);
  const [Gpslongi, setGpslongi] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  const geo = navigator.geolocation;
  let watchId = null;

  // Function to get the address based on latitude and longitude
  const getuserAddress = async () => {
    if (Gpslati && Gpslongi) {
      let url = `https://api.opencagedata.com/geocode/v1/json?key=af14b055bee2455c83c90768899bcc18&q=${Gpslati}%2C+${Gpslongi}&pretty=1&no_annotations=1`;
      const loc = await fetch(url);
      const data = await loc.json();
      console.log("User Address:", data);

      if (data.results && data.results[0]) {
        setUserAddress(data.results[0].formatted);
        // Send the location and address to the parent
        onLocationUpdate({
          latitude: Gpslati,
          longitude: Gpslongi,
          address: data.results[0].formatted
        });
      }
    }
  };

  // Function to get the current location using geolocation API
  const getLocation = () => {
    watchId = geo.watchPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Update the state with the new coordinates
        setGpslati(latitude);
        setGpslongi(longitude);

        // Fetch the address based on the updated location
        getuserAddress();
      },
      (error) => {
        console.error("Error getting location:", error);
      },
      { enableHighAccuracy: true, maximumAge: 2000, timeout: 10000 }
    );
  };

  useEffect(() => {
    getLocation();
    return () => {
      if (watchId) {
        geo.clearWatch(watchId); // Clean up the watch when component unmounts
      }
    };
  }, []);

  // Function to refresh the location manually
  const handleRefreshLocation = () => {
    setGpslati(null);
    setGpslongi(null);
    setUserAddress(null);
    getLocation();
  };

  return (
    <div className="child-dashboard">
      <h1>Child Dashboard</h1>
      <p><strong>Latitude:</strong> {Gpslati}</p>
      <p><strong>Longitude:</strong> {Gpslongi}</p>
      {userAddress && <p><strong>User Address:</strong> {userAddress}</p>}
      <button className="refresh-button" onClick={handleRefreshLocation}>Refresh Location</button>
    </div>
  );
}

export default ChildDashboard;
