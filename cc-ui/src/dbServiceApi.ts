import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Advert } from './types/Advert';
import { ItemInfo } from './types/ItemInfo';

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
      query: () => `/v1/items/${import.meta.env.VITE_CC_PK_USER_ID}`,
      transformResponse: (response: any, meta, arg) => {
        console.log('getUserItems response:', response);
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
    getItem: builder.query<Advert, string>({
      query: (itemId: string) => `/v1/itemInfo/${itemId}`,
      transformResponse: (response: any, meta, arg) => {
        console.log('getItem response:', response);
        if (response.status) {
          console.log('most likely an error');
          return {};
        }
        return response;
      },
    }),
  }),
});

export const { useGetUserItemsQuery, useGetItemQuery } = dbServiceApi;
