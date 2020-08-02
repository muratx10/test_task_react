import {
  FETCH_DATA,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  LOAD_MORE_DATA,
  LOAD_MORE_DATA_FAILURE,
  LOAD_MORE_DATA_SUCCESS,
} from './actionsTypes';

export const loadData = (payload) => ({type: FETCH_DATA, payload});

export const loadDataSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  payload,
});

export const loadDataFailure = (payload) => ({
  type: FETCH_DATA_FAILURE,
  payload,
});

export const loadMoreData = (payload) => ({type: LOAD_MORE_DATA, payload});

export const loadMoreDataSuccess = (payload) => ({
  type: LOAD_MORE_DATA_SUCCESS,
  payload,
});

export const loadMoreDataFailure = (payload) => ({
  type: LOAD_MORE_DATA_FAILURE,
  payload,
});
