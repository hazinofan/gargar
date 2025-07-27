import { motion } from "framer-motion";
import React from "react";
import HeroSection from "../../components/heroSection";
import GarGarHero from "../../components/gargarHero";
import Image from "next/image";
import LatestNewsSection from "../../components/cards";
import StorySection from "../../components/story";
import StoryCarousel from "../../components/cardsSectionon";
import HeroWithNav from "../../components/HeroWithNav";
import VideoSection from "../../components/videosSection";
import TestimonialCarousel, { TestimonialItem } from "../../components/testimonial";

const index = () => {
  const testimonials: TestimonialItem[] = [
    {
      name: "Neveen Dominic",
      role: "Philanthropist and Entrepreneur",
      quote:
        "Gar Gar was my colleague at SAIT. Because of his work ethic and commitment to excellence, I highly recommend him. One of his many outstanding achievements is creating a scholarship to further South Sudanese youth education at SAIT. He also demonstrated strong leadership as SAITSA president. I am a proud supporter of his education initiative!",
      image: "/assets/Neveen endorsement_edited.png", // your actual path
    },
    // …more testimonials…
  ];

  return (
    <div>
      <HeroSection />
      <GarGarHero />
      {/* <StatementCards />
      <PhotoGallery photos={photos} /> */}
      <StoryCarousel
        items={[
          {
            src: "/assets/image1.png",
            alt: "Gar Gar's story",
            title:
              "Born in the ashes of war, Gar’s family continually sought refuge. Gar learned that the only way to survive was to keep quiet, put your head down, and never expect too much. ",
          },
          {
            src: "/assets/image2.png",
            alt: "Gar Gar's story",
            title:
              "Seizing the opportunity for a better life, his family fled the capital city of Khartoum to Egypt.  However, succumbing to injuries, his father would not be joining them. As a community elder, he stood up courageously for the voiceless and paid the ultimate price. As a role model, he instilled in Gar “You can make something from nothing.” Only later in life, would he truly understand this meaning",
          },
          {
            src: "/assets/image3.png",
            alt: "Gar Gar's story",
            title:
              "At age 17, enrolling in the first of its kind, Gar participated in a “bridge program” at Inglweood/ Ramsay school for learning new languages. Although he saw progression, he felt the stigma from being labeled an “outsider”. However, one simple investment from a teacher and Ramsay community member changed everything. She saw his potential, his future, and his character and how he quickly begin helping others. She consistency challenged Gar’s self-limiting beliefs, giving him the confidence to become fluent in English.",
          },
          {
            src: "/assets/image4.png",
            alt: "Gar Gar's story",
            title:
              "With what many would call destiny, Gar met the love of his life through the same English mentorship program in Inglweood/ Ramsay. Nancy, a South Sudan refugee, faced the same struggles that he once faced. Their common connection and desire for a better life & the opprotunities Ward 9 & Calgary gave them would ultimately lay down the bedrock for their future family. ",
          },
          {
            src: "/assets/image5.png",
            alt: "Gar Gar's story",
            title:
              "His five children that followed changed the way he saw the world. Every day, he would take steps to make Calgary and  his Ward 9 community an even better place. A place that they all could finally call home. Safe. Prosperous. Vibrant.",
          },
          {
            src: "/assets/image6.png",
            alt: "Gar Gar's story",
            title:
              "Gar was at a crossroads. While he cherished his South Sudan community, he knew that it would be all too easy to become complacent. In order to live his dreams, he would need to put himself in uncomfortable situations. Exposing himself to new people, new cultures, and new ideas.",
          },
          {
            src: "/assets/image7.png",
            alt: "Gar Gar's story",
            title:
              "Despite being told that he would likely never attend post-secondary, Gar’s graduation from the English program and upgrading at Bow Valley College finally paid off. In 2011, he would find himself walking the campus halls of SAIT Polytechnic",
          },
          {
            src: "/assets/image8.png",
            alt: "Gar Gar's story",
            title:
              "It was at SAIT, when he truly understood his father's philosophy. Surrounded by opportunities, all it took was a little bit of courage. Despite his mother's insistence, he threw his hat into the political arena, hoping to make a difference. Every day, he connected with students. Finding solutions to the problems they faced every day.  ",
          },
          {
            src: "/assets/image9.png",
            alt: "Gar Gar's story",
            title:
              "Elected as SAITSA's President, Gar Gar experienced his first major political victory. He found what really made the difference: actually listening to voters. With incredible grit, he successfully advocated for student employment, affordable & accessible textbooks, carpooling initiative and the provincial approval for SAITSA's new building.",
          },
          {
            src: "/assets/image10.png",
            alt: "Gar Gar's story",
            title:
              "Continuing his passion for positive change, Gar sought the reconciliation of all victims from South Sudan’s conflict under a single flag.  The scholarship's vision is  removing the financial barriers for youth upgrading. Allowing them to forge their own path.",
          },
        ]}
      />

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
          <h1 className=" text-2xl md:text-5xl text-white">
            "You can make something out of nothing. That advice led me in a
            different direction - it kept me alive"
          </h1>
        </div>
      </section>

      <HeroWithNav />

      <VideoSection />
      <StorySection />
      <TestimonialCarousel items={testimonials} />
    </div>
  );
};

export default index;
