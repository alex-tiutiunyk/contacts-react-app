import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { get, ref } from 'firebase/database'
import { db } from '../firebase'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
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
      }
    })
  })
})

export const { useGetContactsQuery } = contactsApi;