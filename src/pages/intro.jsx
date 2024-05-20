import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import MainContent from "../components/views/MainContent";

import SkillsBar from "../components/views/skillsBar";
import Button from "../components/ui/button";
import Navbar from "../components/views/navbar";

export default function Intro() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.2,
        delay: .8,
      })
        .from(["#title-1", "#title-2"], {
          opacity: 0,
          y: "+=30",
          duration: 0.4,
          stagger: 0.4,
        })
        .to(["#title-1", "#title-2"], {
          opacity: 0,
          y: "-=30",
          delay: 0.6,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 0.6,
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
            x: "-=100",
            opacity: 0,
            duration: 0.5,
            delay: 0.6,
          },
          "<"
        )
        .from(
          "#button-contact",
          {
            x: "+=100",
            opacity: 0,
            duration: 0.5,
          },
          "<"
        ).from("#hamburger", {
          opacity: 0,
          duration: 0.4,
          x: "+=100",
        }, "<")
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="relative overflow-x-hidden" ref={comp}>
        <div
          id="intro-slider"
          className="h-[100dvh] p-10 bg-gray-50 absolute top-0 left-0 z-10 w-full flex flex-col justify-center gap-10 tracking-tight md:gap-5 sm:gap-5"
        >
          <h1 className="text-9xl md:text-8xl sm:text-6xl" id="title-1">
            Welcome
          </h1>
          <h1 className="text-9xl md:text-8xl sm:text-6xl" id="title-2">
            To
          </h1>
        </div>

        <div className="relative h-[100dvh] flex flex-col bg-neutral-950 items-center justify-between py-3">
          <Navbar/>
          <SkillsBar id={"skill-upper"} />
          <Button id={"welcome"} intro className={"text-[5rem]"}>
            Alexander Portfolio
          </Button>
          <MainContent />
          <SkillsBar id={"skill-below"} />
        </div>
      </div>
    </>
  );
}
