import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Footer from './Footer';
import './Categories.css';

const Categories = () => {
  const [turfs, setTurfs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTurfs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/turfs');
        setTurfs(response.data);
      } catch (err) {
        setError('Error fetching turfs.');
      } finally {
        setLoading(false);
      }
    };

    fetchTurfs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {turfs.map((turf) => (
            <Grid item key={turf.id} xs={12} sm={6} md={4}>
              <Link to={`/place-details/${turf.id}`} style={{ textDecoration: 'none' }}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`data:image/jpeg;base64,${turf.imageBase64}`}
                    alt={turf.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {turf.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {turf.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Categories;
