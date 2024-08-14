import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const turfs = [
    { id: 1, name: 'Green Turf', fee: '2000 rs/hr', image: 'https://example.com/turf1.jpg', size: '5-a-side', rating: '4.5/5', description: 'Well maintained turf suitable for 5-a-side games' },
    { id: 2, name: 'Blue Turf', fee: '2500 rs/hr', image: 'https://example.com/turf2.jpg', size: '7-a-side', rating: '4.7/5', description: 'Spacious turf for 7-a-side matches' },
    // Add more turfs as needed
];

const TurfReservation = () => {
    const { turfId } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [duration, setDuration] = useState('');

    const turf = turfs.find(t => t.id === parseInt(turfId)) || {};

    const {
        image = 'https://via.placeholder.com/200?text=No+Image',
        name: turfName = 'Unknown Turf',
        size = 'N/A',
        rating = 'N/A',
        description = 'No description available'
    } = turf;

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const reservation = { name, date, time, duration, turfId: turf.id };
            await axios.post('http://localhost:8080/api/reservations/book', reservation);
            // Redirect to payment page or show success message
            navigate('/pay');
        } catch (error) {
            console.error('Error booking the turf:', error);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <Container sx={{ mt: 12, mb: 8 }}>
            {/* <header className="header">
                <nav>
                    <div className="nav-links">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/AboutUs'>About Us</Link></li>
                        <li><Link to='/ContactUs'>Contact Us</Link></li>
                        <li><Link to='/land'>Book</Link></li>
                        <li><Link to='/Regist'>Register Turf</Link></li>
                    </div>
                </nav>
            </header> */}
            <NavBar/>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt={turfName}
                            image={image}
                            title={turfName}
                            sx={{ height: 300, objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography variant="h5">{turfName}</Typography>
                            <Typography variant="body1" color="textSecondary">Size: {size}</Typography>
                            <Typography variant="body1" color="textSecondary">Rating: {rating}</Typography>
                            <Typography variant="body1" color="textSecondary">{description}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>Book Turf</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Time"
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Duration (hours)"
                            type="number"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Book Now
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TurfReservation;
