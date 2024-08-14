import React, { useState } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="home-containers20">
      <video className="video-background" autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/background.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <header className="header">
        <nav>
          <ul className="nav-list">
            <div className="hamburger" onClick={toggleMenu}>
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
            </div>
            {menuOpen && (
              <div className="menu">
                <button onClick={() => handleClick('/')}>Home</button>
                <button onClick={() => handleClick('/AboutUs')}>About Us</button>
                <button onClick={() => handleClick('/ContactUs')}>Contact Us</button>
                <button onClick={() => handleClick('/land')}>Book</button>
                <button onClick={() => handleClick('/Regist')}>RegisterTurf</button>
              </div>
            )}
            <Sidebar/>
            <div className="nav-links">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/AboutUs'>Aboutus</Link></li>
              <li><Link to='/ContactUs'>Contact Us</Link></li>
              <li><Link to='/land'>Book</Link></li>
              <li><Link to='/Regist'>RegisterTurf</Link></li>
             
            </div>
          </ul>
        </nav>
      </header> */}
      <div>
      <NavBar/>
      </div>
      <section className="herosn">
        <div className='sanjay'>
        <h2 className=''>Book Your Turf Today!</h2>
        <p>Easy and quick turf bookings at your fingertips.</p>
        <div className='muthu'>
        {/* <button className="register" onClick={() => handleClick('/Login')}>Login</button> */}
        <button className="register" onClick={() => handleClick('/land')}>Book</button>
        </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
