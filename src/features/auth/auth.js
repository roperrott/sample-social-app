import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userToken: null,
    isLoading: true,
    isSingOut: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        restoreToken: (state, action) => {
            state.userToken = action.payload;
            state.isLoading = false;
        },
        signIn: (state, action) => {
            state.isSingOut = false;
            state.userToken = action.payload;
        },
        singOut: state => {
            state.isSingOut = true;
            state.userToken = null;
        },
    }
});

export const { restoreToken, signIn, singOut } = authSlice.actions;
export default authSlice.reducer;