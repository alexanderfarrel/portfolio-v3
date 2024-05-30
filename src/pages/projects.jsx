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

function Projects() {
  const windowWidth = useWindowWidth();
  const [image, setImage] = useState(1);
  const containerDesktopRef = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { margin: "-200px 0px -200px 0px" });
  const isInView2 = useInView(ref2, { margin: "-200px 0px -200px 0px" });
  const isInView3 = useInView(ref3, { margin: "-200px 0px -200px 0px" });
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

  const desktopScroll = useScroll({
    target: containerDesktopRef,
    offset: ["start start", "end 65%"],
  });
  const scaleXTopDesktop = useTransform(
    desktopScroll.scrollYProgress,
    [0, 0.333333333334, 0.666666666667, 1],
    [0, 1, 1, 1]
  );
  const scaleXSideDesktop = useTransform(
    desktopScroll.scrollYProgress,
    [0, 0.333333333334, 0.666666666667, 1],
    [0, 0, 1, 1]
  );
  const scaleXBottomDesktop = useTransform(
    desktopScroll.scrollYProgress,
    [0, 0.333333333334, 0.666666666667, 1],
    [0, 0, 0, 1]
  );

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
    <>
      <Navbar appear={true}></Navbar>
      <div
        id="header"
        className="min-h-[40dvh] text-white flex justify-center items-center bg-neutral-800 image-mask"
      >
        <h1 className="font-bold text-7xl">Projects</h1>
      </div>

      {windowWidth > 1200 ? (
        <div
          className="gallery flex justify-around px-10"
          style={{ display: "flex" }}
          ref={containerDesktopRef}
        >
          <div className="left w-2/3">
            <div
              className={`h-[100dvh] flex flex-col justify-center items-center ${
                isInView1 ? "text-violet-600" : "text-gray-600"
              } transition-colors duration-700`}
            >
              <h1 className="text-5xl" ref={ref1}>
                E-Commerce Concept 1
              </h1>
              <p>warungjujugan.vercel.app</p>
            </div>
            <div
              className={`h-[100dvh] flex flex-col justify-center items-center ${
                isInView2 ? "text-emerald-600" : "text-gray-600"
              } transition-colors duration-700`}
            >
              <h1 className="text-5xl" ref={ref2}>
                E-Commerce Concept 2
              </h1>
              <p>warungjujugan.vercel.app</p>
            </div>
            <div
              className={`h-[100dvh] flex flex-col justify-center items-center ${
                isInView3 ? "text-fuchsia-600" : "text-gray-600"
              } transition-colors duration-700`}
            >
              <h1 className="text-5xl" ref={ref3}>
                E-Commerce Concept 3
              </h1>
              <p>warungjujugan.vercel.app</p>
            </div>
          </div>

          <div className="rightblock w-1/3 h-screen flex flex-col justify-center items-center">
            <div className="w-full h-full max-w-xl max-h-[25rem] p-2 relative rounded-[32px] overflow-hidden">
              {/* Scroll Progress */}
              <motion.div
                initial={{ scaleX: 0 }}
                style={{ scaleX: scaleXTopDesktop }}
                className="absolute bg-green-300 w-full scale-0 h-[15px] left-0 top-0"
              ></motion.div>
              <motion.div
                initial={{ scaleY: 0 }}
                style={{ scaleY: scaleXSideDesktop }}
                className="absolute bg-green-300 w-[15px] h-full origin-top scale-0 right-0 top-0"
              ></motion.div>
              <motion.div
                initial={{ scaleY: 0 }}
                style={{ scaleY: scaleXSideDesktop }}
                className="absolute bg-green-300 w-[15px] h-full origin-top scale-0 left-0 top-0"
              ></motion.div>
              <motion.div
                initial={{ scaleXBttom: 0 }}
                style={{ scaleX: scaleXBottomDesktop }}
                className="absolute bg-green-300 w-full scale-0 h-[15px] origin-left left-0 bottom-0"
              ></motion.div>
              <motion.div
                initial={{ scaleXBottom: 0 }}
                style={{ scaleX: scaleXBottomDesktop }}
                className="absolute bg-green-300 w-full scale-0 h-[15px] origin-right right-0 bottom-0"
              ></motion.div>
              {/* Scroll Progress End*/}
              {/* videos */}
              <motion.div
                id="bg-image"
                className={`w-full h-full max-w-xl max-h-[25rem] flex flex-col justify-center items-center relative overflow-hidden rounded-3xl`}
              >
                {/* background color */}
                <motion.div
                  className="w-full h-full absolute bg-violet-600"
                  animate={{
                    opacity: image == 1 ? 1 : 0,
                    transition: {
                      duration: image == 1 ? 0.4 : 1,
                      delay: image == 1 ? 0 : 0.5,
                      type: "tween",
                    },
                  }}
                ></motion.div>
                <motion.div
                  className="w-full h-full absolute bg-emerald-600"
                  animate={{
                    opacity: image == 2 ? 1 : 0,
                    transition: {
                      duration: image == 2 ? 0.4 : 1,
                      delay: image == 2 ? 0 : 0.5,
                      type: "tween",
                    },
                  }}
                ></motion.div>
                <motion.div
                  className="w-full h-full absolute bg-fuchsia-600"
                  animate={{
                    opacity: image == 3 ? 1 : 0,
                    transition: {
                      duration: image == 3 ? 0.4 : 1,
                      delay: image == 3 ? 0 : 0.5,
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
                  className="max-w-[22rem] absolute w-full h-full max-h-[14rem] rounded-xl overflow-hidden"
                >
                  <div className="w-full h-full bg-blue-600"></div>
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
                  className="max-w-[22rem] absolute w-full h-full max-h-[14rem] rounded-xl overflow-hidden"
                >
                  <div className="w-full h-full bg-red-600"></div>
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
                  className="max-w-[22rem] absolute w-full h-full max-h-[14rem] rounded-xl overflow-hidden"
                >
                  <div className="w-full h-full bg-green-600"></div>
                </motion.div>
                {/* end content */}
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className="flex flex-col items-center h-[300dvh] relative"
            ref={refContainerMobile}
          >
            <div className="sticky w-full h-screen top-40 flex flex-col items-center">
              <div className="max-w-[22rem] w-full h-full max-h-[14rem] p-2 rounded-2xl relative overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  style={{ scaleX: scaleXTop }}
                  className="absolute bg-green-300 w-full scale-0 h-[10px] left-0 top-0"
                ></motion.div>
                <motion.div
                  initial={{ scaleY: 0 }}
                  style={{ scaleY: scaleXSide }}
                  className="absolute bg-green-300 w-[12px] h-full origin-top scale-0 right-0 top-0"
                ></motion.div>
                <motion.div
                  initial={{ scaleY: 0 }}
                  style={{ scaleY: scaleXSide }}
                  className="absolute bg-green-300 w-[12px] h-full origin-top scale-0 left-0 top-0"
                ></motion.div>
                <motion.div
                  initial={{ scaleXBttom: 0 }}
                  style={{ scaleX: scaleXBottom }}
                  className="absolute bg-green-300 w-full scale-0 h-[12px] origin-left left-0 bottom-0"
                ></motion.div>
                <motion.div
                  initial={{ scaleXBottom: 0 }}
                  style={{ scaleX: scaleXBottom }}
                  className="absolute bg-green-300 w-full scale-0 h-[12px] origin-right right-0 bottom-0"
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere distinctio totam sapiente molestias ratione, at vel
                    rem voluptatem facilis consequatur.
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
    </>
  );
}

export default Projects;
