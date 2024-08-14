import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingSearch.css';

const BookingSearch = () => {
    const [location, setLocation] = useState('');
    const [date, setDate] = useState(new Date());
    const [results, setResults] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        // Mock search results for demonstration
        const mockResults = [
            { id: 1, name: 'Turf 1', location: location, date: date.toDateString() },
            { id: 2, name: 'Turf 2', location: location, date: date.toDateString() },
        ];
        setResults(mockResults);
    };

    return (
        <div className="search-container">
            <h1>Search Turf Bookings</h1>
            <form onSubmit={handleSearch} className="search-form">
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input 
                        type="text" 
                        id="location" 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <DatePicker 
                        selected={date} 
                        onChange={(date) => setDate(date)} 
                        dateFormat="yyyy/MM/dd" 
                        required 
                    />
                </div>
                <button type="submit">Search</button>
            </form>
            <div className="results">
                {results.map(result => (
                    <div key={result.id} className="result-item">
                        <h2>{result.name}</h2>
                        <p>{result.location}</p>
                        <p>{result.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookingSearch;
