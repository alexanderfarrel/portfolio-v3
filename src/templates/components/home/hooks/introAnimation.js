import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function introAnimation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.2,
        delay: 2,
        ease: "expo.inOut",
      })
        .from(["#title-1", "#title-2"], {
          opacity: 0,
          x: "-=30",
          duration: 0.4,
          stagger: 0.4,
          ease: "power3.inOut",
        })
        .to(["#title-1", "#title-2"], {
          opacity: 0,
          x: "+=30",
          delay: 0.6,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 0.6,
          ease: "power2.inOut",
        })
        .from("#welcome", {
          opacity: 0,
          duration: 1,
        })
        .to("#welcome", {
          opacity: 0,
          duration: 0.5,
          delay: 1.2,
          display: "none",
        })
        .from(
          "#parentDiv",
          {
            justifyContent: "center",
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
          "<"
        )
        .to(
          "#roundedBlue",
          {
            scale: 1.5,
            duration: 0.4,
            ease: "easeOut",
          },
          "+=.8"
        )
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
