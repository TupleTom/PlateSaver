import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ManageInventoryPage from './pages/ManageInventoryPage';
import MealPlanningPage from './pages/MealPlanningPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      
        <Route exact path='/' component={HomePage} />
        <Route path='/manage-inventory' component={ManageInventoryPage} />
        <Route path='/meal-planning' component={MealPlanningPage} />
      
    </div>
  );
}

export default App;