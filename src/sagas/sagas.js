import { call, put, takeLatest } from 'redux-saga/effects'
import fetchList from '../utils/fetchList';

function* fetchData(action) {
  const data = yield call(fetchList, action.payload);
  yield put({type: 'FETCH_DATA_SUCCESS', payload: data});
}

function* fetchNewData(action) {
  const data = yield call(fetchList, action.payload);
  yield put({type: 'SET_NEW_CHARACTERS', payload: data})
}

function* sagaWatcher() {
  yield takeLatest('FETCH_INITIAL_DATA', fetchData);
  yield takeLatest('LOAD_MORE_DATA', fetchNewData);
}

export default sagaWatcher;
