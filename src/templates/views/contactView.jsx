import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ContactView({ windowWidth }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [yImg, setYImg] = useState(0);
  useEffect(() => {
    if (isFlipped) {
      setYImg(10);
      setTimeout(() => {
        setYImg(-180);
      }, 750);
    } else {
      setYImg(-180);
    }
    if (isAnimating && !isOverflow) {
      setIsOverflow(true);
      setTimeout(() => {
        setIsOverflow(false);
      }, 1500);
    }
  }, [isAnimating]);

  const handleFlip = () => {
    if (isDisabled) return;
    setIsDisabled(true);
    setIsAnimating(!isAnimating);
    setTimeout(() => {
      setIsFlipped(!isFlipped);
    }, 500);
    setTimeout(
      () => {
        setIsDisabled(false);
      },
      isFlipped ? 1500 : 2200
    );
  };
  const variantsProfileCard = {
    hidden: {
      y: yImg,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
    visible1: {
      y: 10,
      transition: { delay: 1, type: "spring", stiffness: 250, damping: 30 },
    },
    visible2: {
      y: -30,
      transition: { type: "spring", stiffness: 200, damping: 30 },
    },
  };

  const height = windowWidth <= 316 ? "max-h-[29rem]" : "max-h-[28rem]";

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2 } }}
          className={`max-w-[25rem] ${height} h-full w-full ${
            windowWidth < 400 ? "mx-5" : "mx-10"
          } flip-card`}
        >
          <motion.main
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{
              ease: "easeInOut",
              duration: 0.6,
            }}
            className="flip-card-inner w-full h-full"
          >
            <main
              className={`flip-card-front flex flex-col items-center rounded-lg py-5 ${
                windowWidth <= 415 ? "px-5" : "px-8"
              } gap-5 bg-gradient-to-b from-slate-800 to-slate-900`}
            >
              <motion.h1
                animate={
                  isAnimating
                    ? { opacity: 0, x: -30, transition: { delay: 0.3 } }
                    : { opacity: 1, x: 0, transition: { delay: 1 } }
                }
                className="text-3xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
              >
                Contact Me
              </motion.h1>
              <div className="flex flex-col gap-3 w-full">
                <motion.input
                  animate={
                    isAnimating
                      ? { width: "0%", opacity: 0, transition: { delay: 0.25 } }
                      : {
                          width: "100%",
                          opacity: 1,
                          transition: { delay: 1.2 },
                        }
                  }
                  type="email"
                  placeholder="youremail@example.com"
                  required
                  className="rounded-lg p-1 px-3 outline-none bg-gray-100/5 placeholder:text-white/50"
                />
                <motion.textarea
                  animate={
                    isAnimating
                      ? { height: "0%", opacity: 0, transition: { delay: 0.1 } }
                      : {
                          height: "100%",
                          opacity: 1,
                          transition: { delay: 1.3 },
                        }
                  }
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  dir="ltr"
                  placeholder="Type your message here"
                  required
                  className="resize-none rounded-lg p-1 px-3 outline-none bg-gray-100/5 hidden-scrollbar placeholder:text-white/50"
                />
              </div>
              <div className="flex gap-3 w-full">
                <motion.div
                  animate={
                    isAnimating
                      ? { opacity: 0, x: -20, transition: { delay: 0 } }
                      : {
                          opacity: 1,
                          x: 0,
                          transition: { delay: 1.35 },
                        }
                  }
                  onClick={handleFlip}
                  className="flex gap-2 justify-center items-center shrink-0 bg-gray-700 p-1 pr-3 pl-2 rounded-lg"
                >
                  <img
                    src="icons/profile.png"
                    alt=""
                    className="max-w-[18px] w-full"
                  />

                  <p className="text-[15px]" onClick={handleFlip}>
                    About Me
                  </p>
                </motion.div>
                <motion.button
                  animate={
                    isAnimating
                      ? { opacity: 0, x: 20, transition: { delay: 0 } }
                      : {
                          opacity: 1,
                          x: 0,
                          transition: { delay: 1.4 },
                        }
                  }
                  className="w-full bg-sky-600 rounded-lg p-1 font-medium"
                >
                  Send
                </motion.button>
              </div>
            </main>
            <main
              className={`flip-card-back flex flex-col items-center rounded-lg py-5 px-8 gap-5 bg-gradient-to-b from-zinc-700 from-30% to-zinc-900 ${
                isOverflow ? "overflow-hidden" : ""
              }`}
            >
              <motion.div
                id="image"
                initial={{ y: -180 }}
                variants={variantsProfileCard}
                animate={
                  isAnimating
                    ? isOverflow
                      ? "visible1"
                      : "visible2"
                    : "hidden"
                }
                className="max-w-[170px] bg-gray-400 rounded-xl absolute top-0"
              >
                <img
                  src="/images/profile-transparent.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div
                className={`flex flex-col gap-3 absolute top-[9.4rem] w-full ${
                  windowWidth <= 374 ? "px-3" : "px-5"
                } text-center`}
              >
                <header>
                  <motion.h1
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isAnimating
                        ? {
                            opacity: 1,
                            x: 0,
                            transition: { delay: 1.8 },
                          }
                        : {
                            opacity: 0,
                            x: -10,
                            transition: { delay: 0.2 },
                          }
                    }
                    className="text-3xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
                  >
                    Alexander
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isAnimating
                        ? {
                            opacity: 1,
                            x: 0,
                            transition: { delay: 1.85 },
                          }
                        : {
                            opacity: 0,
                            x: -10,
                            transition: { delay: 0.15 },
                          }
                    }
                    className="text-sm text-gray-400 font-light"
                  >
                    Full-Stack Developer
                  </motion.p>
                </header>
                <div
                  className={`text-start text-neutral-200 ${
                    windowWidth <= 435 ? "text-sm" : "text-[15px]"
                  }`}
                >
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isAnimating
                        ? {
                            opacity: 1,
                            x: 0,
                            transition: { delay: 1.9 },
                          }
                        : {
                            opacity: 0,
                            x: -10,
                            transition: { delay: 0.1 },
                          }
                    }
                  >
                    Experienced full-stack developer with a passion for
                    continuous learning and growth. Proficient in MERN stack,
                    Next.js, Express, and other, with 2 years of experience in
                    React. Skilled in building efficient and scalable web
                    applications.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isAnimating
                        ? {
                            opacity: 1,
                            x: 0,
                            transition: { delay: 1.95 },
                          }
                        : {
                            opacity: 0,
                            x: -10,
                            transition: { delay: 0.05 },
                          }
                    }
                    className="mt-3"
                  >
                    Feel free to customize it as needed!
                  </motion.p>
                </div>
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    isAnimating
                      ? {
                          opacity: 1,
                          x: 0,
                          transition: { delay: 2 },
                        }
                      : {
                          opacity: 0,
                          x: -10,
                        }
                  }
                  onClick={handleFlip}
                  className="self-center mt-2 py-[6px] px-[14px] rounded-full bg-sky-600 text-sm"
                >
                  Contact Me
                </motion.button>
              </div>
            </main>
          </motion.main>
          {/* <div className="opacity-70 absolute w-full h-full top-0 -z-10">
            <div className="w-72 h-72 bg-purple-300 rounded-full filter -z-10 blur-3xl mix-blend-multiply absolute top-[-40%] left-[-40%] translate-x-1/2 translate-y-1/2" />
            <div className="w-72 h-72 bg-blue-300 rounded-full filter -z-10 blur-3xl mix-blend-multiply absolute top-[-40%] left-[90%] -translate-x-1/2 translate-y-1/2" />
            <div className="w-72 h-72 bg-red-300 rounded-full filter -z-10 blur-3xl mix-blend-multiply absolute top-[80%] left-[-40%] translate-x-1/2 -translate-y-1/2" />
            <div className="w-72 h-72 bg-yellow-300 rounded-full filter -z-10 blur-3xl mix-blend-multiply absolute top-[80%] left-[90%] -translate-x-1/2 -translate-y-1/2" />
          </div> */}
        </motion.section>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute inset-0 -z-20"
      >
        <Canvas>
          <Stars
            radius={50}
            count={1000}
            factor={windowWidth < 1000 ? "5" : "3"}
            fade
            speed={2}
          />
        </Canvas>
      </motion.div>
    </>
  );
}
