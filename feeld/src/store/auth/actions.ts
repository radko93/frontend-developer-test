import { createAsyncAction, createAction } from 'typesafe-actions'
import { LoginRequest, LoginResponse, LoginFailure } from './models'

export const login = createAsyncAction('LOGIN_REQUEST', 'LOGIN_SUCCESS', 'LOGIN_FAILURE')<
  LoginRequest,
  LoginResponse,
  LoginFailure
>()

export const logout = createAction('LOGOUT')()
