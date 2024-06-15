import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function Button({
  children,
  className,
  id,
  delay,
  intro = false,
  color = null,
  onClick = () => {},
  linkEnter = () => {},
  cursorDefault = () => {},
  customCursor = () => {},
  resetCustomCursor = () => {},
}) {
  return (
    <motion.button
      onMouseEnter={() => {
        linkEnter(), customCursor();
      }}
      onMouseLeave={() => {
        cursorDefault(), resetCustomCursor();
      }}
      onClick={onClick}
      className={`px-6 py-2 rounded-md relative cursor-none ${
        !intro ? "radial-gradient sm:text-[13px]" : " sm:text-6xl"
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
      id={id}
      transition={
        intro
          ? { duration: 3.6, delay: 3.9, type: "tween" }
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

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  delay: PropTypes.bool,
  intro: PropTypes.bool,
  onClick: PropTypes.func,
  color: PropTypes.object,
};
