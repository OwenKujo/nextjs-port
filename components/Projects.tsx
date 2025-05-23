import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A section of <span className="text-blue-300">my recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem]  lg:min-h-[32.5rem] 
                flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div
                className="relative flex items-center justify-center  rounded-3xl
                        sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[20vh] mb-20"
              >
                <img src={img} alt={title} className="rounded-3xl relative" />
              </div>
              <h1 className="font-semibold kg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-5 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white-/[0.2] rounded-full
                                     bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-blue-300">
                    Check it out
                  </p>
                  <FaLocationArrow className="ms-3" color="#3984b2" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
