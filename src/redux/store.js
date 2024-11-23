import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import tagReducer from "./tagsDeleteSwitcher";

export const store = configureStore({
  reducer: {
    tagsDelState: tagReducer,
    [contactsApi.reducerPath]: contactsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware)
})

setupListeners(store.dispatch)