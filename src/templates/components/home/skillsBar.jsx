import { useEffect } from "react";
import {
  Javascript,
  Html,
  Css,
  Bootstrap,
  ReactIcon,
  Github,
  Firebase,
  Nodejs,
  Npm,
  GsapIcon,
} from "../../../assets/icons/skillsIcons";
import Zustand from "../../../assets/icons/skills/zustand";

export default function SkillsBar({ id }) {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller-inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };

    if (!window.matchMedia("(prefress-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);
  return (
    <div
      className="w-full masking border-b border-t scroller flex-shrink-0"
      id={id}
      data-direction={id}
    >
      <div
        className="w-full flex h-11 min-h-11 overflow-hidden scroller-inner opacity-80 items-center gap-4"
        style={{ "--direction": "-50%" }}
      >
        <Javascript className="max-w-9 min-w-9 text-yellow-500" />
        <Html className="max-w-9 min-w-9 text-orange-500" />
        <Css className="max-w-9 min-w-9 text-blue-500" />
        <Bootstrap className="min-w-10 max-w-10 text-purple-500" />
        <img src="/icons/sass.png" className="max-w-10" alt="sass" />
        <ReactIcon className="max-w-10 min-w-10 text-cyan-500" />
        <Github className="max-w-10 min-w-10 text-gray-300" />
        <Firebase className={"max-w-10 min-w-10 text-amber-500"} />
        <img
          src="/icons/mongo.png"
          alt="mongodb"
          className="max-w-9 -ml-2 -mr-1"
        />
        <Nodejs className={"max-w-9 min-w-9 text-green-500"} />
        <Npm className={"min-w-10 max-w-10 text-red-500"} />
        <p className="text-white text-xl bg-gray-700 rounded-full px-[7px] p-[1px] pb-[6px] -ml-1">
          ex
        </p>
        <img
          src="/icons/framer-motion.png"
          className="max-w-[2rem] bg-white p-1 rounded-lg ml-2"
          alt="framer-motion"
        />
        <img
          src="/icons/git.png"
          className="max-w-10 min-w-10 min-h-10 mx-1"
          alt="git"
        />
        <img src="/icons/nextjs.png" className="max-w-10 -ml-2" alt="next" />
        <img src="/icons/redux.png" className="max-w-9" alt="redux" />
        <img src="/icons/tailwind.png" className="max-w-10" alt="tailwind" />
        <GsapIcon className={"w-full h-full min-w-8 max-w-8"} />
        <img src="/icons/jwt.png" className="max-w-9" alt="jwt" />
        <img src="/icons/typescript.png" className="max-w-9" alt="Typescript" />
        <Zustand className={"max-w-9 min-w-9"} />
        <img src="/icons/docker.png" className="max-w-9" alt="Docker" />
        <img
          src="/icons/python.png"
          className="max-w-9 mt-[5px]"
          alt="Python"
        />
      </div>
    </div>
  );
}
