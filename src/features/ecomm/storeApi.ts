import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IFormInputs, IUser } from '../../types';

export const storeApi = createApi({
  reducerPath: 'storeApi',
	tagTypes: ['Users', 'Cart', 'Orders', 'Current'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
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

		addNewUser: builder.mutation<IUser, IUser>({
			query: (user) => ({
				url: 'users',
				method: 'POST',
				body: user
			}),
			invalidatesTags: [{ type: 'Users' }]
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

export const { useGetUAllsersQuery, useAddNewUserMutation, useAddCurrentUserMutation } = storeApi;