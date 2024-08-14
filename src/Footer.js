import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Turf Booking</h3>
        <p>Your go-to platform for easy and quick turf bookings.</p>
        <div className="social-icons">
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaLinkedin /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Turf Booking. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
