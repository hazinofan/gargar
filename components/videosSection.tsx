import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";

const VideoSection = () => {
  const videoItems = [
    {
      title: "Community Engagement",
      description: "See how we're connecting with Ward 9 residents to understand their needs and concerns.",
      videoUrl: "/assets/51 - home owenssfgip v2.mp4"
    },
    {
      title: "Policy Priorities",
      description: "Learn about our key initiatives for improving infrastructure and services in our neighborhoods.",
      videoUrl: "/assets/56 - FIGHTING CRIME.mp4"
    },
    {
      title: "Meet The Team",
      description: "Get to know the dedicated individuals working to make Ward 9 a better place for everyone.",
      videoUrl: "/assets/58 - FASTER LOADING TIMES .2.mp4"
    }
  ];

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach(video => {
      if (video) {
        video.muted = true; // Required for autoplay in most browsers
        video.loop = true;
        video.play().catch(e => console.log("Autoplay prevented:", e));
      }
    });
  }, []);

  return (
    <section id="platform" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Vision in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Watch these videos to learn more about our campaign and what we stand for
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Video Container - Autoplay and Loop */}
              <div className="relative aspect-video bg-gray-200 overflow-hidden">
                <video
                  ref={el => videoRefs.current[index] = el}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                >
                  <source src={item.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Text Content - Simplified */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;