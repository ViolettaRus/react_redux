import {
  FETCH_GROUPS_START,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_ERROR,
} from '../actions/groupsActions'

const initialState = {
  items: [],
  loading: false,
  error: null,
}

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GROUPS_START:
      return {
        ...state,
        loading: true,
        error: null,
      }
    
    case FETCH_GROUPS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: null,
      }
    
    case FETCH_GROUPS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    
    default:
      return state
  }
}

export default groupsReducer
