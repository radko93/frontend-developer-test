import authReducer, { initialState } from '../../../store/auth/'
import { login, logout } from '../../../store/auth/actions'

const data = {
  email: 'test@wp.pl',
  token: 'sss',
}

describe('Auth reducer', () => {
  test('should set isPending when login is pending', () => {
    const store = authReducer(initialState, login.request({ email: data.email }))
    expect(store.isPending).toBeTruthy()
  })
  test('should set isFetching to false on success or failure', () => {
    const pendingStore = authReducer(initialState, login.request({ email: data.email }))
    const storeSuccess = authReducer(pendingStore, login.success({ token: data.token }))
    const storeFailure = authReducer(pendingStore, login.failure(new Error()))
    expect(storeSuccess.isPending).toBeFalsy()
    expect(storeFailure.isPending).toBeFalsy()
  })

  test('should set token after login success', () => {
    const storeSuccessEmpty = authReducer(initialState, login.success({ token: data.token }))
    expect(storeSuccessEmpty.token).toEqual(data.token)
  })

  test('should set initialState after logout', () => {
    const storeSuccessEmpty = authReducer(initialState, login.success({ token: data.token }))
    expect(storeSuccessEmpty.token).toEqual(data.token)
    const logoutState = authReducer(storeSuccessEmpty, logout())
    expect(logoutState).toEqual(initialState)
  })
})
