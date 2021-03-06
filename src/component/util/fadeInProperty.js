import { useRef, useEffect, useCallback } from 'react';

/*
    Observe is element visible Observer 
    => https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API
    But under ie 11 is not Support, So Not Used
*/

const useScrollFadeIn = (direction = 'up', duration = 1, delay = 0,threshold = 0.01) => {
  const dom = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 10%, 0)';
      case 'down':
        return 'translate3d(0, -100%, 0)';
      case 'left':
        return 'translate3d(2%, 0, 0)';
      case 'right':
        return 'translate3d(-2%, 0, 0)';
      default:
        return;
    };
  };

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;
      if (entry.isIntersecting) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = 'translate3d(0, 0, 0)';
      };
    },
    [delay, duration],
  );

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: threshold});
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

export default useScrollFadeIn;