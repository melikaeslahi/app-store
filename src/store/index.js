import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../slice/ProductApi";
import { ProductReducer } from "../slice/ProductSlice";
 
 

export const store = configureStore({
    reducer:{
        product: ProductReducer,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: getDefaultMiddleware=>getDefaultMiddleware().concat(productApi.middleware)
   
});