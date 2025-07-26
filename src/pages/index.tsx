import { motion } from "framer-motion";
import React from "react";
import HeroSection from "./components/heroSection";
import GarGarHero from "./components/gargarHero";
import StatementCards from "./components/statementCards";
import PhotoGallery from "./components/photoGallery";
import Image from "next/image";
import LatestNewsSection from "./components/cards";
import StorySection from "./components/story";

const index = () => {
  const photos = [
    { src: "/assets/_S8A4840.jpg", alt: "Gar Gar at event" },
    { src: "/assets/_S8A4840.jpg", alt: "Gar Gar with family" },
    {
      src: "/assets/13575876_10209150780147247_1404362220381277674_o.jpg",
      alt: "Gar Gar campaigning",
    },
    {
      src: "/assets/13575876_10209150780147247_1404362220381277674_o.jpg",
      alt: "Gar Gar campaigning",
    },
    {
      src: "/assets/13575876_10209150780147247_1404362220381277674_o.jpg",
      alt: "Gar Gar campaigning",
    },
    {
      src: "/assets/13575876_10209150780147247_1404362220381277674_o.jpg",
      alt: "Gar Gar campaigning",
    },
    // …more…
  ];

  return (
    <div>
      <HeroSection />
      <GarGarHero />
      <StatementCards />
      <PhotoGallery photos={photos} />

      <section className="relative h-96 overflow-hidden">
        {/* 1. Background motion + image */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/assets/Family Edited.png"
            alt="Background crowd"
            fill
            priority
            quality={100}
            className="object-cover object-center"
          />
          {/* dark overlay if you like */}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        {/* 2. Hero text on top */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className=" text-2xl md:text-5xl text-white">"You can make something out of nothing. That advice led me in a different direction - it kept me alive"</h1>
        </div>
      </section>

      <LatestNewsSection />
      <StorySection />
      
    </div>
  );
};

export default index;
