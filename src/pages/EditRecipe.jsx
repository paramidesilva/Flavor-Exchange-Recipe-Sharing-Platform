import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipes();

  const recipe = recipes.find((r) => r.id === parseInt(id));

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setIngredients(recipe.ingredients);
      setInstructions(recipe.instructions);
      setImageUrl(recipe.image);
      setLoading(false);
    } else {
      navigate('/recipes'); // Redirect if the recipe is not found
    }
  }, [recipe, navigate]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = { ...recipe, title, ingredients, instructions, image: imageUrl };
    updateRecipe(updatedRecipe); 
    navigate('/recipes'); 
  };

  if (loading) {
    return <Typography>Loading...</Typography>; 
  }

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto' }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Edit Recipe
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Recipe Title"
          fullWidth
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Ingredients"
          fullWidth
          required
          multiline
          rows={4}
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Instructions"
          fullWidth
          required
          multiline
          rows={4}
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Image URL"
          fullWidth
          required
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Update Recipe
        </Button>
      </form>
    </Box>
  );
};

export default EditRecipe;
