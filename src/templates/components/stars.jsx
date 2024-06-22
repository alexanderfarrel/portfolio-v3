import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";

export default function BgStars({
  radius = 50,
  count = 1000,
  factor = "5",
  fade = true,
  speed = 2,
  delay = 0,
  className = "absolute inset-0 -z-20",
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 2 }}
      className={className}
    >
      <Canvas>
        <Stars
          radius={radius}
          count={count}
          factor={factor}
          fade={fade}
          speed={speed}
        />
      </Canvas>
    </motion.div>
  );
}
