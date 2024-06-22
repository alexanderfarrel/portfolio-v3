import { useMotionValue, motion } from "framer-motion";
import React, { useState } from "react";

import { BgAurora, MainContent } from "../components/home/importHomeComponents";
import homeIntroAnimation from "../components/home/hooks/homeAnimation";

export default function HomeView({ windowWidth }) {
  homeIntroAnimation();

  const [colors] = useState(["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]);
  const color = useMotionValue(colors[0]);

  return (
    <React.Fragment>
      <div className="relative overflow-x-hidden">
        <motion.div className="relative h-[100dvh] flex flex-col items-center justify-between py-3">
          <BgAurora color={color} colors={colors} />
          <MainContent
            color={color}
            viewIntro={true}
            windowWidth={windowWidth}
          />
        </motion.div>
      </div>
    </React.Fragment>
  );
}
