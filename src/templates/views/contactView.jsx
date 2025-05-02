import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  cursorDefault,
  cursorHidden,
} from "../../services/hooks/handleCursorTrailer";
import BgStars from "../components/stars";
import FrontCard from "../components/contact/frontCard";
import BackCard from "../components/contact/backCard";
import contactAnimation from "../components/contact/hooks/contactAnimation";
import handleFlipFnc from "../components/contact/hooks/handleFlip";
import FooterSocialMedia from "../components/contact/footerSocialMedia";
import PropTypes from "prop-types";

export default function ContactView({ windowWidth, isLeaving }) {
  contactAnimation();
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () =>
    handleFlipFnc({
      isDisabled,
      setIsDisabled,
      isAnimating,
      setIsAnimating,
      isFlipped,
      setIsFlipped,
    });

  useEffect(() => {
    if (isDisabled) {
      cursorDefault();
    }
  }, [isDisabled]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    setIsDisabled(true);
    setIsLoading(true);
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        if (response.status == 200) {
          Swal.fire({
            title: "Sended!",
            text: "Your email was successfully sent",
            icon: "success",
            background: "rgb(31 41 55)",
            color: "white",
            confirmButtonColor: "rgb(22 163 74)",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            background: "rgb(31 41 55)",
            color: "white",
            confirmButtonColor: "rgb(22 163 74)",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          background: "rgb(31 41 55)",
          color: "white",
          confirmButtonColor: "rgb(22 163 74)",
        });
      })
      .then(() => {
        setIsDisabled(false);
        setIsLoading(false);
        e.target.reset();
      });
  };

  const controls = useAnimation();

  useEffect(() => {
    if (isLeaving) {
      controls.start({ opacity: 0, transition: { duration: 0.5 } });
    } else {
      controls.start({
        opacity: 1,
        transition: { duration: 0.3, delay: 1 },
      });
    }
  }, [controls, isLeaving]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className="w-full h-screen flex justify-center items-center overflow-hidden opacity-20"
      >
        <motion.section
          initial={{ overflow: "hidden" }}
          animate={
            isFlipped
              ? { overflow: "visible" }
              : { overflow: "hidden", transition: { delay: 1 } }
          }
          className={`max-w-[25rem] relative ${
            windowWidth < 320 ? "max-h-[29rem]" : "max-h-[28rem]"
          } h-full w-full ${
            windowWidth < 400 ? "mx-5" : "mx-10"
          } flip-card rounded-lg`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              isAnimating
                ? { opacity: 0, display: "none" }
                : { opacity: 1, display: "block", transition: { delay: 1.5 } }
            }
            className="border-spin"
          />
          <motion.main
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{
              ease: "easeInOut",
              duration: 0.6,
            }}
            className="flip-card-inner w-[calc(100%-4px)] h-[calc(100%-4px)] top-[2px] left-[2px]"
          >
            <FrontCard
              windowWidth={windowWidth}
              isDisabled={isDisabled}
              isAnimating={isAnimating}
              handleFormSubmit={handleFormSubmit}
              isLoading={isLoading}
              handleFlip={handleFlip}
            />
            <BackCard
              isAnimating={isAnimating}
              windowWidth={windowWidth}
              isDisabled={isDisabled}
              handleFlip={handleFlip}
              isFlipped={isFlipped}
            />
          </motion.main>
        </motion.section>
        <FooterSocialMedia
          cursorHidden={cursorHidden}
          cursorDefault={cursorDefault}
        />
        <BgStars factor={windowWidth < 1000 ? "5" : "3"} delay={2} />
      </motion.div>
    </>
  );
}

ContactView.propTypes = {
  windowWidth: PropTypes.number,
  isLeaving: PropTypes.bool,
};
