import React from 'react';

const HomePage = () => {
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
                Welcome to PlateSaver
            </h1>
            <p style={{ 
                color: '#52B788', 
                fontSize: '1.2em', 
                lineHeight: '1.5', 
                textAlign: 'center', 
                maxWidth: '600px', 
                padding: '0 20px' 
            }}>
                We're here to help you reduce food waste, save money, and make an impact. Join us in our mission and start making a difference today!
            </p>
            <div style={{
                marginTop: '50px',
                borderRadius: '20px',
                padding: '20px',
                background: '#FFFFFF',
                boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)'
            }}>
                <h2 style={{ 
                    color: '#52B788', 
                    fontSize: '2em', 
                    marginBottom: '20px'
                }}>
                    How to Get Started
                </h2>
                <p style={{ 
                    color: '#52B788', 
                    fontSize: '1em', 
                    lineHeight: '1.5', 
                }}>
                    1. Register an account<br/>
                    2. Add items to your inventory<br/>
                    3. Start meal planning and saving food!
                </p>
            </div>
        </div>
    );
};

export default HomePage;