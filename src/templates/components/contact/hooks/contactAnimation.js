import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function contactAnimation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(".flip-card", {
        opacity: 0,
        duration: 0.4,
        y: "50",
        delay: 2,
      })
        .from("#instagram", {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power3.inOut",
        })
        .from(
          "#linkedIn",
          {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: "power3.inOut",
          },
          "-=0.3"
        )
        .from(
          "#freelancer",
          {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: "power3.inOut",
          },
          "-=0.3"
        )
        .from(
          "#fiver",
          {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: "power3.inOut",
          },
          "-=0.3"
        )
        .to(
          "#roundedBlue",
          {
            scale: 1.4,
            duration: 0.4,
            ease: "easeOut",
            delay: 0.1,
          },
          "+=.2"
        )
        .to(
          "#roundedBlue",
          {
            scale: 0,
            duration: 0.4,
            ease: "easeIn",
          },
          "+=0.2"
        );
    });

    return () => ctx.revert();
  }, []);
}
