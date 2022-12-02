/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loginService from "./loginService";

//  Get user from LocalStorage
const userLogin = JSON.parse(sessionStorage.getItem("userLogin"));

const initialState = {
    userLogin: userLogin || null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

// Login user 
export const login = createAsyncThunk("auth/login", async (userLogins, thunkAPI) => {
    try {
        return await loginService.login(userLogins)
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message || err.message || err.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export const loginSlicer = createSlice({
    name: "userLogin",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, actions) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.userLogin = actions.payload
            })
            .addCase(login.rejected, (state, actions) => {
                state.isLoading = false;
                state.isError = true;
                state.message = actions.payload;
                state.userLogin = null;
            })
    },
});

export const { reset } = loginSlicer.actions;
export default loginSlicer.reducer;
