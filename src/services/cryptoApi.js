import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host':'coinranking1.p.rapidaapi.com',
    'x-rapidapi-key': '2d891af9d9msh4dd5e447c3fa3aep141f48jsn8b6a78321b93'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) =>({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query:() => createRequest('/coins')
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi;