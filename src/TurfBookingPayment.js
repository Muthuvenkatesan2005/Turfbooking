import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import c1Image from './Images/c1.jpeg';
import c2Image from './Images/c2.jpeg';
import c3Image from './Images/c3.jpeg';
import Footer from './Footer';
import './Categories.css'; // Custom CSS for Categories

const places = [
  {
    name: 'Badminton Court Chennai',
    description: 'Pavans Badminton Academy , Badminton Academy, OMR, Near MKT Tower, Near Supreme Hospital, Padur, Chennai',
    image: c1Image,
    link: '/city',
  },
  {
    name: 'Cricket Court Royalty Bangalore',
    description: 'Evergreen Cricket , Cricket, Chellimman Koil Street, Mandhaveli Main Road, Madhavaram, Bangalore',
    image: c2Image,
    link: '/city',
  },
  {
    name: 'Sky turf in the city Coimbatore',
    description: 'Chettiar Thottam, Near Canara Bank, Badaga’s Colony, K. Vadamadurai, Coimbatore, Tamil Nadu',
    image: c3Image,
    link: '/city',
  },
];

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search turf names..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <Grid container spacing={4}>
          {filteredPlaces.map((place, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea component={Link} to={place.link}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={place.image}
                    alt={place.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {place.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {place.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Categories;
