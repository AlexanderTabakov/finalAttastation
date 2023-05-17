import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list: [],
        totalPrice: 0,
        productCount: 0,

    },
    reducers: {
        addToCart: (state, { payload }) => {
            state.list.push(payload)
            state.totalPrice += payload.price;
            state.productCount ++;

        },
        removeFromCart: (state, { payload }) => {

            state.totalPrice -= state.list.find((product) => product.id === payload).price
            state.list = state.list.filter((product) => product.id !== payload )
            state.productCount --;

        },
        clearTheCart: (state) => {

            state.totalPrice = 0;
            state.list = [];
            state.productCount = 0;

        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearTheCart } = cartSlice.actions


export default cartSlice.reducer
