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
  const [showJoinModal, setShowJoinModal] = useState(false);

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
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
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
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {[
              {
                title: "Join our team",
                description: "Become part of our movement for positive change",
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                action: () => setShowJoinModal(true),
              },
              {
                title: "Donate today",
                description: "Help fuel our campaign for Ward 9",
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                link: "/donate",
              },
              {
                title: "Request a Lawn Sign",
                description: "Show your support in your neighborhood",
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
                action: null,
                button: {
                  text: "Request Sign",
                  onClick: () => {}, // Empty function that does nothing
                },
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-700/80 hover:from-teal-900/50 hover:to-blue-900/50 border border-gray-700 hover:border-teal-400/30 transition-all duration-300 overflow-hidden cursor-pointer backdrop-blur-sm"
                onClick={card.action || undefined}
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

                  {/* Action button */}
                  {card.link ? (
                    <motion.a
                      href={card.link}
                      className="inline-block mt-6 px-6 py-2 bg-teal-500 hover:bg-teal-400 text-white font-medium rounded-lg transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Donate Now
                    </motion.a>
                  ) : card.action ? (
                    <motion.button
                      className="inline-block mt-6 px-6 py-2 bg-teal-500 hover:bg-teal-400 text-white font-medium rounded-lg transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Join Us
                    </motion.button>
                  ) : card.button ? (
                    <motion.button
                      className="inline-block mt-6 px-6 py-2 bg-teal-500 hover:bg-teal-400 text-white font-medium rounded-lg transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={card.button.onClick}
                    >
                      {card.button.text}
                    </motion.button>
                  ) : null}
                </div>
              </motion.div>
            ))}

            {/* Join Team Modal */}
            <AnimatePresence>
              {showJoinModal && (
                <motion.div
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowJoinModal(false)}
                >
                  {/* Semi-transparent overlay that shows background content */}
                  <motion.div
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />

                  <motion.div
                    className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative z-10"
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowJoinModal(false)}
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Join Our Team
                    </h3>

                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your full name"
                          className="w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="w-full px-4 py-3 border placeholder-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Your phone number"
                          className="w-full px-4 py-3 border placeholder-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                        />
                      </div>
                      <div>
                        <select
                          defaultValue=""
                          required
                          className=" w-full px-4 py-3 bg-white placeholder-gray-500 /* optional—selects don’t use this, but keeps consistency */ border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                        >
                          <option value="" disabled>
                            Select your preferred role
                          </option>
                          <option value="volunteer">Volunteer</option>
                          <option value="organizer">Organizer</option>
                          <option value="media">Media Relations</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <textarea
                          placeholder="Tell us about your skills and why you want to join"
                          rows={4}
                          className="w-full placeholder-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-teal-700 hover:to-blue-700 transition-all shadow-md"
                      >
                        Submit Application
                      </button>
                    </form>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
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
