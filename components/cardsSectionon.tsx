import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export type StoryItem = {
  src: string;
  alt: string;
  title: string;
};

export default function StoryCarousel({ items }: { items: StoryItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const maxIndex = Math.max(0, items.length - visibleCards);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCards(1);
        setIsMobile(true);
      } else if (width < 1024) {
        setVisibleCards(2);
        setIsMobile(false);
      } else {
        setVisibleCards(3);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev < maxIndex ? prev + 1 : 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Calculate width and transform values for the sliding container
  const containerWidth = `${(items.length / visibleCards) * 100}%`;
  const translateX = `${(currentIndex * 100) / items.length}%`;

  return (
    <div id="my-story" className="relative w-full max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      {/* Sliding Container */}
      <div className={`relative ${isMobile ? 'h-[500px]' : 'h-[550px]'} overflow-hidden`}>
        <motion.div
          className="flex absolute h-full"
          style={{ 
            width: containerWidth,
            x: `-${translateX}`
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={`${isMobile ? 'w-full' : visibleCards === 2 ? 'w-1/2' : 'w-1/3'} px-2 sm:px-3 h-full`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Card with hover effect */}
              <div className="h-full flex flex-col bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 group hover:-translate-y-1">
                {/* Image Section */}
                <div className="relative h-[50%] w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < visibleCards}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                
                {/* Text Section */}
                <div className="h-[50%] p-4 sm:p-6 overflow-y-auto">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-5 sm:line-clamp-6">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between mt-6 sm:mt-8">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm sm:shadow-md hover:bg-gray-50 transition-colors hover:shadow-md sm:hover:shadow-lg"
          aria-label="Previous"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Dot Indicators */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-teal-600 sm:w-6 w-4' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={handleNext}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm sm:shadow-md hover:bg-gray-50 transition-colors hover:shadow-md sm:hover:shadow-lg"
          aria-label="Next"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}