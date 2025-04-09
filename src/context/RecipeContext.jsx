// context/RecipeContext.jsx

 import React, { createContext, useState, useContext } from 'react'

 const RecipeContext = createContext()

 export const useRecipes = () => useContext(RecipeContext)

 export const RecipeProvider = ({ children }) => {
   const [recipes, setRecipes] = useState([])

   const addRecipe = (newRecipe) => {
     setRecipes([...recipes, { ...newRecipe, id: recipes.length + 1 }])
   }

   const updateRecipe = (updatedRecipe) => {
     setRecipes(
       recipes.map((recipe) => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe))
     )
   }

   const deleteRecipe = (id) => {
     setRecipes(recipes.filter((recipe) => recipe.id !== id))
   }

   return (
     <RecipeContext.Provider value={{ recipes, addRecipe, updateRecipe, deleteRecipe }}>
       {children}
     </RecipeContext.Provider>
   )
 }

