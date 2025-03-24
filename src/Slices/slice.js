import { createSlice } from "@reduxjs/toolkit";

const Reactionbtn=createSlice({
    name:'Reaction',
    initialState:{
        heartcount:0,
        cardcount:0
    },
    reducers:{
        incrementHeart(state){
            state.heartcount+=1
        },
        decrementHeart(state){
                state.heartcount-=1
        },
        incrementCart(state){
            state.cardcount+=1
        },
        decrementCard(state){
            state.cardcount-=1
    }
    }
})
export const {incrementHeart,decrementHeart,incrementCart,decrementCard}= Reactionbtn.actions
export default Reactionbtn.reducer