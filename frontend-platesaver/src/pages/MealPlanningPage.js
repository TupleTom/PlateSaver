import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './../globalStyles.css';

const MealPlanningPage = () => {
  const location = useLocation();
  const inventoryData = location.state?.inventoryData || [];

  return (
    <div className="meal-planning-page">
      <h1 className="meal-planning-page-title">PlateSaver Meal Planning</h1>
      <div className="meal-planning-page-content">
        {inventoryData.length > 0 ? (
          <>
            <h2 className="meal-planning-message">Your Inventory</h2>
            <ul className="inventory-list">
              {inventoryData.map(item => (
                <li key={item.id} className="inventory-list-item">
                  {item.name} - {item.category} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h2 className="meal-planning-message">Coming Soon!</h2>
            <p className="meal-planning-message">
              We are currently developing our meal planning features. Stay tuned!
            </p>
          </>
        )}
      </div>
      <Link to="/" className="back-to-home-link">Back to Home</Link>
    </div>
  );
};

export default MealPlanningPage;