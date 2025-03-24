import { configureStore } from "@reduxjs/toolkit";
import Reactionbtn from '../Slices/slice'

const Store=configureStore({
    reducer:{
        Liked:Reactionbtn
    }
})
export default Store