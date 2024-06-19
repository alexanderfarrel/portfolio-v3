import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Home from "../../assets/icons/navIcons/home";
import { useStoreGlobal } from "../../services/zustand/store";

export default function Navbar() {
  const url = window.location.pathname;
  const [open, setOpen] = useState(false); // for open navbar
  const [initial, setInitial] = useState(true); // animation initialization
  const [options, setOptions] = useState({
    isHidden: false,
    startCount: false,
  }); // hidden navbar after 3s
  const { isHidden, startCount } = options;

  const [defaultYValue, setDefaultYValue] = useState(0);
  const [yValue, setYValue] = useState(0); // bg blue animation
  const [timeoutId, setTimeoutId] = useState(null); // bg blue animation

  useEffect(() => {
    if (url === "/") {
      setDefaultYValue(-80);
      setYValue(-80);
    } else if (url === "/achievements") {
      setDefaultYValue(40);
      setYValue(40);
    } else if (url === "/projects") {
      setDefaultYValue(80);
      setYValue(80);
    } else if (url === "/contact") {
      setDefaultYValue(-40);
      setYValue(-40);
    } else if (url === "/home") {
      setDefaultYValue(-80);
      setYValue(-80);
    }
  }, []);

  useEffect(() => {
    if (!startCount) {
      return;
    }
    const id = setTimeout(() => {
      if (!open) {
        setOptions({ isHidden: true, startCount: false });
      }
    }, 3000);
    setTimeoutId(id);

    return () => clearTimeout(id);
  }, [startCount, open]);

  useEffect(() => {
    const time = setTimeout(
      () => {
        setInitial(false);
        setOptions({ isHidden: false, startCount: true });
      },
      url != "/" ? (url != "/home" ? 3000 : 3200) : 9000
    );

    return () => clearTimeout(time);
  }, []);

  const handleClick = () => {
    if (isHidden) {
      setOptions({ isHidden: false, startCount: false });
      setTimeout(() => {
        setOpen(true);
      }, 100);
    } else if (open) {
      setOpen(false);
      setOptions({ startCount: true });
    } else {
      setOpen(true);
      setOptions({ startCount: false });

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  };

  const variants = {
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

  const mainVariants = {
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

  const hamburgerVariants = {
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

  const navListVariants = {
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

  const handleNavClick = (num, path) => {
    if (path?.length > 0 && window?.location?.pathname !== path) {
      window.location.href = path;
    }
    setYValue(num);
    const time = setTimeout(() => {
      handleClick();
    }, 300);
    return () => clearTimeout(time);
  };

  const changeCursorVariant = useStoreGlobal((state) => state.setCursorVariant);
  const navbarEnter = () => {
    changeCursorVariant("hidden");
  };
  const cursorDefault = () => {
    changeCursorVariant("default");
  };
  return (
    <motion.nav
      className="fixed right-0 top-1/2 -translate-y-1/2 min-h-[3.2rem] max-h-[18rem] w-12 flex justify-center items-center overflow-hidden z-30 cursor-auto"
      animate={{ right: isHidden ? 0 : 10 }}
    >
      <motion.main
        onMouseEnter={navbarEnter}
        onMouseLeave={cursorDefault}
        className="w-full h-full min-h-[2.8rem] max-h-[13.5rem] max-w-[2.7rem] flex flex-col items-center justify-center relative rounded-full overflow-hidden scale-0 opacity-0"
        id="parentNav"
        variants={mainVariants}
        animate={
          initial
            ? { scale: 0, x: "100%" }
            : isHidden
            ? "hiddenTrue"
            : "hiddenFalse"
        }
      >
        <motion.div
          className="w-full h-full absolute bg-gray-700/70 blur-xl z-10 scale-0"
          variants={variants}
          animate={open ? "open" : "close"}
        />
        <motion.span
          id="navbar"
          className="max-w-7 min-w-7 text-white z-10 cursor-pointer py-[7px]"
          variants={navListVariants}
          animate={open ? "visibleAbove1" : "hiddenAbove1"}
          onClick={() => handleNavClick(-80, "/home")}
          onHoverStart={() => setYValue(-80)}
          onHoverEnd={() => setYValue(defaultYValue)}
        >
          <Home />
        </motion.span>

        <motion.img
          id="navbar"
          src="/navIcons/contact.png"
          alt="contactIcon"
          className="max-w-7 min-w-7 z-10 cursor-pointer py-[7px]"
          variants={navListVariants}
          animate={open ? "visibleAbove2" : "hiddenAbove2"}
          onClick={() => handleNavClick(-40, "/contact")}
          onHoverStart={() => setYValue(-40)}
          onHoverEnd={() => setYValue(defaultYValue)}
        />

        <motion.div
          className="w-9 h-9 py-[7px] px-2 flex flex-col justify-between z-30 cursor-pointer"
          onClick={() => handleClick()}
          id="hamburger"
          onHoverStart={() => setYValue(0)}
          onHoverEnd={() => setYValue(defaultYValue)}
        >
          <motion.span
            id="navbar"
            variants={hamburgerVariants}
            animate={open ? "lineFirstOpen" : "lineFirstClose"}
            className="w-full h-[2px] bg-white rounded-xl"
          />
          <motion.span
            id="navbar"
            variants={hamburgerVariants}
            animate={open ? "lineSecondOpen" : "lineSecondClose"}
            className="w-full h-[2px] bg-white rounded-xl"
          />
          <motion.span
            id="navbar"
            variants={hamburgerVariants}
            animate={open ? "lineThirdOpen" : "lineThirdClose"}
            className="w-full h-[2px] bg-white rounded-xl"
          />
        </motion.div>
        <motion.img
          id="navbar"
          src="/navIcons/certificate.png"
          alt="certificateIcon"
          className="max-w-7 min-w-7 z-10 cursor-pointer py-[7px]"
          variants={navListVariants}
          animate={open ? "visibleBelow2" : "hiddenBelow2"}
          onClick={() => handleNavClick(40, "/achievements")}
          onHoverStart={() => setYValue(40)}
          onHoverEnd={() => setYValue(defaultYValue)}
        />
        <motion.img
          id="navbar"
          src="/navIcons/project-icon.png"
          alt="projectIcon"
          className="max-w-7 min-w-7 z-10 cursor-pointer py-[7px]"
          variants={navListVariants}
          animate={open ? "visibleBelow1" : "hiddenBelow1"}
          onClick={() => handleNavClick(80, "/projects")}
          onHoverStart={() => setYValue(80)}
          onHoverEnd={() => setYValue(defaultYValue)}
        />
      </motion.main>

      <motion.div
        id="roundedBlue"
        className="w-10 h-10 rounded-full absolute bg-blue-500 scale-0 -z-10"
        initial={{ scale: 0 }}
        animate={
          open
            ? {
                scale: 1,
                y: yValue,
                transition: { type: "spring", bounce: 0.2, duration: 0.35 },
              }
            : { scale: 0, y: 0 }
        }
        style={{ clipPath: "circle(20px at 50% 50%)" }}
      />
    </motion.nav>
  );
}
