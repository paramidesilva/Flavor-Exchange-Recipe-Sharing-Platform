import React, { useEffect, useState, useCallback } from 'react';
import {
  Box,
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Fade,
} from '@mui/material';
import { debounce } from 'lodash';
import { fetchRecipes } from '../services/api';
import { useNavigate } from 'react-router-dom';

const dietaryOptions = ['All', 'Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free', 'Nut-Free'];

const RecipeFeed = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('All');
  const [error, setError] = useState('');
  const [hoveredRecipeId, setHoveredRecipeId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data);
        setFilteredRecipes(data);
      } catch (err) {
        setError('Failed to fetch recipes');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const applyFilters = useCallback((query, dietary) => {
    let result = [...recipes];

    if (query.trim()) {
      const loweredQuery = query.toLowerCase();
      result = result.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(loweredQuery) ||
          recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(loweredQuery))
      );
    }

    if (dietary && dietary !== 'All') {
      result = result.filter(
        (recipe) =>
          Array.isArray(recipe.dietary_tags) &&
          recipe.dietary_tags.some((tag) => tag.toLowerCase() === dietary.toLowerCase())
      );
      
    }

    setFilteredRecipes(result);
  }, [recipes]);

  const handleSearch = debounce((query) => {
    setSearchQuery(query);
    applyFilters(query, dietaryFilter);
  }, 300);

  const handleDietaryChange = (event) => {
    const selected = event.target.value;
    setDietaryFilter(selected);
    applyFilters(searchQuery, selected);
  };

  const handleMouseEnter = (id) => {
    setHoveredRecipeId(id);
  };

  const handleMouseLeave = () => {
    setHoveredRecipeId(null);
  };

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
    Latest Recipes
  </Typography>


      <Grid
  container
  spacing={2}
  sx={{ marginBottom: '20px' }}
  
>
  <Grid item xs={20} md={10}>
    <TextField
      variant="outlined"
      label="Search by title or ingredient"
      fullWidth
      sx={{
        borderRadius: '30px',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderRadius: '50px',
          },
        },
      }}
      onChange={(e) => handleSearch(e.target.value)}
    />
  </Grid>

        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel>Dietary Restriction</InputLabel>
            <Select
              value={dietaryFilter}
              label="Dietary Restriction"
              onChange={handleDietaryChange}
              sx={{
                maxWidth: '800px',
                borderRadius: '30px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderRadius: '30px',
                  },
                },
              }}
            >
              {dietaryOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <CircularProgress sx={{ color: '#3f51b5' }} />
        </Box>
      ) : error ? (
        <Typography variant="h6" color="error" align="center">
          {error}
        </Typography>
      ) : filteredRecipes.length === 0 ? (
        <Typography variant="h6" align="center">
          No recipes found.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {filteredRecipes.map((recipe) => (
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
                onMouseEnter={() => handleMouseEnter(recipe.id)}
                onMouseLeave={handleMouseLeave}
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
                    Cooking Time: {recipe.cook}
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

export default RecipeFeed;
