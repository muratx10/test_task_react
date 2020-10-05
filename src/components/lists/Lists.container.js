import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { loadMoreData } from '../../store/actions/actionCreators';
import List from '../list';

const Lists = () => {
  const state = useSelector(state => state, shallowEqual);
  const dispatch = useDispatch();

  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        if (!state.isLoading && loadMoreData(state.next)) dispatch(loadMoreData(state.next));
        observer.unobserve(entry.target);
      };
    })
}, {
  root: null,
  rootMargin: '0px',
  threshold: 1
})

useEffect(() => {
  const node = document.querySelectorAll('[class*="List_character"]');
  if(node.length > 0) observer.observe(node[node.length -1]);

}, [state, observer]);

  // const listener = () => {
  //   if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) {
  //     if (!state.isLoading && loadMoreData(state.next)) dispatch(loadMoreData(state.next));
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', listener)

  //   return () => {
  //     window.removeEventListener('scroll', listener)
  //   }
  // })

  return (
    state.results.map(item => < List item={item} key={item.id}
    />)
  )
};

export default withRouter(Lists);
