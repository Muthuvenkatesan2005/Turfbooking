import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './PlaceDetails.css'; // Custom CSS for PlaceDetails

const PlaceDetails = () => {
  const { id } = useParams(); // Get the ID from URL parameters
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/turfs/${id}`); // Fetch data based on ID
        if (!response.ok) {
          throw new Error('Place not found');
        }
        const data = await response.json();
        setPlace(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaceDetails();
  }, [id]);

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h6">{error}</Typography>;
  }

  if (!place) {
    return <Typography variant="h6">Place not found</Typography>;
  }

  return (
    <Container className="place-details" maxWidth="md">
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={`data:image/jpeg;base64,${place.imageBase64}`}
          alt={place.name}
        />
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
          src={`https://www.google.com/maps?q=${place.latitude},${place.longitude}&z=15&output=embed`}
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

export default PlaceDetails;
