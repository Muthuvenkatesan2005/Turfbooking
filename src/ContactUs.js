import React, { useState } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './ContactUs.css';
import NavBar from './NavBar';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      {/* <header className="header">
        <nav>
          <ul className="nav-links">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/AboutUs'>About Us</Link></li>
            <li><Link to='/ContactUs'>Contact Us</Link></li>
            <li><Link to='/land'>Book</Link></li>
            <li><Link to='/Regist'>Register Turf</Link></li>
          </ul>
        </nav>
      </header> */}
      <NavBar/>

      <div className="contact-content">
        <div className="contact-form-container">
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact Details</h2>
          <p><strong>Address:</strong> 123 Turf Lane, Sportstown, C</p>
          <p><strong>Phone:</strong> +91 9585698547</p>
          <p><strong>Email:</strong> turfbay@turfbooker.com</p>
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314409.54221268616!2d76.9152648205382!3d11.016844935956348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857f6b918d217%3A0x8c3a8a34d118b0b!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1616588047306!5m2!1sen!2sin"
              className="map"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
