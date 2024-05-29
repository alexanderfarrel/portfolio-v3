"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { text, curve, translate } from "./anim";

const routes = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
};

const anim = (variants) => {
  console.log({ variants, initial: "initial", animate: "enter", exit: "exit" });
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({ children, backgroundColor }) {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="page curve" style={{ backgroundColor }}>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="fixed h-[calc(100dvh+600px)] w-[100dvw] left-0 top-0 bg-gray-600 z-10"
      />
      {/* <motion.p className="route" {...anim(text)}>
        {routes[router.route]}
      </motion.p> */}
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 300
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  const slide = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: "-300px",
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.svg
      fill={"currentColor"}
      className={`text-gray-600 fixed h-[calc(100dvh+600px)] w-[100dvw] left-0 top-0 z-10`}
      viewBox={`0 0 ${width} ${height + 600}`}
      {...anim(slide)}
      // {...anim(translate)}
    >
      <motion.path d={initialPath} {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
// {...anim(curve(initialPath, targetPath))}
