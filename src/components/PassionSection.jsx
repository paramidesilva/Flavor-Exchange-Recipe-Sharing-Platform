
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import passionImg from '../assets/passionImg.webp'; 

const PassionSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('passion-section');
      const bounding = section.getBoundingClientRect();
      if (bounding.top <= window.innerHeight && bounding.bottom >= 0) {
        setInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      id="passion-section"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '50px 20px',
        height: '500px',
        backgroundColor: '#f8f9fa',
        transition: 'transform 1s ease-out',
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        opacity: inView ? 1 : 0,
      }}
    >
      {/* Left Text Content */}
      <Box
        sx={{
          maxWidth: '50%',
          color: 'black',
          textAlign: 'left',
          transition: 'opacity 1s ease-out',
          opacity: inView ? 1 : 0,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: '15px',
            transform: inView ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'transform 1s ease-out',
          }}
        >
          Share Your Passion for Cooking
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginBottom: '20px',
            transform: inView ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'transform 1s ease-out',
          }}
        >
          Unleash Your Culinary Creativity
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: '20px',
            transform: inView ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'transform 1s ease-out',
          }}
        >
          Join a dynamic community of food lovers who celebrate the art of cooking. With Flavor Exchange, you can easily explore an extensive collection of recipes, save your favorites, and share your own culinary masterpieces. Whether you're looking for inspiration or want to contribute to a growing library of delicious dishes, we've got you covered.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
              padding: '10px 20px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            Explore Recipes
          </Button>
        </Box>
      </Box>

      {/* Right Image */}
      <Box
        sx={{
          maxWidth: '45%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          transition: 'opacity 1s ease-out',
          opacity: inView ? 1 : 0,
        }}
      >
        <img
          src={passionImg}
          alt="Culinary Passion"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            transform: inView ? 'scale(1)' : 'scale(1.1)',
            transition: 'transform 1s ease-out',
          }}
        />
      </Box>
    </Box>
  );
};

export default PassionSection;
