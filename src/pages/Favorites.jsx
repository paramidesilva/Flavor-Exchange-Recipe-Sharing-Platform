import React, { useEffect, useState } from 'react';
import { getFavorites } from '../utils/favoriteStorage';
import { Box, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <Box
  sx={{
    padding: '20px',
    background: 'linear-gradient(to right, rgb(247, 251, 248), rgb(255, 255, 255))',
    minHeight: '100vh',
  }}
>
  <Typography
    variant="h4"
    sx={{
      marginBottom: '20px',
      textAlign: 'center',
      color: 'green',
      fontWeight: 'bold',
      animation: 'fadeSlideIn 1s ease-in-out',
      '@keyframes fadeSlideIn': {
        from: {
          opacity: 0,
          transform: 'translateY(-20px)',
        },
        to: {
          opacity: 1,
          transform: 'translateY(0)',
        },
      },
    }}
  >
    Your Favorite Recipes
  </Typography>

      {favorites.length === 0 ? (
        <Typography align="center">You haven't saved any recipes yet.</Typography>
      ) : (
        <Grid container spacing={2}>
          {favorites.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  cursor: 'pointer',
                  maxWidth: 500,
                  margin: 'auto',
                  position: 'relative',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
                onClick={() => navigate(`/recipe/${recipe.id}`)}
              >
                <CardMedia
                  component="img"
                  image={recipe.image}
                  alt={recipe.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    maxHeight: '400px',
                    transition: 'transform 0.3s ease',
                    borderRadius: '10px',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {recipe.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Cooking Time: {recipe.cookingTime} minutes
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Rating: {recipe.rating} ★
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Favorites;
