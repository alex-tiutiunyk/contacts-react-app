import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { get, push, ref, remove, set } from 'firebase/database'
import { db } from '../firebase'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contacts'],
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getContacts: builder.query({
      queryFn: async () => {
        try {
          const contactsRef = ref(db, 'contacts')
          const snapshot = await get(contactsRef)
          const response = snapshot.val()
          if (snapshot.exists()) {
            // transformed output data
            const outData = Object.entries(response).map(item => {
              return {
                id: item[0],
                ...item[1]
              }
            })
            console.log(outData)
            return {data: outData}
          }
        } catch (err) {
          return {error: err}
        }
      },
      providesTags: (result = []) => [
        'Contacts',
        ...result.map(({ id }) => ({ type: 'Contacts', id }))
      ]
    }),
    addContact: builder.mutation({
      queryFn: async (body) => {
        try {
          const newContactRef = push(ref(db, 'contacts'));
          const data = await set(newContactRef, body)
          return {data: data}
        } catch (err) {
          return {error: err}
        }
      },
      invalidatesTags: ['Contacts']
    }),
    deleteContact: builder.mutation({
      queryFn: async (id) => {
        try {
          const delContactRef = ref(db, `contacts/${id}`);
          const data = await remove(delContactRef)
          return {data: data}
        } catch (err) {
          return {error: err}
        }
      },
      invalidatesTags: (id) => [{ type: 'Contacts', id}]
    }),
  })
})

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;