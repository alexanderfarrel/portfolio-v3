import Magnetic from "./Magnetic";

export default function FooterSocialMedia({ cursorHidden, cursorDefault }) {
  return (
    <section className="absolute bottom-2 flex overflow-hidden">
      <Magnetic>
        <svg
          id="instagram"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          fill="#c8bdb0"
          style={{ transition: "fill 0.2s" }}
          className={`h-[6rem] w-[6rem] p-7 hover:fill-blue-400 cursor-pointer sm:w-[3.5rem] sm:h-[3.5rem] sm:p-3`}
          onMouseMove={cursorHidden}
          onMouseLeave={cursorDefault}
          onClick={() =>
            window.open("https://www.instagram.com/alexanderfarrel._")
          }
        >
          <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
        </svg>
      </Magnetic>

      <Magnetic>
        <svg
          id="linkedIn"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          fill="#c8bdb0"
          style={{ transition: "fill 0.2s" }}
          className={`h-[6rem] w-[6rem] p-7 hover:fill-blue-400 cursor-pointer sm:w-[3.5rem] sm:h-[3.5rem] sm:p-3`}
          onMouseMove={cursorHidden}
          onMouseLeave={cursorDefault}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/alexander-farrel-6055b5277/"
            )
          }
        >
          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
        </svg>
      </Magnetic>

      <Magnetic>
        <svg
          id="freelancer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          fill="#c8bdb0"
          style={{ transition: "fill 0.2s" }}
          className={`h-[6rem] w-[6rem] p-7 hover:fill-blue-400 cursor-pointer sm:w-[3.5rem] sm:h-[3.5rem] sm:p-3`}
          onMouseMove={cursorHidden}
          onMouseLeave={cursorDefault}
          onClick={() =>
            window.open("https://www.freelancer.com/u/AlexanderChiko")
          }
        >
          <path d="M37.6 8.203l4.36 6.113L64 8.203M14.676 55.797l11.93-11.663-7.18-7.705M35.783 8.203l-6.376 5.75 10.724.4m-29.134-6.15l2.3 4.693 12.62.786M17.753 32.54l9.324-17.393L0 13.683m18.838 19.96l8.807 9.46 9.715-9.523 3.015-17.737-11.84-.604" />
        </svg>
      </Magnetic>

      <Magnetic>
        <svg
          id="fiver"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          fill="#c8bdb0"
          style={{ transition: "fill 0.2s" }}
          className={`h-[6rem] w-[6rem] p-7 hover:fill-blue-400 cursor-pointer sm:w-[3.5rem] sm:h-[3.5rem] sm:p-3`}
          onMouseMove={cursorHidden}
          onMouseLeave={cursorDefault}
          onClick={() => window.open("https://www.fiverr.com/alexanderfarrel")}
        >
          <path d="M25,2C12.32,2,2,12.32,2,25s10.32,23,23,23s23-10.32,23-23S37.68,2,25,2z M34,36h-6V25h-4v11h-6V25h-4v-6h4.04 c0.37-4.96,3.54-8,8.46-8h2.53v6H26.5c-0.92,0-2.14,0-2.43,2H34V36z" />
        </svg>
      </Magnetic>
    </section>
  );
}
