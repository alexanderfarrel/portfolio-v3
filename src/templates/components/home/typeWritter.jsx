import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function TypeWritter({
  color,
  textEnter,
  cursorDefault,
  windowWidth,
}) {
  const [text] = useTypewriter({
    words: ["Web Developer", "Fullstack Developer"],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <p
      onMouseEnter={textEnter}
      onMouseLeave={cursorDefault}
      id="typing"
      className={`text-4xl lg:text-3xl md:text-2xl sm:text-xl font-medium ${
        windowWidth < 1200 ? "cursor-text" : "cursor-none"
      }`}
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
        <Cursor />
      </span>
    </p>
  );
}
