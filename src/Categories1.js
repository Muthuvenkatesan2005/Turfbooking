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
import c4Image from './Images/c4.jpg';
import c5Image from './Images/c5.jpg';
import c6Image from './Images/c6.jpg';
import Footer from './Footer';
import './Categories.css'; // Custom CSS for Categories

const places = [
  {
    id: 1,
    name: 'Double Dribble, Aminjikarai, Chennai',
    description: 'Terrace of Ampa Skywalk No:1, Nelson Manickam Road, 627, Poonamallee High Rd, Chennai',
    image: c1Image,
    link: '/plac/1/book',
  },
  {
    id: 2,
    name: 'Offside Arena, Mogappair East, Chennai',
    description: '420, Kuppuswamy St, Golden George Nagar, Chennai',
    image: c2Image,
    link: '/plac/2/book',
  },
  {
    id: 3,
    name: 'Soap Football Mogappair, Mogappair East',
    description: '3rd Floor, PC5 Bazar Road, Tamil Nadu',
    image: c3Image,
    link: '/plac/3/book',
  },
  {
    id: 4,
    name: 'Tackle Futsal V Square, Mogappair East',
    description: '9, VGP Nagar, Mogappair East, Chennai',
    image: c4Image,
    link: '/plac/4/book',
  },
  {
    id: 5,
    name: 'VSR SPORT MAX ARENA, Ponniammanmedu',
    description: 'Chennai - Srikakulam Hwy, Kanakan Chatram, Ponniammanmedu, Chennai',
    image: c5Image,
    link: '/plac/5/book',
  },
  {
    id: 6,
    name: 'FC Marina, Nolambur',
    description: '4th Main Rd, Nolambur Phase 1, Nolambur, Ambattur Industrial Estate',
    image: c6Image,
    link: '/plac/6/book',
  },
];

const Categories1 = () => {
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
          {filteredPlaces.map((place) => (
            <Grid item key={place.id} xs={12} sm={6} md={4}>
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

export default Categories1;
