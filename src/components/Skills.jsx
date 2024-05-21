import React from "react";
import IconReactjsLine from "../assets/icons/IconReactjsLine";
import IconBxlMongodb from "../assets/icons/IconBxlMongodb";
import IconPostman from "../assets/icons/IconPostman";
import IconJava from "../assets/icons/IconJava";
import IconBxlVuejs from "../assets/icons/IconBxlVuejs";
import IconNuxt from "../assets/icons/IconNuxt";
import IconHtml5 from "../assets/icons/IconHtml5";
import IconCss3 from "../assets/icons/IconCss3";
import IconMysql from "../assets/icons/IconMysql";
import IconRedux from "../assets/icons/IconRedux";
import IconChakraui from "../assets/icons/IconChakraui";
import IconFirebase from "../assets/icons/IconFirebase";
import IconGithub from "../assets/icons/IconGithub";
import IconJs_badge from "../assets/icons/IconJs_badge";
import IconBxlNodejs from "../assets/icons/IconNodejs";
import Image from "next/image";
const Skills = () => {
  return (
    <section className="flex flex-col w-[90%] sm:w-[100%] h-full  justify-center gap-16 pb-1 sm:py-20 my-14 ">
      <h1 className="text-indigo-400 font-extrabold lg:text-5xl text-4xl primaryWText flex justify-center">
        Technical Skills
      </h1>

      <div className="grid grid-cols-5 md:grid-cols-5 gap-6">
        <div>
          <IconReactjsLine />
        </div>
        <div>
          <IconBxlNodejs />
        </div>
        <div>
          <IconBxlMongodb />
        </div>
        <div>
          <IconJs_badge />
        </div>
        <div>
          <IconJava />
        </div>
        <div>
          <IconBxlVuejs />
        </div>
        <div>
          <IconPostman />
        </div>
        <div>
          <IconNuxt />
        </div>
        <div>
          <IconHtml5 />
        </div>
        <div>
          <IconCss3 />
        </div>
        <div className="mt-10">
          <IconMysql />
        </div>
        <div className="mt-10">
          <IconRedux />
        </div>
        <div className="mt-10">
          <IconChakraui />
        </div>
        <div className="mt-10">
          <IconFirebase />
        </div>
        <div className="mt-10">
          <IconGithub />
        </div>
      </div>
    </section>
  );
};

export default Skills;
