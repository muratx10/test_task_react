import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { loadData, loadMoreData } from '../../store/actions/actionCreators';
import useScroll from '../../utils/useScroll';
import List from '../list';

const Lists = (history) => {
  const state = useSelector(state => state, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.results.length === 0) dispatch(loadData('https://rickandmortyapi.com/api/character'));
  }, [dispatch, state.length, state.results.length])

  useScroll(loadMoreData(state.next));

  return (
    state.results.map(item => < List item={item} key={item.id}
    />)
  )
};

export default withRouter(Lists);
