import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  FETCH_INITIAL_DATA,
  LOAD_MORE_DATA,
} from '../../actions/actions';
import List from '../../components/list';

const Lists = () => {
  const state = useSelector(state => state, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FETCH_INITIAL_DATA('https://rickandmortyapi.com/api/character'));
    window.addEventListener('scroll', () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log('you\'re at the bottom of the page');
        //show loading spinner and make fetch request to api
        if (state.next) {
          dispatch(LOAD_MORE_DATA(state.next));
        }
      }
    });
  }, [dispatch, state.next])
  return (
    state.results.map(item => <List val={item.name} key={item.id} />)
  )
};

export default Lists;
