import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function introAnimation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.1,
        delay: 2,
        ease: "expo.inOut",
      })
        .from(
          ["#title-1", "#title-2"],
          {
            opacity: 0,
            x: "-=30",
            duration: 0.5,
            stagger: 0.3,
            ease: "power3.inOut",
          },
          "-=0.4"
        )
        .to(["#title-1", "#title-2"], {
          opacity: 0,
          x: "+=30",
          delay: 0.4,
        })
        .to(
          "#intro-slider",
          {
            xPercent: "-100",
            duration: 0.6,
            ease: "power2.inOut",
          },
          "-=0.3"
        )
        .from("#welcome", {
          opacity: 0,
          duration: 1,
        })
        .to("#welcome", {
          opacity: 0,
          duration: 0.5,
          delay: 0.7,
          display: "none",
        })
        .to(
          "#parent-welcome",
          {
            display: "none",
          },
          "<"
        )
        .from(
          "#skill-upper",
          {
            display: "none",
          },
          "<"
        )
        .from(
          "#skill-below",
          {
            display: "none",
          },
          "<"
        )
        .from("#skill-upper", {
          opacity: 0,
          duration: 0.8,
          xPercent: "-100",
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
          "-=.5"
        )
        .to("#roundedBlue", {
          scale: 1.5,
          duration: 0.4,
          ease: "easeOut",
        })
        .to(
          "#roundedBlue",
          {
            scale: 0,
            duration: 0.4,
            ease: "easeIn",
          },
          "+=.2"
        );
    });

    return () => ctx.revert();
  }, []);
}
