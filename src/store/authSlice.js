import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        },
        removeUser(state) {
            state.user = null;
        },
        removeToken(state) {
            state.token = null;
        },
    },
});
export default authSlice.reducer;
export const { setUser, setToken, removeToken, removeUser } = authSlice.actions;