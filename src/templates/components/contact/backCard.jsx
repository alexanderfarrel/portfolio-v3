import {
  cursorCircular,
  cursorDefault,
  linkEnter,
  textEnter,
} from "../../../services/hooks/handleCursorTrailer";
import { motion } from "framer-motion";
import CardHeaderTitle from "./cardHeader";
import { VariantsProfileCard } from "../contact/variantsProfileCard";
import { useEffect, useState } from "react";

export default function BackCard({
  isOverflow,
  isAnimating,
  windowWidth,
  isDisabled,
  handleFlip,
  isFlipped,
  setIsOverflow,
}) {
  const [yImg, setYImg] = useState(0);
  useEffect(() => {
    if (isFlipped) {
      setYImg(10);
      setTimeout(() => {
        setYImg(-180);
      }, 750);
    } else {
      setYImg(-180);
    }
    if (isAnimating && !isOverflow) {
      setIsOverflow(true);
      setTimeout(() => {
        setIsOverflow(false);
      }, 1500);
    }
  }, [isAnimating]);
  return (
    <main
      className={`flip-card-back flex flex-col items-center rounded-lg py-5 px-8 gap-5 bg-gradient-to-b from-zinc-700 from-30% to-zinc-900 ${
        isOverflow ? "overflow-hidden" : ""
      }`}
    >
      <motion.div
        id="image"
        initial={{ y: -180 }}
        variants={VariantsProfileCard(yImg)}
        animate={
          isAnimating ? (isOverflow ? "visible1" : "visible2") : "hidden"
        }
        className="max-w-[170px] bg-gray-400 rounded-xl absolute top-0"
      >
        <img
          src="/images/profile-transparent.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </motion.div>
      <div
        className={`flex flex-col gap-3 absolute top-[9.4rem] w-full ${
          windowWidth <= 374 ? "px-3" : "px-5"
        } text-center`}
      >
        <header className="flex flex-col">
          <CardHeaderTitle
            initial={{ opacity: 0, x: -10 }}
            animate={
              isAnimating
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 1.8 },
                  }
                : {
                    opacity: 0,
                    x: -10,
                    transition: { delay: 0.2 },
                  }
            }
            windowWidth={windowWidth}
            isDisabled={isDisabled}
          >
            Alexander
          </CardHeaderTitle>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={
              isAnimating
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 1.85 },
                  }
                : {
                    opacity: 0,
                    x: -10,
                    transition: { delay: 0.15 },
                  }
            }
            onMouseMove={() => textEnter(isDisabled)}
            onMouseLeave={cursorDefault}
            className={`text-sm text-gray-400 font-light self-center ${
              windowWidth < 1200 ? "cursor-text" : "cursor-none"
            }`}
          >
            Full-Stack Developer
          </motion.p>
        </header>
        <div
          className={`text-start text-neutral-200 ${
            windowWidth <= 435 ? "text-sm" : "text-[15px]"
          }`}
        >
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={
              isAnimating
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 1.9 },
                  }
                : {
                    opacity: 0,
                    x: -10,
                    transition: { delay: 0.1 },
                  }
            }
            onMouseMove={() => textEnter(isDisabled)}
            onMouseLeave={cursorDefault}
            className={`${windowWidth < 1200 ? "cursor-text" : "cursor-none"}`}
          >
            Experienced full-stack developer with a passion for continuous
            learning and growth. Proficient in MERN stack, Next.js, Express, and
            other, with 2 years of experience in React. Skilled in building
            efficient and scalable web applications.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={
              isAnimating
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 1.95 },
                  }
                : {
                    opacity: 0,
                    x: -10,
                    transition: { delay: 0.05 },
                  }
            }
            onMouseMove={() => textEnter(isDisabled)}
            onMouseLeave={cursorDefault}
            className={`mt-3 ${
              windowWidth < 1200 ? "cursor-text" : "cursor-none"
            }`}
          >
            Feel free to customize it as needed!
          </motion.p>
        </div>
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={
            isAnimating
              ? {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 2 },
                }
              : {
                  opacity: 0,
                  x: -10,
                }
          }
          whileTap={{ scale: 0.9 }}
          onClick={handleFlip}
          disabled={isDisabled}
          onMouseMove={() => {
            linkEnter(isDisabled), cursorCircular(isDisabled);
          }}
          onMouseLeave={cursorDefault}
          className={`self-center mt-2 py-[6px] px-[14px] rounded-full bg-sky-600 text-sm disabled:bgSky-600/50 ${
            windowWidth < 1200 ? "cursor-pointer" : "cursor-none"
          }`}
        >
          Contact Me
        </motion.button>
      </div>
    </main>
  );
}
