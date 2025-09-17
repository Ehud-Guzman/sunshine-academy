import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomeAbout() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-blue-100 to-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left image/illustration */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="/images/about/campus-4.webp" //
            alt="Our Campus"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B]">
            A School Where Learning Comes Alive
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We nurture curiosity, creativity, and character in every student.
            Our hands-on approach, vibrant programs, and dedicated staff make
            learning an adventure beyond the classroom.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-full shadow-sm">
              <span>📚</span> CBC Curriculum
            </div>
            <div className="flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-full shadow-sm">
              <span>🎨</span> Arts & Music
            </div>
          </div>

          <Link
            to="/about"
            className="inline-block mt-4 px-6 py-3 bg-[#002B5B] text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
