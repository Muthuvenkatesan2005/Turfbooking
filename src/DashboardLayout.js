import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
// import PetsAvailable from './PetsAvailable';
// import ViewRequests from './ViewRequests';
import './Dashboardlayout.css';
// import UserProfile from './UserProfile';
// import ManagePayment from './ManagePayment';
// import ManagePetPickupRequests from './ManagePetPickupRequests';
import AboutUs from './AboutUs';
import LandingPage from './LandingPage';
import Categories from './Categories';

const DashboardLayout = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className={`dashboard-layout ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      <div className="content">
        <Routes>
          <Route path="/" element={<h2>Welcome to the Dashboard</h2>} />
          <Route path="cat" element={<AboutUs />} />
          <Route path="cati" element={<LandingPage />} />
          <Route path="Land" element={<Categories />} />
          {/* <Route path="payment" element={<ManagePayment />} /> 
          <Route path="manage-pet-pickup-requests" element={<ManagePetPickupRequests />} />  */}
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
