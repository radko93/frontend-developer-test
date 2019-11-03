import { createSelector } from 'reselect'
import { State } from '../'

const getUsers = (store: State) => store.users.users
export const selectUsers = createSelector(
  getUsers,
  users => users,
)
