import { createAsyncAction, createAction } from 'typesafe-actions'
import { GetUsersRequest, GetUsersSuccess, GetUsersFailure } from './models'

export const getUsers = createAsyncAction('GET_USERS_REQUEST', 'GET_USERS_SUCCESS', 'GET_USERS_FAILURE')<
  GetUsersRequest,
  GetUsersSuccess,
  GetUsersFailure
>()

export const logout = createAction('LOGOUT')
