/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../features/auth/authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
