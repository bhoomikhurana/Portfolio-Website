import Image from "next/image";
import React from "react";
import myHouse from "../assets/images/myHouse.png";

function About() {
  return (
    <section className="flex lg:flex-row flex-col w-[90%] sm:w-[100%] h-full items-center justify-center gap-16 pb-1 sm:py-2">
      <article className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-indigo-400 font-extrabold lg:text-5xl text-4xl primaryWText">
          About me
        </h1>
        <div className="flex flex-col items-center c gap-4">
          <p className="text-lg lg:text-xl dark:text-secondaryBText secondaryWText">
            A final year CSE student with a passion for technology and community
            engagement. I love diving into the world of{" "}
            <span className="className=text-lg lg:text-xl font-extrabold text-transparent sm:text-lg bg-gradient-to-r from-indigo-300 to-indigo-500 bg-clip-text">
              {" "}
              Full Stack Development
            </span>
            . I'm really into{" "}
            <span className="className=text-lg lg:text-xl font-extrabold text-transparent sm:text-lg bg-gradient-to-r from-indigo-300 to-indigo-500 bg-clip-text">
              {" "}
              UI/UX{" "}
            </span>{" "}
            design too - there's something about creating beautiful,
            user-friendly interfaces that just gets me excited. You'll often
            find me contributing to{" "}
            <span className="className=text-lg lg:text-xl font-extrabold text-transparent sm:text-lg bg-gradient-to-r from-indigo-300 to-indigo-500 bg-clip-text">
              open source{" "}
            </span>{" "}
            projects and deeply invested in{" "}
            <span className="className=text-lg lg:text-xl font-extrabold text-transparent sm:text-lg bg-gradient-to-r from-indigo-300 to-indigo-500 bg-clip-text">
              {" "}
              Data Structures and Algorithms{" "}
            </span>
            , continually enhancing my problem-solving skills to tackle
            real-world challenges.
          </p>
        </div>
      </article>
    </section>
  );
}

export { About };
