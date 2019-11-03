import { getUsers } from '../../../store/users/actions'

const data = {
  users: [],
}

describe('Users', () => {
  test('should create getUsers actions', () => {
    const requestAction = getUsers.request()
    expect(requestAction).toEqual({
      type: 'GET_USERS_REQUEST',
    })
    const successAction = getUsers.success(data.users)
    expect(successAction).toEqual({
      type: 'GET_USERS_SUCCESS',
      payload: data.users,
    })
    const failureAction = getUsers.failure(new Error('offline'))
    expect(failureAction).toEqual({
      type: 'GET_USERS_FAILURE',
      payload: new Error('offline'),
    })
  })
})
