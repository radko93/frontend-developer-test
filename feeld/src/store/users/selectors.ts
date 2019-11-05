import { createSelector } from 'reselect'
import { State } from '../'

const getUsers = (store: State) => store.users.users
export const selectUsers = createSelector(
  getUsers,
  users => users,
)

const getUsersError = (store: State) => store.users.error
export const selectUsersError = createSelector(
  getUsersError,
  error => error,
)

const getIsFetchingUsers = (store: State) => store.users.isFetching
export const selectIsFetchingUsers = createSelector(
  getIsFetchingUsers,
  isFetching => isFetching,
)
