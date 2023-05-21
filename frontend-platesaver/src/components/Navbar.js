import React from 'react';
import { Link } from 'react-router-dom';
import './../globalStyles.css';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    padding: '20px',
    backgroundColor: '#32612D',
  };
  
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
  };

  return (
    <nav>
      <ul style={navStyle}>
        <li>
          <Link style={linkStyle} to="/">Home</Link>
        </li>
        <li>
          <Link style={linkStyle} to="/manage-inventory">Manage Inventory</Link>
        </li>
        <li>
          <Link style={linkStyle} to="/about-us">About Us</Link>
        </li>
        <li>
          <Link style={linkStyle} to="/food-shelters">Food Shelters</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;