import React from "react";
import { ContactIcon } from "../assets/icons/ContactIcon";
import { DocumentIcon } from "../assets/icons/DocumentIcon";
import logo from "../assets/images/gifimg.gif";
import Image from "next/image";
function Presentation() {
  return (
    <main
      className="sm:h-screen mt-20  lg:min-h-[832px] sm:min-h-[500px] min-h-[500px] h-[65vh] py-5 px-6  justify-center  gap-16 sm:gap-8 "
      id="home"
    >
      <div className="flex justify-around">
        <div className="text-left">
          <h1 className="text-2xl font-semibold sm:text-3xl dark:text-bGray text-wGray dark:selection:bg-bgWhite dark:selection:text-wGray selection:text-bGray selection:bg-bgBlack">
            Hey! I am{" "}
            <span className="text-2xl font-semibold sm:text-3xl text-transparent bg-gradient-to-r from-indigo-300 to-indigo-500 bg-clip-text">
              {" "}
              Bhoomi Khurana
            </span>
          </h1>
          <p className="lg:leading-[1.25] sm:leading-[1.25] leading-[1.25] sm:text-6xl text-4xl dark:text-primaryBText text-primaryWText font-extrabold lg:w-[70%] w-[90%] dark:selection:bg-bgWhite dark:selection:text-primaryWText selection:bg-bgBlack selection:text-primaryBText">
            A passionate <br />
            <span className="text-indigo-400">FullStack Developer</span> and
            <span className="text-indigo-400"> Java Programmer</span>
            <br />
            <br />
          </p>
        </div>
        <div className="m-auto ">
          <Image className="rounded-lg" src={logo} width={885} height={905} />
        </div>
      </div>

      <div className="flex items-center gap-10 select-none">
        <a
          href="#contact"
          className="flex items-center justify-center gap-4 py-4 font-bold border-0 text-primaryWText w-fit bg-indigo-300 bg-Highlighted hover:opacity-90 px-7 rounded-2xl"
        >
          <p className="whitespace-nowrap lg:text-xl">Contact now</p>
          <ContactIcon />
        </a>
        <a
          href="/Resume_BhoomiKhurana.pdf"
          download
          className="flex items-center justify-center gap-4 py-4 font-bold border-0 dark:text-primaryWText w-fit dark:bg-primaryBText bg-secondaryWButton text-primaryBText hover:opacity-90 px-7 rounded-2xl"
          aria-label="Download CV"
        >
          <p className="hidden whitespace-nowrap sm:block lg:text-xl">
            Download CV
          </p>
          <DocumentIcon />
        </a>
      </div>
    </main>
  );
}

export { Presentation };
