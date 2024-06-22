import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

export default function handleDesktopScrollTrigger({
  isInView1,
  isInView2,
  isInView3,
}) {
  const containerDesktopRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerDesktopRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        scrub: true,
      });
    });
    return () => ctx.revert();
  }, [isInView1, isInView2, isInView3]);

  return { containerDesktopRef };
}
