//(handles login/signup state)

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: !!localStorage.getItem('user'),
  user: JSON.parse(localStorage.getItem('user')) || null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      state.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    logout: (state) => {
      state.user = null
      state.isLoggedIn = false
      localStorage.removeItem('user')
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
