import { login, logout } from '../../../store/auth/actions'

const data = {
  email: 'test@wp.pl',
  token: 'sss',
}

describe('Auth', () => {
  test('should create login actions', () => {
    const requestAction = login.request({ email: data.email })
    expect(requestAction).toEqual({
      type: 'LOGIN',
      payload: {
        email: data.email,
      },
    })
    const successAction = login.success({ token: data.token })
    expect(successAction).toEqual({
      type: 'LOGIN_SUCCESS',
      payload: {
        token: data.token,
      },
    })
    const failureAction = login.failure(new Error('offline'))
    expect(failureAction).toEqual({
      type: 'LOGIN_FAILURE',
      payload: new Error('offline'),
    })
  })

  test('should create logout action', () => {
    const action = logout()
    expect(action).toEqual({
      type: 'LOGOUT',
    })
  })
})
