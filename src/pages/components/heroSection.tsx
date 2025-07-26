import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cards = [
    { 
      text: ["Find OurVoice"], 
      bg: "",
      delay: 0.1
    },
    { 
      text: ["Build Our Home"], 
      bg: " ",
      delay: 0.3
    },
    { 
      text: ["Seize Our Future"], 
      bg: " ",
      delay: 0.5
    }
  ];

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
          {/* Animated Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-12 w-full"
            variants={fadeIn}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-2xl text-white backdrop-blur-sm bg-gradient-to-br ${card.bg} shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                variants={slideUp}
                initial="hidden"
                animate="visible"
                custom={card.delay}
              >
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  {card.text[0]} <br /> {card.text[1]}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Main CTA */}
          <motion.div
            className="flex flex-col items-center"
            variants={slideUp}
          >
            <Link
              href="/donate"
              className="mt-8 px-8 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Donate Now
              <span className="ml-2 inline-block">→</span>
            </Link>

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
        </motion.div>
      </div>
    </section>
  );
}