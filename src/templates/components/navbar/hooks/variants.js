export const bgGrayVariants = {
  open: {
    clipPath: "circle(150px at 50% 50%)",
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 40,
    },
  },
  close: {
    clipPath: "circle(20px at 50% 50%)",
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};

export const containerVariants = {
  hiddenTrue: {
    scale: 1,
    opacity: 1,
    x: "50%",
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 40,
    },
  },
  hiddenFalse: {
    scale: 1,
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const hamburgerVariants = {
  lineFirstOpen: {
    rotate: -45,
    originX: "right",
    y: 3,
    x: -3,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  lineFirstClose: {
    rotate: 0,
    y: 0,
    originX: "right",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  lineSecondOpen: {
    scale: 0,
  },
  lineSecondClose: {
    scale: 1,
  },
  lineThirdOpen: {
    rotate: 45,
    originX: "right",
    y: -3,
    x: -3,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  lineThirdClose: {
    rotate: 0,
    y: 0,
    originX: "right",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const navListVariants = {
  hiddenAbove1: {
    opacity: 0,
    y: 14,
    display: "none",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  visibleAbove1: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      delay: 0.1,
    },
  },
  hiddenAbove2: {
    opacity: 0,
    y: 14,
    display: "none",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  visibleAbove2: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  hiddenBelow1: {
    opacity: 0,
    y: -14,
    display: "none",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  visibleBelow1: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      delay: 0.1,
    },
  },
  hiddenBelow2: {
    opacity: 0,
    y: -14,
    display: "none",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  visibleBelow2: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
