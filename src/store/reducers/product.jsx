// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
// // import thunk from "redux-thunk";
// import axios from "axios";
//
// export const getProducts = createAsyncThunk (
//     'cart/getCartList',
//
//     () =>
//
//     axios.get('http://localhost:3004/products')
//         .then(({data}) => data)
// );
//
// export const productSlice = createSlice({
//     name: 'product',
//     initialState: {
//         list: [],
//     },
//
//     extraReducers:(builder) => {
//         builder
//             .addCase(getProducts.fulfilled, (state, { payload :data}) => { state.list = data },
//         )
//     }
//
// });
//
//
// // Action creators are generated for each case reducer function
//
//
// export default productSlice.reducer
