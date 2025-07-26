import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

const textCards = [
  {
    id: 1,
    content: `My single mother always told me, Gar, don't get involved.\n\nKeep quiet.\n\nPut your head down.\n\nNever expect too much.\n\nI have lived my whole life knowing what is like to feel unseen and unheard!\n\nEven when you most need help\n\nBut this is home.`,
  },
  {
    id: 2,
    content: `For too long, ward 9 has been left in the dark by decision makers & now fearing more with the political partisanship.\n\nI understand your fears:\n\na better future that will never come\n\na place to never truly call home\n\na voice that is never heard`,
  },
  {
    id: 3,
    content: `Before my father passed away, he told me "you can make something out of nothing". I didn't understand it until I came to Calgary and Lived, studied worked in Ward 9 -\n\nWhere hard workers meet big dreams with grit and resilience\n\nFrom living in Forest Lawn, Penbrooke, Dover, Albert Park - Radisson, & Forest Height\n\nTo meeting a community and a teacher in Inglewood/Ramsay who believed & helped me from an at-risk 17 years old, to earning a BBA in Business`,
  },
  {
    id: 4,
    content: `But, For too many during this economic downturn and well before, housing crises, it's been impossible to dream about those opportunities\nwhen your fighting just to hold on\n\n- Fighting to afford to Stay - Fighting for our kids\n\n- Fighting an engagement system that wasn't not build for us\n\n- Doesn't speak a hard working ward 9 Calgarians language\n\nDoesn't Hear Our Voices`,
  },
  {
    id: 5,
    content: `As a father and husband,\n\nI'm worried about my children's and Calgary and Ward 9 future.\n\nAs a community leader,\n\nI'm worried that we won't have the opportunity to succeed.\n\nI became a youth advocate and community engagement worker,\n\nbecause I've seen too many lose their lives & too many not being heard.`,
  },
  {
    id: 6,
    content: `If we don't act,\n\nhomeownership or living in ward 9 will become even more out of reach,\n\ncrime will continue to plague our streets,\n\nand small businesses will continue to shut their doors\n\nBut this city and ward 9 were not built by those who accepted the status quo - By those who run on political lines`,
  },
  {
    id: 7,
    content: `Some candidates see the political Advantage, I see, the Calgary Opportunity & the peoples' struggles\n\nIt's time for us to be on the decision table.\n\nWith I truly believe we can take destiny into our own hands.\n\nWard 9 can be more than just a stopping point, can be more than just the stigma, can be a place for our children to not only survive but to thrive.`,
  },
  {
    id: 8,
    content: `As your Councillor, I will champion this vision\n\nEvery day at the doors, I hear different stories, but the same passion for something more.\n\nWard 9 is our Home.\n\nThis is our voice.`,
  },
];

export default function ResponsiveTextCards() {
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % textCards.length);
  };

  const prevCard = () => {
    setActiveCard((prev) => (prev - 1 + textCards.length) % textCards.length);
  };

  // Auto-rotate on mobile
  useEffect(() => {
    if (!isMobile) return;

    const timer = setInterval(() => {
      nextCard();
    }, 8000);

    return () => clearInterval(timer);
  }, [isMobile, activeCard]);

  const variants: Variants = {
    enter: (custom: number) => ({
      x: 100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (custom: number) => ({
      x: -100,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-gradient-to-b from-[#0F2345] to-[#091A36] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-center">
            Gar Gar's Vision
          </h2>
          <div className="w-20 md:w-24 h-1 bg-red-600 mx-auto rounded-full" />
        </motion.div>

        {/* Desktop Grid (2 columns) */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {textCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white/90 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="prose prose-sm sm:prose-base max-w-none">
                  {card.content.split("\n\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className={`mb-3 md:mb-4 ${
                        i === 0
                          ? "text-lg md:text-xl font-bold text-[#0F2345]"
                          : "text-gray-700"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative h-[500px] overflow-hidden">
          <AnimatePresence initial={false} >
            <motion.div
              key={activeCard}
              custom={activeCard}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 px-2"
            >
              <div className="bg-white/90 rounded-xl p-6 h-full flex flex-col shadow-lg">
                <div className="prose prose-sm max-w-none flex-grow">
                  {textCards[activeCard].content
                    .split("\n\n")
                    .map((paragraph, i) => (
                      <p
                        key={i}
                        className={`mb-3 ${
                          i === 0
                            ? "text-lg font-bold text-[#0F2345]"
                            : "text-gray-700"
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>

                {/* Mobile Navigation */}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={prevCard}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                    aria-label="Previous card"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <div className="flex items-center space-x-2">
                    {textCards.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveCard(idx)}
                        className={`w-2 h-2 rounded-full ${
                          idx === activeCard ? "bg-red-600 w-4" : "bg-gray-300"
                        }`}
                        aria-label={`Go to card ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextCard}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                    aria-label="Next card"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <button className="inline-flex items-center px-6 py-2 md:px-8 md:py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0F2345] transition-all duration-300 group text-sm md:text-base">
            Share This Vision
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function AnimatePresence({
  children,
  initial,
}: {
  children: React.ReactNode;
  initial?: boolean;
}) {
  return <>{children}</>;
}
