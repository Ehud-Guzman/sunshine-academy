// src/components/events/EventCard.jsx
import { motion } from "framer-motion";

export default function EventCard({ event, index }) {
  const daysLeft = Math.max(
    Math.ceil((new Date(event.date) - new Date()) / (1000 * 60 * 60 * 24)),
    0
  );
  const isUpcoming = daysLeft > 0;

  return (
    <motion.div
      key={event.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-4">
          {event.category}
        </span>

        <h3 className="font-bold text-xl text-gray-800 mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{event.description}</p>

        <div className="space-y-2 mb-5 text-sm text-gray-600">
          <div>📅 {new Date(event.date).toLocaleDateString("en-KE", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</div>
          <div>⏰ {event.time}</div>
          <div>📍 {event.location}</div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div
            className={`font-bold ${isUpcoming ? "text-green-600" : "text-gray-500"}`}
          >
            {isUpcoming ? `${daysLeft} days left` : "Event completed"}
          </div>
          <button className="px-4 py-2 bg-[#002B5B] text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
            More Info
          </button>
        </div>
      </div>
    </motion.div>
  );
}
