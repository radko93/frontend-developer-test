import { takeLatest, call, select, put } from 'redux-saga/effects'
import { getUsers } from './actions'
import { getType } from 'typesafe-actions'
import API, { Context } from '../../services/api'
import { selectContext } from '../auth/selectors'
import { SagaIterator } from '@redux-saga/core'

export default function* usersFlow(api: API): SagaIterator {
  yield takeLatest(getType(getUsers.request), function*() {
    try {
      const context: Context = yield select(selectContext)
      const response = yield call(api.getUsers(context))
      if (response && response.data) {
        yield put(getUsers.success(response.data))
      } else if (response.error) {
        yield put(getUsers.failure(response.error))
      }
    } catch (err) {
      yield put(getUsers.failure(err))
    }
  })
}
