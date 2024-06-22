import { useState, useEffect } from "react";
import { cursorHidden } from "../../../../services/hooks/handleCursorTrailer";

function HandleMouseMove({
  swiperParentRef,
  cursorClose,
  linkEnter,
  cursorDefault,
}) {
  const [imageIndex, setImageIndex] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (imageIndex == null) {
        return;
      }
      if (e.target.id == "parentDots") {
        cursorHidden();
        return;
      }
      if (
        swiperParentRef.current &&
        swiperParentRef.current.id !== e.target.id
      ) {
        cursorClose();
        linkEnter();
        return;
      }
      cursorDefault();
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [imageIndex, swiperParentRef, cursorClose, linkEnter, cursorDefault]);

  return { imageIndex, setImageIndex };
}

export default HandleMouseMove;
