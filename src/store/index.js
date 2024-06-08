import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../slice/ProductApi";
import { ProductReducer } from "../slice/ProductSlice";
import CartSlice, { getTotal } from "../slice/CartSlice";
 
 

export const store = configureStore({
    reducer:{
        product: ProductReducer,
        cart: CartSlice,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: getDefaultMiddleware=>getDefaultMiddleware().concat(productApi.middleware)
   
});
// store.dispatch(getTotal());