import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const EmptySSRRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
}

const useScroll = (action) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.isLoading);
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [bodyOffset, setBodyOffset] = useState(
    typeof window === 'undefined' || !window.document
      ? EmptySSRRect
      : document.body.getBoundingClientRect(),
  )
  const [scrollY, setScrollY] = useState(bodyOffset.top)
  const [scrollX, setScrollX] = useState(bodyOffset.left)
  const [scrollDirection, setScrollDirection] = useState()

  const listener = () => {
    setBodyOffset(
      typeof window === 'undefined' || !window.document
        ? EmptySSRRect
        : document.body.getBoundingClientRect(),
    )
    setScrollY(-bodyOffset.top)
    setScrollX(bodyOffset.left)
    setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up')
    setLastScrollTop(-bodyOffset.top)
    if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) {
      if (!isLoading) dispatch(action);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  })

  return {
    scrollY,
    scrollX,
    scrollDirection,
  }
}

export default useScroll;
