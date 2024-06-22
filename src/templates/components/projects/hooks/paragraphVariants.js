export const paragraphVariants = {
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
