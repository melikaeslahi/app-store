import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    qty: 1 ,
    color: null,
    size: null 

}

const ProductSlice = createSlice(
    {
        name:'productSlice',
        initialState:initialState,
        reducers:{
            setQty : (state , action)=>{
              state.qty = action.payload;
            },
            setColor : (state , action)=>{
                state.color = action.payload;
            },
            setSize : ( state , action)=>{
                state.size =action.payload;
            }
        }
    }
);

export const ProductReducer = ProductSlice.reducer;
export const {setQty , setColor , setSize} = ProductSlice.actions;  