import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function achievementsAnimation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#header-title", {
        opacity: 0,
        y: "-=50",
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
          scale: 1.5,
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
        )
        .from(
          "#bright_champs",
          {
            opacity: 0,
            x: "-=50",
            y: "+=50",
            duration: 1.3,
            ease: "ease",
          },
          "-=1.5"
        )
        .from(
          "#rise",
          {
            opacity: 0,
            y: "-=50",
            x: "-=50",
            duration: 1.3,
            ease: "ease",
          },
          "<"
        )
        .from(
          "#edspert",
          {
            opacity: 0,
            y: "-=50",
            x: "+=50",
            duration: 1.3,
            ease: "ease",
          },
          "<"
        )
        .from(
          "#oop",
          {
            opacity: 0,
            duration: 1.3,
            ease: "ease",
          },
          "<"
        )
        .from(
          "#alibaba",
          {
            opacity: 0,
            y: "-=50",
            duration: 1.3,
            ease: "ease",
          },
          "<"
        )
        .from(
          "#front_end_dicoding",
          {
            opacity: 0,
            x: "+=50",
            y: "+=50",
            duration: 1.3,
          },
          "<"
        )
        .from(
          "#talenta_ai",
          {
            opacity: 0,
            y: "+=50",
            duration: 1.3,
          },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);
}
