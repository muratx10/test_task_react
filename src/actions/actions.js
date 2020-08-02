export const FETCH_DATA_SUCCESS = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data,
});

export const SET_NEW_CHARACTERS = (payload) => ({
  type: 'SET_NEW_CHARACTERS',
  payload: 'FUCK',
})

export const FETCH_INITIAL_DATA = (url) => ({
  type: 'FETCH_INITIAL_DATA',
  payload: url,
});

export const LOAD_MORE_DATA = (url) => ({
  type: 'LOAD_MORE_DATA',
  payload: url,
})
