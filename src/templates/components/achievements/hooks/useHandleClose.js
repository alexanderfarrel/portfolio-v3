import { useEffect, useState } from "react";

function useHandleClose(swiperParentRef, cursorDefault, setImageIndex) {
  const [animateClose, setAnimateClose] = useState(false);
  useEffect(() => {
    const handleClose = (e) => {
      if (
        !(swiperParentRef.current && swiperParentRef.current.id !== e.target.id)
      ) {
        return;
      }
      if (["hamburger", "navbar", "parentDots"].includes(e.target.id)) {
        return;
      }
      setAnimateClose(true);
      cursorDefault();
      setTimeout(() => {
        setImageIndex(null);
      }, 300);
    };

    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, [swiperParentRef, setAnimateClose, cursorDefault, setImageIndex]);

  return { animateClose, setAnimateClose };
}

export default useHandleClose;
