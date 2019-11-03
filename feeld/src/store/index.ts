import { combineReducers, createStore, applyMiddleware, Reducer } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import authReducer, { State as AuthState } from './auth/'
import usersReducer, { State as UsersState } from './users'
import sagaWrapper from './mainSaga'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
})

export type State = ReturnType<
  Reducer<{
    auth: AuthState
    users: UsersState
  }>
>

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(sagaWrapper)

export default store
