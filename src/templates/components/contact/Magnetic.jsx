import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Magnetic({ children }) {
  const ref = useRef(null);

  // Gunakan useMotionValue agar lebih responsif
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Gunakan useSpring untuk animasi yang lebih halus
  const smoothX = useSpring(x, { stiffness: 100, damping: 10 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 10 });

  const handleMouse = (e) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    x.set(middleX);
    y.set(middleY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: smoothX, y: smoothY }} // Gunakan nilai yang sudah di-smoothing
    >
      {children}
    </motion.div>
  );
}
