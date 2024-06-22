import { useState, useEffect, useRef } from "react";
import getMaxValueBasedWidth from "./getMaxValueBasedWidth";
import Lenis from "lenis";

function useScrollAndResize() {
  const [scrollY, setScrollY] = useState(0);
  const [XValue, setXValue] = useState(75);
  const [swiperWidth, setSwiperWidth] = useState(63);
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis();

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleClick = () => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0);
      }
    };

    const scrollElement = document.getElementById("scroll");
    const scrollElement2 = document.getElementById("back-to-top");

    if (scrollElement) {
      scrollElement.addEventListener("click", handleClick);
    }
    if (scrollElement2) {
      scrollElement2.addEventListener("click", handleClick);
    }

    window.addEventListener("scroll", handleScroll);

    setXValue(getMaxValueBasedWidth(400, 1920, 75, 93.5));
    setSwiperWidth(getMaxValueBasedWidth(400, 1920, 63, 98));

    function raf(time) {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollElement) {
        scrollElement.removeEventListener("click", handleClick);
      }
      if (scrollElement2) {
        scrollElement2.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return { scrollY, XValue, swiperWidth };
}

export default useScrollAndResize;
