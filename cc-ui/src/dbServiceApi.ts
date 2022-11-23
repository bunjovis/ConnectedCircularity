import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Advert } from './types/Advert';
import { ItemInfo } from './types/ItemInfo';

export const dbServiceApi = createApi({
  reducerPath: 'dbServiceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_CC_BACKEND ?? 'http://localhost:3000',
    prepareHeaders: (headers) => {
      const token = `Bearer ${sessionStorage.getItem('spToken')}`;
      headers.set('Authorization', token ?? '');
      headers.set('Accept', 'application/json');
    },
  }),
  endpoints: (builder) => ({
    getUserItems: builder.query<ItemInfo[], string>({
      query: (userId) => `/v1/items/${userId}`,
      transformResponse: (response: any, meta, arg) => {
        console.log('getUserItems response:', response);
        if (response.status) {
          if (response.status === 401) {
            sessionStorage.clear();
            location.reload();
          } else {
            return [];
          }
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
          if (response.status === 401) {
            sessionStorage.clear();
            location.reload();
          } else {
            return {};
          }
        }
        return response;
      },
    }),
  }),
});

export const { useGetUserItemsQuery, useGetItemQuery } = dbServiceApi;
