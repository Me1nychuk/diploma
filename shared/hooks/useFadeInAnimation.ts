import { useSpring } from "@react-spring/web";
import { useIntersection } from "react-use";
import React, { useRef } from "react";

function useFadeInAnimation({
  threshold = 0.1,
  initialY = 100,
  config = { mass: 10, tension: 200, friction: 50 },
} = {}) {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  const intersection = useIntersection(ref, { threshold });
  const isVisible = intersection && intersection.isIntersecting;

  React.useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  const styles = useSpring({
    opacity: hasAnimated ? 1 : 0,
    transform: hasAnimated ? "translateY(0px)" : `translateY(${initialY}px)`,
    config,
  });

  return { ref, styles };
}

export { useFadeInAnimation };
