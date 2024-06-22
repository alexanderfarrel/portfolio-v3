import React from "react";
import { motion } from "framer-motion";
import handleMobileScroll from "./hooks/handleMobileScroll";

export default function MobileProjectsView({
  windowWidth,
  setVideo,
  video,
  video1,
  video2,
  video3,
  isVideosActived,
  paragraphVariants,
}) {
  // mobile ScrollTrigger
  const { refContainerMobile, scaleXTop, scaleXSide, scaleXBottom, isHidden } =
    handleMobileScroll({ windowWidth, setVideo });
  return (
    <React.Fragment>
      <div
        className="relative flex flex-col items-center min-h-[400dvh] px-2 mt-20"
        ref={refContainerMobile}
      >
        {/* mobile videos parent */}
        <div
          id="mainContentMobile"
          className="sticky top-[10vh] w-full h-[80dvh] flex flex-col items-center"
        >
          <div
            className={`max-w-[22rem] ${
              windowWidth > 370 ? "max-h-[13rem]" : "max-h-[56dvw]"
            } aspect-video w-full h-full p-[8px] rounded-2xl relative overflow-hidden`}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              style={{ scaleX: scaleXTop }}
              className={`absolute w-full scale-0 h-[12px] left-0 top-0 bg-gray-600 blur-[3px]`}
            />
            <motion.div
              initial={{ scaleY: 0 }}
              style={{ scaleY: scaleXSide }}
              className={`absolute  w-[12px] h-full origin-top scale-0 right-0 top-0 bg-gray-600 blur-[3px]`}
            />
            <motion.div
              initial={{ scaleY: 0 }}
              style={{ scaleY: scaleXSide }}
              className="absolute bg-gray-600 blur-[3px] w-[12px] h-full origin-top scale-0 left-0 top-0"
            />
            <motion.div
              initial={{ scaleXBttom: 0 }}
              style={{ scaleX: scaleXBottom }}
              className="absolute bg-gray-600 blur-[3px] w-[50.5%] scale-0 h-[12px] origin-left left-0 bottom-[1px]"
            />
            <motion.div
              initial={{ scaleXBottom: 0 }}
              style={{ scaleX: scaleXBottom }}
              className="absolute bg-gray-600 blur-[3px] w-[50.5%] scale-0 h-[12px] origin-right right-0 bottom-[1px]"
            />
            {/* Mobile Videos content*/}
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <motion.div
                initial={{ x: video == 1 ? "100%" : "0" }}
                animate={{
                  x: video == 1 ? "0" : "100%",
                  transition: { type: "tween" },
                }}
                onClick={() => window.open("https://warungjujugan.vercel.app")}
                className="w-full h-full absolute"
              >
                {isVideosActived ? (
                  <video
                    ref={video1}
                    src="/videos/warungjujugan.mp4"
                    autoPlay={video == 1 && isVideosActived}
                    loop={video == 1}
                    muted
                    className="object-cover"
                  />
                ) : (
                  <img src="/images/warungjujugan_ss.jpg" alt="" />
                )}
              </motion.div>
              <motion.div
                initial={{
                  x: video == 2 ? "0" : video == 1 ? "-100%" : "100%",
                }}
                animate={{
                  x: video == 2 ? "0" : video == 1 ? "-100%" : "100%",
                  transition: { type: "tween" },
                }}
                className="w-full h-full absolute"
                onClick={() =>
                  window.open("https://messenger-alexz.vercel.app")
                }
              >
                {isVideosActived ? (
                  <video
                    ref={video2}
                    src="/videos/messenger.mp4"
                    autoPlay={video == 2 && isVideosActived}
                    loop={video == 2}
                    muted
                    className="object-cover"
                  />
                ) : (
                  <img src="/images/messenger_ss.jpg" alt="" />
                )}
              </motion.div>
              <motion.div
                initial={{
                  x: video == 3 ? "0" : "-100%",
                }}
                animate={{
                  x: video == 3 ? "0" : "-100%",
                  transition: { type: "tween" },
                }}
                className="w-full h-full absolute"
                onClick={() => window.open("https://alexanderfarrel.github.io")}
              >
                {isVideosActived ? (
                  <video
                    ref={video3}
                    src="/videos/portfolio_v2.mp4"
                    autoPlay={video == 3 && isVideosActived}
                    loop={video == 3}
                    muted
                    className="object-cover"
                  />
                ) : (
                  <img src="/images/portfoliov2_ss.jpg" alt="" />
                )}
              </motion.div>
            </div>
          </div>
          <motion.section className="pt-10 w-[80dvw] max-w-[28rem] text-center flex justify-center relative">
            <p
              className="absolute top-0 text-[12px] text-gray-400 opacity-50 font-extralight z-10"
              onClick={() => {
                if (video === 1) {
                  window.open("https://warungjujugan.vercel.app");
                } else if (video === 2) {
                  window.open("https://messenger-alexz.vercel.app");
                } else if (video === 3) {
                  window.open("https://alexanderfarrel.github.io");
                }
              }}
            >
              click to try demo
            </p>
            <motion.div
              className="absolute w-full h-full"
              animate={isHidden ? "initial" : video == 1 ? "visible" : "hidden"}
            >
              {/* Mobile Description */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                variants={paragraphVariants}
                custom={isHidden ? 2 : 0}
                className="text-3xl font-bold text-violet-600"
              >
                E-commerce Concept
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                variants={paragraphVariants}
                custom={1}
                className="font-semibold underline decoration-2 decoration-violet-600"
                onClick={() => window.open("https://warungjujugan.vercel.app")}
              >
                warungjujugan.vercel.app
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                variants={paragraphVariants}
                custom={isHidden ? 0 : 2}
                className="mt-1 font-light"
              >
                Tech : <span className="text-neutral-200">NextJS</span>,{" "}
                <span className="text-amber-400">Firebase</span>,{" "}
                <span className="text-gray-200">Node</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                variants={paragraphVariants}
                custom={isHidden ? 0 : 3}
                className="mt-2 font-light text-neutral-300"
              >
                There are many features in it such as{" "}
                <span className="text-red-400">checkout</span>,{" "}
                <span className="text-cyan-400">authentication</span>,{" "}
                <span className="text-slate-300">darkmode</span>, animation
                using <span className="text-indigo-300">framer-motion</span>,{" "}
                <span className="text-violet-400">redux</span>,{" "}
                <span className="text-teal-400">roles</span>, and{" "}
                <span className="text-lime-400">so on</span>, but there is still
                no payment gateway available
              </motion.p>
            </motion.div>

            <motion.div
              className="absolute w-full h-full"
              animate={
                video == 1 ? "initial" : video == 2 ? "visible" : "hidden"
              }
            >
              {/* Mobile Description */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                variants={paragraphVariants}
                custom={isHidden ? 2 : 0}
                className="text-3xl font-bold text-emerald-600"
              >
                Real Time Chat
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                variants={paragraphVariants}
                custom={1}
                className="font-semibold underline decoration-2 decoration-emerald-600"
                onClick={() =>
                  window.open("https://messenger-alexz.vercel.app")
                }
              >
                messenger-alexz.vercel.app
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                variants={paragraphVariants}
                custom={isHidden ? 0 : 2}
                className="mt-1 font-light"
              >
                Tech : <span className="text-emerald-400">MongoDB</span>,{" "}
                <span className="text-gray-200">Express</span>,{" "}
                <span className="text-sky-400">React</span>,{" "}
                <span className="text-gray-200">Node</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                variants={paragraphVariants}
                custom={isHidden ? 0 : 3}
                className="mt-2 font-light text-neutral-300"
              >
                Using <span className="text-orange-400">Socket.io</span> as a{" "}
                <span className="text-amber-400">web socket</span>,
                unfortunately there are problems when hosting{" "}
                <span className="text-orange-400">Socket.io</span> so that the
                website is not real time after being deployed but works well
                locally, I made this project just to learn how to make a{" "}
                <span className="text-lime-400">real time application</span>
              </motion.p>
            </motion.div>

            <motion.div
              className="absolute w-full h-full"
              animate={video == 3 ? "visible" : "initial"}
            >
              {/* Mobile Description */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                variants={paragraphVariants}
                custom={isHidden ? 2 : 0}
                className="text-3xl font-bold text-teal-600"
              >
                Portfolio Website V.1
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                variants={paragraphVariants}
                custom={1}
                className="font-semibold underline decoration-2 decoration-teal-600"
                onClick={() => window.open("https://alexanderfarrel.github.io")}
              >
                alexanderfarrel.github.io
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                variants={paragraphVariants}
                custom={isHidden ? 0 : 2}
                className="mt-1 font-light"
              >
                Tech : <span className="text-orange-400">Html</span>,{" "}
                <span className="text-blue-400">Css</span>, Vanila{" "}
                <span className="text-yellow-400">Javascript</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                variants={paragraphVariants}
                custom={isHidden ? 0 : 2}
                className="mt-2 font-light text-neutral-300"
              >
                After learning <span className="text-orange-400">html</span>,{" "}
                <span className="text-blue-400">Css</span>, and{" "}
                <span className="text-yellow-400"> javascript</span> I
                immediately learned to make a personal portfolio, I made it
                using pure <span className="text-orange-400">html</span>,{" "}
                <span className="text-blue-400">Css</span>, and{" "}
                <span className="text-yellow-400"> javascript</span>, this
                website has a{" "}
                <span className="text-teal-400">landing page</span> concept,
                unlike current portfolios that use several pages.
              </motion.p>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </React.Fragment>
  );
}
