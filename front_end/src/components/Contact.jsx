import React from 'react';
import { Box, Typography, TextField, Button, Container, Paper } from '@mui/material';
import Nav from './Nav';
const ContactPage = () => {
  const backgroundImageUrl = "https://img3.parisbouge.com/W3ucCm-KATQRXVQIB--Uf1Ii3wL0oHrIQ5LPrilYW9s/rs:fill:1500:1000:1/g:ce/M2Q2MTI1OWMtOGNmZS00MzQ3LTlmNDEtM2NmZWNlNWUyYzdmLmpwZw.jpg"; // Your image URL here

  return (
    <>
      {/* Fixed Navbar */}
      <Nav/>
      {/* <Box sx={{
        position:'relative',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,  // Keeps navbar on top of content
        backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Optional: to darken the navbar background
        padding: '10px 20px',
      }}>
        <Typography variant="h6" color="white">
          IShaa Restaurant
        </Typography>
      </Box> */}

      {/* Content Section with Background Image */}
      <Box
        sx={{
          marginTop: '0px',  // Adjust to make space for fixed navbar
          backgroundImage: `url(${backgroundImageUrl})`,  // Your background image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Paper
            elevation={3}
            sx={{
              padding: '40px',
              maxWidth: '600px',
              width: '100%',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',  // Slight transparency
            }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Contact IShaa Restaurant
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
              We would love to hear from you! Reach out via phone, email, or the form below, and we’ll get back to you shortly.
            </Typography>

            <Box sx={{ marginY: '20px', textAlign: 'center' }}>
              <Typography variant="h6">Contact Information</Typography>
              <Typography>Phone: 9876543210</Typography>
              <Typography>Email: shivanarv@gmail.com</Typography>
              <Typography>Location: 123 Foodie Lane, Culinary City</Typography>
            </Box>

            <form style={{ marginTop: '20px' }}>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Box textAlign="center" sx={{ marginTop: '20px' }}>
                <Button variant="contained" color="primary" type="submit">
                  Send Message
                </Button>
              </Box>
            </form>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;
