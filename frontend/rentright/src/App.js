import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import LandingPage from './components/landingPage';
import TenantDashboard from './components/tenantDashboard';
import ManagerDashboard from './components/managerDashboard';
import Listings from './components/Listings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tenant-dashboard" element={<TenantDashboard />} />
        <Route path="/manager-dashboard" element={<ManagerDashboard />} />
        <Route path="/listings" element={<Listings />} />
      </Routes>
    </Router>
  );
}

export default App;