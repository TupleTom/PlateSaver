import React from 'react';
import { Link } from 'react-router-dom';
import './../globalStyles.css';

const MealPlanningPage = () => {
  return (
    <div className="meal-planning-page">
      <h1 className="meal-planning-page-title">PlateSaver Meal Planning</h1>
      <div className="meal-planning-page-content">
        <h2 className="meal-planning-message">Coming Soon!</h2>
        <p className="meal-planning-message">
          We are currently developing our meal planning features. Stay tuned!
        </p>
      </div>
      <Link to="/" className="back-to-home-link">Back to Home</Link>
    </div>
  );
}

export default MealPlanningPage;