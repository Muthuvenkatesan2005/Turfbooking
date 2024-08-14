import React, { useState } from 'react';
import Sidebar from './smpt'; // Adjust the import path accordingly
import './smpt.css';

const SomeComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {/* Your main content here */}
      </div>
    </div>
  );
};

export default SomeComponent;
