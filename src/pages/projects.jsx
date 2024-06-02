import React, { useLayoutEffect, useRef, useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  motion,
  stagger,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import useWindowWidth from "../hooks/windowWidth";
import Lenis from "lenis";
import Navbar from "../components/views/navbar";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#header", {
        delay: 0,
        opacity: 0,
        yPercent: -100,
        duration: 0.5,
        ease: "circ",
      })
        .to("#roundedBlue", {
          scale: 1.5,
          duration: 0.4,
          ease: "easeOut",
          delay: 0.1,
        })
        .to("#roundedBlue", {
          scale: 0,
          delay: 0.2,
          duration: 0.4,
          ease: "easeIn",
        });
    });
    return () => ctx.revert();
  }, []);

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
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });

    window.addEventListener("resize", () => {
      setWindowHeight(window.innerHeight);
    });

    if (window.innerHeight < 460) {
      alert("Please use a larger screen");
    }
    return () => {
      window.removeEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });

      window.removeEventListener("resize", () => {
        setWindowHeight(window.innerHeight);
      });
    };
  }, []);
  const windowWidth = useWindowWidth();
  const [image, setImage] = useState(1);
  const containerDesktopRef = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const video1 = useRef(null);
  const video2 = useRef(null);
  const video3 = useRef(null);
  const isInView1 = useInView(ref1, { margin: "-200px 0px -200px 0px" });
  const isInView2 = useInView(ref2, { margin: "-200px 0px -200px 0px" });
  const isInView3 = useInView(ref3, { margin: "-200px 0px -200px 0px" });

  const [isVideosActived, setIsVideosActived] = useState(false);
  useEffect(() => {
    if (!isInView1 && !isInView2 && !isInView3) {
      if (isVideosActived) {
        if (image == 1) {
          video1.current.play();
        } else {
          video1.current.pause();
        }
        if (image == 2) {
          video2.current.play();
        } else {
          video2.current.pause();
        }
        if (image == 3) {
          video3.current.play();
        } else {
          video3.current.pause();
        }
      }
      return;
    }
    if (isInView1) {
      setImage(1);
      video1.current.play();
    } else {
      video1.current.pause();
    }

    if (isInView2) {
      setImage(2);
      video2.current.play();
    } else {
      video2.current.pause();
    }

    if (isInView3) {
      setImage(3);
      video3.current.play();
    } else {
      video3.current.pause();
    }
  }, [isInView1, isInView2, isInView3, image, isVideosActived]);

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

    document.getElementById("scroll").addEventListener("click", () => {
      lenis.scrollTo(0);
    });

    // Cleanup event listener on unmount
    return () => {
      document.getElementById("scroll").removeEventListener("click", () => {
        lenis.scrollTo(0);
      });
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
    [0, 0.333333333334, 0.666666666667, 1],
    [0, 0, 1, 1]
  );
  const scaleXBottom = useTransform(
    mobileScroll.scrollYProgress,
    [0, 0.333333333334, 0.666666666667, 1],
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
              setImage(2);
            } else if (e.progress > 0.66 && e.progress <= 1) {
              setImage(3);
            } else {
              setImage(1);
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
    <div
      className="bg-gradient-to-b from-[#162635] from-20% to-black"
      ref={comp}
    >
      <Navbar appear={true}></Navbar>

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
        className="min-h-[100vh] w-full relative overflow-hidden bg-[#162635] flex flex-col items-center"
      >
        <img
          src="/images/bgHeader.png"
          alt=""
          className=" absolute min-w-[1000px] w-full h-full"
          loading="lazy"
        />

        <motion.img
          style={{
            y: translateYLayer1,
          }}
          src="/images/layer2.png"
          alt=""
          className="absolute min-w-[1000px] w-full h-full z-20"
          loading="lazy"
        />
        <motion.img
          style={{
            y: translateYLayer2,
          }}
          src="/images/layer1.png"
          alt=""
          className={`absolute top-[27.2vh] min-w-[1000px] w-full h-full z-20`}
          loading="lazy"
        />
        <motion.div
          style={{
            y:
              windowWidth < 1200 ? textTranslateYMobile : textTranslateYDesktop,
          }}
          className={`absolute ${
            windowWidth < 1200
              ? windowHeight < 560
                ? "-top-5"
                : "top-[5vh]"
              : "top-32"
          } flex flex-col items-center z-10`}
        >
          <h1
            className={`font-bold ${
              windowWidth < 1100 ? "text-[5rem]" : "text-[8rem]"
            } bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent`}
          >
            Projects
          </h1>
          <p className="">~ Scroll Down ~</p>
        </motion.div>
        {windowWidth < 1200 && (
          <motion.div
            style={{ y: textTranslateYMobile }}
            className={`absolute flex flex-col items-center mt-3 ${
              windowHeight < 650
                ? windowHeight < 560
                  ? "top-28"
                  : "top-[28vh]"
                : "top-[25vh]"
            } ${scrollY < 5 ? "z-30" : "z-10"}`}
          >
            <p className="text-sm">Disabled Videos</p>
            <p className="text-sm">For Better Experience</p>
            <motion.div
              onClick={() => setIsVideosActived(!isVideosActived)}
              className={`w-14 h-7 rounded-full border-2 ${
                !isVideosActived ? "border-green-500" : "border-yellow-300"
              } shadow-inner relative flex items-center mt-2 transition-all duration-500 ${
                scrollY > 5 && "opacity-50"
              }`}
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
          className="gallery flex justify-around px-10"
          style={{ display: "flex" }}
          ref={containerDesktopRef}
        >
          <motion.div
            className="left w-2/3"
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
                E-Commerce Concept 1
              </h1>
              <p
                className={`text-3xl underline underline-offset- ${
                  isInView1
                    ? "decoration-violet-600 text-neutral-300"
                    : "text-gray-600"
                } transition-colors duration-700`}
              >
                warungjujugan.vercel.app
              </p>
              <p
                className={`text-xl ${
                  isInView1 ? "text-neutral-300" : "text-gray-600"
                } transition-colors duration-700`}
              >
                Tech : NextJS, Firebase, Node
              </p>
              <p
                className={`text-xl ${
                  isInView1 ? "text-neutral-300" : "text-gray-600"
                } transition-colors duration-700`}
              >
                Terdapat banyak feature didalamnya seperti checkout,
                authentication, darkmode, animation menggunakan framer-motion,
                redux, role, dan lain sebagainya, namun masih belum tersedia
                payment gateway
              </p>
            </div>
            <div
              className={`h-[100dvh] px-10 flex flex-col gap-2 justify-center items-center ${
                isInView2 ? "text-emerald-600" : "text-gray-600"
              } transition-colors duration-700 text-center max-w-3xl mx-auto`}
            >
              <h1 className="text-5xl" ref={ref2}>
                E-Commerce Concept 2
              </h1>
              <p
                className={`text-3xl underline underline-offset- ${
                  isInView2
                    ? "decoration-emerald-600 text-neutral-300"
                    : "text-gray-600"
                } transition-colors duration-700`}
              >
                warungjujugan.vercel.app
              </p>
              <p
                className={`text-xl ${
                  isInView2 ? "text-neutral-300" : "text-gray-600"
                } transition-colors duration-700`}
              >
                Tech : NextJS, Firebase, Node
              </p>
              <p
                className={`text-xl ${
                  isInView2 ? "text-neutral-300" : "text-gray-600"
                } transition-colors duration-700`}
              >
                Terdapat banyak feature didalamnya seperti checkout,
                authentication, darkmode, animation menggunakan framer-motion,
                redux, role, dan lain sebagainya, namun masih belum tersedia
                payment gateway
              </p>
            </div>
            <div
              className={`h-[100dvh] px-10 flex flex-col gap-2 justify-center items-center ${
                isInView3 ? "text-fuchsia-600" : "text-gray-600"
              } transition-colors duration-700 text-center max-w-3xl mx-auto`}
            >
              <h1 className="text-5xl" ref={ref3}>
                E-Commerce Concept 3
              </h1>
              <p
                className={`text-3xl underline underline-offset- ${
                  isInView3
                    ? "decoration-fuchsia-600 text-neutral-300"
                    : "text-gray-600"
                } transition-colors duration-700`}
              >
                warungjujugan.vercel.app
              </p>
              <p
                className={`text-xl ${
                  isInView3 ? "text-neutral-300" : "text-gray-600"
                } transition-colors duration-700`}
              >
                Tech : NextJS, Firebase, Node
              </p>
              <p
                className={`text-xl ${
                  isInView3 ? "text-neutral-300" : "text-gray-600"
                } transition-colors duration-700`}
              >
                Terdapat banyak feature didalamnya seperti checkout,
                authentication, darkmode, animation menggunakan framer-motion,
                redux, role, dan lain sebagainya, namun masih belum tersedia
                payment gateway
              </p>
            </div>
          </motion.div>

          <div className="rightblock w-1/3 h-screen flex flex-col justify-center items-center">
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
                id="bg-image"
                className={`w-full h-full max-w-xl flex flex-col justify-center items-center relative overflow-hidden rounded-3xl`}
              >
                {/* background color */}
                <motion.div
                  className="w-full h-full absolute bg-violet-600 blur-[200px]"
                  animate={{
                    opacity: image == 1 ? 1 : 0,
                    transition: {
                      duration: image == 1 ? 0.4 : 1,
                      type: "tween",
                    },
                  }}
                ></motion.div>
                <motion.div
                  className="w-full h-full absolute bg-emerald-600 blur-[200px]"
                  animate={{
                    opacity: image == 2 ? 1 : 0,
                    transition: {
                      duration: image == 2 ? 0.4 : 1,
                      type: "tween",
                    },
                  }}
                ></motion.div>
                <motion.div
                  className="w-full h-full absolute bg-fuchsia-600 blur-[200px]"
                  animate={{
                    opacity: image == 3 ? 1 : 0,
                    transition: {
                      duration: image == 3 ? 0.4 : 1,
                      type: "tween",
                    },
                  }}
                ></motion.div>
                {/* end background color */}
                {/* content */}
                <motion.div
                  animate={{
                    y: image == 1 ? 0 : "-400px",
                    opacity: image == 1 ? 1 : 0,
                    transition: { type: "spring", stiffness: 150, damping: 20 },
                  }}
                  initial={{
                    y: 0,
                  }}
                  className="max-w-[40rem] absolute aspect-video rounded-xl overflow-hidden mx-4"
                >
                  <video
                    ref={video1}
                    src="/videos/warungjujugan.mp4"
                    autoPlay={isInView1}
                    loop={isInView1}
                    muted
                    className="object-cover"
                  ></video>
                </motion.div>
                <motion.div
                  animate={{
                    y: image == 2 ? 0 : image == 3 ? "-400px" : "400px",
                    opacity: image == 2 ? 1 : 0,
                    transition: { type: "spring", stiffness: 150, damping: 20 },
                  }}
                  initial={{
                    y: "200%",
                  }}
                  className="max-w-[40rem] absolute aspect-video rounded-xl overflow-hidden mx-4"
                >
                  <video
                    ref={video2}
                    src="/videos/warungjujugan.mp4"
                    autoPlay={isInView2}
                    loop={isInView2}
                    muted
                    className="object-cover"
                  ></video>
                </motion.div>
                <motion.div
                  animate={{
                    y: image == 3 ? 0 : "400px",
                    opacity: image == 3 ? 1 : 0,
                    transition: { type: "spring", stiffness: 150, damping: 20 },
                  }}
                  initial={{
                    y: "200%",
                  }}
                  className="max-w-[40rem] absolute aspect-video rounded-xl overflow-hidden mx-4"
                >
                  <video
                    ref={video3}
                    src="/videos/portfolio_v2.mp4"
                    autoPlay={isInView3}
                    loop={isInView3}
                    muted
                    className="object-cover"
                  ></video>
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
              className="sticky top-40 w-full h-[80dvh] flex flex-col items-center"
            >
              <div
                className={`max-w-[22rem] ${
                  windowWidth > 370 ? "max-h-[13rem]" : "max-h-[56dvw]"
                } aspect-video w-full h-full p-2 rounded-2xl relative overflow-hidden`}
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
                  className="absolute bg-gray-700 blur-[3px] w-[50.5%] scale-0 h-[12px] origin-left left-0 bottom-0"
                ></motion.div>
                <motion.div
                  initial={{ scaleXBottom: 0 }}
                  style={{ scaleX: scaleXBottom }}
                  className="absolute bg-gray-700 blur-[3px] w-[50.5%] scale-0 h-[12px] origin-right right-0 bottom-0"
                ></motion.div>
                {/* Mobile Videos content*/}
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <motion.div
                    initial={{ x: image == 1 ? "100%" : "0" }}
                    animate={{
                      x: image == 1 ? "0" : "100%",
                      transition: { type: "tween" },
                    }}
                    className="w-full h-full absolute"
                  >
                    {isVideosActived ? (
                      <video
                        ref={video1}
                        src="/videos/warungjujugan.mp4"
                        autoPlay={image == 1 && isVideosActived}
                        loop={image == 1}
                        muted
                        className="object-cover"
                      ></video>
                    ) : (
                      <img src="/images/pause.jpg" alt="" />
                    )}
                  </motion.div>
                  <motion.div
                    initial={{
                      x: image == 2 ? "0" : image == 1 ? "-100%" : "100%",
                    }}
                    animate={{
                      x: image == 2 ? "0" : image == 1 ? "-100%" : "100%",
                      transition: { type: "tween" },
                    }}
                    className="w-full h-full absolute"
                  >
                    {isVideosActived ? (
                      <video
                        ref={video2}
                        src="/videos/warungjujugan.mp4"
                        autoPlay={image == 2 && isVideosActived}
                        loop={image == 2}
                        muted
                        className="object-cover"
                      ></video>
                    ) : (
                      <img src="/images/pause.jpg" alt="" />
                    )}
                  </motion.div>
                  <motion.div
                    initial={{
                      x: image == 3 ? "0" : "-100%",
                    }}
                    animate={{
                      x: image == 3 ? "0" : "-100%",
                      transition: { type: "tween" },
                    }}
                    className="w-full h-full bg-fuchsia-600 absolute"
                  >
                    {isVideosActived ? (
                      <video
                        ref={video3}
                        src="/videos/portfolio_v2.mp4"
                        autoPlay={image == 3 && isVideosActived}
                        loop={image == 3}
                        muted
                        className="object-cover"
                      ></video>
                    ) : (
                      <img src="/images/pause.jpg" alt="" />
                    )}
                  </motion.div>
                </div>
              </div>
              <motion.section className="pt-10 w-[80dvw] max-w-[28rem] text-center relative">
                <motion.div
                  className="absolute w-full h-full"
                  animate={
                    isHidden ? "initial" : image == 1 ? "visible" : "hidden"
                  }
                >
                  {/* Mobile Description */}
                  <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    variants={paragraphVariants}
                    custom={isHidden ? 2 : 0}
                    className="text-3xl font-light"
                  >
                    E-commerce Concept
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    variants={paragraphVariants}
                    custom={1}
                    className="font-bold underline decoration-2 decoration-violet-600"
                  >
                    warungjujugan.vercel.app
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    variants={paragraphVariants}
                    custom={isHidden ? 0 : 2}
                    className="mt-3 font-light"
                  >
                    <span className="text-yellow-500">Tech</span> &{" "}
                    <span className="text-blue-400">Feature :</span>
                    <span className="text-yellow-500">
                      React.js, Next.js, Node
                    </span>{" "}
                    |{" "}
                    <span className="text-blue-400">
                      Role, Authentication Google Provider, Dark Mode, Redux,
                      Animation with Framer Motion
                    </span>
                  </motion.p>
                </motion.div>

                <motion.div
                  className="absolute w-full h-full"
                  animate={
                    image == 1 ? "initial" : image == 2 ? "visible" : "hidden"
                  }
                >
                  {/* Mobile Description */}
                  <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    variants={paragraphVariants}
                    custom={isHidden ? 2 : 0}
                    className="text-3xl font-light"
                  >
                    E-commerce Concept
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    variants={paragraphVariants}
                    custom={1}
                    className="font-bold underline decoration-2 decoration-violet-600"
                  >
                    warungjujugan.vercel.app
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    variants={paragraphVariants}
                    custom={isHidden ? 0 : 2}
                    className="mt-3 font-light"
                  >
                    <span className="text-yellow-500">Tech</span> &{" "}
                    <span className="text-blue-400">Feature :</span>
                    <span className="text-yellow-500">
                      React.js, Next.js, Node
                    </span>{" "}
                    |{" "}
                    <span className="text-blue-400">
                      Role, Authentication Google Provider, Dark Mode, Redux,
                      Animation with Framer Motion
                    </span>
                  </motion.p>
                </motion.div>

                <motion.div
                  className="absolute w-full h-full"
                  animate={image != 3 ? "initial" : "visible"}
                >
                  {/* Mobile Description */}
                  <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    variants={paragraphVariants}
                    custom={isHidden ? 2 : 0}
                    className="text-3xl font-light"
                  >
                    E-commerce Concept
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    variants={paragraphVariants}
                    custom={1}
                    className="font-bold underline decoration-2 decoration-violet-600"
                  >
                    warungjujugan.vercel.app
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    variants={paragraphVariants}
                    custom={isHidden ? 0 : 2}
                    className="mt-3 font-light"
                  >
                    <span className="text-yellow-500">Tech</span> &{" "}
                    <span className="text-blue-400">Feature :</span>
                    <span className="text-yellow-500">
                      React.js, Next.js, Node
                    </span>{" "}
                    |{" "}
                    <span className="text-blue-400">
                      Role, Authentication Google Provider, Dark Mode, Redux,
                      Animation with Framer Motion
                    </span>
                  </motion.p>
                </motion.div>
              </motion.section>
            </div>
          </div>
        </>
      )}
      <div className="h-screen"></div>
    </div>
  );
}
