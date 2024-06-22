import { useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function handleMobileScroll({ windowWidth, setVideo }) {
  const refContainerMobile = useRef(null);
  const [isHidden, setIsHidden] = useState(true);
  const mobileScroll = useScroll({
    target: refContainerMobile,
    offset: ["start 15%", "end end"],
  });
  const scaleXTop = useTransform(
    mobileScroll.scrollYProgress,
    [0, 0.333333333334, 0.666666666667, 1],
    [0, 1, 1, 1]
  );
  const scaleXSide = useTransform(
    mobileScroll.scrollYProgress,
    [0, 0.32, 0.666666666667, 1],
    [0, 0, 1, 1]
  );
  const scaleXBottom = useTransform(
    mobileScroll.scrollYProgress,
    [0, 0.32, 0.65, 1],
    [0, 0, 0, 1]
  );

  useLayoutEffect(() => {
    if (windowWidth < 1200) {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: refContainerMobile.current,
          start: "top 15%",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (e) => {
            if (e.progress > 0.33 && e.progress < 0.66) {
              setVideo(2);
            } else if (e.progress > 0.66 && e.progress <= 1) {
              setVideo(3);
            } else {
              setVideo(1);
            }
          },
          onEnter: () => {
            setIsHidden(false);
          },
          onLeaveBack: () => {
            setIsHidden(true);
          },
        });

        return () => ctx.revert();
      });
    }
  }, [windowWidth, setVideo]);

  return {
    refContainerMobile,
    scaleXTop,
    scaleXSide,
    scaleXBottom,
    isHidden,
  };
}
