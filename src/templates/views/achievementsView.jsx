import React, { useEffect, useRef } from "react";
import {
  cursorBackToTop,
  cursorClose,
  cursorDefault,
  cursorSlide,
  linkEnter,
  textEnter,
} from "../../services/hooks/handleCursorTrailer";
import { Footer, ScrollToTop } from "../components/importComponents";
import {
  ImagesZoom,
  ImagesCarousel,
  SwiperCarousel,
} from "../components/achievements/importAchievementsComponents";
import {
  useHandleClose,
  useScrollAndResize,
  picturesCarousel,
  achievementsAnimation,
  useHandleMouseMove,
} from "../components/achievements/hooks/importAchievementsHooks";
import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export default function AchievementsView({ windowWidth, isLeaving }) {
  achievementsAnimation();

  const { scrollY, XValue, swiperWidth } = useScrollAndResize();
  const swiperParentRef = useRef(null);

  const openSwiper = (idx) => {
    setAnimateClose(false);
    const selection = window.getSelection();
    if (selection) selection.removeAllRanges();
    setImageIndex(idx);
  };
  const { imageIndex, setImageIndex } = useHandleMouseMove({
    swiperParentRef,
    cursorClose,
    linkEnter,
    cursorDefault,
  });

  const { animateClose, setAnimateClose } = useHandleClose(
    swiperParentRef,
    cursorDefault,
    setImageIndex
  );

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
      <motion.div initial={{ opacity: 0 }} animate={controls}>
        <header
          className={`min-h-[50vh] flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black gap-5`}
        >
          <h1
            id="header-title"
            className={`text-7xl font-bold bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent`}
          >
            Certificate
          </h1>
          <p
            id="header-subtitle"
            className={`bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent`}
          >
            ~ Scroll Down ~
          </p>
        </header>
        <section className="bg-black">
          <ScrollToTop
            windowWidth={windowWidth}
            scrollY={scrollY}
            mouseEnter={() => {
              linkEnter(), cursorBackToTop();
            }}
            mouseLeave={() => {
              cursorDefault();
            }}
          />
          <ImagesZoom
            windowWidth={windowWidth}
            cursorDefault={cursorDefault}
            openSwiper={openSwiper}
            cursorSlide={cursorSlide}
            linkEnter={linkEnter}
          />
          <ImagesCarousel
            openSwiper={openSwiper}
            cursorDefault={cursorDefault}
            XValue={XValue}
            picturesCarousel={picturesCarousel}
            linkEnter={linkEnter}
            cursorSlide={cursorSlide}
            windowWidth={windowWidth}
          />
          <SwiperCarousel
            windowWidth={windowWidth}
            swiperParentRef={swiperParentRef}
            animateClose={animateClose}
            swiperWidth={swiperWidth}
            imageIndex={imageIndex}
            openSwiper={openSwiper}
            setImageIndex={setImageIndex}
            picturesCarousel={picturesCarousel}
          />
          <Footer
            windowWidth={windowWidth}
            mouseEnter={() => textEnter()}
            mouseLeave={cursorDefault}
            customSubtitle={cursorBackToTop}
          />
        </section>
      </motion.div>
    </React.Fragment>
  );
}

AchievementsView.propTypes = {
  windowWidth: PropTypes.number,
  isLeaving: PropTypes.bool,
};
