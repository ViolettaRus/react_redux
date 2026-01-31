import {
  FETCH_CONTACTS_START,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_ERROR,
  SET_CONTACTS_FILTER,
} from '../actions/contactsActions'

const initialState = {
  items: [],
  loading: false,
  error: null,
  filter: {
    name: '',
    groupId: null,
  },
}

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_START:
      return {
        ...state,
        loading: true,
        error: null,
      }
    
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: null,
      }
    
    case FETCH_CONTACTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    
    case SET_CONTACTS_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload,
        },
      }
    
    default:
      return state
  }
}

export default contactsReducer
