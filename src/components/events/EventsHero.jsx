import { motion } from "framer-motion";

export default function EventsHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 text-white pt-32 md:pt-40">
      {/* Subtle background dots */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='%23fff' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* One animated accent circle */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-yellow-400 opacity-10"
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-800 bg-opacity-50 backdrop-blur-sm mb-6 text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-400 mr-2 animate-pulse"></span>
          Upcoming Events
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          School Events & <br />
          <span className="text-yellow-400">Activities</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Memorable experiences that enrich education beyond the classroom—
          from academic competitions to cultural celebrations.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-blue-200 mb-2">
              Explore Events
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-8 h-8 rounded-full bg-blue-800 bg-opacity-50 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16 text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86..." fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
