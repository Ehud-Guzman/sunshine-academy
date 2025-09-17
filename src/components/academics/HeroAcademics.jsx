import { motion } from "framer-motion";

export default function HeroAcademics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative text-center py-20 px-4 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>
      
      {/* Title with elegant underline */}
      <div className="relative inline-block mb-10">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 tracking-tight"
        >
          Academics
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-blue-400 to-amber-400 mx-auto rounded-full"
        ></motion.div>
      </div>

      {/* Subtitle with refined typography */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-12"
      >
        At <span className="font-medium text-blue-600">Our School</span>, we believe learning goes beyond the classroom. Our academic programs are designed to challenge, inspire, and nurture every student's unique potential from <span className="font-medium text-amber-600">Grade 1 through 12</span>.
      </motion.p>

      {/* Premium call to scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16"
      >
        <div className="flex flex-col items-center justify-center">
          <span className="text-sm uppercase tracking-widest text-gray-500 mb-3">Explore Programs</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}