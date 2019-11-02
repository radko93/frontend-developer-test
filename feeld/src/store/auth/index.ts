import { createReducer, ActionType } from 'typesafe-actions'
import { login, logout } from './actions'

export type State = {
  token?: string
  isPending: boolean
  error?: Error
}

export const initialState: State = {
  token: undefined,
  isPending: false,
  error: undefined,
}

const authActions = {
  login,
  logout,
}

type AuthAction = ActionType<typeof authActions>

export default createReducer<State, AuthAction>(initialState)
  .handleAction(login.request, state => ({
    ...state,
    isPending: true,
  }))
  .handleAction(login.success, (state, action) => ({
    ...initialState,
    token: action.payload.token,
  }))
  .handleAction(login.failure, (state, action) => ({
    ...state,
    isPending: false,
    error: action.payload,
  }))
  .handleAction(logout, () => initialState)
