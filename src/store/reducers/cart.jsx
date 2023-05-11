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

            // state.totalPrice -= state.list.find((product) => product.id === payload).price // а эта запись не работает
            state.list.filter((product)=> product.id !== payload )
            state.totalPrice -= payload.price; // работает, но кнопка не сохраняет состояние при переходе на другую страницу
            state.productCount --;

        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions


export default cartSlice.reducer
