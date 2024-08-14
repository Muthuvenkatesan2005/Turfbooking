import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li onClick={() => handleNavigation('/TurfDetails')}>Turf Details</li>
          <li onClick={() => handleNavigation('/UserDetail')}>User Details</li>
          <li onClick={() => handleNavigation('/InformationView')}>Information View</li>
        </ul>
      </div>
      <div className="content">
        <h3>Welcome to the Admin Dashboard</h3>
        <p>Select a section from the sidebar to manage the details.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
