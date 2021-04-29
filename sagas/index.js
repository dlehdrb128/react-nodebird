
import {all, fork, } from 'redux-saga/effects'

import postSage from '../sagas/post'
import userSage from '../sagas/user'

export default function* rootSaga() {
    yield all([
        fork(userSage),
        fork(postSage),
      
    ])
}