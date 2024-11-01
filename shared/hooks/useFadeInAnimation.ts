import { useSpring } from "@react-spring/web";
import { useIntersection } from "react-use";
import { useRef } from "react";

function useFadeInAnimation({
  threshold = 0.1,
  initialY = 100,
  config = { mass: 10, tension: 200, friction: 50 },
} = {}) {
  const ref = useRef(null);

  const intersection = useIntersection(ref, { threshold });
  const isVisible = intersection && intersection.isIntersecting;

  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : `translateY(${initialY}px)`,
    config,
  });

  return { ref, styles };
}

export { useFadeInAnimation };
