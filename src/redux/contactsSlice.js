import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: []
  },
  reducers: {
    // getContacts(state, action) {
    //   state.contacts.push

    // },
    // getOneContact(state, action) {
      
    // },
    // addContact(state, action) {
      
    // },
    // deleteContact(state, action) {
      
    // }
  }
})

export const {getContacts, getOneContact, addContact, deleteContact} = contactsSlice.actions;

export default contactsSlice.reducer;