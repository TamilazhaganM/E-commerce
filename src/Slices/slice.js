import { createSlice } from "@reduxjs/toolkit";

const Reactionbtn = createSlice({
  name: "Reaction",
  initialState: {
    heartcount: 0,
    cardcount: 0,
    cart:[]
  },
  reducers: {
    incrementHeart(state) {
      state.heartcount += 1;
    },
    decrementHeart(state) {
      state.heartcount -= 1;
    },
    incrementCart(state) {
      state.cardcount += 1;
    },
    decrementCard(state) {
      state.cardcount -= 1;
    },
    addToCart(state, action) {
      state.cart.push(action.payload)
    },
    removeFromcart(state,action){
      state.cart=state.cart.filter(item=> item.id !== action.payload)
      if (state.cardcount > 0) {
        state.cardcount -= 1;
      }
    }
  },
});
export const { incrementHeart, decrementHeart, incrementCart, decrementCard,addToCart,removeFromcart } =
  Reactionbtn.actions;
export default Reactionbtn.reducer;
