import React, { useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
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
          initial={{ opacity: 0 }}
          animate={controls}
          id="parentDiv"
          className="relative h-[100vh] flex flex-col items-center py-3 justify-between"
        >
          <Navbar setIsLeaving={setIsLeaving} isLeaving={isLeaving} />
          <BgAurora color={color} colors={colors} delay={7.5} />
          <div
            id={"parent-welcome"}
            className="absolute text-center top-1/2 -translate-y-1/2"
          >
            <Button id={"welcome"} intro className={"text-[5rem]"} cursorAuto>
              Alexander Portfolio
            </Button>
          </div>
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
