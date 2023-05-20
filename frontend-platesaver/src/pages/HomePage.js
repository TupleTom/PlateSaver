import React, { useState } from "react";
import './../globalStyles.css';

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "example" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  if (isLoggedIn) {
    return (
      <div className="home-page">
        <h1 className="home-page-title">Welcome back, {username}!</h1>
      </div>
    );
  }

  return (
    <div className="home-page">
      <div className="content-center">
        <p className="home-page-description">
          We're here to help you reduce food waste, save money, and make an
          impact. Join us in our mission and start making a difference today!
        </p>
        <div className="home-page-instructions">
          <h2 className="home-page-instructions-title"></h2>
          <p className="home-page-instructions-steps">
         
            <br />
           
            <br />
          
          </p>
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;