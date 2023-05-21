import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../globalStyles.css";

const ManageInventoryPage = () => {
  const [inventory, setInventory] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemExpiryDate, setItemExpiryDate] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: Date.now(), // Add a unique ID to the item
      name: itemName,
      quantity: itemQuantity,
      price: itemPrice,
      expiryDate: itemExpiryDate,
    };

    setInventory([...inventory, newItem]);
    setItemName("");
    setItemQuantity("");
    setItemPrice("");
    setItemExpiryDate("");
  };

  return (
    <div className="manage-inventory-page">
      <h1 className="manage-inventory-page-title">Manage Inventory</h1>
      <p className="manage-inventory-page-description">
        This is where you can add, view, and manage your inventory.
      </p>
      <form onSubmit={handleFormSubmit}>
        <h2>Add Item to Inventory</h2>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
        <input
          type="number"
          placeholder="Item Quantity"
          value={itemQuantity}
          onChange={(event) => setItemQuantity(event.target.value)}
        />
        <input
          type="number"
          placeholder="Item Price"
          value={itemPrice}
          onChange={(event) => setItemPrice(event.target.value)}
        />
        <label>Expiry Date</label>
        <input
          type="date"
          value={itemExpiryDate}
          onChange={(event) => setItemExpiryDate(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="inventory-list">
        <h2 className="inventory-list-title">Your Inventory</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Expiry Date</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.expiryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link
        to={{
          pathname: "/meal-planning",
          state: {
            inventoryData: inventory,
          },
        }}
        className="meal-planning-link"
      >
        Go to Meal Planning
      </Link>
    </div>
  );
};

export default ManageInventoryPage;