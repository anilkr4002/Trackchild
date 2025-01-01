

import { useState } from "react";
import ParentDashboard from "./components/ParentDashboard";
import ChildDashboard from "./components/ChildDashboard";
import Login from "./components/Login";

function App() {
  const [role, setRole] = useState(null);
  const [childLocation, setChildLocation] = useState(null);

  // Function to handle login as either parent or child
  const handleLogin = (role) => {
    setRole(role);
  };

  // Function to handle logout and reset the app state
  const handleLogout = () => {
    setRole(null);
  };

  // Function to update child location and address in parent
  const handleLocationUpdate = (location) => {
    setChildLocation(location);
  };

  return (
    <div className="App">
      {role === "parent" && (
        <ParentDashboard onLogout={handleLogout} />
      )}
      {role === "child" && (
        <ChildDashboard onLocationUpdate={handleLocationUpdate} />
      )}
      {!role && <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;





// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [latitude,setlatitude]=useState();
//   const [longitude,setlongitude]=useState();
//   const [userAddress,setUserAddress]=useState();
  
//   const [Gpslati,setGpslati]=useState()
//   const [Gpslongi,setGpslongi]=useState()

//   const geo =navigator.geolocation 
//   geo.getCurrentPosition(userCoods)
//   function  userCoods(position){
//     let userlatitude=position.coords.latitude
//     let userlongitude=position.coords.longitude
//     console.log("Latitude",userlatitude);
//     console.log("Longitude",userlongitude);
//     setlatitude(userlatitude);
//     setlongitude(userlongitude);
//   }

// const getuserAddress=async()=>{
//   let url=`https://api.opencagedata.com/geocode/v1/json?key=af14b055bee2455c83c90768899bcc18&q=${latitude}%2C+${longitude}&pretty=1&no_annotations=1`
//   const loc=await fetch(url);
//   const data=await loc.json();
//   console.log("User Address:",data);
//   setUserAddress(data.results[0].formatted);
// }

// const handleGetUserAddress=async()=>{
//   await getuserAddress();
// }
// //Gps current location
// geo.watchPosition(userGpscoords)
// function userGpscoords(position){
//   let userGpsLatitude=position.coords.latitude;
//   let userGpsLongitude=position.coords.longitude;
//   console.log("Latitude",userGpsLatitude)
//   console.log("Lpngitude",userGpsLongitude)
//   setGpslati(userGpsLatitude)
//   setGpslongi(userGpsLongitude)
// }

//   return (
//     <>
//       <h1>Current Location</h1>
//       <h1>Latitude-{latitude}</h1>
//       <h1>Longitude-{longitude}</h1>
//       <h2>user address-{userAddress}</h2>

//       <button onClick={handleGetUserAddress}>Get</button>
//       <hr />
//       <h2>GpsLatitude-{Gpslati}</h2>
//       <h2>GpsLongitude-{Gpslongi}</h2>
//     </>
//   )
// }

// export default App

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import LoginPage from './components/LoginPage';
// import ParentDashboard from './components/ParentDashboard';
// import ChildDashboard from './components/ChildDashboard';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/parent-dashboard" element={<ParentDashboard />} />
//         <Route path="/child-dashboard" element={<ChildDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;






// import { useState } from "react";
// import Login from "./components/Login";
// import ParentDashboard from "./components/ParentDashboard";
// import ChildDashboard from "./components/ChildDashboard";
// import "./App.css";

// function App() {
//   const [role, setRole] = useState(null); // 'parent' or 'child'

//   const handleLogin = (userRole) => {
//     setRole(userRole);
//   };

//   const handleLogout = () => {
//     setRole(null);
//   };

//   return (
//     <div className="App">
//       {!role ? (
//         <Login onLogin={handleLogin} />
//       ) : role === "parent" ? (
//         <ParentDashboard onLogout={handleLogout} />
//       ) : (
//         <ChildDashboard onLogout={handleLogout} />
//       )}
//     </div>
//   );
// }

// export default App;


