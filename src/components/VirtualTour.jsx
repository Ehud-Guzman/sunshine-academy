import { useContext } from "react";
import { TierContext } from "../context/TierContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function VirtualTour() {
  const { currentTier } = useContext(TierContext);
  const f = currentTier?.features || {};
  if (!f.virtualTour?.enabled) return null;

  return (
  <section className="relative py-10 px-4 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
  {/* Background shapes */}
  <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FFD700]/10 rounded-full blur-3xl animate-slow-spin"></div>
  <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#FFB800]/10 rounded-full blur-3xl animate-slow-spin-reverse"></div>

  <div className="max-w-4xl mx-auto text-center relative z-10">
    {/* Heading */}
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-6 tracking-tight"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Take a <span className="text-yellow-400">Virtual Tour</span>
    </motion.h2>

    {/* Video */}
    <motion.div
      className="aspect-video rounded-xl shadow-2xl overflow-hidden border border-[#FFD700]/30 hover:scale-105 transition-transform duration-500"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <video
        src="/videos/School-tour.mp4"
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
    </motion.div>

    {/* Description */}
    <motion.p
      className="mt-4 text-gray-700 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      Explore Sunshine Primary from your home. See classrooms, playgrounds, and facilities in a clean, immersive 360° experience.
    </motion.p>

    {/* CTA */}
    <motion.div
      className="mt-6 flex justify-center gap-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      <Link
        to="/contact"
        className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#002B5B] font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        Schedule a Visit
      </Link>
      <Link
        to="/gallery"
        className="inline-block text-[#002B5B] font-medium px-6 py-3 rounded-lg border border-yellow-400 hover:bg-yellow-50 transition-all duration-300"
      >
        Explore Gallery
      </Link>
    </motion.div>
  </div>
</section>

  );
}
