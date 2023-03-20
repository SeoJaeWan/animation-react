import { useEffect } from "react";

const useObserver = ({
  target,
  onIntersect,
  rootMargin = "0px",
  threshold = 1.5,
}) => {
  useEffect(() => {
    let observer;

    if (target && target.current) {
      observer = new IntersectionObserver(onIntersect, {
        root: null,
        rootMargin,
        target,
      });
      observer.observe(target.current);
    }

    return () => observer && observer.disconnect();
  }, [target, rootMargin, threshold]);
};

export default useObserver;
