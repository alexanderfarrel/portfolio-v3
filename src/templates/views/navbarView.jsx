import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Home from "../../assets/icons/navIcons/home";
import {
  cursorDefault,
  cursorHidden,
} from "../../services/hooks/handleCursorTrailer";
import {
  clickFnc,
  handleAnimationAndTransition,
  handleYValue,
  bgGrayVariants,
  hamburgerVariants,
  navListVariants,
  containerVariants,
  handleNavClickFnc,
} from "../components//navbar/hooks/importNavbarHooks";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

export default function NavbarView({ url, setIsLeaving, isLeaving }) {
  const { yValue, setYValue, defaultYValue } = handleYValue({ url });
  const [open, setOpen] = useState(false); // for open navbar

  const { initial, setOptions, isHidden, timeoutId } =
    handleAnimationAndTransition({
      open,
      url,
    });

  // click
  const handleClickHamburger = clickFnc({
    open,
    setOpen,
    isHidden,
    setOptions,
    timeoutId,
  });

  const location = useLocation();

  const handleNavClick = (path) => {
    handleClickHamburger();
    if (path === location.pathname) return;
    setIsLeaving(true);
    setTimeout(() => {
      handleNavClickFnc(path, handleClickHamburger);
      setIsLeaving(false);
    }, 500);
  };

  const controls = useAnimation();

  useEffect(() => {
    if (isLeaving) {
      controls.start({ opacity: 0, transition: { delay: 0.3, duration: 0.2 } });
    } else {
      controls.start({ right: isHidden ? 0 : 10 });
    }
  }, [controls, isHidden, isLeaving]);

  return (
    <motion.nav
      className="fixed right-0 top-1/2 -translate-y-1/2 min-h-[3.2rem] max-h-[18rem] w-12 flex justify-center items-center z-30 cursor-auto"
      animate={controls}
    >
      {/* container */}
      <motion.main
        onMouseEnter={cursorHidden}
        onMouseLeave={cursorDefault}
        className="w-full h-full min-h-[2.8rem] max-h-[13.5rem] max-w-[2.7rem] flex flex-col items-center justify-center relative rounded-full scale-0 opacity-0"
        id="parentNav"
        variants={containerVariants}
        animate={
          initial
            ? { scale: 0, x: "100%" }
            : isHidden
            ? "hiddenTrue"
            : "hiddenFalse"
        }
      >
        {/* bg Gray */}
        <div className="w-full h-full absolute overflow-hidden rounded-full">
          <motion.div
            className="w-full h-full absolute bg-gray-700/70 blur-xl z-10 scale-0 overflow-hidden"
            variants={bgGrayVariants}
            animate={open ? "open" : "close"}
          />
        </div>
        {/* Home Link */}
        <motion.span
          id="navbar"
          className="max-w-11 min-w-7 text-white z-10 cursor-pointer relative"
          variants={navListVariants}
          animate={open ? "visibleAbove1" : "hiddenAbove1"}
          onClick={() => handleNavClick("/home")}
          onHoverStart={() => setYValue(-80)}
          onHoverEnd={() => setYValue(defaultYValue)}
        >
          <Home />
          {open && (
            <motion.div
              onMouseMove={cursorDefault}
              className="absolute top-1/2 -translate-y-1/2 right-[125%] bg-gray-700/70 p-1 px-2 opacity-0 peer-hover:opacity-100 transition-all rounded-lg cursor-default"
            >
              Home
            </motion.div>
          )}
        </motion.span>

        {/* Contact Link */}
        <div className="z-10 relative">
          <motion.img
            id="navbar"
            src="/navIcons/contact.png"
            alt="contactIcon"
            className="max-w-11 min-w-7 px-2 z-10 cursor-pointer py-[7px] peer"
            variants={navListVariants}
            animate={open ? "visibleAbove2" : "hiddenAbove2"}
            onClick={() => handleNavClick("/contact")}
            onHoverStart={() => setYValue(-40)}
            onHoverEnd={() => setYValue(defaultYValue)}
          />
          {open && (
            <motion.div
              onMouseMove={cursorDefault}
              className="absolute top-1/2 -translate-y-1/2 right-[125%] bg-gray-700/70 p-1 px-2 opacity-0 peer-hover:opacity-100 transition-all rounded-lg cursor-default"
            >
              Contact
            </motion.div>
          )}
        </div>
        {/* Hamburger */}
        <div className="relative z-30">
          <motion.div
            className="w-9 h-9 py-[7px] px-2 flex flex-col justify-between z-30 cursor-pointer peer"
            onClick={() => handleClickHamburger()}
            id="hamburger"
            onHoverStart={() => setYValue(0)}
            onHoverEnd={() => setYValue(defaultYValue)}
          >
            <motion.span
              id="navbar"
              variants={hamburgerVariants}
              animate={open ? "lineFirstOpen" : "lineFirstClose"}
              className="w-full h-[2px] bg-white rounded-xl"
            />
            <motion.span
              id="navbar"
              variants={hamburgerVariants}
              animate={open ? "lineSecondOpen" : "lineSecondClose"}
              className="w-full h-[2px] bg-white rounded-xl"
            />
            <motion.span
              id="navbar"
              variants={hamburgerVariants}
              animate={open ? "lineThirdOpen" : "lineThirdClose"}
              className="w-full h-[2px] bg-white rounded-xl"
            />
          </motion.div>
          {open && (
            <motion.div
              onMouseMove={cursorDefault}
              className="absolute top-1/2 -translate-y-1/2 right-[125%] bg-gray-700/70 p-1 px-2 opacity-0 peer-hover:opacity-100 transition-all rounded-lg cursor-default"
            >
              Close
            </motion.div>
          )}
        </div>
        {/* Certificates Link */}
        <div className="relative z-10">
          <motion.img
            id="navbar"
            src="/navIcons/certificate.png"
            alt="certificateIcon"
            onClick={() => handleNavClick("/achievements")}
            onHoverStart={() => setYValue(40)}
            onHoverEnd={() => setYValue(defaultYValue)}
            className="max-w-11 min-w-7 px-2 z-10 cursor-pointer py-[7px] peer"
            variants={navListVariants}
            animate={open ? "visibleBelow2" : "hiddenBelow2"}
          />
          {open && (
            <motion.div
              onMouseMove={cursorDefault}
              className="absolute top-1/2 -translate-y-1/2 right-[125%] bg-gray-700/70 p-1 px-2 opacity-0 peer-hover:opacity-100 transition-all rounded-lg cursor-default"
            >
              Achievements
            </motion.div>
          )}
        </div>
        {/* Projects Link */}
        <div className="relative z-10">
          <motion.img
            id="navbar"
            src="/navIcons/project-icon.png"
            alt="projectIcon"
            className="max-w-11 min-w-7 px-2 z-10 cursor-pointer py-[7px] peer"
            variants={navListVariants}
            animate={open ? "visibleBelow1" : "hiddenBelow1"}
            onClick={() => handleNavClick("/projects")}
            onHoverStart={() => setYValue(80)}
            onHoverEnd={() => setYValue(defaultYValue)}
          />
          {open && (
            <motion.div
              onMouseMove={cursorDefault}
              className="absolute top-1/2 -translate-y-1/2 right-[125%] bg-gray-700/70 p-1 px-2 opacity-0 peer-hover:opacity-100 transition-all rounded-lg cursor-default"
            >
              Projects
            </motion.div>
          )}
        </div>
      </motion.main>

      {/* rounded blue */}
      <motion.div
        id="roundedBlue"
        className="w-10 h-10 rounded-full absolute bg-blue-500 scale-0 -z-10"
        initial={{ scale: 0 }}
        animate={
          open
            ? {
                scale: 1,
                y: yValue,
                transition: { type: "spring", bounce: 0.2, duration: 0.35 },
              }
            : { scale: 0, y: 0 }
        }
        style={{ clipPath: "circle(20px at 50% 50%)" }}
      />
    </motion.nav>
  );
}

NavbarView.propTypes = {
  url: PropTypes.string,
  setIsLeaving: PropTypes.func,
  isLeaving: PropTypes.bool,
};
