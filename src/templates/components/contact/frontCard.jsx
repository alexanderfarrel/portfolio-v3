import {
  cursorCircular,
  cursorDefault,
  cursorHidden,
  cursorSend,
  linkEnter,
} from "../../../services/hooks/handleCursorTrailer";
import { motion } from "framer-motion";
import CardHeaderTitle from "./cardHeader";
import BtnRipple from "../../ui/btnRipple";
import { useRef } from "react";

export default function FrontCard({
  windowWidth,
  isDisabled,
  isAnimating,
  handleFormSubmit,
  isLoading,
  handleFlip,
}) {
  const sendBtn = useRef(null);
  const buttonRect = sendBtn?.current?.getBoundingClientRect();
  return (
    <main
      className={`flip-card-front flex flex-col items-center rounded-lg py-5 ${
        windowWidth <= 415 ? "px-5" : "px-8"
      } gap-5 bg-gradient-to-b from-slate-800 to-slate-900`}
    >
      <CardHeaderTitle
        initial={{ opacity: 0, x: -30 }}
        animate={
          isAnimating
            ? { opacity: 0, x: -30, transition: { delay: 0.3 } }
            : { opacity: 1, x: 0, transition: { delay: 1 } }
        }
        windowWidth={windowWidth}
        isDisabled={isDisabled}
      >
        Contact Me
      </CardHeaderTitle>
      <form className="flex flex-col gap-3 w-full" onSubmit={handleFormSubmit}>
        <input
          type="hidden"
          name="access_key"
          value={import.meta.env.VITE_ACCESS_KEY}
        />
        <motion.input
          onMouseMove={cursorHidden}
          onMouseLeave={cursorDefault}
          animate={
            isAnimating
              ? { width: "0%", opacity: 0, transition: { delay: 0.25 } }
              : {
                  width: "100%",
                  opacity: 1,
                  transition: { delay: 1.2 },
                }
          }
          type="email"
          name="email"
          placeholder="youremail@example.com"
          required
          className={`rounded-lg p-1 px-3 text-neutral-200 outline-none bg-gray-100/5 placeholder:text-white/50`}
        />
        <motion.textarea
          onMouseMove={cursorHidden}
          onMouseLeave={cursorDefault}
          animate={
            isAnimating
              ? { height: "0%", opacity: 0, transition: { delay: 0.2 } }
              : {
                  height: "100%",
                  opacity: 1,
                  transition: { delay: 1.3 },
                }
          }
          name="message"
          id="message"
          cols="30"
          rows="10"
          dir="ltr"
          placeholder="Type your message here"
          required
          className="resize-none rounded-lg p-1 px-3 outline-none bg-gray-100/5 hidden-scrollbar placeholder:text-white/50 text-neutral-200"
        />
        <div className="flex gap-3 w-full mt-3">
          <motion.div
            whileTap={{ scale: 0.9 }}
            animate={
              isAnimating
                ? { opacity: 0, x: -20, transition: { delay: 0 } }
                : {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 1.6 },
                  }
            }
            disabled={isDisabled}
            onClick={handleFlip}
            className="flex gap-2 justify-center items-center shrink-0 bg-gray-700 p-1 pr-3 pl-2 rounded-lg disabled:bg-gray-700/50 disabled:cursor-not-allowed outline-none"
          >
            <img
              src="icons/profile.png"
              alt=""
              className="max-w-[18px] w-full"
            />

            <p
              onMouseMove={() => {
                cursorCircular(), linkEnter(isDisabled);
              }}
              onMouseLeave={cursorDefault}
              className={`text-[15px] ${
                windowWidth < 1200 ? "cursor-pointer" : "cursor-none"
              }`}
              onClick={handleFlip}
            >
              About Me
            </p>
          </motion.div>
          <motion.button
            ref={sendBtn}
            type="submit"
            whileTap={{ scale: 0.9 }}
            onMouseMove={() => {
              cursorSend(isDisabled), linkEnter(isDisabled);
            }}
            disabled={isDisabled}
            onMouseLeave={cursorDefault}
            onClick={(e) => {
              BtnRipple({
                e,
                parent: sendBtn,
                parentRect: buttonRect,
              });
            }}
            animate={
              isAnimating
                ? { opacity: 0, x: 20, transition: { delay: 0 } }
                : {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 1.6 },
                  }
            }
            className={`w-full bg-sky-600 rounded-lg p-1 font-medium ${
              windowWidth < 1200 ? "cursor-pointer" : "cursor-none"
            } disabled:bg-sky-600/50 outline-none relative overflow-hidden`}
          >
            {isLoading ? "Sending..." : "Send"}
          </motion.button>
        </div>
      </form>
    </main>
  );
}
