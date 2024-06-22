export default function Footer({
  mouseEnter,
  mouseLeave,
  customSubtitle,
  windowWidth,
}) {
  return (
    <footer className="h-[40vh] flex flex-col justify-center items-center">
      <h1
        className={`text-3xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent z-10 ${
          windowWidth < 1200 ? "cursor-text" : "cursor-none"
        }`}
        onMouseMove={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        END
      </h1>
      <p
        className={`text-xl font-thin bg-gradient-to-b from-gray-200 to-gray-600 bg-clip-text text-transparent z-20 ${
          windowWidth < 1200 ? "cursor-pointer" : "cursor-none"
        }`}
        id="back-to-top"
        onMouseMove={() => {
          mouseEnter(), customSubtitle();
        }}
        onMouseLeave={mouseLeave}
      >
        Back to Top
      </p>
    </footer>
  );
}
