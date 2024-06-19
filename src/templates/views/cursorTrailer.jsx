import { useEffect, useRef, useState } from "react";
import { useStoreGlobal } from "../../services/zustand/store";
import { motion } from "framer-motion";
import useWindowWidth from "../../services/hooks/windowWidth";
export default function CursorTrailer() {
  const windowWidth = useWindowWidth();
  // Cursor
  const cursorVariantsGlobal = useStoreGlobal((state) => state.cursorVariant);
  const customCursor = useStoreGlobal((state) => state.customCursor);
  const [mousePotition, setMousePosition] = useState({ x: null, y: null });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  useEffect(() => {
    setCursorVariant(cursorVariantsGlobal);
  }, [cursorVariantsGlobal]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      e.preventDefault();
      setIsMouseEnter(true);
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsMouseEnter(true);
    };
    const handleMouseLeave = () => {
      setIsMouseEnter(false);
    };
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const trailer = useRef(null);
  const trailerOffset = trailer?.current?.offsetWidth / 2;

  const mouseVariants = {
    default: {
      x: mousePotition.x - trailerOffset,
      y: mousePotition.y - trailerOffset,
      scale: 1.5,
    },
    hidden: {
      scale: 0,
    },
    link: {
      scale: 2.5,
    },
    slide: {
      scale: 3.5,
    },
    text: {
      scale: 3,
    },
  };

  return (
    <motion.div
      ref={trailer}
      initial={{ scale: 0 }}
      animate={{
        scale:
          mousePotition.x == null
            ? 0
            : cursorVariant == "hidden"
            ? 0
            : cursorVariant == "default"
            ? isMouseEnter
              ? 1.5
              : 0
            : cursorVariant == "link"
            ? customCursor == "slide"
              ? 3.5
              : 2.5
            : 3,
      }}
      style={mousePotition.x == null ? {} : mouseVariants["default"]}
      className={`w-5 h-5 bg-white fixed z-[999999] pointer-events-none rounded-full flex justify-center items-center ${
        cursorVariant == "default" || cursorVariant == "link"
          ? ""
          : "mix-blend-difference"
      } ${windowWidth < 1200 ? "hidden" : ""}`}
    >
      <motion.img
        initial={{ scale: 0 }}
        animate={{
          scale: customCursor == "link" ? 1 : 0,
          display: customCursor == "link" ? "block" : "none",
        }}
        src="/icons/link-arrow.png"
        alt=""
        className="w-[12px] h-[12px] rotate-[135deg] absolute"
      />
      <motion.img
        initial={{ scale: 0 }}
        animate={{
          scale: customCursor == "backToTop" ? 1 : 0,
          display: customCursor == "backToTop" ? "block" : "none",
        }}
        src="/icons/up-arrow.png"
        alt=""
        className="w-[12px] h-[12px] rotate-[135deg] absolute"
      />
      <motion.img
        initial={{ scale: 0 }}
        animate={{
          scale: customCursor == "download" ? 1 : 0,
          display: customCursor == "download" ? "block" : "none",
        }}
        src="/icons/download.png"
        alt=""
        className="w-[12px] h-[12px] absolute"
      />
      <motion.img
        initial={{ scale: 0 }}
        animate={{
          scale: customCursor == "slide" ? 1 : 0,
          display: customCursor == "slide" ? "block" : "none",
        }}
        src="/icons/slide.png"
        alt=""
        className="w-[12px] h-[12px] absolute"
      />
      <motion.img
        initial={{ scale: 0 }}
        animate={{
          scale: customCursor == "close" ? 1 : 0,
          display: customCursor == "close" ? "block" : "none",
        }}
        src="/icons/close.png"
        alt=""
        className="w-[12px] h-[12px] absolute"
      />
      <motion.img
        initial={{ scale: 0 }}
        animate={{
          scale: customCursor == "circular" ? 1 : 0,
          display: customCursor == "circular" ? "block" : "none",
        }}
        src="/icons/circular.png"
        alt=""
        className="w-[12px] h-[12px] absolute"
      />
      <motion.img
        initial={{ scale: 0 }}
        animate={{
          scale: customCursor == "send" ? 1 : 0,
          display: customCursor == "send" ? "block" : "none",
        }}
        src="/icons/send.png"
        alt=""
        className="w-[12px] h-[12px] absolute"
      />
    </motion.div>
  );
}
