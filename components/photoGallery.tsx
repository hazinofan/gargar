import Image from "next/image";
import { motion } from "framer-motion";

interface Photo {
  src: string;
  alt?: string;
}

export default function PhotoGridGallery({ photos }: { photos: Photo[] }) {
  return (
    <section className="py-8 bg-white px-2 sm:px-4">
      <h1 className=" text-xl md:text-4xl font-semibold place-self-center mb-8">Moments That Matter: A Journey Through Service and Community</h1>
      <div className="max-w-screen-2xl mx-auto">
        {/* Grid Gallery with Full-Height Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.03,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="relative group overflow-hidden rounded-lg min-h-[300px] h-full"
            >
              <Image
                src={photo.src}
                alt={photo.alt || `Photo ${index + 1}`}
                fill
                className="object-cover w-full h-full transition-all duration-500 ease-out group-hover:scale-105 object-top"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={index < 6}
                style={{ objectPosition: "top" }}
              />
              
              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              
              {/* View indicator */}
              <div className="absolute bottom-3 right-3">
                <span className="text-xs text-white bg-black/40 px-2 py-1 rounded-full">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {photos.length > 12 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button className="px-8 py-3.5 bg-gray-900 hover:bg-black text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg flex items-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              Load More
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}