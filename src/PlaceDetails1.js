import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './PlaceDetails.css'; // Custom CSS for PlaceDetails
import c1Image from './Images/c1.jpeg';
import c2Image from './Images/c2.jpeg';
import c3Image from './Images/c3.jpeg';
import c4Image from './Images/c4.jpg';
import c5Image from './Images/c5.jpg';
import c6Image from './Images/c6.jpg';
import c21 from  './Images/c21.jpg';
import c22 from  './Images/c22.jpg';
import c23 from  './Images/c23.jpeg';
import c24 from  './Images/c24.jpeg';
import c25 from  './Images/c25.jpeg';
import c26 from  './Images/c26.jpeg';

const places = [
  {
    id: 1,
    name: 'Double Dribble, Aminjikarai, Chennai',
    description: 'Terrace of Ampa Skywalk No:1, Nelson Manickam Road, 627, Poonamallee High Rd, Chennai',
    address: '119/2C, behind Chidvikas Vidya Mandir, Kamadenu Nagar, Vadavalli Padur, Coimbatore',
    estimatedPrice: '₹1200',
    image:c21 ,
    pitchSize: '8500 sq. ft',
    regularPrice: '₹1200/-',
    discountedPrice: '₹1000/-',
    cafe: 'Includes a cafeteria with a variety of food options.',
    contact: '9345678901',
    coordinates: { lat: 13.0732, lng: 80.2135 }, // Example coordinates for Chennai
  },
  {
    id: 2,
    name: 'Offside Arena, Mogappair East, Chennai',
    description: 'A premium fitness club with excellent facilities.',
    address: '420, Kuppuswamy St, Golden George Nagar, Chennai',
    estimatedPrice: '₹1500',
    image: c22,
    pitchSize: '10000 sq. ft',
    regularPrice: '₹1500/-',
    discountedPrice: '₹1300/-',
    cafe: 'Features a cafe with healthy food options.',
    contact: '9345678902',
    coordinates: { lat: 13.0833, lng: 80.2044 }, // Example coordinates for Chennai
  },
  {
    id: 3,
    name: 'Soap Football Mogappair, Mogappair East',
    description: 'An urban turf ideal for various sports.',
    address: '3rd Floor, PC5 Bazar Road, Tamil Nadu',
    estimatedPrice: '₹1000',
    image: c23,
    pitchSize: '9000 sq. ft',
    regularPrice: '₹1000/-',
    discountedPrice: '₹900/-',
    cafe: 'Features a cafeteria that offers delectable meals.',
    contact: '9345678903',
    coordinates: { lat: 13.0924, lng: 80.2060 }, // Example coordinates for Chennai
  },
  {
    id: 4,
    name: 'Tackle Futsal V Square, Mogappair East',
    description: 'A state-of-the-art arena for multiple sports.',
    address: '9, VGP Nagar, Mogappair East, Chennai',
    estimatedPrice: '₹1400',
    image: c24,
    pitchSize: '9500 sq. ft',
    regularPrice: '₹1400/-',
    discountedPrice: '₹1200/-',
    cafe: 'Includes a cafe with a variety of food options.',
    contact: '9345678904',
    coordinates: { lat: 13.0841, lng: 80.1945 }, // Example coordinates for Chennai
  },
  {
    id: 5,
    name: 'VSR SPORT MAX ARENA, Ponniammanmedu',
    description: 'Perfect for cricket and other ball games.',
    address: 'Chennai - Srikakulam Hwy, Kanakan Chatram, Ponniammanmedu, Chennai',
    estimatedPrice: '₹1100',
    image: c25,
    pitchSize: '8000 sq. ft',
    regularPrice: '₹1100/-',
    discountedPrice: '₹950/-',
    cafe: 'Features a cafe with quick bites and beverages.',
    contact: '9345678905',
    coordinates: { lat: 13.1088, lng: 80.2252 }, // Example coordinates for Chennai
  },
  {
    id: 6,
    name: 'FC Marina, Nolambur',
    description: 'A well-maintained turf suitable for various sports.',
    address: '4th Main Rd, Nolambur Phase 1, Nolambur, Ambattur Industrial Estate',
    estimatedPrice: '₹1300',
    image: c26,
    pitchSize: '8500 sq. ft',
    regularPrice: '₹1300/-',
    discountedPrice: '₹1100/-',
    cafe: 'Includes a cafe with snacks and drinks.',
    contact: '9345678906',
    coordinates: { lat: 13.0833, lng: 80.1750 }, // Example coordinates for Chennai
  },
];

const PlaceDetails1 = () => {
  const { id } = useParams();
  const place = places.find((p) => p.id === parseInt(id));

  if (!place) {
    return <Typography variant="h6">Place not found</Typography>;
  }

  return (
    <Container className="place-details" maxWidth="md">
      <Card>
        <CardMedia component="img" height="400" image={place.image} alt={place.name} />
        <CardContent>
          <Typography variant="h4">{place.name}</Typography>
          <Typography variant="body1" color="text.secondary">{place.address}</Typography>
          <Typography variant="body2" color="text.secondary">Estimated Price: {place.estimatedPrice}</Typography>
          <Link to='/res'><button className="continue-button">Continue</button></Link>
        </CardContent>
      </Card>
      <div className="details-section">
        <Typography variant="h5">Overview</Typography>
        <Typography variant="body2">{place.description}</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Pricing</Typography>
                <Typography variant="body2">Pitch available - {place.pitchSize}</Typography>
                <Typography variant="body2">Weekdays: {place.regularPrice}</Typography>
                <Typography variant="body2">Weekend: {place.discountedPrice}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Cafe</Typography>
                <Typography variant="body2">{place.cafe}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Contact</Typography>
                <Typography variant="body2">{place.contact}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div className="map-section">
        <iframe
          src={`https://www.google.com/maps?q=${place.coordinates.lat},${place.coordinates.lng}&z=15&output=embed`}
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </Container>
  );
};

export default PlaceDetails1;
