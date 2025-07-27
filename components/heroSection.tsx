import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/assets/_S8A4985.jpg"
          alt="Background crowd"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="w-full max-w-7xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Main CTA Buttons */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
            variants={slideUp}
          >
            {/* Primary Button */}
            <Link
              href="/donate"
              className="relative px-8 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Donate Now
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300 rounded-full"></span>
            </Link>

            {/* Secondary Button */}
            <Link
              href="/volunteer"
              className="relative px-8 py-4 bg-[#49a0a7] border-2 border-[#49a0a7] hover:border-[#142123] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Volunteer
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all duration-300 rounded-full"></span>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-white/80 text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 bg-white rounded-full mt-2"
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
