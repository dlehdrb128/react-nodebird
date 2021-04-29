import { all, fork, put, delay, takeLatest } from "@redux-saga/core/effects";
import axios from 'axios'

function logInAPI(data) {
    return axios.post('/api/login', data)
  } 
  
  function* logIn(action) {    // 일로 들어옴
      try {
  //    const result = yield call(logInAPI,action.data) //첫번쨰 자리는 함수고 나머지는 인수들 
     yield delay(1000);
     yield put({
         type:'LOG_IN_SUCCESS',
      //    data:result.data
      });
     } catch (err) {
         yield put({
             type:'LOG_IN_FAILURE',
             data:err.data
         })
     }
  }
  
  function logOutAPI() {
      return axios.post('/api/logout')
    }

    function* logOut() {
        try {
          
      //  const result = yield call(logOutAPI)
      yield delay(1000);
       yield put({
           type:'LOG_OUT_SUCCESS',
          //  data:result.data
        });
       } catch (err) {
           yield put({
               type:'LOG_OUT_FAILURE',
               data:err.data
           })
       }
    }
  



function* watchLogin() {
    yield takeLatest('LOG_IN_REQUEST', logIn);
}
function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST',logOut)
}

export default function* userSaga() {
    yield all([
     fork(watchLogin),
     fork(watchLogOut),
    ])
}