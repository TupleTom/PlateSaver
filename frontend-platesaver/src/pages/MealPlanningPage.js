import React from 'react';
import { Link } from 'react-router-dom';

const MealPlanningPage = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
            <h1 style={{ color: '#558b2f' }}>PlateSaver Meal Planning</h1>
            <div style={{ width: '80%', margin: 'auto', marginTop: '20px', backgroundColor: '#f1f8e9', padding: '20px', borderRadius: '15px' }}>
                <h2>Coming Soon!</h2>
                <p style={{ color: '#558b2f', marginTop: '20px' }}>We are currently developing our meal planning features. Stay tuned!</p>
            </div>
            <Link to="/" style={{ display: 'inline-block', marginTop: '30px', backgroundColor: '#558b2f', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '15px' }}>Back to Home</Link>
        </div>
    );
}

export default MealPlanningPage;