import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    wishlistItems: [],
    cartItems: []
  },
  reducers: {
addToWishlist: (state, action) => {
 const searchedItem = state.wishlistItems.find((item)=>{
    if(item.id === action.payload.id) return item
 })
 if(searchedItem){
   state.wishlistItems=  state.wishlistItems.filter((item)=>{
        if(item.id !== action.payload.id){
            return item
        }
    })
 }else{
    state.wishlistItems.push(action.payload)
 }

},
removeFromWishlist: (state, action) => {

},
  }
})


export const { addToWishlist, removeFromWishlist } = productSlice.actions

export default productSlice.reducer