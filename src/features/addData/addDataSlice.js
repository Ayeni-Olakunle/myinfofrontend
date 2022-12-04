/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import addDataService from "./addDataService";


const initialState = {
    linkResponse: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

// Post Link user 
export const createLink = createAsyncThunk("link/create", async (linkData, thunkAPI) => {
    try {
        return await addDataService.postLink(linkData)
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message || err.message || err.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export const getLink = createAsyncThunk("link/getALl", async (_, thunkAPI) => {
    try {
        return await addDataService.getLink()
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message || err.message || err.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export const postLinkSlicer = createSlice({
    name: "postLink",
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
            .addCase(createLink.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createLink.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.linkResponse.push(action.payload)
            })
            .addCase(createLink.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message(action.payload);
            })

            .addCase(getLink.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getLink.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.linkResponse = action.payload
            })
            .addCase(getLink.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.linkResponse = null
            })
    },
});

export const { reset } = postLinkSlicer.actions;
export default postLinkSlicer.reducer;
