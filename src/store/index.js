import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import contactsReducer from './reducers/contactsReducer'
import groupsReducer from './reducers/groupsReducer'
import favoritesReducer from './reducers/favoritesReducer'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  groups: groupsReducer,
  favorites: favoritesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
