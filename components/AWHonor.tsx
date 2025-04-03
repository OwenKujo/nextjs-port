"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import {
  SSPI,
  AriMeta,
  ATUnet,
  GillHack,
  Makathon,
  UkHack,
  YTP,
} from "./ui/HonorCard";
import { motion } from "framer-motion";

export function AppleCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <motion.div
      initial={{ opacity: 0, x: 75 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      viewport={{ once: false, amount: 0.2 }}
      id="honor"
      className="w-full h-full py-20"
    >
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Honor and Award
      </h2>
      <Carousel items={cards} />
    </motion.div>
  );
}

const data = [
  {
    category: "SSPI Hackathon 2024 by Science Thammasat U.",
    title: "The Winner",
    src: "/sspibig.png",
    content: <SSPI />,
  },
  {
    category: "Datahack 2023 by ATU-NET",
    title: "The Winner",
    src: "/ATUpic2.png",
    content: <ATUnet />,
  },
  {
    category: "ARI Metathon by ARI Innovation District",
    title: "The Winner",
    src: "/AriPic.png",
    content: <AriMeta />,
  },

  {
    category: "Mini hackathon UK careers fair 2024 by Landing AI",
    title: "1st runner-up",
    src: "/UkHack2.png",
    content: <UkHack />,
  },
  {
    category: "Makathon Next Gen Hackathon by CP Axtra",
    title: "1st runner-up",
    src: "/Makathon4.png",
    content: <Makathon />,
  },
  {
    category: "SCG YTP2024 Hell Day Hackathon",
    title: "1st Runner-up & best innovation",
    src: "/YtpPic.png",
    content: <YTP />,
  },
  {
    category: "GILL Capital Hackathon 2024",
    title: "6 Teams finalist",
    src: "/GillPic1.png",
    content: <GillHack />,
  },
];
