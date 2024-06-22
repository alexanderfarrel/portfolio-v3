import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function handleHeaderUseTransform() {
  const headerRef = useRef(null);

  const headerScroll = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const translateYLayer1 = useTransform(
    headerScroll.scrollYProgress,
    [0, 1],
    [0, -50]
  );
  const translateYLayer2 = useTransform(
    headerScroll.scrollYProgress,
    [0, 1],
    [0, -250]
  );
  const textTranslateYMobile = useTransform(
    headerScroll.scrollYProgress,
    [0, 1],
    [0, 500]
  );
  const textTranslateYDesktop = useTransform(
    headerScroll.scrollYProgress,
    [0, 1],
    [0, 500]
  );

  return {
    translateYLayer1,
    translateYLayer2,
    textTranslateYMobile,
    textTranslateYDesktop,
    headerRef,
  };
}
