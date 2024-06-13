import Button from "../ui/button";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import propTypes from "prop-types";

export default function MainContent({ color, textEnter, textLeave }) {
  const [text] = useTypewriter({
    words: ["Web Developer", "Fullstack Developer"],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <>
      <main
        id="main"
        className="text-5xl text-gray-100 flex w-full justify-around items-center max-w-7xl px-5 md:flex-col md:gap-10 sm:flex-col sm:gap-10 py-2"
      >
        <section className="flex flex-col gap-2 lg:text-4xl md:text-4xl md:gap-0 sm:text-3xl sm:gap-0">
          <h2
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            id="greeting"
            className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-light bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent"
          >
            Hi Everyone
          </h2>
          <h2
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            id="name"
            className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-light bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent"
          >
            I{"'"}m <span className="font-normal">Alexander Farrel</span>
          </h2>
          <p
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            id="typing"
            className="text-4xl lg:text-3xl md:text-2xl sm:text-xl font-medium"
          >
            <span
              style={{
                backgroundImage: `linear-gradient(to bottom, ${color.current} 0%, rgb(156 163 175) 100%)`,
              }}
              className={`text-transparent bg-clip-text`}
            >
              {text}
            </span>{" "}
            <span className="-ml-2">
              <Cursor></Cursor>
            </span>
          </p>

          <div className="flex gap-4 mt-2">
            <span id="button-cv">
              <Button
                textEnter={textEnter}
                textLeave={textLeave}
                onClick={() => alert("Contact Developer Untuk Mendapatkan CV")}
                className={`text-sm`}
                color={color}
              >
                Download CV
              </Button>
            </span>
            <span id="button-contact">
              <Button
                textEnter={textEnter}
                textLeave={textLeave}
                className={`text-sm`}
                delay={4.4}
                onClick={() =>
                  window.open(
                    window.open(
                      "https://www.instagram.com/al_ael.18/",
                      "_blank"
                    )
                  )
                }
                color={color}
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
    </>
  );
}

MainContent.propTypes = {
  color: propTypes.object,
};
