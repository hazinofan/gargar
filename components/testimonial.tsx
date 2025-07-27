// components/TestimonialCarousel.tsx
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  image: string; // e.g. "/assets/neveen.png"
}

const fadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function TestimonialCarousel({
  items,
}: {
  items: TestimonialItem[];
}) {
  const [index, setIndex] = useState(0);
  const total = items.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="relative w-full h-[500px] overflow-hidden md:grid md:grid-cols-2">
      {/* 📱 Mobile-only background */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={index}
          variants={fadeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="absolute inset-0 md:hidden"
        >
          <Image
            src={items[index].image}
            alt={items[index].name}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* 📝 Text column */}
      <div className="relative z-10 flex items-center justify-center px-6 py-12 bg-black/70 md:bg-blue-950">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="text-white max-w-xl"
          >
            <h3 className="text-sm uppercase tracking-widest mb-2">
              {items[index].name}
            </h3>
            <blockquote className="text-lg leading-relaxed">
              "{items[index].quote}"
            </blockquote>
            <p className="mt-8 underline decoration-white decoration-2 font-medium">
              — {items[index].role}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 💻 Desktop-only image column */}
      <div className="hidden md:block relative overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={items[index].image}
              alt={items[index].name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-blue-600 opacity-50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ⬅️➡️ Navigation Buttons */}
      <button
        onClick={prev}
        aria-label="Previous testimonial"
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-2xl p-2 hover:bg-white/20 rounded-full transition"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next testimonial"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-2xl p-2 hover:bg-white/20 rounded-full transition"
      >
        ›
      </button>

      {/* • Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`w-2 h-2 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}