import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { json } from "react-router-dom";
import { toast } from "react-toastify";

 
 
const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems")|| '{}')  : [],

  
    //قیمت کل محصولات
    cartTotalAmount: 0,
    //تعداد کل محصولات
    cartTotalQty: 0

}

 

export const fetchAllCart = createAsyncThunk('/cart/fetchAllCart', async () => {
    try {
        const response = await axios.get('http://localhost:9000/carts');
        return response.data;
    } catch (error) {
        console.log(error)
    }

});


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            //محصولی که کلیک شده روش برای اضافه شدن آیا ایندکس اش در کارت آیتم وجود دارد با خیر 
            const existingIndex = state.cartItems.findIndex(item => item.id === action.payload.id && item.color === action.payload.cartColor && item.size === action.payload.cartSize);
            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    cartQty: state.cartItems[existingIndex].cartQty + 1
                }
                toast('محضول افزایش یافت', { position: 'bottom-right' });
            } else {
                let tempProductItem = {
                    ...action.payload,
                    cartQty: action.payload.cartQty

                }
                state.cartItems.push(tempProductItem)

                toast('محصول به سبد خرید ضافه شد', { position: 'bottom-right' });
            }

            localStorage.setItem("cartItems",   JSON.stringify(state.cartItems));
        },
        getTotal(state) {
            let { total, qty } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQty } = cartItem;
                const itemTotal = price * cartQty;
                cartTotal.total += itemTotal;
                cartTotal.qty = + cartQty;
                return cartTotal;
            }
                ,
                {
                    total: 0,
                    qty: 0
                }
            )
            total = parseFloat(total.toFixed());
            state.cartTotalAmount = total;
            state.cartTotalQty = qty;

        },
        removeFromCart(state, action) {
            state.cartItems.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    const nextCartItems = state.cartItems.filter(
                        (item) => item.id !== cartItem.id
                    );

                    state.cartItems = nextCartItems;

                    toast.error("محصول از سبد خرید حذف شد", {
                        position: "bottom-left",
                    });
                }
                localStorage.setItem(
                    "cartItems",
                    JSON.stringify(state.cartItems)
                );
                return state;
            });
        },
     

    },

})
export default cartSlice.reducer;

export const {addToCart , getTotal ,removeFromCart} =cartSlice.actions;