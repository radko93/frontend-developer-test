import { takeLatest, put } from 'redux-saga/effects'
import { login } from './actions'
import { getType } from 'typesafe-actions'

export default function* authFlow() {
  yield takeLatest(getType(login.request), function*() {
    // real API call here
    yield put(
      login.success({
        token:
          '3TtY+AVtEJMaOPWGyEulVEgVBWZ8gqM75gag6wCcA3rJCYWMkX/ZmAOJxrZ4bPyBLJBch7VyMYD8ZCWoNPCUnJbT5M2iRWjJteGrfNhFzd+0oDbWQwiNAIdG0W9rHw7sKAAWk5uEzjs+lPykJnmy56LRwSFpoyxHC7p9G3KTQoQ=',
      }),
    )
  })
}
