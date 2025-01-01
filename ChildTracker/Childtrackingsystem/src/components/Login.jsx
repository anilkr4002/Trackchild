// import "../styles/Login.css";

// function Login({ onLogin }) {
//   return (
//     <div className="login-container">
//       <h1>Child Tracking System</h1>
//       <p>Select your role to continue:</p>
//       <button onClick={() => onLogin("parent")} className="login-button">
//         Login as Parent
//       </button>
//       <button onClick={() => onLogin("child")} className="login-button">
//         Login as Child
//       </button>
//     </div>
//   );
// }

// export default Login;


// import "../styles/Login.css";

// function Login({ onLogin }) {
//   return (
//     <div className="login-container">
//       <h1>Child Tracking System</h1>
//       <p>Select your role to continue:</p>
//       <button onClick={() => onLogin("parent")} className="login-button">
//         Login as Parent
//       </button>
//       <button onClick={() => onLogin("child")} className="login-button">
//         Login as Child
//       </button>
//     </div>
//   );
// }

// export default Login;


import "../styles/Login.css";

function Login({ onLogin }) {
  return (
    <div className="login-container">
      <h1>Child Tracking System</h1>
      <p>Select your role to continue:</p>
      <button onClick={() => onLogin("parent")} className="login-button">
        Login as Parent
      </button>
      <button onClick={() => onLogin("child")} className="login-button">
        Login as Child
      </button>
    </div>
  );
}

export default Login;
    