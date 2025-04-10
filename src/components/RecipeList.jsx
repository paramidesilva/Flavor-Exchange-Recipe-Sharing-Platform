
import React from 'react'
import { Button, Card, CardContent, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const RecipeList = ({ recipes, deleteRecipe }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {recipes.map((recipe) => (
        <Card key={recipe.id}>
          <CardContent>
            <Typography variant="h6">{recipe.title}</Typography>
            <Typography variant="body2">{recipe.ingredients}</Typography>
            <Link to={`/edit/${recipe.id}`}>
              <Button variant="contained" color="primary">
                Edit
              </Button>
            </Link>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => deleteRecipe(recipe.id)} 
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default RecipeList
