import { useState, useEffect, useRef } from 'react';

export function useAnimatedCounter(targetValue, duration = 1200, trigger = true) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!trigger || hasAnimated.current) return;

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * targetValue));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(targetValue);
        hasAnimated.current = true;
      }
    };

    requestAnimationFrame(step);
  }, [targetValue, duration, trigger]);

  return count;
}
