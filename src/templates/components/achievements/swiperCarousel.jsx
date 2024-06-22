import { useMotionValue, motion } from "framer-motion";

export default function SwiperCarousel({
  swiperParentRef,
  windowWidth,
  animateClose,
  swiperWidth,
  imageIndex,
  openSwiper,
  setImageIndex,
  picturesCarousel,
}) {
  const dragX = useMotionValue(0);

  const DRAG_BUFFER = windowWidth < 1200 ? 20 : 50;

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imageIndex < picturesCarousel.length - 1) {
      setImageIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imageIndex > 0) {
      setImageIndex((pv) => pv - 1);
    }
  };
  return (
    <>
      {/* images swipes */}
      <section
        className={`fixed top-0 left-0 w-full h-full overflow-hidden z-30 bg-black/50 ${
          imageIndex !== null ? "" : "hidden"
        }`}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{
            x: dragX,
          }}
          className="flex absolute top-0 left-0 w-full h-full items-center"
          initial={{
            opacity: 0,
          }}
          animate={{
            translateX: `-${imageIndex * 100}%`,
            opacity: animateClose || imageIndex == null ? 0 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 30,
            opacity: {
              delay: animateClose || imageIndex == null ? 0 : 0.35,
            },
          }}
          onDragEnd={onDragEnd}
        >
          <ImagesSwiper
            windowWidth={windowWidth}
            picturesCarousel={picturesCarousel}
            imageIndex={imageIndex}
            swiperParentRef={swiperParentRef}
            swiperWidth={swiperWidth}
          />
        </motion.div>
        <Dots
          windowWidth={windowWidth}
          imageIndex={imageIndex}
          setImageIndex={openSwiper}
          picturesCarousel={picturesCarousel}
        />
      </section>
    </>
  );
}

const ImagesSwiper = ({
  swiperParentRef,
  swiperWidth,
  imageIndex,
  picturesCarousel,
  windowWidth,
}) => {
  return (
    <>
      {picturesCarousel.map((item, index) => (
        <div
          key={index}
          className={`w-full h-full flex justify-center shrink-0 ${
            windowWidth < 1200 ? "cursor-default" : "cursor-none"
          }`}
        >
          <motion.div
            style={{ width: `${swiperWidth}vw` }}
            className={`flex items-center`}
            animate={{
              scale: imageIndex === index ? 1 : 0.7,
              transition: { type: "tween" },
            }}
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

const Dots = ({ imageIndex, setImageIndex, picturesCarousel, windowWidth }) => {
  return (
    <div
      className={`mt-4 flex w-full justify-center bottom-4 absolute z-30 ${
        windowWidth < 1200 ? "cursor-default" : "cursor-none"
      }`}
    >
      <div
        className={`flex gap-1 items-center max-w-[80px] overflow-hidden cursor-default`}
        id="parentDots"
      >
        {picturesCarousel.map((_, idx) => {
          return (
            <motion.button
              id="parentDots"
              key={idx}
              onClick={() => setImageIndex(idx)}
              style={{
                scale:
                  imageIndex === idx
                    ? 0.95
                    : imageIndex >= 2 &&
                      imageIndex <= picturesCarousel.length - 3
                    ? imageIndex - 2 === idx || imageIndex + 2 === idx
                      ? 0.65
                      : imageIndex - 3 === idx || imageIndex + 3 === idx
                      ? 0.65
                      : 0.8
                    : imageIndex >= picturesCarousel.length - 3
                    ? picturesCarousel.length - 5 === idx
                      ? 0.65
                      : 0.8
                    : imageIndex <= 2
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
                  imageIndex >= 3 && imageIndex <= picturesCarousel.length - 3
                    ? (imageIndex - 2) * -16 + 4
                    : imageIndex < 3
                    ? 0
                    : (picturesCarousel.length - 3 - 2) * -16 + 4,
                // translateX: `-${imageIndex * 100}%`,
              }}
              className={`h-[12px] w-[12px] shrink-0 rounded-full transition-colors ${
                idx === imageIndex ? "bg-neutral-50" : "bg-neutral-500"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
