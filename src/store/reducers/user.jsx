import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        username: '',
        token: '',

    },
    reducers: {
        login: (state, {payload}) => {
            const { email, username, accessToken } = payload;
            state.email = email;
            state.username = username;
            state.accsessToken = accessToken;
        },
        logOut: (state) => {
            state.email = '';
            state.username = '';
            state.accsessToken = '';
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logOut } = userSlice.actions


export default userSlice.reducer
