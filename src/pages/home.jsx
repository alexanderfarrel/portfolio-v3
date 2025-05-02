import { useEffect, useState } from "react";
import useWindowWidth from "../services/hooks/windowWidth";
import { BgStars, Navbar } from "../templates/components/importComponents";
import HomeView from "../templates/views/homeView";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  const windowWidth = useWindowWidth();
  const [isLeaving, setIsLeaving] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    if (isLeaving) {
      controls.start({ opacity: 0, transition: { duration: 0.5 } });
    } else {
      controls.start({
        opacity: 1,
        transition: { duration: 1, delay: 2 },
      });
    }
  }, [controls, isLeaving]);

  return (
    <>
      <motion.section initial={{ opacity: 0 }} animate={controls}>
        <Navbar setIsLeaving={setIsLeaving} isLeaving={isLeaving} />
        <HomeView windowWidth={windowWidth} setIsLeaving={setIsLeaving} />
        <BgStars factor={windowWidth < 1000 ? "5" : "3"} delay={2} />
      </motion.section>
    </>
  );
}
