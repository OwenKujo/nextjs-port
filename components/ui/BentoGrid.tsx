"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgorundGradientAnimation";
import { GlobeDemo } from "./gridGlobe";
import MagicButton from "./MagicButton";
import { MdTouchApp } from "react-icons/md";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.05] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(2,16,42)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,16,42,1) 0%, rgba(2,23,68,1) 62%, rgba(0,91,103,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover", "object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 bottom-4 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={img}
              className={"object-cover, object-center, w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/*<div className="absolute z-50 flex items-center justtify-center text-white font-bold">
                </div>*/}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-9"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-3">
                {[
                  "Cloud platform",
                  "Full-stack dev",
                  "Artifical Intelligence",
                ].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-l opacity-50 lg:opacity-50 rounded-lg text-center bg-[#2c2f4c]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#2c2f4c]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-3">
                <span className="py-4 px-3 rounded-lg text-center bg-[#2c2f4c]" />
                {["Data science", "Public speaking", "Mentoring"].map(
                  (item) => (
                    <span
                      key={item}
                      className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-l opacity-50 lg:opacity-50 rounded-lg text-center bg-[#2c2f4c]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}></div>

              <MagicButton
                title={"Get in touch"}
                icon={<MdTouchApp />}
                position="left"
                link="https://www.linkedin.com/in/rapeepat-promlat-a36904261/"
                otherClasses="!bg-[#161a31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
