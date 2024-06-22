import React, { useRef } from "react";
import {
  cursorBackToTop,
  cursorClose,
  cursorDefault,
  cursorSlide,
  linkEnter,
  textEnter,
} from "../../services/hooks/handleCursorTrailer";
import { Navbar, Footer, ScrollToTop } from "../components/importComponents";
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

export default function AchievementsView({ windowWidth }) {
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

  return (
    <React.Fragment>
      <Navbar />
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
    </React.Fragment>
  );
}
