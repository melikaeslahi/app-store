import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const  productApi = createApi({
    reducerPath: "productsApi",
    tagTypes:['Products'],
    baseQuery: fetchBaseQuery({ baseUrl: "https://app-store-api.vercel.app" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `products`,
        }),
        getProduct: builder.query({
            query: (productId) => `products/${productId}`,
            providesTags:['Products'],
        }),
    }),

  
    })
 
export const {useGetAllProductsQuery , useGetProductQuery} = productApi;