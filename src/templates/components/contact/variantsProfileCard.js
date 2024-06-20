export const VariantsProfileCard = (yImg) => ({
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
});
