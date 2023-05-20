import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../globalStyles.css';

const ManageInventoryPage = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    // Fetch inventory from server when component mounts
    axios
      .get('/inventory')
      .then(response => {
        setInventory(response.data);
      })
      .catch(error => {
        console.error('Error fetching inventory', error);
      });
  }, []);

  return (
    <div className="manage-inventory-page">
      <h1 className="manage-inventory-page-title">Manage Inventory</h1>
      <p className="manage-inventory-page-description">
        This is where you can add, view, and manage your inventory.
      </p>
      {/* Display inventory items */}
      <div className="inventory-list">
        <h2 className="inventory-list-title">Your Inventory</h2>
        {inventory.map(item => (
          <p
            key={item.id}
            className="inventory-list-item"
          >
            {item.name} - {item.category} - Quantity: {item.quantity}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ManageInventoryPage;