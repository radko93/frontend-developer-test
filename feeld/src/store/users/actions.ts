import { createAsyncAction } from 'typesafe-actions'
import {
  GetUsersRequest,
  GetUsersSuccess,
  GetUsersFailure,
  LikeUserRequest,
  LikeUserSuccess,
  LikeUserError,
} from './models'

export const getUsers = createAsyncAction('GET_USERS_REQUEST', 'GET_USERS_SUCCESS', 'GET_USERS_FAILURE')<
  GetUsersRequest,
  GetUsersSuccess,
  GetUsersFailure
>()

export const likeUser = createAsyncAction('LIKE_USER_REQUEST', 'LIKE_USER_SUCCESS', 'LIKE_USER_FAILURE')<
  LikeUserRequest,
  LikeUserSuccess,
  LikeUserError
>()
