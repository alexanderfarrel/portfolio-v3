import React, { useLayoutEffect, useRef, useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import useWindowWidth from "../hooks/windowWidth";
import Lenis from "lenis";
import Navbar from "../components/views/navbar";
import Span from "../components/ui/span";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#header-title", {
        y: "-=50",
        opacity: 0,
        duration: 0.5,
        ease: "circ",
        delay: 2,
      })
        .from(
          "#header-subtitle",
          {
            opacity: 0,
            x: "-30",
            duration: 0.4,
            ease: "power3.inOut",
          },
          "-=0.4"
        )
        .to("#roundedBlue", {
          scale: 1.5,
          duration: 0.4,
          ease: "easeOut",
          delay: 0.9,
        })
        .to("#roundedBlue", {
          scale: 0,
          delay: 0.1,
          duration: 0.4,
          ease: "easeIn",
        });
      if (windowWidth < 1200) {
        t1.from(
          "#header-mobile-title",
          {
            x: "-40",
            opacity: 0,
            duration: 0.5,
            ease: "circ",
          },
          "-=1.9"
        )
          .from(
            "#header-mobile-subtitle",
            {
              opacity: 0,
              x: -40,
              duration: 0.5,
              ease: "circ",
            },
            "-=1.75"
          )
          .from(
            "#header-mobile-toggle",
            {
              opacity: 0,
              x: -20,
              duration: 0.5,
              ease: "circ",
            },
            "-=1.6"
          );
      }
    });
    return () => ctx.revert();
  }, []);

  const [initial, setInitial] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitial(false);
    }, 500);

    return () => clearTimeout(timeout);
  });
  const headerRef = useRef(null);
  const headerScroll = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });
  const translateYLayer1 = useTransform(
    headerScroll.scrollYProgress,
    [0, 1],
    [0, -50]
  );
  const translateYLayer2 = useTransform(
    headerScroll.scrollYProgress,
    [0, 1],
    [0, -250]
  );
  const textTranslateYMobile = useTransform(
    headerScroll.scrollYProgress,
    [0, 1],
    [0, 250]
  );
  const textTranslateYDesktop = useTransform(
    headerScroll.scrollYProgress,
    [0, 1],
    [0, 500]
  );

  // back to top
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const windowWidth = useWindowWidth();
  const [video, setVideo] = useState(1);
  const containerDesktopRef = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const video1 = useRef(null);
  const video2 = useRef(null);
  const video3 = useRef(null);
  const isInView1 = useInView(ref1, { margin: "-100px 0px -300px 0px" });
  const isInView2 = useInView(ref2, { margin: "-100px 0px -300px 0px" });
  const isInView3 = useInView(ref3, { margin: "-100px 0px -300px 0px" });

  const [isVideosActived, setIsVideosActived] = useState(false);
  useEffect(() => {
    if (!isInView1 && !isInView2 && !isInView3) {
      if (isVideosActived) {
        if (video == 1) {
          video1.current.play();
        } else {
          video1.current.pause();
        }
        if (video == 2) {
          video2.current.play();
        } else {
          video2.current.pause();
        }
        if (video == 3) {
          video3.current.play();
        } else {
          video3.current.pause();
        }
      }
      return;
    }
    if (isInView1) {
      setVideo(1);
      video1.current.play();
    } else {
      video1.current.pause();
    }

    if (isInView2) {
      setVideo(2);
      video2.current.play();
    } else {
      video2.current.pause();
    }

    if (isInView3) {
      setVideo(3);
      video3.current.play();
    } else {
      video3.current.pause();
    }
  }, [isInView1, isInView2, isInView3, video, isVideosActived]);

  const isMainContentDesktopInView = useInView(containerDesktopRef, {
    margin: "0px 0px -400px 0px",
  });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerDesktopRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        scrub: true,
      });
    });
    return () => ctx.revert();
  }, [isInView1, isInView2, isInView3]);

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

    const scrollElement = document.getElementById("scroll");
    const scrollElement2 = document.getElementById("back-to-top");
    scrollElement.addEventListener("click", handleClick);
    scrollElement2.addEventListener("click", handleClick);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      scrollElement.removeEventListener("click", handleClick);
      scrollElement2.removeEventListener("click", handleClick);
    };
  }, []);
  // mobile
  const refContainerMobile = useRef(null);
  const [isHidden, setIsHidden] = useState(true);
  const mobileScroll = useScroll({
    target: refContainerMobile,
    offset: ["start 15%", "end end"],
  });
  const scaleXTop = useTransform(
    mobileScroll.scrollYProgress,
    [0, 0.333333333334, 0.666666666667, 1],
    [0, 1, 1, 1]
  );
  const scaleXSide = useTransform(
    mobileScroll.scrollYProgress,
    [0, 0.32, 0.666666666667, 1],
    [0, 0, 1, 1]
  );
  const scaleXBottom = useTransform(
    mobileScroll.scrollYProgress,
    [0, 0.32, 0.65, 1],
    [0, 0, 0, 1]
  );
  useLayoutEffect(() => {
    if (windowWidth < 1200) {
      let ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: refContainerMobile.current,
          start: "top 15%",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (e) => {
            if (e.progress > 0.33 && e.progress < 0.66) {
              setVideo(2);
            } else if (e.progress > 0.66 && e.progress <= 1) {
              setVideo(3);
            } else {
              setVideo(1);
            }
          },
          onEnter: () => {
            setIsHidden(false);
          },
          onLeaveBack: () => {
            setIsHidden(true);
          },
        });

        return () => ctx.revert();
      });
    }
  }, []);
  const paragraphVariants = {
    initial: (e) => ({
      opacity: 0,
      y: 50,
      transition: {
        delay: e * 0.04,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
    hidden: (e) => ({
      opacity: 0,
      y: -50,
      transition: {
        delay: e * 0.04,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <>
      <div
        className="bg-gradient-to-b from-[#162635] from-20% to-neutral-950 relative"
        ref={comp}
      >
        <Navbar></Navbar>

        {/* scroll to top */}
        <motion.div
          id="scroll"
          initial={{
            opacity: scrollY > 0 ? 1 : 0,
            y: scrollY > 0 ? 20 : 0,
          }}
          animate={{
            opacity: scrollY > 0 ? 1 : 0,
            y: scrollY > 0 ? 0 : 20,
          }}
          className={`w-8 h-8 bg-gray-700 rounded-full fixed bottom-6 right-4 flex justify-center items-center cursor-pointer z-30`}
        >
          <span className="text-3xl -translate-x-1 -rotate-90">›</span>
        </motion.div>

        {/* header */}
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
              y:
                windowWidth < 1200
                  ? textTranslateYMobile
                  : textTranslateYDesktop,
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
            <p id="header-subtitle" className="">
              ~ Scroll Down ~
            </p>
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
                  !isVideosActived ? "border-green-500" : "border-yellow-300"
                } shadow-inner relative flex items-center mt-2`}
              >
                <motion.div
                  initial={{ x: !isVideosActived ? 0 : 25 }}
                  animate={{
                    x: !isVideosActived ? 25 : 0,
                    transition: { type: "spring", stiffness: 400, damping: 25 },
                  }}
                  onClick={() => setIsVideosActived(!isVideosActived)}
                  whileTap={{ width: "1.7rem", left: !isVideosActived && -6 }}
                  className={`w-5 h-5 bg-white rounded-full shadow absolute left-1`}
                ></motion.div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {windowWidth > 1200 ? (
          <div
            className="gallery flex justify-around px-10 relative"
            style={{ display: "flex" }}
            ref={containerDesktopRef}
          >
            {/* <div className="w-full h-screen absolute z-10">
            <div className="absolute left-[10%] opacity-60 top-[70%] max-w-[100px] max-h-[100px] p-2 flex justify-center items-center">
              <Firebase className={"w-full h-full"}></Firebase>
              <div className="bg-white opacity-10 w-full h-full -z-10 absolute top-0 rounded-xl"></div>
            </div>
          </div> */}
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
                <h1 className="text-5xl" ref={ref1}>
                  E-Commerce Concept
                </h1>
                <p
                  className={`text-[1.8rem] underline cursor-pointer ${
                    isInView1
                      ? "decoration-violet-600 text-neutral-300"
                      : "text-gray-600"
                  } transition-colors duration-700`}
                  onClick={() =>
                    window.open("https://warungjujugan.vercel.app")
                  }
                >
                  warungjujugan.vercel.app
                </p>
                <p
                  className={`text-xl ${
                    isInView1 ? "text-neutral-300" : "text-gray-600"
                  } transition-colors duration-700`}
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
                  className={`text-xl ${
                    isInView1 ? "text-neutral-300" : "text-gray-600"
                  } transition-colors duration-700`}
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
                <h1 className="text-5xl" ref={ref2}>
                  Real Time Chat
                </h1>
                <p
                  className={`text-[1.8rem] underline cursor-pointer ${
                    isInView2
                      ? "decoration-emerald-600 text-neutral-300"
                      : "text-gray-600"
                  } transition-colors duration-700`}
                  onClick={() =>
                    window.open("https://messenger-alexz.vercel.app")
                  }
                >
                  messenger-alexz.vercel.app
                </p>
                <p
                  className={`text-xl ${
                    isInView2 ? "text-neutral-300" : "text-gray-600"
                  } transition-colors duration-700`}
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
                  } transition-colors duration-700`}
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
                  works well locally, I made this project just to learn how to
                  make a{" "}
                  <Span isInView={isInView2} className="text-lime-400">
                    real time application
                  </Span>
                </p>
              </div>
              <div
                className={`h-[100dvh] px-10 flex flex-col gap-2 justify-center items-center ${
                  isInView3 ? "text-teal-600" : "text-gray-600"
                } transition-colors duration-700 text-center max-w-3xl mx-auto`}
              >
                <h1 className="text-5xl" ref={ref3}>
                  Portfolio Website V.1
                </h1>
                <p
                  className={`text-[1.8rem] underline cursor-pointer ${
                    isInView3
                      ? "decoration-teal-600 text-neutral-300"
                      : "text-gray-600"
                  } transition-colors duration-700`}
                  onClick={() =>
                    window.open("https://alexanderfarrel.github.io")
                  }
                >
                  alexanderfarrel.github.io
                </p>
                <p
                  className={`text-xl ${
                    isInView3 ? "text-neutral-300" : "text-gray-600"
                  } transition-colors duration-700`}
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
                  } transition-colors duration-700`}
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
                  ></motion.div>
                  <motion.div
                    className="w-full h-full absolute bg-emerald-600 blur-[200px]"
                    animate={{
                      opacity: video == 2 ? 1 : 0,
                      transition: {
                        duration: video == 2 ? 0.4 : 1,
                        type: "tween",
                      },
                    }}
                  ></motion.div>
                  <motion.div
                    className="w-full h-full absolute bg-fuchsia-600 blur-[200px]"
                    animate={{
                      opacity: video == 3 ? 1 : 0,
                      transition: {
                        duration: video == 3 ? 0.4 : 1,
                        type: "tween",
                      },
                    }}
                  ></motion.div>
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
                    className="max-w-[40rem] absolute aspect-video rounded-xl overflow-hidden mx-4 cursor-pointer"
                  >
                    <video
                      ref={video1}
                      src="/videos/warungjujugan.mp4"
                      autoPlay={isInView1}
                      loop={isInView1}
                      muted
                      className="object-cover"
                    ></video>
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
                    className="max-w-[40rem] absolute aspect-video rounded-xl overflow-hidden mx-4 cursor-pointer"
                  >
                    <video
                      ref={video2}
                      src="/videos/messenger.mp4"
                      autoPlay={isInView2}
                      loop={isInView2}
                      muted
                      className="object-cover"
                    ></video>
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
                    className="max-w-[40rem] absolute aspect-video rounded-xl overflow-hidden mx-4 cursor-pointer"
                  >
                    <video
                      ref={video3}
                      src="/videos/portfolio_v2.mp4"
                      autoPlay={isInView3}
                      loop={isInView3}
                      muted
                      className="object-cover"
                    ></video>
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
        ) : (
          <>
            <div
              className="relative flex flex-col items-center min-h-[300dvh] px-2 mt-20"
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
                    className={`absolute w-full scale-0 h-[12px] left-0 top-0 bg-gray-700 blur-[3px]`}
                  ></motion.div>
                  <motion.div
                    initial={{ scaleY: 0 }}
                    style={{ scaleY: scaleXSide }}
                    className={`absolute  w-[12px] h-full origin-top scale-0 right-0 top-0 bg-gray-700 blur-[3px]`}
                  ></motion.div>
                  <motion.div
                    initial={{ scaleY: 0 }}
                    style={{ scaleY: scaleXSide }}
                    className="absolute bg-gray-700 blur-[3px] w-[12px] h-full origin-top scale-0 left-0 top-0"
                  ></motion.div>
                  <motion.div
                    initial={{ scaleXBttom: 0 }}
                    style={{ scaleX: scaleXBottom }}
                    className="absolute bg-gray-700 blur-[3px] w-[50.5%] scale-0 h-[12px] origin-left left-0 bottom-[1px]"
                  ></motion.div>
                  <motion.div
                    initial={{ scaleXBottom: 0 }}
                    style={{ scaleX: scaleXBottom }}
                    className="absolute bg-gray-700 blur-[3px] w-[50.5%] scale-0 h-[12px] origin-right right-0 bottom-[1px]"
                  ></motion.div>
                  {/* Mobile Videos content*/}
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <motion.div
                      initial={{ x: video == 1 ? "100%" : "0" }}
                      animate={{
                        x: video == 1 ? "0" : "100%",
                        transition: { type: "tween" },
                      }}
                      onClick={() =>
                        window.open("https://warungjujugan.vercel.app")
                      }
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
                        ></video>
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
                        ></video>
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
                      className="w-full h-full bg-fuchsia-600 absolute"
                      onClick={() =>
                        window.open("https://alexanderfarrel.github.io")
                      }
                    >
                      {isVideosActived ? (
                        <video
                          ref={video3}
                          src="/videos/portfolio_v2.mp4"
                          autoPlay={video == 3 && isVideosActived}
                          loop={video == 3}
                          muted
                          className="object-cover"
                        ></video>
                      ) : (
                        <img src="/images/portfoliov1_ss.jpg" alt="" />
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
                    animate={
                      isHidden ? "initial" : video == 1 ? "visible" : "hidden"
                    }
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
                      onClick={() =>
                        window.open("https://warungjujugan.vercel.app")
                      }
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
                      <span className="text-slate-300">darkmode</span>,
                      animation using{" "}
                      <span className="text-indigo-300">framer-motion</span>,{" "}
                      <span className="text-violet-400">redux</span>,{" "}
                      <span className="text-teal-400">roles</span>, and{" "}
                      <span className="text-lime-400">so on</span>, but there is
                      still no payment gateway available
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
                      Using <span className="text-orange-400">Socket.io</span>{" "}
                      as a <span className="text-amber-400">web socket</span>,
                      unfortunately there are problems when hosting{" "}
                      <span className="text-orange-400">Socket.io</span> so that
                      the website is not real time after being deployed but
                      works well locally, I made this project just to learn how
                      to make a{" "}
                      <span className="text-lime-400">
                        real time application
                      </span>
                    </motion.p>
                  </motion.div>

                  <motion.div
                    className="absolute w-full h-full"
                    animate={video != 3 ? "initial" : "visible"}
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
                      onClick={() =>
                        window.open("https://alexanderfarrel.github.io")
                      }
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
                      After learning{" "}
                      <span className="text-orange-400">html</span>,{" "}
                      <span className="text-blue-400">Css</span>, and{" "}
                      <span className="text-yellow-400"> javascript</span> I
                      immediately learned to make a personal portfolio, I made
                      it using pure{" "}
                      <span className="text-orange-400">html</span>,{" "}
                      <span className="text-blue-400">Css</span>, and{" "}
                      <span className="text-yellow-400"> javascript</span>, this
                      website has a{" "}
                      <span className="text-teal-400">landing page</span>{" "}
                      concept, unlike current portfolios that use several pages.
                    </motion.p>
                  </motion.div>
                </motion.section>
              </div>
            </div>
          </>
        )}
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
        <motion.div className="absolute left-0 bottom-0 h-[150vh] w-full z-10">
          <Canvas>
            <Stars
              radius={windowWidth < 1200 ? 20 : 50}
              count={400}
              factor={windowWidth < 1200 ? "5" : "3"}
              fade
              speed={3}
            />
          </Canvas>
        </motion.div>
      </div>
    </>
  );
}
