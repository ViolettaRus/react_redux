import { configureStore } from '@reduxjs/toolkit'
import { contactsApi } from './contacts/api'
import contactsFilterReducer from './contacts/slice'
import favoritesReducer from './favorites/slice'

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    contactsFilter: contactsFilterReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
})

export default store
