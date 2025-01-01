


import React, { useState } from 'react';
import ChildDashboard from './ChildDashboard'; 

function ParentDashboard() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    address: null
  });

  const handleLocationUpdate = (locationData) => {
    setLocation(locationData); 
  };

  const handleRefreshLocation = () => {
    setLocation({ latitude: null, longitude: null, address: null });
  };

  return (
    <div className="parent-dashboard">
      <h1>Parent Dashboard</h1>

      {location.latitude && location.longitude && location.address ? (
        <div>
          <p><strong>Your child’s current location is:</strong></p>
          {/* <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Address: {location.address}</p> */}
        </div>
      ) : (
        <p>
            {/* Location not available yet. */}

        </p>
      )}

      {/* Refresh button */}
      {/* <button className="refresh-button" onClick={handleRefreshLocation}>Refresh Location</button> */}

      {/* Pass the handleLocationUpdate function as prop to ChildDashboard */}
      <ChildDashboard onLocationUpdate={handleLocationUpdate} />
    </div>
  );
}

export default ParentDashboard;
