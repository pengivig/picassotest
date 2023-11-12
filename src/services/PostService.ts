import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Post} from "../interfaces/post";
import {BaseQueryArg} from "@reduxjs/toolkit/dist/query/baseQueryTypes";

export const postAPI = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        fetchPostsList: builder.query<Post[], number>({
            query: (limit: number = 10) => ({
                url: '/posts',
                params: {
                    _limit: limit,
                }
            }),
        }),
        fetchPost: builder.query<Post, number>({
            query: (id) =>  ({
                url: `/posts/${id}`
            })
        })
    }),
});

export const { useFetchPostsListQuery } = postAPI;
