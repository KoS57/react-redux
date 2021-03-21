import { createStore, combineReducers, applyMiddleware } from 'redux'
import profilePage from './profile-reducer'
import dialogsPage from './dialog-reducer'
import usersPage from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddlewear from 'redux-thunk'

let reducer = combineReducers({
    profilePage,
    dialogsPage,
    usersPage,
    auth: authReducer
})

let store = createStore(reducer,applyMiddleware(thunkMiddlewear))

window.store = store

export default store