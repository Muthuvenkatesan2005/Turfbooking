import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import './Login.css';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'username') setUsername(value);
    else if (id === 'password') setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:8080/api/users');
      const users = response.data;
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        alert('Login successful!');
        navigate('/');  // Navigate to the home page on successful login
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('An error occurred while fetching user data');
    }
  };

  const handleClick = (path) => {
    navigate(path);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* <header className="header">
        <nav>
          <ul className="nav-list">
            <div className="hamburger" onClick={toggleMenu}>
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
            </div>
            {menuOpen && (
              <div className="menu">
                <button onClick={() => handleClick('/')}>Home</button>
                <button onClick={() => handleClick('/about')}>About Us</button>
                <button onClick={() => handleClick('/contact')}>Contact Us</button>
                <button onClick={() => handleClick('/one')}>One</button>
                <button onClick={() => handleClick('/two')}>Two</button>
              </div>
            )}
            <div className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#booking">Book Now</a></li>
              <li><a href="#contact">Contact</a></li>
            </div>
          </ul>
        </nav>
      </header> */}
      <NavBar/>
      <div className="body8">
        <div className="container2" id="container">
          <div className="form-container sign-in-container">
            <form className='form1' onSubmit={handleSubmit}>
              <div>
                <h1>Sign in</h1>
                <div className="social-container">
                  <a href="#" className="social"><FaInstagram /></a>
                  <a href="#" className="social"><FaTwitter /></a>
                  <a href="#" className="social"><FaLinkedin /></a>
                </div>
                <span>or use your account</span>
                <input type="text" id="username" placeholder="Username" className="inp" onChange={handleChange} />
                <input type="password" id="password" placeholder="Password" className="inp" onChange={handleChange} />
                <a href="#">Forgot your password?</a>
                {error && <div className="error">{error}</div>}
                <br></br>
                <br></br>
                <button type="submit" className="button8">Sign In</button>
                <h6>or</h6>
                <div className="sign">
                  <h6>Don't have an account? <Link to="/Register">signup</Link></h6>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;


