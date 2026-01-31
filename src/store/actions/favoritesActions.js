// Action types
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

// Action creators
export const addToFavorites = (contactId) => ({
  type: ADD_TO_FAVORITES,
  payload: contactId,
})

export const removeFromFavorites = (contactId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: contactId,
})
