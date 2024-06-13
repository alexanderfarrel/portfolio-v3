import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import useWindowWidth from "../hooks/windowWidth";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Navbar from "../components/views/navbar";
import Button from "../components/ui/button";
import MainContent from "../components/views/MainContent";
import SkillsBar from "../components/views/skillsBar";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";

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

  // Cursor
  const [mousePotition, setMousePosition] = useState({ x: null, y: null });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsMouseEnter(true);
    };
    const handleMouseLeave = () => {
      setIsMouseEnter(false);
    };
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const trailer = useRef(null);
  const trailerOffset = trailer?.current?.offsetWidth / 2;

  const mouseVariants = {
    default: {
      x: mousePotition.x - trailerOffset,
      y: mousePotition.y - trailerOffset,
      scale: 1,
    },
    navbar: {
      x: mousePotition.x - trailerOffset,
      y: mousePotition.y - trailerOffset,
      scale: 1,
    },
    text: {
      x: mousePotition.x - trailerOffset,
      y: mousePotition.y - trailerOffset,
      scale: 4,
      transition: { duration: 0.2 },
    },
  };
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const navbarEnter = () => setCursorVariant("navbar");
  const navbarLeave = () => setCursorVariant("default");

  // view-intro
  const viewIntro = useRef(null);
  const [isViewIntro, setIsViewIntro] = useState(false);
  useEffect(() => {
    viewIntro.current.addEventListener(
      "mouseenter",
      (e) => console.log(e.clientX),
      setIsViewIntro(true)
    );
    viewIntro.current.addEventListener("mouseleave", () =>
      setIsViewIntro(false)
    );
    return () => {
      viewIntro?.current?.removeEventListener("mouseenter", () =>
        setIsViewIntro(true)
      );
      viewIntro?.current?.removeEventListener("mouseleave", () =>
        setIsViewIntro(false)
      );
    };
  }, []);
  return (
    <>
      <motion.div
        ref={trailer}
        animate={{
          scale:
            mousePotition.x == null
              ? 0
              : cursorVariant != "default"
              ? cursorVariant == "navbar"
                ? 0
                : 3
              : !isMouseEnter
              ? 0
              : 1.5,
        }}
        style={mousePotition.x == null ? {} : mouseVariants[cursorVariant]}
        className={`w-5 h-5 bg-white fixed z-[999999] pointer-events-none rounded-full ${
          cursorVariant != "default" ? "mix-blend-difference" : ""
        } ${windowWidth < 1200 ? "hidden" : ""}`}
      />
      <Navbar navbarEnter={navbarEnter} navbarLeave={navbarLeave} />
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
          <MainContent
            color={color}
            textEnter={textEnter}
            textLeave={textLeave}
          />
          <SkillsBar id={"skill-below"} />
        </motion.div>

        <div
          className="absolute bottom-20 right-[4vw] border border-white/50 rounded-full px-3 py-1 cursor-pointer flex gap-2 items-center justify-center"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          onClick={() => (window.location.href = "/")}
          id="view-intro"
          ref={viewIntro}
        >
          <motion.div
            className="bg-white/50 rounded-full w-full h-full absolute inset-0"
            initial={{ clipPath: "circle(0px at 50% 50%)" }}
            animate={{
              clipPath: isViewIntro
                ? "circle(150px at 50% 50%)"
                : "circle(0px at 50% 50%)",
            }}
          ></motion.div>
          <img
            src="/icons/arrow-border.png"
            alt=""
            className="max-w-[30px] -mx-1"
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
