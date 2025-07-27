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
      videoRefs.current[current]
        ?.play()
        .catch((e) => console.log("Autoplay prevented:", e));
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
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Mission Statement Cards */}
          {/* Mission Statement Cards - Modern Version */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {[
              {
                title: "Find Our Voice",
                description:
                  "Amplifying community concerns through transparent leadership",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                ),
              },
              {
                title: "Build Our Home",
                description:
                  "Creating sustainable neighborhoods for future generations",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                ),
              },
              {
                title: "Seize Our Future",
                description: "Innovative solutions for Ward 9's evolving needs",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 hover:from-teal-900/50 hover:to-blue-900/50 border border-gray-700 hover:border-teal-400/30 transition-all duration-300 overflow-hidden"
              >
                {/* Animated background element */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ x: -100 }}
                  whileHover={{ x: 0 }}
                />

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-blue-400/20 blur-md"></div>
                </div>

                <div className="relative z-10">
                  {/* Icon with animation */}
                  <motion.div
                    className="mb-6 text-teal-400 group-hover:text-white transition-colors duration-300"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.2,
                    }}
                  >
                    {card.icon}
                  </motion.div>

                  <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {card.description}
                  </p>

                  {/* Animated underline */}
                  <motion.div
                    className="mt-4 h-0.5 bg-teal-400 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-5xl font-bold leading-tight tracking-tight text-center"
          >
            My name is{" "}
            <motion.span
              className="text-teal-400 inline-block"
              animate={{
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 8px rgba(74, 222, 128, 0)",
                  "0 0 16px rgba(74, 222, 128, 0.3)",
                  "0 0 8px rgba(74, 222, 128, 0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
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
                repeatType: "mirror",
              }}
            >
              Ward 9 City Councillor
            </motion.span>
          </motion.h1>
        </div>
      </section>
    </div>
  );
}
