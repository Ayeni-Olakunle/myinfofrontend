/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

//  Get user from LocalStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: user || null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

// Register user 
export const register = createAsyncThunk("auth/register", async (users, thunkAPI) => {
    try {
        return await authService.register(users)
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message || err.message || err.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export const authSlicer = createSlice({
    name: "auth",
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
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, actions) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = actions.payload
            })
            .addCase(register.rejected, (state, actions) => {
                state.isLoading = false;
                state.isError = true;
                state.message = actions.payload;
                state.user = null;
            })
    },
});

export const { reset } = authSlicer.actions;
export default authSlicer.reducers;
