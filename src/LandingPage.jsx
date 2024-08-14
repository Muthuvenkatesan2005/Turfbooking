import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './landingpage.css';
import { Link} from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
const cities = [
  'Coimbatore', 'Chennai', 'Bangalore', 'Mumbai', 'Delhi', 'Pune', 'Hyderabad', 'Kolkata'
];

function LandingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);
    if (query) {
      setFilteredCities(cities.filter(city => city.toLowerCase().includes(query)));
    } else {
      setFilteredCities([]);
    }
  };

  const handleCityClick = (city) => {
    setSearchTerm(city);
    setFilteredCities([]);
  };

  const handleSearchSubmit = () => {
    const normalizedSearchTerm = searchTerm.toLowerCase();
    if ( normalizedSearchTerm === 'chennai') {
      setErrorMessage('');
      navigate(`/cat`);
    } 
    else if (normalizedSearchTerm === 'coimbatore' ) {
      setErrorMessage('');
      navigate(`/cati`);
    } else {
      setErrorMessage('Please enter either "Coimbatore" or "Chennai"');
    }
  };

  return (
    <div className="Body1">
      <div className="containerkum">
        {/* <header>
          <img src="logo.png" alt="PlaySpots Logo" className="logo" />
          <nav>
          <header className="header">
                <nav>
            <div className="nav-links">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/AboutUs'>Aboutus</Link></li>
              <li><Link to='/ContactUs'>Contact Us</Link></li>
              <li><Link to='/land'>Book</Link></li>
              <li><Link to='/Regist'>RegisterTurf</Link></li>
              <li><a href="AboutUs">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#booking">Book</a></li>
            </div>
            </nav>
            </header>
          </nav>
        </header> */}
        <NavBar/>
        <main className='container1'>
          <div className="search-containerse">
            <h1>Explore and Book Sports Facilities Near You</h1>
            <div className="search-boxmi">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Enter city or location"
              />
              <ul className="suggestionskl">
                {filteredCities.map((city, index) => (
                  <li key={index} onClick={() => handleCityClick(city)}>
                    {city}
                  </li>
                ))}
              </ul>
            </div>
            <div className="buttonlap">
            <button onClick={handleSearchSubmit}>GO</button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          <div className="stats">
            <p><strong>400000+</strong> Users</p>
            <p><strong>900+</strong> Venues</p>
            <p><strong>160+</strong> Cities</p>
            <p><strong>30+</strong> Sports</p>
            <p><strong>20</strong> States</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LandingPage;
