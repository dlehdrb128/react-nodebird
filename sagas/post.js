import { all,put,delay, fork,takeLatest } from "@redux-saga/core/effects";
import axios from 'axios'


  
function addpostAPI(data) {
    return axios.post('/api/addpost',data)
  }
  function* addpost(action) {
      try {
          yield delay(1000);
          yield put({
              type:'ADD_POST_REQUEST',
           });
    //  const result = yield call(addpostAPI,action.data)
     yield put({
         type:'ADD_POST_SUCCESS',
        //  data:result.data
      });
     } catch (err) {
         yield put({
             type:'ADD_POST_FAILURE',
             data:err.data
         })
     }
  }


function* watchAddPost() {
    yield takeLatest('ADD_POST_REQUEST', addpost, 2000)
}

export default function* postSage() {
    yield all([
        fork(watchAddPost),
    ])
}