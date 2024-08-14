import React from 'react';
import './AboutUs.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import Team1 from './Images/team1.jpg';
import Team3 from './Images/team1.jpeg';
import Team2 from './Images/team2.jpeg';
const AboutUs = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="about-container">
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
       <NavBar/>
      <section className='bet'>
         {/* <div>
      <h1>Welcome to My Component</h1>
      <img src={exampleImage} alt="Example" />
    </div> */}


{/*     
    <img src='pictures\remove.png'></img> */}
      </section>
      <section className="about-hero">
        <h2>About Us</h2>
        <p>Welcome to Turf Booking, your go-to solution for easy and quick turf bookings. We aim to provide a seamless booking experience for sports enthusiasts looking to book turfs for their games.</p>
        <p>Our platform is designed to make the booking process as smooth as possible, ensuring you can find and book your desired turf with just a few clicks. Whether you're planning a casual game with friends or organizing a larger event, Turf Booking has got you covered.</p>
        <p>We are committed to delivering excellent service and continually improving our platform to better serve our users. Thank you for choosing Turf Booking, and we look forward to helping you book your next game!</p>
      </section>
      {/* <section className="about-mission">
        <h2>Our Mission</h2>
        <p>Our mission is to provide a seamless and efficient booking experience for sports enthusiasts everywhere. We believe in the power of sports to bring people together and aim to make it easier for everyone to access and enjoy turf facilities.</p>
      </section> */}
      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={Team1} alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={Team2 } alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Chief Operations Officer</p>
          </div>
          <div className="team-member">
            <img src={Team3} alt="Team Member 3" />
            <h3>Emily Johnson</h3>
            <p>Head of Customer Service</p>
          </div>
        </div>
      </section>
      {/* <section className="about-testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"Turf Booking made it so easy to find and book a turf for our weekend games. Highly recommend!"</p>
            <h4>- Alex P.</h4>
          </div>
          <div className="testimonial">
            <p>"The platform is user-friendly and the customer service is excellent. Will definitely use it again."</p>
            <h4>- Maria K.</h4>
          </div>
          <div className="testimonial">
            <p>"Great experience! Booking a turf has never been this simple. Kudos to the Turf Booking team."</p>
            <h4>- John D.</h4>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default AboutUs;
