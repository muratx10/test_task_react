import { call, delay, put, takeLatest } from 'redux-saga/effects';
import fetchList from '../../utils/fetchList';
import {
  loadDataFailure,
  loadDataSuccess,
  loadMoreDataSuccess,
} from '../actions/actionCreators';
import { FETCH_DATA, LOAD_MORE_DATA } from '../actions/actionsTypes';

export function* fetchDataSaga(action) {
  const {payload} = action;
  try {
    const response = yield call(fetchList, payload);
    yield put(loadDataSuccess(response));
  } catch (e) {
    yield put(loadDataFailure(e.message));
  }
}

export function* loadMoreDataSaga(action) {
  const {payload} = action;
  try {
    const response = yield call(fetchList, payload);
    yield delay(2000);
    yield put(loadMoreDataSuccess(response));
  } catch (e) {
    yield put(loadDataFailure(e.message));
  }
}

export function* sagaWatcher() {
  yield takeLatest(FETCH_DATA, fetchDataSaga);
  yield takeLatest(LOAD_MORE_DATA, loadMoreDataSaga);
}
