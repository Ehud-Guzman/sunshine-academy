// components/Gallery/GalleryCTA.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GalleryCTA() {
  return (
    <section className="py-16 mt-8 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl shadow-lg p-10"
        >
          <h2 className="text-3xl font-bold mb-4">Share Your Sunshine Moments</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Are you a parent with great photos from school events? Share them with us for a chance to be featured in our gallery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/share-photos"
              className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Submit Photos
            </Link>
            <Link
              to="/events"
              className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Upcoming Events
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
