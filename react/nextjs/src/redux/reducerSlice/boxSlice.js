import { createSlice } from '@reduxjs/toolkit'

export const boxSlice = createSlice({
  name: 'box',
  initialState: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 0,
    padding:20,
    margin:20
  },
  reducers: {
    changeToCircle: (state, action) => {
       state.height=state.width
       state.borderRadius= '50%'
    },
    increaseWidth: (state, action) => {
      state.width++
   },
    
  }
})


export const { changeToCircle,increaseWidth } = boxSlice.actions

export default boxSlice.reducer