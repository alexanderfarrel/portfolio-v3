import {
  cursorDefault,
  textEnter,
} from "../../../services/hooks/handleCursorTrailer";
import { motion } from "framer-motion";

export default function CardHeaderTitle({
  animate,
  initial,
  children,
  isDisabled,
  windowWidth,
}) {
  return (
    <motion.h1
      initial={initial}
      animate={animate}
      onMouseMove={() => textEnter(isDisabled)}
      onMouseLeave={cursorDefault}
      className={`text-3xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent self-center ${
        windowWidth < 1200 ? "cursor-text" : "cursor-none"
      }`}
    >
      {children}
    </motion.h1>
  );
}
