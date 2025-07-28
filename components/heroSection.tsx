import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 1) Background video + overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <video
          src="/assets/49 - whats happening 2.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* 2) Content grid */}
      <div className="relative z-10 h-full flex flex-col md:flex-row">
        {/* Mobile: Text first, then image */}
        <div className="flex flex-col h-full md:hidden">
          {/* Text section - mobile */}
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6">
            <motion.div
              className="w-full max-w-2xl text-white text-center space-y-4"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
              <motion.h1
                className="text-2xl xs:text-3xl sm:text-4xl font-bold leading-tight"
                variants={fadeIn}
              >
                <p className="bg-gradient-to-r from-red-500 to-[#49a0a7] bg-clip-text text-transparent font-bold text-4xl">
                  Together for a strong Ward 9
                </p>
              </motion.h1>
              <motion.p
                className="text-base xs:text-lg sm:text-xl max-w-lg mx-auto"
                variants={fadeIn}
              >
                Gar Gar
              </motion.p>
            </motion.div>
          </div>

          {/* Image section - mobile */}
          <div className="flex justify-center ">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <div className="w-[410px] h-[410px] xs:w-[200px] xs:h-[200px] sm:w-[220px] sm:h-[220px]">
                <Image
                  src="/assets/520279053_10237040292407623_8431957161010493328_n_edited.png"
                  alt="Gar Gar"
                  width={600}
                  height={600}
                  className="w-full h-full object-contain"
                  priority
                  sizes="(max-width:475px) 180px, (max-width:640px) 200px, (max-width:768px) 220px, (max-width:1024px) 200px, (max-width:1280px) 30vw, 600px"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop: Original layout */}
        {/* 2a) Left column: image pinned bottom-left - desktop only */}
        <div className="relative flex-shrink-0 hidden md:block md:h-full md:w-1/2">
          <motion.div
            className="absolute bottom-0 left-[150px]"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="md:w-[clamp(150px,35vw,600px)] md:h-auto">
              <Image
                src="/assets/520279053_10237040292407623_8431957161010493328_n_edited.png"
                alt="Gar Gar"
                width={800}
                height={1000}
                className="md:h-auto object-contain"
                priority
                sizes="(max-width:1024px) 200px, (max-width:1280px) 30vw, 600px"
              />
            </div>
          </motion.div>
        </div>

        {/* 2b) Right column: wider text area - desktop only */}
        <div className="hidden md:flex md:h-full md:w-1/2 md:items-center md:justify-center px-4 sm:px-6 lg:px-12">
          <motion.div
            className="w-full max-w-2xl text-white md:text-left space-y-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >
            <motion.h1
              className="md:text-5xl font-bold leading-tight"
              variants={fadeIn}
            >
              Together for a<br />
              <span className="md:text-6xl">strong Ward 9</span>
            </motion.h1>
            <motion.p className="md:text-xl max-w-lg" variants={fadeIn}>
              Gar Gar
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
