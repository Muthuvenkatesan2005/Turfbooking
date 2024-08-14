import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sidebar-container">
      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
      </div>
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => handleClick('/')}>Home</button>
        <button onClick={() => handleClick('/AboutUs')}>About Us</button>
        <button onClick={() => handleClick('/ContactUs')}>Contact Us</button>
        <button onClick={() => handleClick('/Book')}>Book</button>
        <button onClick={() => handleClick('/RegisterTurf')}>Register Turf</button>
      </div>
    </div>
  );
};

export default Sidebar;
