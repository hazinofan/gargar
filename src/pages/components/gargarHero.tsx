import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  "/assets/37 - Support for Oil Gar GAR.mp4",
  "/assets/48 - whats happening 2.mp4",
  "/assets/59 - small business faster load time.mp4",
];

export default function GarGarHero() {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Auto-advance videos every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 8000);
    return () => clearInterval(timer);
  }, [current]);

  // Play current video when it changes
  useEffect(() => {
    if (videoRefs.current[current]) {
      videoRefs.current[current]?.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, [current]);

  const next = () => {
    setCurrent((c) => (c === videos.length - 1 ? 0 : c + 1));
  };

  const prev = () => {
    setCurrent((c) => (c === 0 ? videos.length - 1 : c - 1));
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="w-full overflow-hidden relative">
      {/* Hero Text Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-teal-400/10"
              style={{
                width: `${i * 200}px`,
                height: `${i * 200}px`,
                top: `${i * 10}%`,
                left: `${i * 15}%`,
              }}
              animate={{
                y: [0, i % 2 === 0 ? 20 : -20],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className=" mx-auto relative z-10" style={{ textAlignLast: 'center'}}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-5xl font-bold leading-tight tracking-tight"
          >
            My name is{" "}
            <motion.span 
              className="text-teal-400 inline-block"
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: ["0 0 8px rgba(74, 222, 128, 0)", "0 0 16px rgba(74, 222, 128, 0.3)", "0 0 8px rgba(74, 222, 128, 0)"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Gar Gar
            </motion.span>{" "}
            and I would be grateful to serve you as{" "}
            <br className="hidden lg:block" />
            <motion.span
              className="inline-block mt-2 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"
              animate={{ 
                x: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror"
              }}
            >
              Ward 9 City Councillor
            </motion.span>
          </motion.h1>
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] w-full bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <video
              ref={(el) => (videoRefs.current[current] = el)}
              src={videos[current]}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? 'bg-teal-400 w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev/Next Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 group"
          aria-label="Previous video"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white group-hover:text-teal-400 transition-colors"
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
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 group"
          aria-label="Next video"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white group-hover:text-teal-400 transition-colors"
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
      </section>
    </div>
  );
}