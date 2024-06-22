import { animate, useMotionTemplate, motion } from "framer-motion";
import { useEffect } from "react";

export default function BgAurora({ color, colors, delay = 2 }) {
  const backgroundImage = useMotionTemplate`radial-gradient(175% 175% at 50% 0%, #020617 45%, ${color})`;
  useEffect(() => {
    animate(color, colors, {
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    });
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay, duration: 5 }}
      className="absolute top-0 left-0 right-0 bottom-0 -z-20 opacity-0"
      style={{ backgroundImage }}
    />
  );
}
