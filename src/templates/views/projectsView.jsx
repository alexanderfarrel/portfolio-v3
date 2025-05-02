import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import {
  cursorBackToTop,
  cursorDefault,
  cursorLink,
  linkEnter,
  textEnter,
} from "../../services/hooks/handleCursorTrailer";
import { ScrollToTop, Footer, BgStars } from "../components/importComponents";
import {
  DesktopProjectsView,
  MobileProjectsView,
  HeaderProjects,
} from "../components/projects/importProjectsComponents";
import {
  handleScrollLenisProjects,
  handleVideoPlay,
  paragraphVariants,
  projectsAnimation,
  projectsInitialState,
} from "../components/projects/hooks/importProjectsHooks";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsView({ windowWidth, isLeaving }) {
  // initial all animation gsap
  projectsAnimation({ windowWidth });
  // initial to fix header mobile intro animation
  const { initial } = projectsInitialState();

  // back to top
  const { scrollY, windowHeight } = handleScrollLenisProjects();

  // handle video
  const {
    title1,
    title2,
    title3,
    video1,
    video2,
    video3,
    isInView1,
    isInView2,
    isInView3,
    setIsVideosActived,
    isVideosActived,
    video,
    setVideo,
  } = handleVideoPlay();

  const controls = useAnimation();

  useEffect(() => {
    if (isLeaving) {
      controls.start({ opacity: 0, transition: { duration: 0.5 } });
    } else {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 2 },
      });
    }
  }, [controls, isLeaving]);

  return (
    <React.Fragment>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={controls}
        className={`bg-gradient-to-b from-[#162635] from-30% to-neutral-950 relative`}
      >
        {/* scroll to top */}
        <ScrollToTop
          scrollY={scrollY}
          mouseEnter={() => {
            linkEnter(), cursorBackToTop();
          }}
          mouseLeave={() => {
            cursorDefault();
          }}
        />

        <HeaderProjects
          windowWidth={windowWidth}
          windowHeight={windowHeight}
          isVideosActived={isVideosActived}
          scrollY={scrollY}
          initial={initial}
          setIsVideosActived={setIsVideosActived}
        />

        {windowWidth >= 1200 ? (
          <DesktopProjectsView
            windowWidth={windowWidth}
            title1={title1}
            title2={title2}
            title3={title3}
            isInView1={isInView1}
            isInView2={isInView2}
            isInView3={isInView3}
            cursorDefault={cursorDefault}
            textEnter={textEnter}
            linkEnter={linkEnter}
            cursorLink={cursorLink}
            video={video}
            video1={video1}
            video2={video2}
            video3={video3}
          />
        ) : (
          <MobileProjectsView
            windowWidth={windowWidth}
            setVideo={setVideo}
            video={video}
            video1={video1}
            video2={video2}
            video3={video3}
            isVideosActived={isVideosActived}
            paragraphVariants={paragraphVariants}
          />
        )}
        <Footer
          mouseEnter={() => textEnter()}
          mouseLeave={() => {
            cursorDefault();
          }}
          customSubtitle={cursorBackToTop}
        />
        <BgStars
          className="absolute left-0 bottom-0 h-[150vh] w-full"
          radius={windowWidth < 1200 ? 20 : 50}
          count={400}
          factor={windowWidth < 1200 ? "5" : "3"}
          fade
          speed={3}
        />
      </motion.div>
    </React.Fragment>
  );
}

ProjectsView.propTypes = {
  windowWidth: PropTypes.number,
  isLeaving: PropTypes.bool,
};
