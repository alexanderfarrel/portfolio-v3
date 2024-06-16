import { motion } from "framer-motion";

export default function ScrollToTop({ scrollY, mouseEnter, mouseLeave }) {
  return (
    <motion.div
      id="scroll"
      initial={{
        opacity: scrollY > 0 ? 1 : 0,
        y: scrollY > 0 ? 20 : 0,
      }}
      animate={{
        opacity: scrollY > 0 ? 1 : 0,
        y: scrollY > 0 ? 0 : 20,
        display: scrollY > 0 ? "flex" : "none",
      }}
      className={`w-8 h-8 bg-gray-700 rounded-full fixed bottom-6 right-4 flex justify-center items-center z-30`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <span className="text-3xl -translate-x-1 -rotate-90">›</span>
    </motion.div>
  );
}
