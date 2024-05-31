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
        delay: 2,
        opacity: 0,
        yPercent: -100,
        duration: 0.5,
        ease: "circ",
      })
        .from("#roundedBlue", {
          scale: 0,
          duration: 0.4,
          ease: "easeOut",
          delay: 0.1,
        })
        .to("#roundedBlue", {
          scale: 0,
          duration: 0.4,
          delay: 0.1,
          ease: "easeIn",
        })
        .from(
          "#desk-left",
          {
            opacity: 0,
            x: -50,
          },
          "-=.8"
        )
        .from(
          "#desk-right",
          {
            opacity: 0,
            x: 50,
          },
          "<"
        );
    });
    return () => ctx.revert();
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

  useEffect(() => {
    if (!isInView1 && !isInView2 && !isInView3) {
      return;
    }
    if (isInView1) {
      video1.current.play();
    } else {
      video1.current.pause();
    }

    if (isInView2) {
      video2.current.play();
    } else {
      video2.current.pause();
    }

    if (isInView3) {
      video3.current.play();
    } else {
      video3.current.pause();
    }
  }, [isInView1, isInView2, isInView3]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // const animation = gsap.to(".photo:not(:first-child)", {
      //   opacity: 1,
      //   scale: 1,
      //   duration: 1,
      //   stagger: 1,
      // });

      ScrollTrigger.create({
        trigger: containerDesktopRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        scrub: true,
        onUpdate: (e) => {
          if (isInView1) {
            setImage(1);
          } else if (isInView2) {
            setImage(2);
          } else if (isInView3) {
            setImage(3);
          }
        },
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
  }, []);
  const paragraphVariants = {
    initial: (e) => ({
      opacity: 0,
      x: -50,
      transition: {
        delay: e * 0.04,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
    hidden: (e) => ({
      opacity: 0,
      x: 50,
      transition: {
        delay: e * 0.04,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };
  return (
    <div className="" ref={comp}>
      <Navbar appear={true}></Navbar>
      <div
        id="header"
        className="flex-col min-h-[30dvh] text-white flex justify-center items-center bg-neutral-900 image-mask gap-10"
      >
        <h1 className="font-bold text-7xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
          Projects
        </h1>
        <p>~ Scroll Down ~</p>
      </div>

      {windowWidth > 1200 ? (
        <div
          className="gallery flex justify-around px-10"
          style={{ display: "flex" }}
          ref={containerDesktopRef}
        >
          <div className="left w-2/3" id={`desk-left`}>
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
          </div>

          <div className="rightblock w-1/3 h-screen flex flex-col justify-center items-center">
            <div
              className={`w-full h-full max-w-xl ${
                windowWidth > 1811 ? "max-h-[21.5rem]" : "max-h-[19dvw]"
              } p-2 relative rounded-[32px] overflow-hidden`}
              id={`desk-right`}
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
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className="relative flex flex-col items-center min-h-[300dvh]"
            ref={refContainerMobile}
          >
            <div
              id="mainContentMobile"
              className="sticky top-40 w-full h-[80dvh] flex flex-col items-center"
            >
              <div className="max-w-[22rem] w-full h-full max-h-[14rem] p-2 rounded-2xl relative overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  style={{ scaleX: scaleXTop }}
                  className={`absolute w-full scale-0 h-[12px] left-0 top-0 bg-green-300`}
                ></motion.div>
                <motion.div
                  initial={{ scaleY: 0 }}
                  style={{ scaleY: scaleXSide }}
                  className={`absolute  w-[12px] h-full origin-top scale-0 right-0 top-0 bg-green-300`}
                ></motion.div>
                <motion.div
                  initial={{ scaleY: 0 }}
                  style={{ scaleY: scaleXSide }}
                  className="absolute bg-green-300 w-[12px] h-full origin-top scale-0 left-0 top-0"
                ></motion.div>
                <motion.div
                  initial={{ scaleXBttom: 0 }}
                  style={{ scaleX: scaleXBottom }}
                  className="absolute bg-green-300 w-[50.5%] scale-0 h-[12px] origin-left left-0 bottom-0"
                ></motion.div>
                <motion.div
                  initial={{ scaleXBottom: 0 }}
                  style={{ scaleX: scaleXBottom }}
                  className="absolute bg-green-300 w-[50.5%] scale-0 h-[12px] origin-right right-0 bottom-0"
                ></motion.div>
                <div className="relative max-w-[22rem] w-full h-full max-h-[14rem] rounded-xl overflow-hidden">
                  <motion.div
                    initial={{ x: image == 1 ? "100%" : "0" }}
                    animate={{
                      x: image == 1 ? "0" : "100%",
                      transition: { type: "tween" },
                    }}
                    className="w-full h-full bg-violet-600 absolute"
                  ></motion.div>
                  <motion.div
                    initial={{
                      x: image == 2 ? "0" : image == 1 ? "-100%" : "100%",
                    }}
                    animate={{
                      x: image == 2 ? "0" : image == 1 ? "-100%" : "100%",
                      transition: { type: "tween" },
                    }}
                    className="w-full h-full bg-emerald-600 absolute"
                  ></motion.div>
                  <motion.div
                    initial={{
                      x: image == 3 ? "0" : "-100%",
                    }}
                    animate={{
                      x: image == 3 ? "0" : "-100%",
                      transition: { type: "tween" },
                    }}
                    className="w-full h-full bg-fuchsia-600 absolute"
                  ></motion.div>
                </div>
              </div>
              <motion.section className="pt-10 w-[80dvw] max-w-[28rem] text-center relative">
                <motion.div
                  className="absolute w-full h-full"
                  animate={
                    isHidden ? "initial" : image == 1 ? "visible" : "hidden"
                  }
                >
                  <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    variants={paragraphVariants}
                    custom={isHidden ? 2 : 0}
                    className="text-3xl font-light"
                  >
                    E-commerce Concept
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    variants={paragraphVariants}
                    custom={1}
                    className="font-bold underline decoration-2 decoration-violet-600"
                  >
                    warungjujugan.vercel.app
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
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
                  <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    variants={paragraphVariants}
                    className="text-3xl font-light"
                    custom={0}
                  >
                    E-commerce Concept 2
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    variants={paragraphVariants}
                    className="font-bold underline decoration-2 decoration-violet-600"
                    custom={1}
                  >
                    warungjujugan.vercel.app
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    variants={paragraphVariants}
                    className="mt-3 font-light"
                    custom={2}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere distinctio totam sapiente molestias ratione, at vel
                    rem voluptatem facilis consequatur.
                  </motion.p>
                </motion.div>
                <motion.div
                  className="absolute w-full h-full"
                  animate={
                    image == 2 ? "initial" : image == 3 ? "visible" : "hidden"
                  }
                >
                  <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    variants={paragraphVariants}
                    className="text-3xl font-light"
                    custom={0}
                  >
                    E-commerce Concept 2
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    variants={paragraphVariants}
                    className="font-bold underline decoration-2 decoration-violet-600"
                    custom={1}
                  >
                    warungjujugan.vercel.app
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    variants={paragraphVariants}
                    className="mt-3 font-light"
                    custom={2}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere distinctio totam sapiente molestias ratione, at vel
                    rem voluptatem facilis consequatur.
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
