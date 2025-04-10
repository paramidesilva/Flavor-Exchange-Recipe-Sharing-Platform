//pages/CreateRecipe.jsx

import React, { useState } from 'react'
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Snackbar,
  Alert,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const CreateRecipe = ({ addRecipe }) => {
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [instructions, setInstructions] = useState('')
  const [image, setImage] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [servings, setServings] = useState('')
  const [dietaryType, setDietaryType] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients,
      instructions,
      image,
      cookingTime,
      servings,
      dietaryType,
    }

    addRecipe(newRecipe)

    let recipes = JSON.parse(localStorage.getItem('recipes')) || []
    recipes.push(newRecipe)
    localStorage.setItem('recipes', JSON.stringify(recipes))

    setShowSuccess(true)

    // Navigate after a short delay
    setTimeout(() => {
      navigate('/recipes')
    }, 2000)
  }

  return (
    <Container maxWidth="sm" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 3, fontWeight: 'bold', color: '#4CAF50' }}>
          Add Your Recipe
        </Typography>
      </motion.div>

      <Box
        component={motion.form}
        onSubmit={handleSubmit}
        sx={{ boxShadow: 4, padding: 4, borderRadius: 3, backgroundColor: '#ffffff' }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[
          {
            label: 'Recipe Title',
            value: title,
            onChange: (e) => setTitle(e.target.value),
            props: { required: true }
          },
          {
            label: 'Ingredients',
            value: ingredients,
            onChange: (e) => setIngredients(e.target.value),
            props: { multiline: true, rows: 4, required: true }
          },
          {
            label: 'Instructions',
            value: instructions,
            onChange: (e) => setInstructions(e.target.value),
            props: { multiline: true, rows: 4, required: true }
          },
          {
            label: 'Cooking Time (minutes)',
            value: cookingTime,
            onChange: (e) => setCookingTime(e.target.value),
            props: { type: 'number', required: true }
          },
          {
            label: 'Servings',
            value: servings,
            onChange: (e) => setServings(e.target.value),
            props: { type: 'number', required: true }
          },
          {
            label: 'Image URL',
            value: image,
            onChange: (e) => setImage(e.target.value),
            props: { required: true }
          }
        ].map((field, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <TextField
              fullWidth
              label={field.label}
              value={field.value}
              onChange={field.onChange}
              sx={{ marginBottom: 3 }}
              {...field.props}
            />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <FormControl fullWidth sx={{ marginBottom: 3 }}>
            <InputLabel>Dietary Type</InputLabel>
            <Select
              value={dietaryType}
              onChange={(e) => setDietaryType(e.target.value)}
              label="Dietary Type"
            >
              <MenuItem value="vegetarian">Vegetarian</MenuItem>
              <MenuItem value="vegan">Vegan</MenuItem>
              <MenuItem value="gluten-free">Gluten-Free</MenuItem>
              <MenuItem value="non-vegetarian">Non-Vegetarian</MenuItem>
            </Select>
          </FormControl>
        </motion.div>

        {image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Box
              component="img"
              src={image}
              alt="Recipe Preview"
              sx={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                borderRadius: 2,
                mb: 3,
                boxShadow: 2,
              }}
            />
          </motion.div>
        )}

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Button type="submit" variant="contained" color="success" fullWidth sx={{ paddingY: 1.2, fontWeight: 'bold' }}>
            Add Recipe
          </Button>
        </motion.div>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={1800}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Recipe added successfully!
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default CreateRecipe
