import React from "react";
import Image from "next/image";

export const ATUnet = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"content2" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The Winner in the International Datahack for sustainability by
                ATU-Net: Asia Technological University Network
              </span>{" "}
              My tem, BCDT did the project called 24 hours hostel. It's the 24
              hours self-reception service for hostles around Ladkrabang Area.
            </p>
            <Image
              src="/ATU.jpg"
              alt="ATU"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 mb-4 rounded-3xl flex"
            />
            <Image
              src="/ATU2.jpg"
              alt="ATU"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4 mb-4 rounded-3xl"
            />
            <Image
              src="/ATU3.jpg"
              alt="ATU"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4 mb-4 rounded-3xl"
            />
            <Image
              src="/ATU6.jpg"
              alt="ATU"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4 mb-4 rounded-3xl"
            />
          </div>
        );
      })}
    </>
  );
};

export const AriMeta = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"content1" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The Winner in the ARI metathon by ARI Innovation District.
              </span>{" "}
              Team ARIZ win the event with Arihost project, a 24 hour
              receptionist Ai, integrate with AR technology to guide the
              customer.
            </p>
            <Image
              src="/AriCert.jpg"
              alt="Certificate"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 mb-4 rounded-3xl"
            />
            <Image
              src="/Ari1.jpg"
              alt="Ari"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4 mb-4 rounded-3xl"
            />
            <Image
              src="/Ari2.jpg"
              alt="Ari"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4 mb-4 rounded-3xl"
            />
          </div>
        );
      })}
    </>
  );
};

export const UkHack = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"content3" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                1st runner-up in the Mini Hackathon Project in the UK Careers
                Fair 2024 in the topic Hack for Impact by Ai and Robotics
                Ventures, PTTE and SACC
              </span>{" "}
              Scam Buster delivered the fraud detection solutions, to detect a
              deep fake in a video call, to prevent everyone from scammer.
            </p>
            <Image
              src="/UkCert.jpg"
              alt="Certificate"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 mb-4 rounded-3xl"
            />
            <Image
              src="/Uk1.jpg"
              alt="At Uk all event"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4 mb-4 rounded-3xl"
            />
            <Image
              src="/Uk2.jpg"
              alt="At Uk P'Ice"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4 mb-4 rounded-3xl"
            />
          </div>
        );
      })}
    </>
  );
};

export const Makathon = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"content4" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                1st runner-up in Makathon Next Gen Hackathon by CP Axtra and
                Makro.
              </span>{" "}
              My team, Makro Habibi proposed the new solution of smart dash
              cart, to enhance user experience in Makro store but still keep
              users privacy.
            </p>
            <Image
              src="/makathoncert.jpg"
              alt="Makthon Certificate"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 mb-4 rounded-3xl"
            />
            <Image
              src="/MAK1.jpg"
              alt="Makthon"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4 mb-4 rounded-3xl"
            />
            <Image
              src="/MAK3.jpg"
              alt="Makthon"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4 mb-4 rounded-3xl"
            />
            <Image
              src="/MAK2.jpg"
              alt="Makthon"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4 mb-4 rounded-3xl"
            />
          </div>
        );
      })}
    </>
  );
};

export const YTP = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"content5" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                1st runner-up and Best innovation in SCG Young Talent Program
                2024 Hell Day's hackathon by SCG Digital Office.
              </span>{" "}
              My team did the project called WeRun, it's the smart running
              glasses to connect user with thier running or exercise friends
              from anywhere without the need of travel.
            </p>
            <Image
              src="/SCGCert.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 mb-4 rounded-3xl"
            />
            <Image
              src="/HellDay1.jpg"
              alt="Makthon"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4 mb-4 rounded-3xl"
            />
            <Image
              src="/HellDay2.jpg"
              alt="Makthon"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4 mb-4 rounded-3xl"
            />
          </div>
        );
      })}
    </>
  );
};

export const GillHack = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"content6" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                6 teams finalist in GILL Capital Hackathon 2024 by GILL Capital,
                Rise and Hackathon Thailand.
              </span>{" "}
              Team PTY with Trendy project, gone through more than 300 teams in
              the screening round,to be one of the 15 teams and make it through
              to the final pitching round of 6 teams. Despite we didn't get any
              award, it's a great experience in every way.
            </p>
            <Image
              src="/GillCert.jpg"
              alt="GillCert"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 mb-4 rounded-3xl"
            />
            <Image
              src="/Gill3.jpg"
              alt="Gill"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4 mb-4 rounded-3xl"
            />
            <Image
              src="/Gill2.jpg"
              alt="Gill"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4 mb-4 rounded-3xl"
            />
            <Image
              src="/Gill.jpg"
              alt="Gill"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4 mb-4 rounded-3xl"
            />
          </div>
        );
      })}
    </>
  );
};
