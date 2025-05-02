import { useMotionValue, motion } from "framer-motion";
import React, { useState } from "react";

import { BgAurora, MainContent } from "../components/home/importHomeComponents";
import homeIntroAnimation from "../components/home/hooks/homeAnimation";
import PropTypes from "prop-types";

export default function HomeView({ windowWidth, setIsLeaving }) {
  homeIntroAnimation();

  const [colors] = useState([
    "rgba(19, 255, 170, 1)",
    "rgba(30, 103, 198, 1)",
    "rgba(206, 132, 207, 1)",
    "rgba(221, 51, 92, 1)",
  ]);
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
            setIsLeaving={setIsLeaving}
          />
        </motion.div>
      </div>
    </React.Fragment>
  );
}

HomeView.propTypes = {
  windowWidth: PropTypes.number,
  setIsLeaving: PropTypes.func,
};
