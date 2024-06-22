import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function handleVideoPlay() {
  const [video, setVideo] = useState(1);
  const title1 = useRef(null);
  const title2 = useRef(null);
  const title3 = useRef(null);
  const video1 = useRef(null);
  const video2 = useRef(null);
  const video3 = useRef(null);
  const isInView1 = useInView(title1, { margin: "-100px 0px -300px 0px" });
  const isInView2 = useInView(title2, { margin: "-100px 0px -300px 0px" });
  const isInView3 = useInView(title3, { margin: "-100px 0px -300px 0px" });

  const [isVideosActived, setIsVideosActived] = useState(false);
  useEffect(() => {
    if (!isInView1 && !isInView2 && !isInView3) {
      if (isVideosActived) {
        if (video == 1) {
          video1.current.play();
        } else {
          video1.current.pause();
        }
        if (video == 2) {
          video2.current.play();
        } else {
          video2.current.pause();
        }
        if (video == 3) {
          video3.current.play();
        } else {
          video3.current.pause();
        }
      }
      return;
    }
    if (isInView1) {
      setVideo(1);
      video1.current.play();
    } else {
      video1.current.pause();
    }

    if (isInView2) {
      setVideo(2);
      video2.current.play();
    } else {
      video2.current.pause();
    }

    if (isInView3) {
      setVideo(3);
      video3.current.play();
    } else {
      video3.current.pause();
    }
  }, [isInView1, isInView2, isInView3, video, isVideosActived]);

  return {
    title1,
    title2,
    title3,
    video1,
    video2,
    video3,
    isInView1,
    isInView2,
    isInView3,
    isVideosActived,
    setIsVideosActived,
    video,
    setVideo,
  };
}
