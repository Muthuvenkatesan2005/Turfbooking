import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Container, Grid, Card, CardContent, CardMedia, TextField, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const turfs = [
    { id: 1, name: 'Marutham Sports Arena', fee: '₹1200/hr', image: 'https://via.placeholder.com/200', description: 'Top-notch facility for football and other sports.', location: 'Coimbatore' },
    { id: 2, name: 'The Royal Fitness Club', fee: '₹1500/hr', image: 'https://via.placeholder.com/200', description: 'Premium fitness club with excellent facilities.', location: 'Coimbatore' },
    // Add other turf details here...
];

const PaymentPage = () => {
    const { turfId } = useParams();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('upi');

    const turf = turfs.find(t => t.id === parseInt(turfId)) || {};

    const {
        image = 'https://via.placeholder.com/200?text=No+Image',
        name = 'Unknown Turf',
        description = 'No description available',
        fee = 'N/A',
        location = 'N/A',
    } = turf;

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        // Handle payment submission logic here
        navigate('/payment-success');
    };

    return (
        
        <Container sx={{ mt: 12, mb: 8 }}>

              {/* <header className="header">
                <nav>
            <div className="nav-links">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/AboutUs'>Aboutus</Link></li>
              <li><Link to='/ContactUs'>Contact Us</Link></li>
              <li><Link to='/land'>Book</Link></li>
              <li><Link to='/Regist'>RegisterTurf</Link></li>
              
            </div>
            </nav>
            </header> */}
            <NavBar/>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>Payment Details</Typography>
                    <form onSubmit={handlePaymentSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            type="text"
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Phone Number"
                            type="tel"
                            required
                            sx={{ mb: 2 }}
                        />
                        <RadioGroup
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            sx={{ mb: 2 }}
                        >
                            <FormControlLabel value="upi" control={<Radio />} label="UPI" />
                            <FormControlLabel value="credit-card" control={<Radio />} label="Credit Card" />
                            <FormControlLabel value="net-banking" control={<Radio />} label="Net Banking" />
                        </RadioGroup>
                        {paymentMethod === 'upi' && (
                            <TextField
                                fullWidth
                                label="UPI ID"
                                type="text"
                                required
                                sx={{ mb: 2 }}
                            />
                        )}
                        {paymentMethod === 'credit-card' && (
                            <>
                                <TextField
                                    fullWidth
                                    label="Card Number"
                                    type="text"
                                    required
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="Expiry Date"
                                    type="text"
                                    required
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="CVV"
                                    type="text"
                                    required
                                    sx={{ mb: 2 }}
                                />
                            </>
                        )}
                        {paymentMethod === 'net-banking' && (
                            <TextField
                                fullWidth
                                label="Bank Name"
                                type="text"
                                required
                                sx={{ mb: 2 }}
                            />
                        )}
                        <Button variant="contained" color="primary" type="submit">
                            Pay Now
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt={name}
                            image={image}
                            title={name}
                            sx={{ height: 300, objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography variant="h5">{name}</Typography>
                            <Typography variant="body1" color="textSecondary">{description}</Typography>
                            <Typography variant="body1" color="textSecondary">Fee: {fee}</Typography>
                            <Typography variant="body1" color="textSecondary">Location: {location}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PaymentPage;
