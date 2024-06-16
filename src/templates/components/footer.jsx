export default function FooterEndContent({
  mouseEnter,
  mouseLeave,
  customSubtitle,
}) {
  return (
    <footer className="h-[40vh] flex flex-col justify-center items-center">
      <h1
        className="text-3xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent z-10"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        END
      </h1>
      <p
        className="text-xl font-thin bg-gradient-to-b from-gray-200 to-gray-600 bg-clip-text text-transparent z-20"
        id="back-to-top"
        onMouseEnter={() => {
          mouseEnter(), customSubtitle();
        }}
        onMouseLeave={mouseLeave}
      >
        Back to Top
      </p>
    </footer>
  );
}
