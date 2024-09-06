import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'kaylin',
    email: '',
    isLoggedIn: false,
    isPremium: false,
    
  },
  reducers: {
    loginUser: (state, action) => {
        state.isLoggedIn = true;
    },
    logoutUser: (state, action) => {
        state.isLoggedIn = false
      },
  }
})


export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer