import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import MainContent from "../templates/components/MainContent";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import useWindowWidth from "../services/hooks/windowWidth";

import SkillsBar from "../templates/components/skillsBar";

import Button from "../templates/ui/button";
import Navbar from "../templates/components/navbar";

import { useStoreGlobal } from "../services/zustand/store";
import CursorTrailer from "../templates/views/cursorTrailer";

export default function Intro() {
  const [colors] = useState(["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]);
  const comp = useRef(null);
  const windowWidth = useWindowWidth();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.2,
        delay: 0.2,
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
            scale: 1.2,
            duration: 0.4,
            ease: "easeOut",
            delay: 0.1,
          },
          "+=.8"
        )
        .to("#roundedBlue", {
          scale: 0,
          duration: 0.4,
          delay: 0.1,
          ease: "easeIn",
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(175% 175% at 50% 0%, #020617 45%, ${color})`;
  useEffect(() => {
    animate(color, colors, {
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    });
  }, []);

  const cursorVariantsGlobal = useStoreGlobal((state) => state.cursorVariant);
  return (
    <div className={`${cursorVariantsGlobal != "default" && "cursor-none"}`}>
      <CursorTrailer />
      <div className="relative overflow-hidden" ref={comp}>
        <div
          id="intro-slider"
          className="h-[100vh] p-10 bg-gray-50 absolute top-0 left-0 z-10 w-full flex flex-col justify-center gap-10 tracking-tight md:gap-5 sm:gap-5 text-black"
        >
          <h1
            className="text-9xl md:text-8xl sm:text-6xl cursor-none"
            id="title-1"
          >
            Welcome
          </h1>
          <h1
            className="text-9xl md:text-8xl sm:text-6xl cursor-none"
            id="title-2"
          >
            To
          </h1>
        </div>

        <motion.div className="relative h-[100dvh] flex flex-col items-center justify-between py-3">
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 5.5, duration: 5 }}
            className="absolute top-0 left-0 right-0 bottom-0 -z-20 opacity-0"
            style={{ backgroundImage }}
          />
          <Navbar />
          <SkillsBar id={"skill-upper"} />
          <Button id={"welcome"} intro className={"text-[5rem]"}>
            Alexander Portfolio
          </Button>
          <MainContent color={color} />
          <SkillsBar id={"skill-below"} />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5, duration: 5 }}
        className="absolute inset-0 -z-20"
      >
        <Canvas>
          <Stars
            radius={50}
            count={1000}
            factor={windowWidth < 1000 ? "5" : "3"}
            fade
            speed={2}
          />
        </Canvas>
      </motion.div>
    </div>
  );
}
