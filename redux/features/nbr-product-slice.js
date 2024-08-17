
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
  };
export const nbr_product = createSlice({
    name: "nbr_product",
    initialState,
    reducers:{
        nbr_product_increase: (state)=>{
            state.count++;
            return state;
        },
        nbr_product_decrease: (state)=>{
            state.count--;
            return state;
        },
    },
});
export const {nbr_product_increase,nbr_product_decrease} = nbr_product.actions;
export default nbr_product.reducer;
