import { createSlice } from '@reduxjs/toolkit'

export const boxSlice = createSlice({
  name: 'box',
  initialState: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 0,
    padding:20,
    margin:20,
    marginLeft: 50,
    isCircle: false
  },
  reducers: {
    changeShape: (state, action) => {
      if(state.borderRadius == '50%'){
        state.borderRadius=0
      }else{
        state.height=state.width
        state.borderRadius= '50%'
      }
    },
    increaseWidth: (state, action) => {
      state.width++
   },
   changeBackgroundColor: (state, action) => {
    state.backgroundColor = action.payload
 },
 moveRight: (state, action) => {
  state.marginLeft= state.marginLeft+20
},
 
  }
})


export const { changeShape,increaseWidth,changeBackgroundColor, moveRight } = boxSlice.actions

export default boxSlice.reducer