import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RootState} from "../store/store";

interface IFetchParams{
    typeId:string|null,
    brandId: string|null,
    page: number,
    limit: number|5

}

export const deviceService = createApi({
    reducerPath: 'deviceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080',
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as RootState).user.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        createBrand: builder.mutation({
            query: (brand: { name: string }) => {
                return {
                    url: '/api/brand',
                    method: 'post',
                    body: brand
                }
            }
        }),
        createType: builder.mutation({
            query: (type: { name: string }) => {
                return {
                    url: '/api/type',
                    method: 'post',
                    body: type
                }
            }
        }),
        creteDevice: builder.mutation({
            query: (device: any) => {
                return {
                    url: '/api/device',
                    method: 'post',
                    body: device
                }
            }
        }),
        fetchDevice: builder.query<{}, IFetchParams >({
            query:(device:{typeId: string | null, brandId: string | null, page: number, limit:number })=>({
                url:'/api/device/',
                params: device,
                method: 'get'
            })

        }),
        fetchType: builder.query<any, void>({
            query:()=> '/api/type'
        }),
        fetchBrand: builder.query<any, void>({
            query:()=> '/api/brand'
        }),
    })
});


export const {useCreateBrandMutation, useCreateTypeMutation, useCreteDeviceMutation,useFetchDeviceQuery,useFetchBrandQuery,
    useFetchTypeQuery
} = deviceService