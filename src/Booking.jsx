import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './Booking.css'; // Custom CSS for Booking

const Booking = () => {
  const { placeId } = useParams();
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    // Fetch available slots from an API or database
    const fetchSlots = async () => {
      const response = await fetch(`/api/places/${placeId}/slots`);
      const data = await response.json();
      setSlots(data);
    };

    fetchSlots();
  }, [placeId]);

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const handleBookingSubmit = async () => {
    if (!selectedSlot) return;

    // Submit booking request to the server
    const response = await fetch(`/api/places/${placeId}/book`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slot: selectedSlot }),
    });

    if (response.ok) {
      alert('Booking confirmed!');
    } else {
      alert('Failed to book slot. Please try again.');
    }
  };

  return (
    <Container className="container" sx={{ py: 8 }} maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Book Your Slot
      </Typography>
      <Grid container spacing={2}>
        {slots.map((slot, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Button
              className="slot-button"
              variant={selectedSlot === slot ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSlotSelect(slot)}
              fullWidth
            >
              {slot.time}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Button
        className="confirm-button"
        variant="contained"
        color="primary"
        onClick={handleBookingSubmit}
        disabled={!selectedSlot}
      >
        Confirm Booking
      </Button>
    </Container>
  );
};

export default Booking;
