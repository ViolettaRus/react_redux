import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  contactIds: [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const id = action.payload
      if (!state.contactIds.includes(id)) {
        state.contactIds.push(id)
      }
    },
    removeFromFavorites: (state, action) => {
      state.contactIds = state.contactIds.filter((id) => id !== action.payload)
    },
  },
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
