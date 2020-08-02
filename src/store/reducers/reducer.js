import {
  FETCH_DATA,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  LOAD_MORE_DATA,
  LOAD_MORE_DATA_FAILURE,
  LOAD_MORE_DATA_SUCCESS,
} from '../actions/actionsTypes';

const initialState = {
  results: [],
  next: '',
  error: '',
  isLoading: false,
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        results: [...action.payload.results],
        next: action.payload.info.next ? action.payload.info.next : '',
        isLoading: false,
        error: '',
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case LOAD_MORE_DATA:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case LOAD_MORE_DATA_SUCCESS:
      const newData = action.payload.results;
      const next = action.payload.info.next;
      const {results} = state;
      return {
        ...state,
        results: [...results, ...newData],
        next: next ? next : '',
        error: '',
        isLoading: false,
      };
    case LOAD_MORE_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return {
        ...state, isLoading: false,
      };
  }
}
