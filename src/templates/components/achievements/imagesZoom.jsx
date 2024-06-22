import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

export default function ImagesZoom({
  windowWidth,
  cursorDefault,
  openSwiper,
  cursorSlide,
  linkEnter,
}) {
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
  const translateYUp = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const translateYDown = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const translateXRight = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const translateXLeft = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const BREAKPOINT1 = 1671;
  const BREAKPOINT2 = 1145;
  const BREAKPOINT3 = 725;
  const BREAKPOINT4 = 560;
  const BREAKPOINT5 = 444;
  const BREAKPOINT6 = 370;
  return (
    <React.Fragment>
      {/* images zoom */}
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
              id="oop"
              className={`aspect-video max-w-[30vh] relative top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] ${
                windowWidth < 1200 ? "cursor-pointer" : "cursor-none"
              }`}
              onClick={() => {
                openSwiper(4), cursorDefault();
              }}
              onMouseMove={() => {
                linkEnter(), cursorSlide();
              }}
              onMouseLeave={cursorDefault}
            >
              <img
                id="doNotClose"
                src={`/images/certificate/oop.png`}
                draggable="false"
                alt={"oop"}
                className="object-cover"
              />
            </div>
            <motion.div
              id="bright_champs"
              className={`aspect-video max-w-[30vh] relative ${
                windowWidth < BREAKPOINT1
                  ? windowWidth < BREAKPOINT2
                    ? windowWidth < BREAKPOINT3
                      ? windowWidth < BREAKPOINT4
                        ? windowWidth < BREAKPOINT5
                          ? windowWidth < BREAKPOINT6
                            ? "left-[-60vw] top-[23vh]"
                            : "left-[-50vw] top-[23vh]"
                          : "left-[-38vw] top-[23vh]"
                        : "left-[-18vw] top-[23vh]"
                      : "left-[-12vw] top-[34vh]"
                    : " left-[8vw] top-[34vh]"
                  : "left-[18vw] top-[34vh]"
              } ${windowWidth < 1200 ? "cursor-pointer" : "cursor-none"}`}
              onClick={() => {
                openSwiper(6);
                cursorDefault();
              }}
              onMouseMove={() => {
                linkEnter(), cursorSlide();
              }}
              onMouseLeave={cursorDefault}
              style={{ x: translateXLeft }}
            >
              <img
                id="doNotClose"
                src={`/images/certificate/bright_champs.jpg`}
                draggable="false"
                alt={"bright_champs"}
                className="object-cover"
              />
            </motion.div>
            <motion.div
              id="rise"
              className={`aspect-video max-w-[30vh] relative top-[-16vh] ${
                windowWidth < BREAKPOINT1
                  ? windowWidth < BREAKPOINT2
                    ? windowWidth < BREAKPOINT3
                      ? windowWidth < BREAKPOINT4
                        ? windowWidth < BREAKPOINT5
                          ? "left-[-35vw] top-[-26.5vh]"
                          : "left-[-28vw] top-[-26.5vh]"
                        : "left-[-16vw] top-[-26.5vh]"
                      : "left-[-10vw]"
                    : "left-[12vw]"
                  : "left-[22vw]"
              } ${windowWidth < 1200 ? "cursor-pointer" : "cursor-none"}`}
              onClick={() => {
                openSwiper(2);
                cursorDefault();
              }}
              onMouseMove={() => {
                linkEnter(), cursorSlide();
              }}
              onMouseLeave={cursorDefault}
              style={{ x: translateXLeft }}
            >
              <img
                id="doNotClose"
                src={`/images/certificate/rise.png`}
                draggable="false"
                alt={"rise"}
                className="object-cover"
              />
            </motion.div>
            <motion.div
              id="talenta_ai"
              className={`aspect-video max-w-[30vh] relative ${
                windowWidth < BREAKPOINT1
                  ? windowWidth < BREAKPOINT3
                    ? windowWidth < BREAKPOINT4
                      ? windowWidth < BREAKPOINT5
                        ? "left-[-12vw] top-[4vh]"
                        : "left-[-8vw] top-[4vh]"
                      : "left-[10vw] top-[4vh]"
                    : "top-[4vh] left-[35vw]"
                  : "top-[4vh] left-[40vw]"
              } ${windowWidth < 1200 ? "cursor-pointer" : "cursor-none"}`}
              onClick={() => {
                openSwiper(17);
                cursorDefault();
              }}
              onMouseMove={() => {
                linkEnter(), cursorSlide();
              }}
              onMouseLeave={cursorDefault}
              style={{ y: translateYDown }}
            >
              <img
                id="doNotClose"
                src={`/images/certificate/talenta_ai.jpg`}
                draggable="false"
                alt={"talenta_ai"}
                className="object-cover"
              />
            </motion.div>
            <motion.div
              id="front_end_dicoding"
              className={`aspect-video max-w-[30vh] relative top-[-22vh] ${
                windowWidth < BREAKPOINT2
                  ? windowWidth < BREAKPOINT3
                    ? "left-[64vw]"
                    : "left-[80vw]"
                  : "left-[63vw]"
              } ${windowWidth < 1200 ? "cursor-pointer" : "cursor-none"}`}
              onClick={() => {
                openSwiper(0);
                cursorDefault();
              }}
              onMouseMove={() => {
                linkEnter(), cursorSlide();
              }}
              onMouseLeave={cursorDefault}
              style={{ x: translateXRight }}
            >
              <img
                id="doNotClose"
                src={`/images/certificate/front_end_dicoding.png`}
                draggable="false"
                alt={"front_end_dicoding"}
                className="object-cover"
              />
            </motion.div>
            <motion.div
              id="edspert"
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
              } ${windowWidth < 1200 ? "cursor-pointer" : "cursor-none"}`}
              onClick={() => {
                openSwiper(5);
                cursorDefault();
              }}
              onMouseMove={() => {
                linkEnter(), cursorSlide();
              }}
              onMouseLeave={cursorDefault}
              style={{ x: translateXRight }}
            >
              <img
                id="doNotClose"
                src={`/images/certificate/edspert.png`}
                draggable="false"
                alt={"edspert"}
                className="object-cover"
              />
            </motion.div>
            <motion.div
              id="alibaba"
              className={`aspect-video max-w-[30vh] relative top-[-110vh] ${
                windowWidth < BREAKPOINT1
                  ? windowWidth < BREAKPOINT2
                    ? windowWidth < BREAKPOINT3
                      ? "left-[40vw]"
                      : "left-[33vw]"
                    : " left-[40vw]"
                  : " left-[44vw]"
              } ${windowWidth < 1200 ? "cursor-pointer" : "cursor-none"}`}
              onClick={() => {
                openSwiper(1);
                cursorDefault();
              }}
              onMouseMove={() => {
                linkEnter(), cursorSlide();
              }}
              onMouseLeave={cursorDefault}
              style={{ y: translateYUp }}
            >
              <img
                id="doNotClose"
                src={`/images/certificate/alibaba.jpg`}
                draggable="false"
                alt={"alibaba"}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </React.Fragment>
  );
}
