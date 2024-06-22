import { motion } from "framer-motion";
import { handleHeaderUseTransform } from "../../components/projects/hooks/importProjectsHooks";

export default function HeaderProjects({
  windowWidth,
  windowHeight,
  isVideosActived,
  scrollY,
  initial,
  setIsVideosActived,
}) {
  // Header Transform Parallax
  const {
    translateYLayer1,
    translateYLayer2,
    textTranslateYMobile,
    textTranslateYDesktop,
    headerRef,
  } = handleHeaderUseTransform();
  return (
    <motion.div
      ref={headerRef}
      id="header"
      className="min-h-[100vh] w-full relative overflow-hidden bg-[#162635] flex flex-col items-center"
    >
      <img
        src="/images/bgHeader.png"
        alt=""
        className=" absolute min-w-[1000px] w-full h-full"
        loading="lazy"
        draggable="false"
        onDragStart={(e) => e.preventDefault()}
      />

      <motion.img
        style={{
          y: translateYLayer1,
        }}
        src="/images/layer2.png"
        alt=""
        className="absolute min-w-[1000px] w-full h-full z-20"
        loading="lazy"
        draggable="false"
        onDragStart={(e) => e.preventDefault()}
      />
      <motion.img
        style={{
          y: translateYLayer2,
        }}
        src="/images/layer1.png"
        alt=""
        className={`absolute top-[45.5vh] min-w-[1000px] w-full h-full z-20 `}
        draggable="false"
        onDragStart={(e) => e.preventDefault()}
        loading="lazy"
      />
      <motion.div
        style={{
          y: windowWidth < 1200 ? textTranslateYMobile : textTranslateYDesktop,
        }}
        className={`absolute ${
          windowWidth < 1200
            ? windowHeight < 560
              ? "-top-5"
              : "top-[5vh]"
            : windowHeight < 790
            ? "top-10"
            : "top-32"
        } flex flex-col items-center z-10`}
      >
        <h1
          id="header-title"
          className={`font-bold ${
            windowWidth < 1200 ? "text-[5rem]" : "text-[8rem]"
          } bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent`}
        >
          Projects
        </h1>
        <p id="header-subtitle">~ Scroll Down ~</p>
      </motion.div>
      {windowWidth < 1200 && (
        <motion.div
          style={{ y: textTranslateYMobile, opacity: initial ? 0 : 1 }}
          className={`absolute flex flex-col items-center mt-3 ${
            windowHeight < 650
              ? windowHeight < 560
                ? "top-28"
                : "top-[28vh]"
              : "top-[25vh]"
          } ${scrollY < 5 ? "z-30" : "z-10"}`}
        >
          <p id="header-mobile-title" className="text-sm">
            Disabled Videos
          </p>
          <p id="header-mobile-subtitle" className="text-sm">
            For Better Experience
          </p>
          <motion.div
            id="header-mobile-toggle"
            onClick={() => setIsVideosActived(!isVideosActived)}
            style={{
              opacity: scrollY < 10 ? 1 : 0.5,
              x: scrollY > 1 && 0,
              transition: "opacity 0.5s ease-out, x 0.5s ease-out",
            }}
            className={`w-14 h-7 rounded-full border-2 ${
              isVideosActived ? "border-yellow-300" : "border-green-500"
            } shadow-inner relative flex items-center mt-2`}
          >
            <motion.div
              initial={{ x: !isVideosActived ? 0 : 25 }}
              animate={{
                x: isVideosActived ? 0 : 25,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              onClick={() => setIsVideosActived(!isVideosActived)}
              whileTap={{ width: "1.7rem", left: !isVideosActived && -6 }}
              className={`w-5 h-5 bg-white rounded-full shadow absolute left-1`}
            />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
