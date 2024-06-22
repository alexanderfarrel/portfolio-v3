import Lenis from "lenis";
import { useEffect, useState } from "react";

export default function handleScrollLenisProjects() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleClick = () => {
      lenis.scrollTo(0);
    };

    const scrollElement = document.getElementById("scroll");
    const scrollElement2 = document.getElementById("back-to-top");
    scrollElement.addEventListener("click", handleClick);
    scrollElement2.addEventListener("click", handleClick);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      scrollElement.removeEventListener("click", handleClick);
      scrollElement2.removeEventListener("click", handleClick);
    };
  }, []);

  return { scrollY, windowHeight };
}
