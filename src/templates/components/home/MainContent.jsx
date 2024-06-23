import propTypes from "prop-types";
import Button from "../../ui/button";
import {
  cursorDefault,
  linkEnter,
  textEnter,
  cursorLink,
  cursorDownload,
} from "../../../services/hooks/handleCursorTrailer";
import { TypeWritter, ViewIntroBtn, SkillsBar } from "./importHomeComponents";
import Swal from "sweetalert2";

export default function MainContent({ color, viewIntro = false, windowWidth }) {
  return (
    <>
      <SkillsBar id={"skill-upper"} />
      <main
        id="main"
        className="text-5xl text-gray-100 flex w-full justify-around items-center max-w-7xl px-5 md:flex-col md:gap-10 sm:flex-col sm:gap-10 py-2"
      >
        <section className="flex flex-col gap-2 lg:text-4xl md:text-4xl md:gap-0 sm:text-3xl sm:gap-0">
          <h2
            onMouseEnter={() => textEnter()}
            onMouseLeave={cursorDefault}
            id="greeting"
            className={`text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-light bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent ${
              windowWidth < 1200 ? "cursor-text" : "cursor-none"
            }`}
          >
            Hi Everyone
          </h2>
          <h2
            onMouseEnter={() => textEnter()}
            onMouseLeave={cursorDefault}
            id="name"
            className={`text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-light bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent ${
              windowWidth < 1200 ? "cursor-text" : "cursor-none"
            }`}
          >
            I{"'"}m <span className="font-normal">Alexander Farrel</span>
          </h2>
          <TypeWritter
            windowWidth={windowWidth}
            color={color}
            textEnter={() => textEnter()}
            cursorDefault={cursorDefault}
          />
          <div className="flex gap-4 mt-2">
            <span id="button-cv">
              <Button
                mouseEnter={() => {
                  linkEnter(), cursorDownload();
                }}
                onClick={() =>
                  Swal.fire({
                    icon: "info",
                    title: "Oops!",
                    text: "Contact Developer To Get CV",
                    background: "rgb(31 41 55)",
                    color: "white",
                    confirmButtonColor: "rgb(22 163 74)",
                  })
                }
                className={`text-sm`}
              >
                Download CV
              </Button>
            </span>
            <span id="button-contact">
              <Button
                mouseEnter={() => {
                  linkEnter(), cursorLink();
                }}
                className={`text-sm`}
                delay={4.4}
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Me
              </Button>
            </span>
          </div>
        </section>
        <div
          id="image"
          className="max-w-[20rem] max-h-xl mb lg:max-w-[18rem] md:max-w-[18rem] sm:max-w-[16rem] image-mask"
        >
          <img
            src="/images/profile-transparent.png"
            alt=""
            className="object-fill w-full h-full"
          />
        </div>
      </main>
      {viewIntro ? (
        <ViewIntroBtn
          cursorDefault={cursorDefault}
          linkEnter={linkEnter}
          cursorLink={cursorLink}
          windowWidth={windowWidth}
        />
      ) : (
        ""
      )}

      <SkillsBar id={"skill-below"} />
    </>
  );
}

MainContent.propTypes = {
  color: propTypes.object,
};
