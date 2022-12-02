/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../features/auth/authSlice";
import loginSlice from "../../features/auth/loginSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        login: loginSlice,
    },
});

export default store;
