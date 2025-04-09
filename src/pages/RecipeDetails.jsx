import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipes } from '../services/api';
import { Box, Typography, Button, Paper } from '@mui/material';
import { saveFavorite, removeFavorite, isFavorite } from '../utils/favoriteStorage';
import { motion } from 'framer-motion';
import CookingTimer from "../components/CookingTimer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const loadRecipe = async () => {
      const all = await fetchRecipes();
      const found = all.find((r) => r.id === parseInt(id));
      setRecipe(found);
      setFavorite(isFavorite(parseInt(id)));
    };
    loadRecipe();
  }, [id]);

  const handleFavorite = () => {
    if (favorite) {
      removeFavorite(recipe.id);
    } else {
      saveFavorite(recipe);
    }
    setFavorite(!favorite);
  };

  const handleShare = (platform) => {
    const url = window.location.href; // Gets the current page URL
    const text = `Check out this amazing recipe: ${recipe.title} - ${url}`;
    
    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
    } else if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    }
  };

  if (!recipe) return <Typography variant="h6">Loading...</Typography>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ padding: 4, maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
            {recipe.title}
          </Typography>

          {recipe.intro && (
            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic', color: 'gray' }}>
              {recipe.intro}
            </Typography>
          )}

          <Box
            component={motion.img}
            src={recipe.image}
            alt={recipe.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            sx={{
              width: '100%',
              maxHeight: '600px',
              objectFit: 'contain',
              borderRadius: '16px',
              margin: '30px 0',
              boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
            }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Servings: {recipe.servings}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Cooking Time: {recipe.cook} 
            </Typography>
          </Box>

          {/* Cooking Timer Component */}
          <CookingTimer cookingTime={recipe.cook} />

          <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 3 }}>
            Ingredients:
          </Typography>
          <ul>
            {recipe.ingredients.map((item, i) => (
              <motion.li
                key={i}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05 * i }}
                style={{ fontSize: '16px', lineHeight: '1.8' }}
              >
                {item}
              </motion.li>
            ))}
          </ul>

          {recipe.substitutions && (
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              sx={{ mt: 4, p: 3, backgroundColor: '#f4f4f4', borderRadius: '10px' }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Ingredient Substitutions:
              </Typography>
              {Object.entries(recipe.substitutions).map(([ingredient, substitution], index) => (
                <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                  <strong>{ingredient}:</strong> {substitution}
                </Typography>
              ))}
            </Paper>
          )}

          <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 4 }}>
            Instructions:
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: '2', mt: 1 }}>
            {recipe.instructions}
          </Typography>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Button
              variant={favorite ? 'contained' : 'outlined'}
              color="primary"
              sx={{
                mt: 4,
                borderRadius: '30px',
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                textTransform: 'none',
                transition: 'all 0.3s ease',
              }}
              onClick={handleFavorite}
            >
              {favorite ? ' Remove from Favorites' : '⭐ Save to Favorites'}
            </Button>
          </motion.div>

          {/* Social Sharing Buttons */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Share this recipe:
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
                variant="outlined"
                color="primary"
                onClick={() => handleShare('facebook')}
                sx={{
                  borderRadius: '50%',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)', // Move all hover effects here
                  },
                }}
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </Button>

              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleShare('twitter')}
                sx={{ borderRadius: '50%' }}
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleShare('whatsapp')}
                sx={{ borderRadius: '50%' }}
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </Button>
            </Box>
          </Box>

        </motion.div>
      </Box>
    </motion.div>
  );
};

export default RecipeDetails;
