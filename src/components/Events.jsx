// src/pages/Events.jsx
import { useContext, useState } from "react";
import { TierContext } from "../context/TierContext";
import { motion } from "framer-motion";
import { eventsData } from "../data/eventsData";
import EventCard from "../components/events/EventCard";
import EventsHero from "../components/events/EventsHero";

export default function Events() {
  const { currentTier } = useContext(TierContext);
  const f = currentTier?.features || {};
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (!f.events?.enabled) return null;

  const filteredEvents =
    selectedCategory === "all"
      ? eventsData
      : eventsData.filter((event) => event.category === selectedCategory);

  const categories = ["all", ...new Set(eventsData.map((event) => event.category))];

  return (
    <>
      {/* Hero always sits right under nav */}
      <EventsHero />

      {/* Events Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-[#002B5B] mb-4">
              School Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay connected with our vibrant school life. From academics to
              sports, culture to the environment—there’s always something to
              look forward to.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-[#002B5B] text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>

          {/* Empty State */}
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <h3 className="text-xl font-medium text-gray-600">
                No events in this category
              </h3>
              <p className="text-gray-500 mt-2">
                Check back later for upcoming events.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
