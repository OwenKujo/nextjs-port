"use client";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { TbMailFilled } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      viewport={{ once: false, amount: 0.2 }}
      className="w-full pt-5"
      id="contact"
    >
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">Contact Me</h1>
        <p className="text-white-200 md:mt-5 my-5 text-center">
          Reach out to me and let&apos;s discuss how we can work together
        </p>
        <a href="mailto:rapeepatpromlat@gmail.com">
          <MagicButton
            title="Contact me by Email"
            icon={<TbMailFilled size={25} />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-24 md:flex-row flex-col justify-between items-center mb-16">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Rapeepat Promlat
        </p>

        <motion.div className="flex items-center md:gap-3 gap-6 mt-6 mb-16">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
