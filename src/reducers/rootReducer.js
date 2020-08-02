const initialState = {
  results: [],
  next: '',
  isLoading: false,
  error: '',
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        results: [...action.payload.results],
        next: action.payload.info.next,
        isLoading: false,
      };
    case 'LOAD_MORE_DATA':
      return {
        ...state,
        results: [...state.results, ...action.payload.results],
        next: action.payload.info.next,
      }
    default:
      return state;
  }
}


