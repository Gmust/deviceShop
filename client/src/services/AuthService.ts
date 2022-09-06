import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RootState} from "../store/store";


export const authService = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).user.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (body:any) => {
                return {
                    url: '/api/user/registration',
                    method: 'post',
                    body,
                }
            }
        }),
        loginUser: builder.mutation({
            query: (body:any) => {
                return {
                    url: '/api/user/login',
                    method: 'post',
                    body,
                }
            }
        }),
    })
});

export const {useRegisterUserMutation, useLoginUserMutation} = authService;