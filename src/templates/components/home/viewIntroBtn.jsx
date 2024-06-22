import { useEffect, useRef, useState } from "react";
import BtnRipple from "../../ui/btnRipple";
import { motion } from "framer-motion";

export default function ViewIntroBtn({
  linkEnter,
  cursorLink,
  cursorDefault,
  windowWidth,
}) {
  const viewIntro = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!viewIntro.current) {
        return;
      }
      const x = e.clientX - viewIntro.current.offsetLeft;
      const y = e.clientY - viewIntro.current.offsetTop;
      viewIntro.current.style.setProperty("--x", `${x}px`);
      viewIntro.current.style.setProperty("--y", `${y}px`);
    };

    if (viewIntro.current) {
      viewIntro.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (viewIntro.current) {
        viewIntro.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);
  return (
    <motion.div
      whileHover={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`absolute bottom-20 right-[4vw] rounded-full px-3 py-1 flex gap-2 items-center justify-center overflow-hidden btn-ripple ${
        windowWidth < 1200 ? "cursor-pointer" : "cursor-none"
      }`}
      id="view-intro"
      ref={viewIntro}
      onClick={(e) => {
        if (viewIntro.current) {
          BtnRipple({
            e,
            parent: viewIntro,
            parentRect: viewIntro.current.getBoundingClientRect(),
            path: "/",
          });
        }
      }}
      onMouseEnter={() => {
        linkEnter();
        cursorLink();
      }}
      onMouseLeave={cursorDefault}
    >
      <img
        src="/icons/arrow-border.png"
        alt=""
        className="max-w-[25px] -mx-1"
      />
      <FlapText isHovered={isHovered}>View Intro</FlapText>
    </motion.div>
  );
}

const DURATION = 0.25;
const STAGGER = 0.025;

const FlapText = ({ children, isHovered }) => {
  return (
    <motion.a
      initial="initial"
      animate={isHovered ? "hovered" : "initial"}
      className="relative block overflow-hidden whitespace-nowrap text-base"
      style={{
        lineHeight: 0.8,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
