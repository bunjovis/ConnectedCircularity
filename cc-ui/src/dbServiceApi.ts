import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ItemInfo } from './types/ItemInfo';

/** 
* fetches users items from service provider by user id. 
* @returns response - empty if there is an error, otherwise the value is any
*/
export const dbServiceApi = createApi({
  reducerPath: 'dbServiceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_CC_BACKEND ?? 'http://localhost:3000',
    prepareHeaders: (headers) => {
      const token = `Bearer ${localStorage.getItem('spToken')}`;
      headers.set('Authorization', token ?? '');
    },
  }),
  endpoints: (builder) => ({
    getUserItems: builder.query<ItemInfo[], void>({
      //TODO: user is undefined WHY?
      query: () => `/v1/items/${import.meta.env.VITE_CC_PK_USER_ID}`,
      transformResponse: (response: any, meta, arg) => {
        console.log(response + " vittu");
        if (response.status) {
          console.log('most likely an error');
          return [];
        }
        if (typeof response === 'string') {
          console.log('most likely an error');
          return [];
        }
        return response;
      },
    }),
  }),
});

export const { useGetUserItemsQuery } = dbServiceApi;
