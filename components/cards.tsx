import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const storyCards = [
  {
    id: 1,
    image: "/assets/greif.PNG",
    title: "Childhood in War",
    content: `Born in the ashes of war, Gar's family continually sought refuge. Gar learned that the only way to survive was to keep quiet, put your head down, and never expect too much. 

Seizing the opportunity for a better life, his family fled the capital city of Khartoum to Egypt. However, succumbing to injuries, his father would not be joining them. As a community elder, he stood up courageously for the voiceless and paid the ultimate price. As a role model, he instilled in Gar "You can make something from nothing." Only later in life, would he truly understand this meaning.`,
  },
  {
    id: 2,
    image: "/assets/greif.PNG",
    title: "Language & Opportunity",
    content: `At age 17, enrolling in the first of its kind, Gar participated in a "bridge program" at Inglewood/Ramsay school for learning new languages. Although he saw progression, he felt the stigma from being labeled an "outsider". 

However, one simple investment from a teacher and Ramsay community member changed everything. She saw his potential, his future, and his character and how he quickly begin helping others. She consistently challenged Gar's self-limiting beliefs, giving him the confidence to become fluent in English.`,
  },
  {
    id: 3,
    image: "/assets/greif.PNG",
    title: "Love & Foundation",
    content: `With what many would call destiny, Gar met the love of his life through the same English mentorship program in Inglewood/Ramsay. Nancy, a South Sudan refugee, faced the same struggles that he once faced. 

Their common connection and desire for a better life & the opportunities Ward 9 & Calgary gave them would ultimately lay down the bedrock for their future family. His five children that followed changed the way he saw the world. Every day, he would take steps to make Calgary and his Ward 9 community an even better place. A place that they all could finally call home. Safe. Prosperous. Vibrant.`,
  },
  {
    id: 4,
    image: "/assets/greif.PNG",
    title: "Higher Education",
    content: `Despite being told that he would likely never attend post-secondary, Gar's graduation from the English program and upgrading at Bow Valley College finally paid off. In 2011, he would find himself walking the campus halls of SAIT Polytechnic. 

It was at SAIT, when he truly understood his father's philosophy. Surrounded by opportunities, all it took was a little bit of courage. Despite his mother's insistence, he threw his hat into the political arena, hoping to make a difference. Every day, he connected with students. Finding solutions to the problems they faced every day.`,
  },
  {
    id: 5,
    image: "/assets/greif.PNG",
    title: "First Political Victory",
    content: `Elected as SAITSA's President, Gar Gar experienced his first major political victory. He found what really made the difference: actually listening to voters. 

With incredible grit, he successfully advocated for:
- Student employment opportunities
- Affordable & accessible textbooks
- Carpooling initiatives
- Provincial approval for SAITSA's new building`,
  },
  {
    id: 6,
    image: "/assets/greif.PNG",
    title: "Community Leadership",
    content: `Continuing his passion for positive change, Gar sought the reconciliation of all victims from South Sudan's conflict under a single flag. 

The scholarship's vision is removing the financial barriers for youth upgrading. Allowing them to forge their own path. 

Gar works tirelessly to make Ward 9 a community where:
- Everyone has opportunity
- Voices are heard
- Families can thrive
- The next generation can dream bigger`,
  },
];

export default function StoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-advance cards
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % storyCards.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isHovered]);

  // Handle swipe gestures
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let startX: number;
    let isSwiping = false;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      isSwiping = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isSwiping) return;
      const currentX = e.touches[0].clientX;
      const diff = startX - currentX;

      if (Math.abs(diff) > 50) {
        isSwiping = true;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isSwiping) return;

      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (diff > 50) {
        // Swipe left - next
        setCurrentIndex((prev) => (prev + 1) % storyCards.length);
      } else if (diff < -50) {
        // Swipe right - previous
        setCurrentIndex(
          (prev) => (prev - 1 + storyCards.length) % storyCards.length
        );
      }
      isSwiping = false;
    };

    carousel.addEventListener("touchstart", handleTouchStart);
    carousel.addEventListener("touchmove", handleTouchMove);
    carousel.addEventListener("touchend", handleTouchEnd);

    return () => {
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchmove", handleTouchMove);
      carousel.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Gar Gar's Journey
        </motion.h2>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="relative h-[600px] sm:h-[700px] w-full overflow-hidden rounded-xl shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <Image
                src={storyCards[currentIndex].image}
                alt={storyCards[currentIndex].title}
                fill
                className="object-cover w-full h-full"
                priority
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 text-white">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
                >
                  {storyCards[currentIndex].title}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed"
                >
                  {storyCards[currentIndex].content}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              goToSlide(
                (currentIndex - 1 + storyCards.length) % storyCards.length
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 z-10"
            aria-label="Previous story"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => goToSlide((currentIndex + 1) % storyCards.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 z-10"
            aria-label="Next story"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Progress Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {storyCards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
          {storyCards.map((card, index) => (
            <button
              key={card.id}
              onClick={() => goToSlide(index)}
              className={`relative aspect-square overflow-hidden rounded-lg transition-all duration-300 ${
                index === currentIndex
                  ? "ring-4 ring-blue-500 scale-105"
                  : "opacity-80 hover:opacity-100 hover:scale-105"
              }`}
              aria-current={index === currentIndex}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white text-xs font-bold text-center px-1">
                  {card.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
