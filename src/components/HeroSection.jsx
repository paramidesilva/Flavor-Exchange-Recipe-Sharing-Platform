import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const backgroundImages = [
  'https://nolte-prod-ebcwh6b9axcgebb3.z01.azurefd.net/-/jssmedia/project/nolte-jss/corporate-website/nolte-blog/nachhaltigkeit-blog/nachhaltig-kochen/adobestock_132501862/adobestock_132501862-16to10.jpg?mw=1440&as=0',
  'https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg',
  'https://springfeeling.s3.me-south-1.amazonaws.com/blogs/hero/5c805005-9d93-4d64-bd0e-b63684c2b23c',
  'https://res.cloudinary.com/hamstech/images/f_auto,q_auto/v1641972650/Hamstech%20App/Title-Image-8_80465718ae8b4/Title-Image-8_80465718ae8b4.jpg?_i=AA',
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100vh',
        backgroundImage: `url(${backgroundImages[currentImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '0 20px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      {/* Left Box with Green Outline and No 3D Look */}
      <Box
        sx={{
          width: { xs: '80%', sm: '60%', md: '40%' }, // Adjust the width based on screen size
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '12px',
          border: '2px solid green',
          zIndex: 1,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'normal',
            marginBottom: '20px',
            letterSpacing: 1,
            textTransform: 'uppercase',
            color: 'green',
            fontSize: { xs: '16px', sm: '18px', md: '20px' }, // Responsive font size
            textShadow: 'none',
          }}
        >
          join the flavor exchange
        </Typography>
        <Typography
          variant="h2"
          sx={{
            marginBottom: '20px',
            fontSize: { xs: '28px', sm: '32px', md: '36px' }, // Responsive font size
            color: 'black',
            textShadow: 'none',
          }}
        >
          Share Your Culinary Creations
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginBottom: '20px',
            fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Responsive font size
            color: 'black',
            textShadow: 'none',
          }}
        >
          Discover a vibrant community where food enthusiasts come together to explore, share, and savor delightful recipes. Whether you're a seasoned chef or a passionate home cook, Flavor Exchange empowers you to save your favorite dishes, contribute your creations, and connect with fellow food lovers.
        </Typography>

        <Link to="/create">
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'green',
              '&:hover': {
                backgroundColor: 'rgb(134, 171, 137)',
              },
              fontWeight: 'bold',
              padding: '12px 25px',
            }}
          >
            Start Sharing Now
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HeroSection;
