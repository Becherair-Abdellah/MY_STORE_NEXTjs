import { combineReducers, configureStore } from "@reduxjs/toolkit";
import nbr_product from '@/redux/features/nbr-product-slice'
export const store = configureStore({
    reducer: {
        nbr_product,
    },
})