import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Photo {
  src: string;
  alt?: string;
  caption?: string;
}

export default function ModernGalleryCarousel({ photos }: { photos: Photo[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isHovered) return; // Pause on hover
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [photos.length, isHovered]);

  // Handle swipe gestures for mobile
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
        setCurrentIndex((prev) => (prev + 1) % photos.length);
      } else if (diff < -50) {
        // Swipe right - previous
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
      }
      isSwiping = false;
    };

    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchmove', handleTouchMove);
    carousel.addEventListener('touchend', handleTouchEnd);

    return () => {
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchmove', handleTouchMove);
      carousel.removeEventListener('touchend', handleTouchEnd);
    };
  }, [photos.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Meet Gar Gar
        </motion.h2>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full overflow-hidden rounded-xl shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false} custom={currentIndex}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <Image
                src={photos[currentIndex].src}
                alt={photos[currentIndex].alt || `Photo ${currentIndex + 1}`}
                fill
                priority
                className="object-cover w-full h-full"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              
              {/* Caption */}
              {photos[currentIndex].caption && (
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg sm:text-xl md:text-2xl font-medium"
                  >
                    {photos[currentIndex].caption}
                  </motion.p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 z-10"
            aria-label="Previous photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 z-10"
            aria-label="Next photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Progress Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-white' : 'w-4 bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-6 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative aspect-square overflow-hidden rounded-lg transition-all duration-300 ${index === currentIndex ? 'ring-4 ring-blue-500 scale-105' : 'opacity-80 hover:opacity-100'}`}
              aria-current={index === currentIndex}
            >
              <Image
                src={photo.src}
                alt={photo.alt || `Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}