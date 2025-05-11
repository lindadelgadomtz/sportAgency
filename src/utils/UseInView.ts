import { useEffect, useRef, useState } from 'react';

const useInView = (options: IntersectionObserverInit = { threshold: 0.75 }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (ref.current) observer.unobserve(ref.current); // unobserve after first trigger
        }
      },
      { threshold: 0.1, ...options }
    );

    const currentElement = ref.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [options]);

  return [ref, isInView] as const;
};

export default useInView;
