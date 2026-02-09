import { createApi } from '@reduxjs/toolkit/query/react'
import contactsData from '../../../contact.json'
import groupsData from '../../../groups.json'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  endpoints: (builder) => ({
    getContacts: builder.query({
      queryFn: () => ({ data: contactsData }),
    }),
    getGroups: builder.query({
      queryFn: () => ({ data: groupsData }),
    }),
  }),
})

export const { useGetContactsQuery, useGetGroupsQuery } = contactsApi
