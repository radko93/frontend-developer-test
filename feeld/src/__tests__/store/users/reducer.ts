import usersReducer, { initialState } from '../../../store/users/'
import { getUsers } from '../../../store/users/actions'
import { logout } from '../../../store/auth/actions'

const data = {
  users: [],
}

describe('Users reducer', () => {
  test('should set isFetching after getUsers request', () => {
    const store = usersReducer(initialState, getUsers.request())
    expect(store.isFetching).toBeTruthy()
  })
  test('should set isFetching to false on success or failure', () => {
    const pendingStore = usersReducer(initialState, getUsers.request())
    const storeSuccess = usersReducer(pendingStore, getUsers.success(data.users))
    const storeFailure = usersReducer(pendingStore, getUsers.failure(new Error()))
    expect(storeSuccess.isFetching).toBeFalsy()
    expect(storeFailure.isFetching).toBeFalsy()
  })

  test('should set data after getUsers success', () => {
    const storeSuccessEmpty = usersReducer(initialState, getUsers.success(data.users))
    expect(storeSuccessEmpty.users).toEqual(data.users)
  })

  test('should set initialState after logout', () => {
    const pendingStore = usersReducer(initialState, getUsers.request())
    expect(pendingStore.isFetching).toBeTruthy()
    const logoutState = usersReducer(pendingStore, logout())
    expect(logoutState).toEqual(initialState)
  })
})
