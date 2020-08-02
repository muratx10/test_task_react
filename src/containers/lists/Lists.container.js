import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { loadData, loadMoreData } from '../../store/actions/actionCreators';
import List from '../../components/list';
import useScroll from '../../utils/useScroll';

const Lists = () => {
  const state = useSelector(state => state, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData('https://rickandmortyapi.com/api/character'));
  }, [dispatch])

  useScroll(loadMoreData(state.next));

  return (
    state.results.map(item => <List val={item.name} key={item.id} />)
  )
};

export default Lists;
