import React from "react";
import { JobCard } from "../assets/cards/JobCard";
import jobs from "../data/jobs.json";

function Experience() {
  return (
    <section
      className="flex sm:w-full w-[90%] flex-col gap-16 pb-1 sm:py-20 my-8"
      id="experience"
    >
      <h1 className=" flex justify-center text-indigo-400 font-extrabold lg:text-5xl text-4xl primaryWText">
        Experience
      </h1>
      <div className="relative flex flex-col gap-20">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        <div className="absolute border-l-[1px] border-dashed border-indigo-400 left-0 h-full sm:left-2/4 z-0"></div>
      </div>
    </section>
  );
}

export { Experience };
