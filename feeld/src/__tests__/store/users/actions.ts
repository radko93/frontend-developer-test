import { getUsers, likeUser } from '../../../store/users/actions'

const data = {
  users: [],
  userId: '12',
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
  test('should create likeUser actions', () => {
    const requestAction = likeUser.request(data.userId)
    expect(requestAction).toEqual({
      type: 'LIKE_USER_REQUEST',
      payload: data.userId,
    })
    const successAction = likeUser.success(data.userId)
    expect(successAction).toEqual({
      type: 'LIKE_USER_SUCCESS',
      payload: data.userId,
    })
    const failureAction = likeUser.failure(new Error('offline'))
    expect(failureAction).toEqual({
      type: 'LIKE_USER_FAILURE',
      payload: new Error('offline'),
    })
  })
})
