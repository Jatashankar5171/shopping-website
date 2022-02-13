import fetchApi from '../api/productApi'
import {all, put, takeEvery, call} from 'redux-saga/effects'

function* fetchSaga(){
    console.log('inside fetch saga');
    const api = yield fetchApi()
    yield put({type:'FETCH_RESULT',payload:api.data})
} 
function* watcherSaga(){
    console.log('dispatch caught by watcher');
    yield takeEvery('FETCH_API',fetchSaga)
}
function* rootSaga(){
    yield all([watcherSaga()])
}

export default rootSaga