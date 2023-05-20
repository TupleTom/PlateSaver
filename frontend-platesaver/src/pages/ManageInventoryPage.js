import React, { useState, useEffect } from 'react';
import axios from 'axios'; // you need to install axios using npm install axios

const ManageInventoryPage = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        // Fetch inventory from server when component mounts
        axios.get('/inventory')
            .then(response => {
                setInventory(response.data);
            })
            .catch(error => {
                console.error('Error fetching inventory', error);
            });
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            background: '#F0F0F0'
        }}>
            <h1 style={{
                color: '#52B788',
                fontSize: '3em',
                marginBottom: '20px'
            }}>
                Manage Inventory
            </h1>
            <p style={{
                color: '#52B788',
                fontSize: '1.2em',
                lineHeight: '1.5',
                textAlign: 'center',
                maxWidth: '600px',
                padding: '0 20px'
            }}>
                This is where you can add, view, and manage your inventory.
            </p>
            {/* Display inventory items */}
            <div style={{
                marginTop: '50px',
                borderRadius: '20px',
                padding: '20px',
                background: '#FFFFFF',
                boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                width: '80%'
            }}>
                <h2 style={{
                    color: '#52B788',
                    fontSize: '2em',
                    marginBottom: '20px'
                }}>
                    Your Inventory
                </h2>
                {inventory.map(item => (
                    <p key={item.id} style={{
                        color: '#52B788',
                        fontSize: '1em',
                        lineHeight: '1.5',
                    }}>
                        {item.name} - {item.category} - Quantity: {item.quantity}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default ManageInventoryPage;