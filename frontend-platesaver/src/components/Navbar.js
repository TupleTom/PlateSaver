import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    padding: '20px',
    backgroundColor: '#558b2f',
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
          <Link style={linkStyle} to="/meal-planning">Meal Planning</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;