import { useScroll, useTransform, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useLayoutEffect, useRef, useState } from "react";

export default function ImagesCarousel({
  openSwiper,
  cursorDefault,
  XValue,
  picturesCarousel,
  linkEnter,
  cursorSlide,
  windowWidth,
}) {
  const carousel = useRef(null);
  const [bg, setBg] = useState("bg-red-500");
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: carousel.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (e) => {
          const newBg =
            e.progress > 0.33 && e.progress < 0.66
              ? "bg-yellow-500"
              : e.progress <= 0.33
              ? "bg-orange-500"
              : "bg-teal-500";

          setBg(newBg);
        },
      });
    });
    return () => ctx.revert();
  }, [bg]);

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: carousel,
    offset: ["start start", "end end"],
  });
  const carouselTranslateX = useTransform(
    scrollYProgress2,
    [0, 1],
    ["1%", `-${XValue}%`]
  );
  const carouselTranslateXReverse = useTransform(
    scrollYProgress2,
    [0, 1],
    ["-1%", `${XValue}%`]
  );
  const scaleXCarousel = useTransform(scrollYProgress2, [0, 1], [0, 1]);
  return (
    <React.Fragment>
      {/* images carousel */}
      <section ref={carousel} className="h-[450vh] relative">
        <div
          className={`sticky top-0 flex flex-col h-screen justify-center gap-10 overflow-hidden`}
        >
          {/* lines */}
          <motion.div
            style={{ scaleX: scaleXCarousel }}
            className={`h-1 w-full absolute top-20 ${bg} origin-left transition-colors duration-1000`}
          />
          <motion.div
            style={{ scaleX: scaleXCarousel }}
            className={`h-1 w-full absolute bottom-20 ${bg} origin-right transition-colors duration-1000`}
          />
          {/* lines end */}
          <motion.main
            style={{ x: carouselTranslateX }}
            className="flex self-start gap-5"
          >
            {picturesCarousel.map((item, index) => (
              <Card
                windowWidth={windowWidth}
                key={index}
                srcName={item.src}
                id={index}
                setImgIdx={openSwiper}
                mouseEnter={() => {
                  linkEnter(), cursorSlide();
                }}
                mouseLeave={cursorDefault}
                mouseClick={cursorDefault}
              />
            ))}
          </motion.main>
          <motion.main
            style={{ x: carouselTranslateXReverse }}
            className="flex self-end gap-5 relative"
          >
            {picturesCarousel.map((item, index) => (
              <Card
                windowWidth={windowWidth}
                key={index}
                srcName={item.src}
                id={index}
                setImgIdx={openSwiper}
                mouseEnter={() => {
                  linkEnter(), cursorSlide();
                }}
                mouseLeave={cursorDefault}
                mouseClick={cursorDefault}
              />
            ))}
          </motion.main>
        </div>
      </section>
    </React.Fragment>
  );
}

const Card = ({
  srcName,
  id,
  setImgIdx,
  mouseEnter,
  mouseLeave,
  mouseClick,
  windowWidth,
}) => {
  return (
    <div
      id={id}
      className={`w-[40vh] h-[26.5vh] relative overflow-hidden aspect-video ${
        windowWidth < 1200 ? "cursor-pointer" : "cursor-none"
      }`}
      onClick={() => {
        setImgIdx(id);
        mouseClick();
      }}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <img
        id="doNotClose"
        src={`/images/certificate/${srcName}`}
        draggable="false"
        alt=""
        className="object-fill w-full h-full"
      />
    </div>
  );
};
