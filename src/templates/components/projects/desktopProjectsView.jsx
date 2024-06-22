import { motion, useInView } from "framer-motion";
import Span from "../../ui/spanProjects";
import React from "react";
import handleDesktopScrollTrigger from "./hooks/handleDesktopScrollTrigger";

export default function DesktopProjectsView({
  windowWidth,
  title1,
  title2,
  title3,
  cursorDefault,
  textEnter,
  linkEnter,
  cursorLink,
  isInView1,
  isInView2,
  isInView3,
  video,
  video1,
  video2,
  video3,
}) {
  // desktop ScrollTrigger
  const { containerDesktopRef } = handleDesktopScrollTrigger({
    isInView1,
    isInView2,
    isInView3,
  });
  const isMainContentDesktopInView = useInView(containerDesktopRef, {
    margin: "0px 0px -400px 0px",
  });
  return (
    <React.Fragment>
      <div
        className="gallery flex justify-around px-10 relative"
        style={{ display: "flex" }}
        ref={containerDesktopRef}
      >
        {/* desktop description start */}
        <motion.div
          className="left w-2/3 z-20"
          id={`desk-left`}
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: isMainContentDesktopInView ? 1 : 0,
            y: isMainContentDesktopInView ? 0 : -100,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <div
            className={`h-[100dvh] px-10 flex flex-col gap-2 justify-center items-center ${
              isInView1 ? "text-violet-600" : "text-gray-600"
            } transition-colors duration-700 text-center max-w-3xl mx-auto`}
          >
            <h1
              className="text-5xl cursor-none"
              ref={title1}
              onMouseMove={() => textEnter()}
              onMouseLeave={cursorDefault}
            >
              E-Commerce Concept
            </h1>
            <p
              className={`text-[1.8rem] underline ${
                isInView1
                  ? "decoration-violet-600 text-neutral-300"
                  : "text-gray-600"
              } transition-colors duration-700 pb-2 cursor-none`}
              onClick={() => window.open("https://warungjujugan.vercel.app")}
              onMouseMove={() => {
                linkEnter(), cursorLink();
              }}
              onMouseLeave={() => {
                cursorDefault();
              }}
            >
              warungjujugan.vercel.app
            </p>
            <p
              className={`text-xl ${
                isInView1 ? "text-neutral-300" : "text-gray-600"
              } transition-colors duration-700 -mt-2 pb-2 cursor-none`}
              onMouseMove={() => textEnter()}
              onMouseLeave={cursorDefault}
            >
              Tech :{" "}
              <Span isInView={isInView1} className="text-gray-200">
                NextJS
              </Span>
              ,{" "}
              <Span isInView={isInView1} className="text-amber-400">
                Firebase
              </Span>
              ,{" "}
              <Span isInView={isInView1} className="text-gray-200">
                Node
              </Span>
            </p>
            <p
              onMouseMove={() => textEnter()}
              onMouseLeave={cursorDefault}
              className={`text-xl ${
                isInView1 ? "text-neutral-300" : "text-gray-600"
              } transition-colors duration-700 -mt-2 cursor-none`}
            >
              There are many features in it such as{" "}
              <Span isInView={isInView1} className="text-red-400">
                checkout
              </Span>
              ,{" "}
              <Span isInView={isInView1} className="text-cyan-400">
                authentication
              </Span>
              ,{" "}
              <Span isInView={isInView1} className="text-slate-300">
                darkmode
              </Span>
              , animation using{" "}
              <Span isInView={isInView1} className="text-indigo-300">
                framer-motion
              </Span>
              ,{" "}
              <Span isInView={isInView1} className="text-violet-400">
                redux
              </Span>
              ,{" "}
              <Span isInView={isInView1} className="text-teal-400">
                roles
              </Span>
              ,{" "}
              <Span isInView={isInView1} className="text-lime-400">
                so on
              </Span>
              , and , but there is still no payment gateway available
            </p>
          </div>
          <div
            className={`h-[100dvh] px-10 flex flex-col gap-2 justify-center items-center ${
              isInView2 ? "text-emerald-600" : "text-gray-600"
            } transition-colors duration-700 text-center max-w-3xl mx-auto`}
          >
            <h1
              className="text-5xl cursor-none"
              ref={title2}
              onMouseMove={() => textEnter()}
              onMouseLeave={cursorDefault}
            >
              Real Time Chat
            </h1>
            <p
              className={`text-[1.8rem] underline  ${
                isInView2
                  ? "decoration-emerald-600 text-neutral-300"
                  : "text-gray-600"
              } transition-colors duration-700 pb-2 cursor-none`}
              onClick={() => window.open("https://messenger-alexz.vercel.app")}
              onMouseMove={() => {
                linkEnter(), cursorLink();
              }}
              onMouseLeave={() => {
                cursorDefault();
              }}
            >
              messenger-alexz.vercel.app
            </p>
            <p
              className={`text-xl ${
                isInView2 ? "text-neutral-300" : "text-gray-600"
              } transition-colors duration-700 -mt-2 pb-2 cursor-none`}
              onMouseMove={() => textEnter()}
              onMouseLeave={cursorDefault}
            >
              Tech :{" "}
              <Span isInView={isInView2} className="text-emerald-400">
                MongoDB
              </Span>
              ,{" "}
              <Span isInView={isInView2} className="text-gray-200">
                Express
              </Span>
              ,{" "}
              <Span isInView={isInView2} className="text-sky-400">
                React
              </Span>
              ,{" "}
              <Span isInView={isInView2} className="text-gray-200">
                Node
              </Span>
            </p>
            <p
              className={`text-xl ${
                isInView2 ? "text-neutral-300" : "text-gray-600"
              } transition-colors duration-700 -mt-2 cursor-none`}
              onMouseMove={() => textEnter()}
              onMouseLeave={cursorDefault}
            >
              Using{" "}
              <Span isInView={isInView2} className="text-orange-400">
                Socket.io
              </Span>{" "}
              as a{" "}
              <Span isInView={isInView2} className="text-amber-400">
                web socket
              </Span>
              , unfortunately there are problems when hosting{" "}
              <Span isInView={isInView2} className="text-orange-400">
                Socket.io
              </Span>{" "}
              so that the website is not real time after being deployed but
              works well locally, I made this project just to learn how to make
              a{" "}
              <Span isInView={isInView2} className="text-lime-400">
                real time application
              </Span>
            </p>
          </div>
          <div
            className={`h-[100dvh] px-10 flex flex-col gap-2 justify-center items-center ${
              isInView3 ? "text-teal-600" : "text-gray-600"
            } transition-colors duration-700 text-center max-w-3xl mx-auto cursor-none`}
          >
            <h1
              className="text-5xl"
              ref={title3}
              onMouseMove={() => textEnter()}
              onMouseLeave={cursorDefault}
            >
              Portfolio Website V.1
            </h1>
            <p
              className={`text-[1.8rem] underline ${
                isInView3
                  ? "decoration-teal-600 text-neutral-300"
                  : "text-gray-600"
              } transition-colors duration-700 pb-2 cursor-none`}
              onClick={() => window.open("https://alexanderfarrel.github.io")}
              onMouseMove={() => {
                linkEnter(), cursorLink();
              }}
              onMouseLeave={() => {
                cursorDefault();
              }}
            >
              alexanderfarrel.github.io
            </p>
            <p
              className={`text-xl ${
                isInView3 ? "text-neutral-300" : "text-gray-600"
              } transition-colors duration-700 -mt-2 pb-2 cursor-none`}
              onMouseMove={() => textEnter()}
              onMouseLeave={cursorDefault}
            >
              Tech :{" "}
              <Span isInView={isInView3} className="text-orange-400">
                Html
              </Span>
              ,{" "}
              <Span isInView={isInView3} className="text-blue-400">
                Css
              </Span>
              , Vanila{" "}
              <Span isInView={isInView3} className="text-yellow-400">
                Javascript
              </Span>
            </p>
            <p
              className={`text-xl ${
                isInView3 ? "text-neutral-300" : "text-gray-600"
              } transition-colors duration-700 -mt-2 cursor-none`}
              onMouseMove={() => textEnter()}
              onMouseLeave={cursorDefault}
            >
              After learning{" "}
              <Span isInView={isInView3} className="text-orange-400">
                html
              </Span>
              ,{" "}
              <Span isInView={isInView3} className="text-blue-400">
                Css
              </Span>
              , and{" "}
              <Span isInView={isInView3} className="text-yellow-400">
                {" "}
                javascript
              </Span>{" "}
              I immediately learned to make a personal portfolio, I made it
              using pure{" "}
              <Span isInView={isInView3} className="text-orange-400">
                html
              </Span>
              ,{" "}
              <Span isInView={isInView3} className="text-blue-400">
                Css
              </Span>
              , and{" "}
              <Span isInView={isInView3} className="text-yellow-400">
                {" "}
                javascript
              </Span>
              , this website has a{" "}
              <Span isInView={isInView3} className="text-teal-400">
                landing page
              </Span>{" "}
              concept, unlike current portfolios that use several pages.
            </p>
          </div>
        </motion.div>
        {/* desktop description end */}

        <div className="rightblock w-1/3 h-screen flex flex-col justify-center items-center z-20">
          <motion.div
            className={`w-full h-full max-w-xl ${
              windowWidth > 1811 ? "max-h-[21.5rem]" : "max-h-[19dvw]"
            } p-2 relative rounded-[32px] overflow-hidden`}
            id={`desk-right`}
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: isMainContentDesktopInView ? 1 : 0,
              y: isMainContentDesktopInView ? 0 : -100,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {/* videos */}
            <motion.div
              id="bg-video"
              className={`w-full h-full max-w-xl flex flex-col justify-center items-center relative overflow-hidden rounded-3xl`}
            >
              {/* background color */}
              <motion.div
                className="w-full h-full absolute bg-violet-600 blur-[200px]"
                animate={{
                  opacity: video == 1 ? 1 : 0,
                  transition: {
                    duration: video == 1 ? 0.4 : 1,
                    type: "tween",
                  },
                }}
              />
              <motion.div
                className="w-full h-full absolute bg-emerald-600 blur-[200px]"
                animate={{
                  opacity: video == 2 ? 1 : 0,
                  transition: {
                    duration: video == 2 ? 0.4 : 1,
                    type: "tween",
                  },
                }}
              />
              <motion.div
                className="w-full h-full absolute bg-fuchsia-600 blur-[200px]"
                animate={{
                  opacity: video == 3 ? 1 : 0,
                  transition: {
                    duration: video == 3 ? 0.4 : 1,
                    type: "tween",
                  },
                }}
              />
              {/* end background color */}
              {/* content */}
              <motion.div
                animate={{
                  y: video == 1 ? 0 : "-400px",
                  opacity: video == 1 ? 1 : 0,
                  transition: {
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                  },
                }}
                initial={{
                  y: 0,
                }}
                className="max-w-[40rem] absolute aspect-video rounded-xl overflow-hidden mx-4 cursor-none"
                onMouseMove={() => {
                  linkEnter(), cursorLink();
                }}
                onMouseLeave={() => {
                  cursorDefault();
                }}
              >
                <video
                  ref={video1}
                  src="/videos/warungjujugan.mp4"
                  autoPlay={isInView1}
                  loop={isInView1}
                  muted
                  className="object-cover"
                />
                <img src="/images/warungjujugan_ss.jpg" alt="" />
                <div
                  className="hover:opacity-60 absolute w-full h-full top-0 left-0 bg-black z-10 opacity-0 flex justify-center items-center text-bold text-xl transition-all duration-200"
                  onClick={() =>
                    window.open("https://warungjujugan.vercel.app")
                  }
                >
                  Try Demo
                </div>
              </motion.div>
              <motion.div
                animate={{
                  y: video == 2 ? 0 : video == 3 ? "-400px" : "400px",
                  opacity: video == 2 ? 1 : 0,
                  transition: {
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                  },
                }}
                initial={{
                  y: "200%",
                }}
                className={`max-w-[40rem] absolute aspect-video rounded-xl overflow-hidden mx-4 cursor-none`}
                onMouseMove={() => {
                  linkEnter(), cursorLink();
                }}
                onMouseLeave={() => {
                  cursorDefault();
                }}
              >
                <video
                  ref={video2}
                  src="/videos/messenger.mp4"
                  autoPlay={isInView2}
                  loop={isInView2}
                  muted
                  className="object-cover"
                />
                <img src="/images/messenger_ss.jpg" alt="" />
                <div
                  className="hover:opacity-60 absolute w-full h-full top-0 left-0 bg-black z-10 opacity-0 flex justify-center items-center text-bold text-xl transition-all duration-200"
                  onClick={() =>
                    window.open("https://messenger-alexz.vercel.app")
                  }
                >
                  Try Demo
                </div>
              </motion.div>
              <motion.div
                animate={{
                  y: video == 3 ? 0 : "400px",
                  opacity: video == 3 ? 1 : 0,
                  transition: {
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                  },
                }}
                initial={{
                  y: "200%",
                }}
                className="max-w-[40rem] absolute aspect-video rounded-xl overflow-hidden mx-4 cursor-none"
                onMouseMove={() => {
                  linkEnter(), cursorLink();
                }}
                onMouseLeave={() => {
                  cursorDefault();
                }}
              >
                <video
                  ref={video3}
                  src="/videos/portfolio_v2.mp4"
                  autoPlay={isInView3}
                  loop={isInView3}
                  muted
                  className="object-cover"
                />
                <img src="/images/portfoliov2_ss.jpg" alt="" />
                <div
                  className="hover:opacity-60 absolute w-full h-full top-0 left-0 bg-black z-10 opacity-0 flex justify-center items-center text-bold text-xl transition-all duration-200"
                  onClick={() =>
                    window.open("https://alexanderfarrel.github.io")
                  }
                >
                  Try Demo
                </div>
              </motion.div>
              {/* end content */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
}
