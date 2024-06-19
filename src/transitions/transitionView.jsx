import { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import useWindowWidth from "../services/hooks/windowWidth";
import { useStoreGlobal } from "../services/zustand/store";
import CursorTrailer from "../templates/views/cursorTrailer";

const routes = {
  "/": "Home",
  "/home": "Home",
  "/projects": "Projects",
  "/contact": "Contact",
  "/achievements": "Achievements",
};

// const anim = (variants) => {
//   return {
//     variants,
//     initial: "initial",
//     animate: "enter",
//     exit: "exit",
//   };
// };

export default function Transition({ children, backgroundColor }) {
  const location = useLocation();
  const windowWidth = useWindowWidth();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#title", {
        y: "+=50",
        opacity: 0,
        delay: 0.75,
        duration: 0.5,
        ease: "circ",
      })
        .to("#title", {
          opacity: 0,
          y: "-=50dvh",
          delay: 0,
          duration: 0.5,
          ease: "expo.in",
        })
        .to("#title", {
          display: "none",
        });
    });

    return () => ctx.revert();
  }, []);

  const cursorVariantsGlobal = useStoreGlobal((state) => state.cursorVariant);

  return (
    <motion.div
      className={`${
        windowWidth < 1200 && cursorVariantsGlobal != "default" && "cursor-none"
      }`}
      style={{ backgroundColor }}
      key={location.pathname}
    >
      <motion.div
        initial={{ height: "120dvh" }}
        animate={{
          height: "0dvh",
          display: "block",
          transition: {
            duration: 0.8,
            delay: 1.3,
            display: { delay: 1 },
            ease: [0.76, 0, 0.24, 1],
          },
        }}
        exit={{ height: "120dvh" }}
        className={`w-full h-full fixed bg-gradient-to-tl from-gray-900 to-gray-700 top-[-10dvh] ${
          windowWidth < 1000 ? "rounded-b-[50px]" : "rounded-b-[100px]"
        } hidden z-50`}
      />
      <motion.div
        initial={{ height: "0dvh" }}
        animate={{
          height: "120dvh",
          display: "none",
          transition: {
            duration: 0.8,
            display: { delay: 1 },
            ease: [0.76, 0, 0.24, 1],
          },
        }}
        exit={{ height: "0dvh" }}
        className={`bg-gradient-to-br from-gray-700 to-gray-900 w-full h-0 fixed bottom-[-10dvh] ${
          windowWidth < 1000 ? "rounded-t-[50px]" : "rounded-t-[100px]"
        } z-50`}
      />
      <div
        id="title"
        className="w-full h-full fixed top-0 z-50 flex justify-center items-center text-7xl sm:text-5xl"
      >
        {routes[location.pathname]}
      </div>
      {location.pathname == "/" ? "" : <CursorTrailer />}
      {children}
    </motion.div>
  );
}

// const SVG = ({ height, width }) => {
//   const initialPath = `
//         M0 300
//         Q${width / 2} 0 ${width} 300
//         L${width} ${height + 300}
//         Q${width / 2} ${height + 600} 0 ${height + 300}
//         L0 300
//     `;

//   const targetPath = `
//         M0 300
//         Q${width / 2} 0 ${width} 300
//         L${width} ${height}
//         Q${width / 2} ${height} 0 ${height}
//         L0 0
//     `;

//   const slide = {
//     initial: {
//       top: "-300px",
//     },
//     enter: {
//       top: "-100vh",
//       transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
//       transitionEnd: {
//         top: "100vh",
//       },
//     },
//     exit: {
//       top: "-300px",
//       transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
//     },
//   };

//   return (
//     <motion.svg
//       fill={"currentColor"}
//       className={`text-gray-600 fixed h-[calc(100dvh+600px)] w-[100dvw] left-0 top-0 z-10`}
//       viewBox={`0 0 ${width} ${height + 600}`}
//       {...anim(translate)}
//     >
//       <motion.path {...anim(curve(initialPath, targetPath))} />
//     </motion.svg>
//   );
// };
// {...anim(curve(initialPath, targetPath))}
