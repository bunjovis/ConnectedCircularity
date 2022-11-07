import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ItemInfo } from './types/ItemInfo';

export const dbServiceApi = createApi({
  reducerPath: 'dbServiceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/v1/',
    prepareHeaders: (headers) => {
      const token = `Bearer ${sessionStorage.getItem('spToken')}`;
      headers.set('Authorization', token ?? '');
    },
  }),
  endpoints: (builder) => ({
    getUserItems: builder.query<ItemInfo[], void>({
      query: () => `items/97541e5c-847f-41c2-8120-d9d93d0a4798`,
      transformResponse: (response: any, meta, arg) => {
        console.log(response);
        if (response.status) {
          console.log('most likely error');
          return [];
        }
        return response;
      },
    }),
  }),
});

export const { useGetUserItemsQuery } = dbServiceApi;
