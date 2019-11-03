import { createSelector } from 'reselect'
import { State } from '../'
import { Context } from '../../services/api'

const getToken = (store: State) => store.auth.token
export const authenticationToken = createSelector(
  getToken,
  token => token,
)

export const selectContext = (store: State): Context => {
  const token = authenticationToken(store)
  return {
    token,
  }
}
