import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ICartItem, IProducts, IUser, ICurrentUser } from '../../types';

export const storeApi = createApi({
  reducerPath: 'storeApi',
	tagTypes: ['Users', 'Cart', 'Orders', 'Current', 'Products'],
  baseQuery: fetchBaseQuery({ baseUrl: '3001/' }),
  endpoints: (builder) => ({
    getUAllsers: builder.query<IUser[], void>({
      query: () => `users/`,
			providesTags: (result) =>
        result
          ? [
              ...result.map(() => ({ type: 'Users' as const})),
              { type: 'Users'},
            ]
          : [{ type: 'Users' }],
    }),

		getProducts: builder.query<IProducts[], string>({
			query: (item) => `products/${item}`,
			providesTags: (result) =>
        result
          ? [
              ...result.map(() => ({ type: 'Products' as const})),
              { type: 'Products'},
            ]
          : [{ type: 'Products' }],
		}),

		getOrders: builder.query<IProducts[], void>({
			query: () => 'orders/',
			providesTags: (result) =>
        result
          ? [
              ...result.map(() => ({ type: 'Orders' as const})),
              { type: 'Orders'},
            ]
          : [{ type: 'Orders' }],
		}),

		addToCart: builder.mutation<ICartItem[], ICartItem>({
			query: (item) => ({
				url: 'orders/',
				method: 'POST',
				body: item
			}),
			transformResponse: (response: { data: ICartItem[] }, meta, arg) => response.data,
      invalidatesTags: ['Orders', 'Products'],
		}),

		addNewUser: builder.mutation<IUser, IUser>({
			query: (user) => ({
				url: 'users',
				method: 'POST',
				body: user
			}),
			invalidatesTags: [{ type: 'Users' }]
		}),

		getCurrentUser: builder.query<ICurrentUser | false, void>({
			query: () => 'currentUser',
			// providesTags: (result) =>
      //   result
      //     ? [
      //         ...result.map(() => ({ type: 'Current' as const})),
      //         { type: 'Current'},
      //       ]
      //     : [{ type: 'Current' }],
		}),

		addCurrentUser: builder.mutation<IUser, IUser | false>({
			query: (currUser: IUser) => ({
				url: 'currentUser',
				method: 'POST',
				body: {
					user: currUser
				}
			}),
			invalidatesTags: [{ type: 'Current' }]
		}),


  }),
});

export const { useGetUAllsersQuery, useAddNewUserMutation, useAddCurrentUserMutation, useGetProductsQuery, useAddToCartMutation,
useGetOrdersQuery, useGetCurrentUserQuery } = storeApi;