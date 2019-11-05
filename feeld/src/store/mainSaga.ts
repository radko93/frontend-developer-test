import { SagaIterator } from '@redux-saga/types'
import { fork } from 'redux-saga/effects'
import authFlow from './auth/sagas'
import usersFlow from './users/sagas'
import API from '../services/api'
import config from '../config'

export default function* sagaWrapper(): SagaIterator {
  const api = new API(config)

  yield fork(authFlow)

  // Check if user is logged in
  yield fork(usersFlow, api)
}
