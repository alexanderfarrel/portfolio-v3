import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import useWindowWidth from "../services/hooks/windowWidth";

import Button from "../templates/ui/button";
import { BgStars, Navbar } from "../templates/components/importComponents";
import {
  MainContent,
  BgAurora,
} from "../templates/components/home/importHomeComponents";
import introAnimation from "../templates/components/home/hooks/introAnimation";

export default function Intro() {
  const [colors] = useState(["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]);
  const windowWidth = useWindowWidth();
  introAnimation();
  const color = useMotionValue(colors[0]);

  return (
    <React.Fragment>
      <div className="relative overflow-hidden">
        <div
          id="intro-slider"
          className="h-[100vh] p-10 bg-gray-50 absolute top-0 left-0 z-10 w-full flex flex-col justify-center gap-10 tracking-tight md:gap-5 sm:gap-5 text-black"
        >
          <h1 className="text-9xl md:text-8xl sm:text-6xl" id="title-1">
            Welcome
          </h1>
          <h1 className="text-9xl md:text-8xl sm:text-6xl" id="title-2">
            To
          </h1>
        </div>

        <motion.div
          id="parentDiv"
          className="relative h-[100dvh] flex flex-col items-center py-3 justify-between"
        >
          <Navbar />
          <BgAurora color={color} colors={colors} delay={7.5} />
          <Button id={"welcome"} intro className={"text-[5rem]"} cursorAuto>
            Alexander Portfolio
          </Button>
          <MainContent
            color={color}
            viewIntro={false}
            windowWidth={windowWidth}
          />
        </motion.div>
        <BgStars factor={windowWidth < 1000 ? "5" : "3"} delay={7.5} />
      </div>
    </React.Fragment>
  );
}
