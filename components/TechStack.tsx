import React from "react";
import { SiNestjs, SiNextdotjs } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaJs, FaPython } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

const TechStackicons = [
  {
    icon: <img src="/typescript.svg" height={130} width={130} />,
    label: "TypeScript",
  },
  {
    icon: <img src="/JavaScript.png" height={130} width={130} />,
    label: "JavaScript",
  },
  { icon: <img src="/NestJS.svg" height={135} width={135} />, label: "NestJS" },
  {
    icon: <img src="/express-js.png" height={130} width={130} />,
    label: "ExpressJS",
  },
  { icon: <img src="/react.png" height={130} width={130} />, label: "React" },
  {
    icon: <img src="/next-js.svg" height={130} width={130} />,
    label: "NextJS",
  },
  {
    icon: <img src="/mongodb.svg" height={130} width={130} />,
    label: "MongoDB",
  },
  {
    icon: <img src="/postgres.png" height={130} width={130} />,
    label: "PostgreSQL",
  },
];

const Techstack = () => {
  return (
    <div className="justify-center py-22" id="techstack">
      <div className="text-white max-w-[950px] mx-auto p-8 text-center ">
        <h1 className="heading">
          A section of {""}
          <span className="text-blue-300">my techstack</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
          {TechStackicons.map((skill, index) => (
            <div
              key={index}
              className="h-[200px] w-[180px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center
                     bg-white/10 p-8 rounded-xl"
            >
              {skill.icon}
              <p className=" font-semibold mt-3">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techstack;
