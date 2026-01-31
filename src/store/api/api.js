import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => 'contact.json',
    }),
    getGroups: builder.query({
      query: () => 'groups.json',
    }),
  }),
})

export const { useGetContactsQuery, useGetGroupsQuery } = api
