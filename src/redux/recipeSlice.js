//handles recipe list
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  recipes: [],
  loading: false,
  error: null,
}

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload
    },
    addRecipe: (state, action) => {
      state.recipes.push(action.payload)
    },
    updateRecipe: (state, action) => {
      const index = state.recipes.findIndex(r => r.id === action.payload.id)
      if (index !== -1) state.recipes[index] = action.payload
    },
    deleteRecipe: (state, action) => {
      state.recipes = state.recipes.filter(r => r.id !== action.payload)
    },
  },
})

export const { setRecipes, addRecipe, updateRecipe, deleteRecipe } = recipeSlice.actions
export default recipeSlice.reducer
