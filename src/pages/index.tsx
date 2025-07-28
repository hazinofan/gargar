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
import TestimonialCarousel, {
  TestimonialItem,
} from "../../components/testimonial";
import ModernGalleryCarousel from "../../components/photoGallery";

const index = () => {
const photos = [
  { src: "/gallery/462843708_10233119615713156_3555438892877197623_n (1).jpg", alt: "462843708_10233119615713156_3555438892877197623_n (1)", caption: "" },
  { src: "/gallery/470174814_10234414679008929_6325799572402460389_n.jpg", alt: "470174814_10234414679008929_6325799572402460389_n", caption: "" },
  { src: "/gallery/488681515_10235434976355725_54941042868094629_n.jpg", alt: "488681515_10235434976355725_54941042868094629_n", caption: "" },
  { src: "/gallery/494821921_10235778134134455_1502831083522895841_n.jpg", alt: "494821921_10235778134134455_1502831083522895841_n", caption: "" },
  { src: "/gallery/495664422_10235937504958626_6791000500400868667_n.jpg", alt: "495664422_10235937504958626_6791000500400868667_n", caption: "" },
  { src: "/gallery/496796549_10235960626696655_3931478899648886415_n.jpg", alt: "496796549_10235960626696655_3931478899648886415_n", caption: "" },
  { src: "/gallery/496936059_10235932746639671_1446161959950035460_n (1).jpg", alt: "496936059_10235932746639671_1446161959950035460_n (1)", caption: "" },
  { src: "/gallery/496936059_10235932746639671_1446161959950035460_n (1)_1.jpg", alt: "496936059_10235932746639671_1446161959950035460_n (1)_1", caption: "" },
  { src: "/gallery/502470814_10236195940619356_5948378098740984743_n.jpg", alt: "502470814_10236195940619356_5948378098740984743_n", caption: "" },
  { src: "/gallery/502628058_10236195941099368_648940732265744369_n.jpg", alt: "502628058_10236195941099368_648940732265744369_n", caption: "" },
  { src: "/gallery/502628058_10236195941099368_648940732265744369_n_1.jpg", alt: "502628058_10236195941099368_648940732265744369_n_1", caption: "" },
  { src: "/gallery/502629022_10236228683037896_21857933066722921_n.jpg", alt: "502629022_10236228683037896_21857933066722921_n", caption: "" },
  { src: "/gallery/503215085_10236228691158099_5371988107213270120_n.jpg", alt: "503215085_10236228691158099_5371988107213270120_n", caption: "" },
  { src: "/gallery/503459188_10236234400980841_4540036424913512597_n.jpg", alt: "503459188_10236234400980841_4540036424913512597_n", caption: "" },
  { src: "/gallery/503505559_10236233813486154_7547959962877151551_n.jpg", alt: "503505559_10236233813486154_7547959962877151551_n", caption: "" },
  { src: "/gallery/504151180_10236277610061041_3157909158704856589_n.jpg", alt: "504151180_10236277610061041_3157909158704856589_n", caption: "" },
  { src: "/gallery/506857426_10236472292367977_4483595862465722981_n.jpg", alt: "506857426_10236472292367977_4483595862465722981_n", caption: "" },
  { src: "/gallery/508338375_10236473575920065_3266430653203567237_n.jpg", alt: "508338375_10236473575920065_3266430653203567237_n", caption: "" },
  { src: "/gallery/508349450_10236474946234322_7050711604381227568_n.jpg", alt: "508349450_10236474946234322_7050711604381227568_n", caption: "" },
  { src: "/gallery/508445017_10236468455232051_871993687138658569_n.jpg", alt: "508445017_10236468455232051_871993687138658569_n", caption: "" },
  { src: "/gallery/508445017_10236468455232051_871993687138658569_n_1.jpg", alt: "508445017_10236468455232051_871993687138658569_n_1", caption: "" },
  { src: "/gallery/510022100_10236603042596651_2150139833846679617_n.jpg", alt: "510022100_10236603042596651_2150139833846679617_n", caption: "" },
  { src: "/gallery/518638907_10172575226805112_6665276835865334190_n.jpg", alt: "518638907_10172575226805112_6665276835865334190_n", caption: "" },
  { src: "/gallery/Motivational speaker.jpg", alt: "Motivational speaker", caption: "" },
  { src: "/gallery/President council.jpg", alt: "President council", caption: "" },
  { src: "/gallery/award -.JPG", alt: "award -", caption: "" },
  { src: "/gallery/community.jpg", alt: "community", caption: "" },
  { src: "/gallery/ogden volunteer.jpg", alt: "ogden volunteer", caption: "" },
  { src: "/gallery/vetrans.jpg", alt: "vetrans", caption: "" },
  { src: "/gallery/youth advocate.jpg", alt: "youth advocate", caption: "" }
];



  const testimonials: TestimonialItem[] = [
    {
      name: "Neveen Dominic",
      role: "Philanthropist and Entrepreneur",
      quote:
        "Gar Gar was my colleague at SAIT. Because of his work ethic and commitment to excellence, I highly recommend him. One of his many outstanding achievements is creating a scholarship to further South Sudanese youth education at SAIT. He also demonstrated strong leadership as SAITSA president. I am a proud supporter of his education initiative!",
      image: "/assets/Neveen endorsement_edited.png",
    },
  ];

  return (
    <div>
      <HeroSection />
      <GarGarHero />
      {/* <StatementCards /> */}
      <StoryCarousel
        items={[
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
      <ModernGalleryCarousel photos={photos} />

      <VideoSection />
      <StorySection />
      <TestimonialCarousel items={testimonials} />
    </div>
  );
};

export default index;
