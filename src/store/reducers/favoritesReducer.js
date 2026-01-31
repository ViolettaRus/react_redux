import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from '../actions/favoritesActions'

const initialState = {
  contactIds: [],
}

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      if (state.contactIds.includes(action.payload)) {
        return state
      }
      return {
        ...state,
        contactIds: [...state.contactIds, action.payload],
      }
    
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        contactIds: state.contactIds.filter(id => id !== action.payload),
      }
    
    default:
      return state
  }
}

export default favoritesReducer
