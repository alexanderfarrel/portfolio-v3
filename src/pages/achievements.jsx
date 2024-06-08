import { useTransform, motion, useScroll } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import useWindowWidth from "../hooks/windowWidth";

export default function Achievements() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleClick = () => {
      lenis.scrollTo(0);
    };
    const scrollElement2 = document.getElementById("back-to-top");
    scrollElement2.addEventListener("click", handleClick);

    // const handleScroll = () => {
    //   setScrollY(window.scrollY);
    // };

    // const handleResize = () => {
    //   setWindowHeight(window.innerHeight);
    // };

    // window.addEventListener("scroll", handleScroll);
    // window.addEventListener("resize", handleResize);
    // Cleanup event listener on unmount
    return () => {
      // window.removeEventListener("scroll", handleScroll);
      // window.removeEventListener("resize", handleResize);
      scrollElement2.removeEventListener("click", handleClick);
    };
  }, []);

  const windowWidth = useWindowWidth();

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scale =
    windowWidth < 942
      ? windowWidth < 787
        ? windowWidth < 570
          ? 1.8
          : 2.4
        : 3.2
      : 4.1;
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, scale]);
  const translateYUp = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const translateYDown = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const translateXRight = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const translateXLeft = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const pictures = [
    {
      src: "oop.png",
    },
    {
      src: "alibaba.jpg",
    },
    {
      src: "rise.png",
    },
    {
      src: "talenta_ai.jpg",
    },
    {
      src: "front_end_dicoding.png",
    },
    {
      src: "edspert.png",
    },
    {
      src: "bright_champs.jpg",
    },
  ];
  const BREAKPOINT1 = 1671;
  const BREAKPOINT2 = 1047;
  const BREAKPOINT3 = 686;
  const BREAKPOINT4 = 513;
  const BREAKPOINT5 = 410;
  return (
    <>
      <header
        className={`min-h-[50vh] flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black gap-3`}
      >
        <h1
          className={`text-7xl font-bold bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent`}
        >
          Certificate
        </h1>
        <p
          className={`bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent`}
        >
          ~ Scroll Down ~
        </p>
      </header>
      <section ref={container} className={`min-h-[300vh] relative`}>
        <motion.div
          className={`h-screen sticky flex justify-center top-0 overflow-hidden`}
        >
          {/* images */}
          <motion.div
            className="w-full h-full absolute top-0"
            style={{ scale: scale1 }}
          >
            <div
              className={`aspect-video max-w-[30vh] relative top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]`}
            >
              <img
                src={`/images/certificate/oop.png`}
                alt={"oop"}
                className="object-cover"
              />
            </div>
            <motion.div
              className={`aspect-video max-w-[30vh] relative ${
                windowWidth < BREAKPOINT1
                  ? windowWidth < BREAKPOINT2
                    ? windowWidth < BREAKPOINT3
                      ? windowWidth < BREAKPOINT4
                        ? windowWidth < BREAKPOINT5
                          ? "left-[-60vw] top-[23vh]"
                          : "left-[-48vw] top-[23vh]"
                        : "left-[-28vw] top-[23vh]"
                      : "left-[-12vw] top-[34vh]"
                    : " left-[8vw] top-[34vh]"
                  : "left-[18vw] top-[34vh]"
              }`}
              style={{ x: translateXLeft }}
            >
              <img
                src={`/images/certificate/alibaba.jpg`}
                alt={"alibaba"}
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className={`aspect-video max-w-[30vh] relative top-[-16vh] ${
                windowWidth < BREAKPOINT1
                  ? windowWidth < BREAKPOINT2
                    ? windowWidth < BREAKPOINT3
                      ? windowWidth < BREAKPOINT4
                        ? windowWidth < BREAKPOINT5
                          ? "left-[-35vw] top-[-25vh]"
                          : "left-[-28vw] top-[-25vh]"
                        : "left-[-16vw] top-[-25vh]"
                      : "left-[-10vw]"
                    : "left-[12vw]"
                  : "left-[22vw]"
              }`}
              style={{ x: translateXLeft }}
            >
              <img
                src={`/images/certificate/rise.png`}
                alt={"rise"}
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className={`aspect-video max-w-[30vh] relative  ${
                windowWidth < BREAKPOINT1
                  ? windowWidth < BREAKPOINT3
                    ? windowWidth < BREAKPOINT4
                      ? windowWidth < BREAKPOINT5
                        ? "left-[-12vw] top-[4vh]"
                        : "left-[-8vw] top-[4vh]"
                      : "left-[10vw] top-[4vh]"
                    : "top-[4vh] left-[35vw]"
                  : "top-[4vh] left-[40vw]"
              }`}
              style={{ y: translateYDown }}
            >
              <img
                src={`/images/certificate/talenta_ai.jpg`}
                alt={"talenta_ai"}
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className={`aspect-video max-w-[30vh] relative top-[-22vh] ${
                windowWidth < BREAKPOINT2
                  ? windowWidth < BREAKPOINT3
                    ? "left-[64vw]"
                    : "left-[80vw]"
                  : "left-[63vw]"
              }`}
              style={{ x: translateXRight }}
            >
              <img
                src={`/images/certificate/front_end_dicoding.png`}
                alt={"front_end_dicoding"}
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className={`aspect-video max-w-[30vh] relative ${
                windowWidth < BREAKPOINT2
                  ? windowWidth < BREAKPOINT3
                    ? windowWidth < BREAKPOINT4
                      ? windowWidth < BREAKPOINT5
                        ? "left-[88vw] top-[-68vh]"
                        : "left-[84vw] top-[-68vh]"
                      : "left-[80vw] top-[-68vh]"
                    : "left-[74vw] top-[-74vh]"
                  : "left-[67vw] top-[-74vh]"
              }`}
              style={{ x: translateXRight }}
            >
              <img
                src={`/images/certificate/edspert.png`}
                alt={"edspert"}
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className={`aspect-video max-w-[30vh] relative top-[-110vh] ${
                windowWidth < BREAKPOINT1
                  ? windowWidth < BREAKPOINT2
                    ? windowWidth < BREAKPOINT3
                      ? "left-[40vw]"
                      : "left-[33vw]"
                    : " left-[40vw]"
                  : " left-[44vw]"
              }`}
              style={{ y: translateYUp }}
            >
              <img
                src={`/images/certificate/bright_champs.jpg`}
                alt={"bright_champs"}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <footer className="h-[40vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          END
        </h1>
        <p
          className="text-xl font-thin cursor-pointer bg-gradient-to-b from-gray-200 to-gray-600 bg-clip-text text-transparent z-20"
          id="back-to-top"
        >
          Back to Top
        </p>
      </footer>
    </>
  );
}
