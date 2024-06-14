import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import useWindowWidth from "../hooks/windowWidth";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Navbar from "../components/views/navbar";
import MainContent from "../components/views/MainContent";
import SkillsBar from "../components/views/skillsBar";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useStoreGlobal } from "../services/zustand/store";

export default function Home() {
  const windowWidth = useWindowWidth();
  const [colors, setColors] = useState([
    "#13FFAA",
    "#1E67C6",
    "#CE84CF",
    "#DD335C",
  ]);
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
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
            scale: 1.2,
            duration: 0.4,
            ease: "easeOut",
            delay: 0.1,
          },
          "-=.2"
        )
        .to("#roundedBlue", {
          scale: 0,
          duration: 0.4,
          delay: 0.1,
          ease: "easeIn",
        })
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
  }, [comp]);
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

  // view-intro
  const viewIntro = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX - viewIntro.current.offsetLeft;
      const y = e.clientY - viewIntro.current.offsetTop;
      viewIntro.current.style.setProperty("--x", `${x}px`);
      viewIntro.current.style.setProperty("--y", `${y}px`);
    };

    viewIntro.current.addEventListener("mousemove", handleMouseMove);
    return () => {
      viewIntro?.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const handleViewIntroClick = (e) => {
    let x = e.clientX - viewIntro.current.offsetLeft;
    let y = e.clientY - viewIntro.current.offsetTop;

    let ripples = document.createElement("span");
    ripples.classList.add("btn-ripple-span");
    ripples.style.left = `${x}px`;
    ripples.style.top = `${y}px`;
    viewIntro.current.appendChild(ripples);
    setTimeout(() => {
      ripples.remove();
      window.location.href = "/";
    }, 500);
  };

  const changeCursorVariant = useStoreGlobal((state) => state.setCursorVariant);
  const textEnter = () => changeCursorVariant("text");
  const textLeave = () => changeCursorVariant("default");
  return (
    <>
      <Navbar />
      <div className="relative overflow-x-hidden" ref={comp}>
        <motion.div className="relative h-[100dvh] flex flex-col items-center justify-between py-3">
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 2, duration: 5 }}
            className="absolute top-0 left-0 right-0 bottom-0 -z-20 opacity-0"
            style={{ backgroundImage }}
          ></motion.div>
          <SkillsBar id={"skill-upper"} />
          <MainContent color={color} />
          <SkillsBar id={"skill-below"} />
        </motion.div>

        <div
          className="absolute bottom-20 right-[4vw] rounded-full px-3 py-1 cursor-pointer flex gap-2 items-center justify-center overflow-hidden btn-ripple"
          id="view-intro"
          ref={viewIntro}
          onClick={handleViewIntroClick}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <img
            src="/icons/arrow-border.png"
            alt=""
            className="max-w-[25px] -mx-1"
          />
          <p>View Intro</p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 5 }}
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
    </>
  );
}
