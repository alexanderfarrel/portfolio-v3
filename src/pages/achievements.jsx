import { useTransform, motion, useScroll, useMotionValue } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useWindowWidth from "../hooks/windowWidth";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "../components/views/navbar";

const picturesCarousel = [
  {
    src: "front_end_dicoding.png",
  },
  {
    src: "alibaba.jpg",
  },
  {
    src: "rise.png",
  },
  {
    src: "restfull_express.png",
  },
  {
    src: "oop.png",
  },
  {
    src: "edspert.png",
  },
  {
    src: "bright_champs.jpg",
  },
  {
    src: "ajax.png",
  },
  {
    src: "async.png",
  },
  {
    src: "basic_web_dicoding.png",
  },
  {
    src: "bootstrap.png",
  },
  {
    src: "expressjs.png",
  },
  {
    src: "javascript.png",
  },
  {
    src: "javascript_dicoding.png",
  },
  {
    src: "javascript_dom.png",
  },
  {
    src: "mongodb_express.png",
  },
  {
    src: "nodejs.png",
  },
  {
    src: "talenta_ai.jpg",
  },
];

export default function Achievements() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#header-title", {
        opacity: 0,
        y: "-=50",
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
          scale: 1.2,
          duration: 0.4,
          ease: "easeOut",
          delay: 0.9,
        })
        .to("#roundedBlue", {
          scale: 0,
          delay: 0.1,
          duration: 0.4,
          ease: "easeIn",
        })
        .from(
          "#bright_champs",
          {
            opacity: 0,
            y: "-=50",
            duration: 1.3,
            ease: "ease",
          },
          "-=1.5"
        )
        .from(
          "#rise",
          {
            opacity: 0,
            y: "-=50",
            x: "-=50",
            duration: 1.3,
            ease: "ease",
          },
          "<"
        )
        .from(
          "#edspert",
          {
            opacity: 0,
            y: "-=50",
            x: "+=50",
            duration: 1.3,
            ease: "ease",
          },
          "<"
        )
        .from(
          "#oop",
          {
            opacity: 0,
            duration: 1.3,
            ease: "ease",
          },
          "<"
        )
        .from(
          "#alibaba",
          {
            opacity: 0,
            x: "-=50",
            y: "+=50",
            duration: 1.3,
            ease: "ease",
          },
          "<"
        )
        .from(
          "#front_end_dicoding",
          {
            opacity: 0,
            x: "+=50",
            y: "+=50",
            duration: 1.3,
          },
          "<"
        )
        .from(
          "#talenta_ai",
          {
            opacity: 0,
            y: "+=50",
            duration: 1.3,
          },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  const [XValue, setXValue] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const windowWidth = useWindowWidth();

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
    scrollElement.addEventListener("click", handleClick);
    const scrollElement2 = document.getElementById("back-to-top");
    scrollElement2.addEventListener("click", handleClick);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // const handleResize = () => {
    //   setWindowHeight(window.innerHeight);
    // };

    window.addEventListener("scroll", handleScroll);
    calculateX();
    carouselWidth();
    window.addEventListener("resize", () => {
      calculateX(), carouselWidth();
    });
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => {
        calculateX(), carouselWidth();
      });
      scrollElement.removeEventListener("click", handleClick);
      scrollElement2.removeEventListener("click", handleClick);
    };
  }, []);

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
  const BREAKPOINT2 = 1047;
  const BREAKPOINT3 = 686;
  const BREAKPOINT4 = 513;
  const BREAKPOINT5 = 410;

  const carousel = useRef(null);
  const [bg, setBg] = useState("bg-red-500");
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: carousel.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (e) => {
          let newBg =
            e.progress > 0.33 && e.progress < 0.66
              ? "bg-yellow-500"
              : e.progress <= 0.33
              ? "bg-orange-500"
              : "bg-teal-500";

          setBg(newBg);
        },
      });
    });
    return () => ctx.revert();
  }, [bg]);

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: carousel,
    offset: ["start start", "end end"],
  });
  const carouselTranslateX = useTransform(
    scrollYProgress2,
    [0, 1],
    ["1%", "-" + XValue + "%"]
  );
  const carouselTranslateXReverse = useTransform(
    scrollYProgress2,
    [0, 1],
    ["-1%", "" + XValue + "%"]
  );
  const scaleXCarousel = useTransform(scrollYProgress2, [0, 1], [0, 1]);

  function calculateX() {
    const minScreenWidth = 400;
    const maxScreenWidth = 1920;
    const maxValue = 93.5;
    const minValue = 75;

    if (windowWidth <= minScreenWidth) {
      setXValue(maxValue);
    } else if (windowWidth >= maxScreenWidth) {
      setXValue(minValue);
    } else {
      let result =
        maxValue -
        ((windowWidth - minScreenWidth) * (maxValue - minValue)) /
          (maxScreenWidth - minScreenWidth);
      setXValue(result);
    }
  }

  const dragX = useMotionValue(0);
  const [imgIdx, setImgIdx] = useState(null);
  const DRAG_BUFFER = windowWidth < 1200 ? 20 : 50;
  const [swiperWidth, setSwiperWidth] = useState(63);
  function carouselWidth() {
    const minScreenWidth = 400;
    const maxScreenWidth = 1920;
    const maxValue = 98;
    const minValue = 63;

    if (windowWidth <= minScreenWidth) {
      setSwiperWidth(maxValue);
    } else if (windowWidth >= maxScreenWidth) {
      setSwiperWidth(minValue);
    } else {
      let result =
        maxValue -
        ((windowWidth - minScreenWidth) * (maxValue - minValue)) /
          (maxScreenWidth - minScreenWidth);
      setSwiperWidth(Math.floor(result));
    }
  }

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIdx < picturesCarousel.length - 1) {
      setImgIdx((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIdx > 0) {
      setImgIdx((pv) => pv - 1);
    }
  };

  const [animateClose, setAnimateClose] = useState(false);
  const swiperParentRef = useRef(null);

  const openSwiper = (idx) => {
    const selection = window.getSelection();
    if (selection) selection.removeAllRanges();
    setImgIdx(idx);
    setAnimateClose(false);
  };

  useEffect(() => {
    const handleClose = (e) => {
      if (
        swiperParentRef.current &&
        swiperParentRef.current.id !== e.target.id
      ) {
        setAnimateClose(true);
        setTimeout(() => {
          setImgIdx(null);
        }, 300);
      }
    };

    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <header
        ref={comp}
        className={`min-h-[50vh] flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black gap-5`}
      >
        <h1
          id="header-title"
          className={`text-7xl font-bold bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent`}
        >
          Certificate
        </h1>
        <p
          id="header-subtitle"
          className={`bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent`}
        >
          ~ Scroll Down ~
        </p>
      </header>
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
              className={`aspect-video max-w-[30vh] relative top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] cursor-pointer`}
              onClick={() => {
                openSwiper(4);
              }}
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
              id="alibaba"
              className={`aspect-video max-w-[30vh] relative cursor-pointer ${
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
              onClick={() => {
                openSwiper(1);
              }}
              style={{ x: translateXLeft }}
            >
              <img
                id="doNotClose"
                src={`/images/certificate/alibaba.jpg`}
                draggable="false"
                alt={"alibaba"}
                className="object-cover"
              />
            </motion.div>
            <motion.div
              id="rise"
              className={`aspect-video max-w-[30vh] relative top-[-16vh] cursor-pointer ${
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
              onClick={() => {
                openSwiper(2);
              }}
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
              className={`aspect-video max-w-[30vh] relative cursor-pointer ${
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
              onClick={() => {
                openSwiper(17);
              }}
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
              className={`aspect-video max-w-[30vh] relative top-[-22vh] cursor-pointer ${
                windowWidth < BREAKPOINT2
                  ? windowWidth < BREAKPOINT3
                    ? "left-[64vw]"
                    : "left-[80vw]"
                  : "left-[63vw]"
              }`}
              onClick={() => {
                openSwiper(0);
              }}
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
              className={`aspect-video max-w-[30vh] relative cursor-pointer ${
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
              onClick={() => {
                openSwiper(5);
              }}
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
              id="bright_champs"
              className={`aspect-video max-w-[30vh] relative top-[-110vh] cursor-pointer ${
                windowWidth < BREAKPOINT1
                  ? windowWidth < BREAKPOINT2
                    ? windowWidth < BREAKPOINT3
                      ? "left-[40vw]"
                      : "left-[33vw]"
                    : " left-[40vw]"
                  : " left-[44vw]"
              }`}
              onClick={() => {
                openSwiper(6);
              }}
              style={{ y: translateYUp }}
            >
              <img
                id="doNotClose"
                src={`/images/certificate/bright_champs.jpg`}
                draggable="false"
                alt={"bright_champs"}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      {/* images carousel */}
      <section ref={carousel} className="h-[450vh] relative">
        <div
          className={`sticky top-0 flex flex-col h-screen justify-center gap-10 overflow-hidden`}
        >
          {/* lines */}
          <motion.div
            style={{ scaleX: scaleXCarousel }}
            className={`h-1 w-full absolute top-20 ${bg} origin-left transition-colors duration-1000`}
          ></motion.div>
          <motion.div
            style={{ scaleX: scaleXCarousel }}
            className={`h-1 w-full absolute bottom-20 ${bg} origin-right transition-colors duration-1000`}
          ></motion.div>
          {/* lines end */}
          <motion.main
            style={{ x: carouselTranslateX }}
            className="flex self-start gap-5"
          >
            {picturesCarousel.map((item, index) => (
              <Card
                key={index}
                srcName={item.src}
                id={index}
                setImgIdx={openSwiper}
              />
            ))}
          </motion.main>
          <motion.main
            style={{ x: carouselTranslateXReverse }}
            className="flex self-end gap-5 relative"
          >
            {picturesCarousel.map((item, index) => (
              <Card
                key={index}
                srcName={item.src}
                id={index}
                setImgIdx={openSwiper}
              />
            ))}
          </motion.main>
        </div>
      </section>
      {/* images swipes */}
      <section
        className={`fixed top-0 left-0 w-full h-full overflow-hidden z-30 bg-black/50 ${
          imgIdx !== null ? "" : "hidden"
        }`}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{
            x: dragX,
          }}
          className="flex absolute top-0 left-0 w-full h-full items-center"
          animate={{
            translateX: `-${imgIdx * 100}%`,
            opacity: animateClose ? 0 : 1,
          }}
          transition={{
            type: "tween",
            duration: 0.3,
            opacity: {
              delay: animateClose ? 0 : 0.35,
            },
          }}
          onDragEnd={onDragEnd}
        >
          <SwiperCarousel
            swiperParentRef={swiperParentRef}
            swiperWidth={swiperWidth}
          />
        </motion.div>
        <Dots imgIdx={imgIdx} setImgIdx={openSwiper} />
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

const Card = ({ srcName, id, setImgIdx }) => {
  return (
    <div
      id={id}
      className="w-[40vh] h-[26.5vh] relative overflow-hidden aspect-video cursor-pointer"
      onClick={() => {
        setImgIdx(id);
      }}
    >
      <img
        id="doNotClose"
        src={`/images/certificate/${srcName}`}
        draggable="false"
        alt=""
        className="object-fill w-full h-full"
      />
    </div>
  );
};

const SwiperCarousel = ({ swiperParentRef, swiperWidth }) => {
  return (
    <>
      {picturesCarousel.map((item, index) => (
        <div key={index} className="w-full h-full flex justify-center shrink-0">
          <motion.div
            style={{ width: `${swiperWidth}vw` }}
            className={`flex items-center`}
          >
            <img
              ref={swiperParentRef}
              id="doNotClose"
              src={`/images/certificate/${item.src}`}
              alt=""
              draggable="false"
              className="object-contain w-full cursor-grab active:cursor-grabbing"
            />
          </motion.div>
        </div>
      ))}
    </>
  );
};

const Dots = ({ imgIdx, setImgIdx }) => {
  return (
    <div className="mt-4 flex w-full justify-center bottom-4 absolute z-30">
      <div
        className="flex gap-1 items-center max-w-[80px] overflow-hidden"
        id="doNotClose"
      >
        {picturesCarousel.map((_, idx) => {
          return (
            <motion.button
              id="doNotClose"
              key={idx}
              onClick={() => setImgIdx(idx)}
              style={{
                scale:
                  imgIdx === idx
                    ? 0.95
                    : imgIdx >= 2 && imgIdx <= picturesCarousel.length - 3
                    ? imgIdx - 2 === idx || imgIdx + 2 === idx
                      ? 0.65
                      : imgIdx - 3 === idx || imgIdx + 3 === idx
                      ? 0.65
                      : 0.8
                    : imgIdx >= picturesCarousel.length - 3
                    ? picturesCarousel.length - 5 === idx
                      ? 0.65
                      : 0.8
                    : imgIdx <= 2
                    ? picturesCarousel.length - 14 === idx
                      ? 0.65
                      : 0.8
                    : 0.8,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 30,
                restDelta: 0.001,
                restSpeed: 0.001,
              }}
              animate={{
                x:
                  imgIdx >= 3 && imgIdx <= picturesCarousel.length - 3
                    ? (imgIdx - 2) * -16 + 4
                    : imgIdx < 3
                    ? 0
                    : (picturesCarousel.length - 3 - 2) * -16 + 4,
                // translateX: `-${imgIdx * 100}%`,
              }}
              className={`h-[12px] w-[12px] shrink-0 rounded-full transition-colors ${
                idx === imgIdx ? "bg-neutral-50" : "bg-neutral-500"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
