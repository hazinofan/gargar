import { motion } from "framer-motion";
import Image from "next/image";

export default function ModernStorySection() {
  return (
    <section id="your-story" className="relative h-screen w-full overflow-hidden">
      {/* 1. Parallax Background Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/assets/Family Edited.png"
          alt="Community background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* 2. Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </motion.div>

      {/* 3. Animated Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            We All Have a{" "}
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
              Story
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg sm:text-xl text-teal-100/90 max-w-2xl mx-auto"
          >
            Ready to share what you're facing? We're listening.
          </motion.p>
        </motion.div>

        {/* 4. Modern Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 w-full max-w-md lg:max-w-2xl bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/10"
        >
          <div className="p-6 sm:p-8 space-y-6">
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileFocus={{ scale: 1.01 }}
              className="relative"
            >
              <input
                type="text"
                placeholder="What challenges are you facing?"
                className="w-full px-5 py-4 rounded-xl bg-white/90 placeholder-gray-600/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400 transition-all duration-300 shadow-md"
              />
              <div className="absolute inset-0 rounded-xl pointer-events-none border border-white/30 mix-blend-overlay" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              whileFocus={{ scale: 1.01 }}
              className="relative"
            >
              <textarea
                rows={5}
                placeholder="Share your story..."
                className="w-full px-5 py-4 rounded-xl bg-white/90 placeholder-gray-600/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400 transition-all duration-300 shadow-md resize-none"
              />
              <div className="absolute inset-0 rounded-xl pointer-events-none border border-white/30 mix-blend-overlay" />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Share Your Story</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-teal-400/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1.2 }}
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-400/20 blur-3xl"
        />
      </div>
    </section>
  );
}