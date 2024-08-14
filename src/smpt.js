import React from 'react';
import { useNavigate } from 'react-router-dom';
import './smpt.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faMoneyBillWave, faDollarSign, faListAlt } from '@fortawesome/free-solid-svg-icons';

const smpt = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleSidebarItemClick = (path) => {
    navigate(path);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <ul>
        <li onClick={() => handleSidebarItemClick('/TurfDetails')}>
          <FontAwesomeIcon icon={faChartPie} /> {isOpen && 'Turf Details'}
        </li>
        <li onClick={() => handleSidebarItemClick('/UserDetail')}>
          <FontAwesomeIcon icon={faMoneyBillWave} /> {isOpen && 'User Details'}
        </li>
        <li onClick={() => handleSidebarItemClick('/InformationView')}>
          <FontAwesomeIcon icon={faDollarSign} /> {isOpen && 'Information View'}
        </li>
      </ul>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? '<' : '>'}
      </button>
    </div>
  );
};

export default smpt;
