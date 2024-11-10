// About.jsx
import React from 'react';
import { Typography, Container, Box, Divider } from '@mui/material';
import Nav from './Nav';
const About = () => {
  return (
    <> 
    <Nav/>
    <Box
      sx={{
        backgroundImage: 'url("your-image-url.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        minHeight: '100vh',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}
    >
      {/* Overlay for better text contrast */}
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '40px' }}>
        <Container maxWidth="md">
          {/* Main Heading */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '20px',
              animation: 'fadeInDown 1s ease-out',
            }}
          >
            Welcome to IShaa Restaurant
          </Typography>

          {/* Subheading */}
          <Typography
            variant="h5"
            sx={{
              fontStyle: 'italic',
              textAlign: 'center',
              marginBottom: '40px',
              color: '#ddd',
              animation: 'fadeInUp 1.2s ease-out',
            }}
          >
            Where flavor meets tradition
          </Typography>

          <Divider variant="middle" sx={{ borderColor: '#fff', marginBottom: '40px' }} />

          {/* Description Section */}
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              textAlign: 'justify',
              animation: 'fadeIn 1.4s ease-out',
            }}
          >
            At IShaa Restaurant, we believe in creating unforgettable dining experiences.
            Our chefs combine fresh, high-quality ingredients with traditional and modern
            culinary techniques to serve you dishes that are both innovative and comforting.
            Whether you're here for a casual lunch or a celebratory dinner, we're dedicated
            to making every meal special.
          </Typography>

          {/* Mission Section */}
          <Box sx={{ marginTop: '50px', animation: 'fadeIn 1.6s ease-out' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
              To bring joy through food, making every meal a memorable occasion. We are
              dedicated to sourcing the freshest ingredients and crafting dishes that pay
              homage to our rich heritage.
            </Typography>
          </Box>

          <Divider variant="middle" sx={{ borderColor: '#fff', margin: '40px 0' }} />

          {/* Contact Section */}
          <Box sx={{ textAlign: 'center', marginTop: '30px', animation: 'fadeIn 1.8s ease-out' }}>
            <Typography variant="h5">Contact Us</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', color: '#ccc' }}>
              Phone: 9876543210 <br />
              Email: shivanarv@gmail.com
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
    </>
  );
};

export default About;
