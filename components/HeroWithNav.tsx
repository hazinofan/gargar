import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "MY STORY", id: "my-story" },
  { label: "WHY I'M RUNNING", id: "why-im-running" },
  { label: "YOUR STORY", id: "your-story" },
  { label: "PLATFORM", id: "platform" },
  { label: "TAKE ACTION", id: "take-action" },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function HeroWithNav() {
  const [showMyStoryModal, setShowMyStoryModal] = useState(false);
  const [showWhyRunningModal, setShowWhyRunningModal] = useState(false);
  const [showActionModal, setShowActionModal] = useState(false);

  const handleClick = (label: any) => {
    if (label === "MY STORY") {
      setShowMyStoryModal(true);
    } else if (label === "WHY I'M RUNNING") {
      setShowWhyRunningModal(true);
    } else if (label === "TAKE ACTION") {
      setShowActionModal(true);
    }
  };

  return (
    <>
      {/* Main Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[600px] bg-white px-6 py-12 gap-12">
        {/* Portrait */}
        <div className="flex justify-center">
          <div className="relative w-64 h-96 md:w-80 md:h-[480px]">
            <Image
              src="/assets/story.png"
              alt="Gar Gar portrait"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Vertical Nav Buttons */}
        <nav className="flex flex-col items-center md:items-start space-y-4">
          {links.map(({ label, id }) => {
            const isModalButton =
              label === "MY STORY" ||
              label === "WHY I'M RUNNING" ||
              label === "TAKE ACTION";

            return isModalButton ? (
              <button
                key={id}
                onClick={() => handleClick(label)}
                className="w-48 text-center cursor-pointer py-3 px-4 border-2 border-gray-800 rounded-lg font-medium 
          bg-white text-gray-900 
          hover:bg-gray-900 hover:text-white 
          transition-all duration-300 hover:shadow-lg
          transform hover:-translate-y-1"
              >
                {label}
              </button>
            ) : (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="w-48 text-center cursor-pointer py-3 px-4 border-2 border-gray-800 rounded-lg font-medium  bg-white text-gray-900  hover:bg-gray-900 hover:text-white  transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                {label}
              </button>
            );
          })}
        </nav>
      </section>

      {/* My Story Modal */}
      <AnimatePresence>
        {showMyStoryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl relative overflow-hidden border border-white/20 max-h-[90vh] overflow-y-auto"
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors backdrop-blur-sm"
                onClick={() => setShowMyStoryModal(false)}
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="p-4 sm:p-6 md:p-10 text-gray-800 space-y-6">
                <h2 className="text-3xl font-bold mb-4">
                  Gar Gar — Proven Leadership. Community-Driven Action.
                </h2>
                <p>
                  Gar Gar — Proven Leadership. Community-Driven Action. Gar Gar
                  is a grassroots community leader with over two decades of
                  effective, on-the-ground service in Ward 9, East Calgary. He
                  has earned numerous accolades for his contributions, including
                  the Queen Elizabeth II’s Platinum Jubilee Medal, the Alberta
                  Justice Award, the Ward 9 Community Leadership Award, and the
                  Calgary Police Chief’s Coin. As President of the Forest Lawn
                  Community Association, Gar led transformative initiatives that
                  fostered community pride, strengthened unity, and helped shift
                  long-standing negative perceptions of East Calgary. His
                  efforts included securing $700,000 in funding for an inclusive
                  playground and championing a major park revitalization —
                  transforming it from a passive seating area into a vibrant,
                  multi-sport basketball court that now serves as an active,
                  welcoming space for youth and families, and even becomes a
                  temporary ice skating rink during the winter months. Gar is
                  also the founder of the Ward 9 Community Association Executive
                  Council, where he brings together presidents/repetitive of
                  Ward 9 community associations — and actively reaches out to
                  other CA executives across Ward 9 — to ensure every voice is
                  heard at that table. Together, his aim was to collaboratively
                  address common key community issues such as traffic, public
                  safety, rezoning, and infrastructure. Known for getting things
                  done, Gar spearheaded Calgary’s first Heroes Crosswalk, making
                  it a reality within just one week. He also led a successful
                  two-week advocacy to secure $2 pool access for Ward 9 families
                  at the Greater Forest Lawn outdoor pool — making recreational
                  spaces more accessible for all.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Why I'm Running Modal */}
      <AnimatePresence>
        {showWhyRunningModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl relative overflow-hidden border border-white/20"
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors backdrop-blur-sm"
                onClick={() => setShowWhyRunningModal(false)}
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <Image
                    src="/assets/_S8A4925.jpg"
                    alt="Why I'm running background"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                </div>

                <div className="p-8 md:p-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    Why I'm Running
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      I'm running because Ward 9 deserves better representation.
                    </p>
                    <p>
                      For too long, our community has been overlooked in city
                      decisions.
                    </p>
                    <p>
                      I want to bring fresh perspective and real change to our
                      ward.
                    </p>
                    <ul className="space-y-2 pl-5 list-disc">
                      <li>Fighting for better infrastructure</li>
                      <li>Improving community services</li>
                      <li>Ensuring your voice is heard</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Modal (Form) */}
      <AnimatePresence>
        {showActionModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl relative overflow-hidden border border-white/20"
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors backdrop-blur-sm"
                onClick={() => setShowActionModal(false)}
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="p-8 md:p-10">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Join Our Team
                </h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition">
                    <option value="">Position</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="organizer">Organizer</option>
                    <option value="media">Media</option>
                  </select>
                  <textarea
                    rows={3}
                    placeholder="Your message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-teal-700 hover:to-blue-700 transition-all shadow-md"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
