import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RegisterRequest } from "@/types/auth";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.BASE_URL,
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        register: builder.mutation<string, RegisterRequest>({
            query: (req) => ({
                url: "/auth/register",
                method: "POST",
                body: req
            }  
            ),
        }),
    }),
});

export const { useRegisterMutation } = authApi;