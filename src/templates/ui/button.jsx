import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { cursorDefault } from "../../services/hooks/handleCursorTrailer";
import useWindowWidth from "../../services/hooks/windowWidth";
import { useEffect, useRef, useState } from "react";

export default function Button({
  children,
  className = "",
  delay = 0,
  intro = false,
  id = null,
  cursorAuto = false,
  mouseEnter = () => {},
  onClick = () => {},
}) {
  const ref = useRef(null);
  const windowWidth = useWindowWidth();
  const [colors] = useState([
    "rgba(19, 255, 170, .5)",
    "rgba(30, 103, 198, .5)",
    "rgba(206, 132, 207, .5)",
    "rgba(221, 51, 92, .5)",
  ]);
  const color = useMotionValue(colors[0]);
  const [colors2] = useState([
    "rgba(19, 255, 170, .1)",
    "rgba(30, 103, 198, .1)",
    "rgba(206, 132, 207, .1)",
    "rgba(221, 51, 92, .1)",
  ]);
  const color2 = useMotionValue(colors2[0]);
  useEffect(() => {
    animate(color, colors, {
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    });
    animate(color2, colors2, {
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    });
  }, []);

  const backgroundImage = useMotionTemplate`linear-gradient(
      -75deg,
      rgba(0,0,0,0) calc(var(--x) + 20%),
      ${color} calc(var(--x) + 25%),
      rgba(0,0,0,0) calc(var(--x) + 100%)
      )`;
  const background = useMotionTemplate`radial-gradient(
      circle at 50% 0%,
      ${color2} 0%,
      transparent 60%
    )
    rgba(15,15,15, 1)`;
  return (
    <motion.button
      ref={ref}
      id={id}
      onMouseEnter={mouseEnter}
      onMouseLeave={cursorDefault}
      onClick={onClick}
      className={`px-6 py-2 rounded-md relative ${
        cursorAuto
          ? "cursor-auto"
          : windowWidth < 1200
          ? "cursor-pointer"
          : "cursor-none"
      } ${
        intro ? "sm:text-6xl" : "sm:text-[13px]"
      } ${className} sm:px-4 sm:py-[6px]`}
      style={intro ? "" : { background }}
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={!intro && { scale: 0.97, transition: { duration: 0.1 } }}
      transition={
        intro
          ? { duration: 3.6, delay: 4.8, type: "tween" }
          : {
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.5,
              duration: 5,
              delay: delay ? delay : 0,
              type: "spring",
              stiffness: 20,
              damping: 15,
              mass: 2,
              scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
                duration: 0.2,
              },
            }
      }
    >
      <span
        className={`text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask-button ${
          intro && "font-light"
        }`}
      >
        {children}
      </span>
      <motion.span
        className={`block absolute inset-0 rounded-md p-px ${
          intro ? "linear-overlay-intro-button" : "linear-overlay-button"
        }`}
        style={
          intro
            ? ""
            : {
                backgroundImage,
              }
        }
      />
    </motion.button>
  );
}

// color?.current
//               ?.split("(")[1]
//               ?.split(")")[0]
//               ?.split(",")
//               ?.slice(0, -1)
//               ?.join(",")
