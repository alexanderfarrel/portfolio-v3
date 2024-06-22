import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const homeIntroAnimation = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#skill-upper", {
        opacity: 0,
        duration: 0.8,
        xPercent: "-100",
        delay: 2,
      })
        .from(
          "#skill-below",
          {
            opacity: 0,
            duration: 0.8,
            xPercent: "100",
          },
          "<"
        )
        .from("#main", {
          display: "none",
        })
        .from(
          "#image",
          {
            opacity: 0,
            duration: 0.3,
            x: "+=100",
          },
          "<"
        )
        .from(
          ["#greeting", "#name", "#typing"],
          {
            opacity: 0,
            duration: 0.4,
            x: "-=100",
            stagger: 0.2,
          },
          "<"
        )
        .from(
          "#button-cv",
          {
            opacity: 0,
            x: "-=100",
            duration: 0.5,
            delay: 0.6,
          },
          "<"
        )
        .from(
          "#button-contact",
          {
            opacity: 0,
            x: "+=100",
            duration: 0.5,
          },
          "<"
        )
        .from(
          "#hamburger",
          {
            opacity: 0,
            duration: 0.4,
            x: "+=100",
          },
          "<"
        )
        .to(
          "#roundedBlue",
          {
            scale: 1.4,
            duration: 0.4,
            ease: "easeOut",
            delay: 0.1,
          },
          "-=.2"
        )
        .to(
          "#roundedBlue",
          {
            scale: 0,
            duration: 0.4,
            ease: "easeIn",
          },
          "+=0.2"
        )
        .from(
          "#view-intro",
          {
            opacity: 0,
            duration: 0.4,
            right: "-=50",
          },
          "<"
        );
    });
    return () => ctx.revert();
  }, []);
};

export default homeIntroAnimation;
