import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/api'
import favoritesReducer from './favoritesSlice'
import contactsFilterReducer from './contactsFilterSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    favorites: favoritesReducer,
    contactsFilter: contactsFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export default store
