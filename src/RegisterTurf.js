import React, { useState } from 'react';
import './RegisterTurf.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaGooglePlusG, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const RegisterTurf = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    turfName: '',
    description: '',
    image: null,
    pitchSize: '',
    regularPrice: '',
    discountedPrice: '',
    cafe: '',
    contact: '',
    latitude: '',
    longitude: '',
    email: '',
    password: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    setFormData({ ...formData, [id]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('turfName', formData.turfName);
    formDataToSubmit.append('description', formData.description);
    formDataToSubmit.append('image', formData.image);
    formDataToSubmit.append('pitchSize', formData.pitchSize);
    formDataToSubmit.append('regularPrice', formData.regularPrice);
    formDataToSubmit.append('discountedPrice', formData.discountedPrice);
    formDataToSubmit.append('cafe', formData.cafe);
    formDataToSubmit.append('contact', formData.contact);
    formDataToSubmit.append('latitude', formData.latitude);
    formDataToSubmit.append('longitude', formData.longitude);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('password', formData.password);
    formDataToSubmit.append('address', formData.address);

    try {
      await axios.post('http://localhost:8080/api/turfs/registerTurf', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      localStorage.setItem('id',formData.id);
      setSuccess('Registration successful!');
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      setError('Error registering turf. Please try again.');
      console.error('Error registering turf:', error);
    } finally {
      setLoading(false);
    }
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
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/AboutUs'>About Us</Link></li>
              <li><Link to='/ContactUs'>Contact Us</Link></li>
              <li><Link to='/land'>Book</Link></li>
              <li><Link to='/Regist'>Register Turf</Link></li>
            </div>
          </ul>
        </nav>
      </header> */}
      <NavBar/>
      <div className="body">
        <div className="container" id="container">
          <div className="form-container sign-in-container">
            <form onSubmit={handleSubmit}>
              <h1>Register Your Turf</h1>
              <div className="social-container">
                <a href="#" className="social"><FaGooglePlusG /></a>
                <a href="#" className="social"><FaFacebook /></a>
                <a href="#" className="social"><FaLinkedin /></a>
              </div>
              <span>or use the form below to register</span>
              <div className="form-group">
                <input type="text" id="turfName" placeholder="Turf Name" className="input-field" value={formData.turfName} onChange={handleChange} />
                <input type="email" id="email" placeholder="Email" className="input-field" value={formData.email} onChange={handleChange} />
                <input type="password" id="password" placeholder="Password" className="input-field" value={formData.password} onChange={handleChange} />
              </div>
              <textarea id="description" placeholder="Description" className="input-field textarea" value={formData.description} onChange={handleChange} />
              <input type="file" id="image" placeholder="Turf Image" className="input-field" onChange={handleFileChange} />
              <input type="text" id="pitchSize" placeholder="Pitch Size" className="input-field" value={formData.pitchSize} onChange={handleChange} />
              <input type="text" id="regularPrice" placeholder="Regular Price" className="input-field" value={formData.regularPrice} onChange={handleChange} />
              <input type="text" id="discountedPrice" placeholder="Discounted Price" className="input-field" value={formData.discountedPrice} onChange={handleChange} />
              <input type="text" id="cafe" placeholder="Cafe Information" className="input-field" value={formData.cafe} onChange={handleChange} />
              <input type="text" id="contact" placeholder="Contact Number" className="input-field" value={formData.contact} onChange={handleChange} />
              <input type="text" id="latitude" placeholder="Latitude" className="input-field" value={formData.latitude} onChange={handleChange} />
              <input type="text" id="longitude" placeholder="Longitude" className="input-field" value={formData.longitude} onChange={handleChange} />
              <input type="text" id="address" placeholder="Address" className="input-field" value={formData.address} onChange={handleChange} />
              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'Registering...' : 'Register'}
              </button>
              {error && <p className="error-message">{error}</p>}
              {success && <p className="success-message">{success}</p>}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterTurf;
