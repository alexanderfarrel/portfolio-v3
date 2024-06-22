import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function projectsAnimation({ windowWidth }) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#header-title", {
        y: "-=50",
        opacity: 0,
        duration: 0.5,
        ease: "circ",
        delay: 2,
      })
        .from(
          "#header-subtitle",
          {
            opacity: 0,
            x: "-30",
            duration: 0.4,
            ease: "power3.inOut",
          },
          "-=0.4"
        )
        .to("#roundedBlue", {
          scale: 1.4,
          duration: 0.4,
          ease: "easeOut",
          delay: 0.9,
        })
        .to(
          "#roundedBlue",
          {
            scale: 0,
            duration: 0.4,
            ease: "easeIn",
          },
          "+=0.2"
        );
      if (windowWidth < 1200) {
        t1.from(
          "#header-mobile-title",
          {
            x: "-40",
            opacity: 0,
            duration: 0.5,
            ease: "circ",
          },
          "-=1.9"
        )
          .from(
            "#header-mobile-subtitle",
            {
              opacity: 0,
              x: -40,
              duration: 0.5,
              ease: "circ",
            },
            "-=1.75"
          )
          .from(
            "#header-mobile-toggle",
            {
              opacity: 0,
              x: -20,
              duration: 0.5,
              ease: "circ",
            },
            "-=1.6"
          );
      }
    });
    return () => ctx.revert();
  }, []);
}
