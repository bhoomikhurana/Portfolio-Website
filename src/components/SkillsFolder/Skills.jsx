import React from "react";
import IconReactjsLine from "../../assets/icons/IconReactjsLine";
import IconBxlMongodb from "../../assets/icons/IconBxlMongodb";
import IconPostman from "../../assets/icons/IconPostman";
import IconJava from "../../assets/icons/IconJava";
import IconBxlVuejs from "../../assets/icons/IconBxlVuejs";
import IconNuxt from "../../assets/icons/IconNuxt";
import IconHtml5 from "../../assets/icons/IconHtml5";
import IconCss3 from "../../assets/icons/IconCss3";
import IconMysql from "../../assets/icons/IconMysql";
import IconRedux from "../../assets/icons/IconRedux";
import IconChakraui from "../../assets/icons/IconChakraui";
import IconFirebase from "../../assets/icons/IconFirebase";
import IconGithub from "../../assets/icons/IconGithub";
import IconJs_badge from "../../assets/icons/IconJs_badge";
import IconBxlNodejs from "../../assets/icons/IconNodejs";

const Skills = () => {
  return (
    <section className="flex flex-col w-[90%] sm:w-[100%] h-full  justify-center gap-16 pb-1 sm:py-20 my-14 ">
      <h1 className="text-indigo-400 font-extrabold lg:text-5xl text-4xl primaryWText flex justify-center">
        Technical Skills
      </h1>

      <div className="grid grid-cols-5 md:grid-cols-5 gap-6 ">
        <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
          <IconReactjsLine className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 " />
        </div>
        <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
          <IconBxlNodejs className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 " />
        </div>
        <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
          <IconBxlMongodb className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 " />
        </div>
        <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
          <IconJs_badge className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 " />
        </div>
        <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
          <IconJava className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 " />
        </div>
        <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
          <IconBxlVuejs className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 " />
        </div>
        <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
          <IconPostman className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-90 " />
        </div>
        <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
          <IconNuxt className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 " />
        </div>
        <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
          <IconHtml5 className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 " />
        </div>
        <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
          <IconCss3 className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 " />
        </div>
        <div className="mt-10 w-full relative mx-auto h-auto overflow-hidden rounded-lg">
          <IconMysql className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 " />
        </div>
        <div className="mt-10 w-full relative mx-auto h-auto overflow-hidden rounded-lg">
          <IconRedux className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 " />
        </div>
        <div className="mt-10 w-full relative mx-auto h-auto overflow-hidden rounded-lg">
          <IconChakraui className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-90 " />
        </div>
        <div className="mt-10 w-full relative mx-auto h-auto overflow-hidden rounded-lg">
          <IconFirebase className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 " />
        </div>
        <div className="mt-10 w-full relative mx-auto h-auto overflow-hidden rounded-lg">
          <IconGithub className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 " />
        </div>
      </div>
    </section>
  );
};

export default Skills;
