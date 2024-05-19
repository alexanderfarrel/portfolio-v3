import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function Button({
  children,
  className,
  id,
  delay,
  intro = false,
  onClick = () => {},
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-2 rounded-md relative ${
        !intro ? "radial-gradient" : "cursor-default"
      } ${className}`}
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      style={{
        "--overlay-color": "255,255,255",
      }}
      whileTap={!intro && { scale: 0.97, transition: { duration: 0.1 } }}
      id={id}
      transition={
        intro
          ? { duration: 3.6, delay: 4.2, type: "tween" }
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
};
