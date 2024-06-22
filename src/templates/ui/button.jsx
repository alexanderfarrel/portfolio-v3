import { motion } from "framer-motion";
import { cursorDefault } from "../../services/hooks/handleCursorTrailer";
import useWindowWidth from "../../services/hooks/windowWidth";

export default function Button({
  children,
  className = "",
  delay = 0,
  intro = false,
  color = null,
  id = null,
  cursorAuto = false,
  mouseEnter = () => {},
  onClick = () => {},
}) {
  const windowWidth = useWindowWidth();
  return (
    <motion.button
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
        intro ? " sm:text-6xl" : "radial-gradient sm:text-[13px]"
      } ${className} sm:px-4 sm:py-[6px]`}
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      style={{
        "--overlay-color": color
          ? color?.current
              ?.split("(")[1]
              ?.split(")")[0]
              ?.split(",")
              ?.slice(0, -1)
              ?.join(",")
          : "225,225,225",
        "--radial-gradient-background": color
          ? color?.current
              ?.split("(")[1]
              ?.split(")")[0]
              ?.split(",")
              ?.slice(0, -1)
              ?.join(",")
          : "225,225,225",
      }}
      whileTap={!intro && { scale: 0.97, transition: { duration: 0.1 } }}
      transition={
        intro
          ? { duration: 3.6, delay: 5.9, type: "tween" }
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
      <span
        className={`block absolute inset-0 rounded-md p-px ${
          intro ? "linear-overlay-intro-button" : "linear-overlay-button"
        }`}
      />
    </motion.button>
  );
}
