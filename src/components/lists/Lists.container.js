import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { loadMoreData } from '../../store/actions/actionCreators';
import useScroll from '../../utils/useScroll';
import List from '../list';

const Lists = () => {
  const state = useSelector(state => state, shallowEqual);
  useScroll(loadMoreData(state.next));

  return (
    state.results.map(item => < List item={item} key={item.id}
    />)
  )
};

export default withRouter(Lists);
