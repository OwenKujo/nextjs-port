"use client";

import React from "react";
import { companies } from "@/data";
import { animate, motion } from "framer-motion";

const iconVariants = (duration: any) => ({
  initial: { y: 10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

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
      <div className="text-white max-w-[950px] mx-auto p-4 text-center ">
        <h1 className="heading">
          A section of {""}
          <span className="text-blue-300">my techstack</span>
        </h1>
        <motion.div
          initial={{ opacity: 0, x: 75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10"
        >
          {TechStackicons.map((skill, index) => (
            <motion.div
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.9 }}
              key={index}
              className="h-[160px] w-[150px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center
                     bg-white/10 p-8 md:p-8 rounded-xl"
            >
              {skill.icon}
              <p className=" font-semibold mt-3">{skill.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-4 mt-4 mb-20"
      >
        {companies.map((company) => (
          <React.Fragment key={company.id}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex md:max-w-40 md:max-h-20 max-w-16 max-h-10 gap-2"
            >
              <img
                src={company.nameImg}
                alt={company.name}
                className="md:w-26 w-22"
              />
            </motion.div>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default Techstack;
