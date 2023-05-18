import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        accessToken: '',

    },
    reducers: {
        login: (state, {payload}) => {
            const { email, accessToken } = payload;
            state.email = email;
            // state.username = username;
            state.accessToken = accessToken;
        },
        logOut: (state) => {
            state.email = '';
            state.accessToken = '';
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logOut } = userSlice.actions


export default userSlice.reducer
