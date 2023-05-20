import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ManageInventoryPage from './pages/ManageInventoryPage';
import MealPlanningPage from './pages/MealPlanningPage';
import Navbar from './components/Navbar';
import './globalStyles.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manage-inventory" element={<ManageInventoryPage />} />
          <Route path="/meal-planning" element={<MealPlanningPage />} />
        </Routes>
    </div>
  );
}

export default App;