export default function FooterEndContent({ textEnter, textLeave }) {
  return (
    <footer className="h-[40vh] flex flex-col justify-center items-center">
      <h1
        className="text-3xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent z-10"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        END
      </h1>
      <p
        className="text-xl font-thin cursor-pointer bg-gradient-to-b from-gray-200 to-gray-600 bg-clip-text text-transparent z-20"
        id="back-to-top"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        Back to Top
      </p>
    </footer>
  );
}
