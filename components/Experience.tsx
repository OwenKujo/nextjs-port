"use client";

import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { motion } from "framer-motion";
import MagicButton from "./ui/MagicButton";
import { PiNavigationArrowFill } from "react-icons/pi";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-blue-300">work experience</span>
      </h1>

      <motion.div
        initial={{ opacity: 0, x: 75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10"
      >
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2"
            >
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16 rounded-full"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          </Button>
        ))}
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="flex justify-center text-center relative z-10 size-100 mt-10"
      >
        <a href="#experience">
          <MagicButton
            title="Download my CV"
            icon={<PiNavigationArrowFill />}
            link="https://drive.google.com/file/d/1au9qjxn_XieV5k8SvPkPNX-nz1uAnkRR/view?usp=sharing"
            position="right"
          />
        </a>
      </motion.div>
    </div>
  );
};

export default Experience;
