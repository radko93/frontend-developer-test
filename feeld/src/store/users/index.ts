import { createReducer, ActionType } from 'typesafe-actions'
import { getUsers } from './actions'
import { logout } from '../auth/actions'
import { User } from './models'

export type State = {
  users: User[]
  isFetching: boolean
  error?: Error
}

export const initialState: State = {
  users: [],
  error: undefined,
  isFetching: false,
}

const userActions = {
  logout,
  getUsers,
}

type UserAction = ActionType<typeof userActions>

export default createReducer<State, UserAction>(initialState)
  .handleAction(getUsers.request, state => ({
    ...state,
    isFetching: true,
  }))
  .handleAction(getUsers.success, (state, action) => ({
    ...initialState,
    users: action.payload,
  }))
  .handleAction(getUsers.failure, (state, action) => ({
    ...state,
    error: action.payload,
    isFetching: false,
  }))
  .handleAction(logout, () => initialState)
