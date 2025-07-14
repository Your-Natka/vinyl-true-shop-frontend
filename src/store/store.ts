import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth";

const reducer = {
    [authApi.reducerPath]: authApi.reducer,
};

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});