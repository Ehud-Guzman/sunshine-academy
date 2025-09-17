import { motion } from "framer-motion";
import { FiDownload, FiBookOpen } from "react-icons/fi";

export default function SubjectsGrid({ subjects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-12 bg-gradient-to-br from-gray-50 to-white">
      {subjects.map((sub, i) => (
        <motion.div
          key={i}
          className="relative bg-white rounded-2xl overflow-hidden group cursor-pointer isolate"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: i * 0.15, 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            duration: 0.6
          }}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3 }
          }}
        >
          {/* Premium accent elements */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500 z-0"></div>
          
          {/* Subject Image with elegant overlay */}
          <div className="h-56 w-full overflow-hidden relative">
            <motion.img
              src={sub.img}
              alt={sub.name}
              className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
              whileHover={{ scale: 1.05 }}
            />
            
            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            {/* Subtle shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-all duration-700"></div>
            
            {/* Module count badge */}
            <div className="absolute top-4 right-4 bg-white/95 text-gray-800 px-3 py-1.5 rounded-full text-xs font-medium shadow-md backdrop-blur-sm flex items-center gap-1">
              <FiBookOpen className="text-[#B8860B]" size={12} />
              <span>{sub.modules || 8} Modules</span>
            </div>
          </div>

          {/* Subject Content */}
          <div className="p-6 relative z-10">
            {/* Decorative accent line */}
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] mb-4 rounded-full"></div>
            
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3 tracking-tight">
              {sub.name}
            </h3>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed font-light">
              {sub.description || "Comprehensive curriculum designed for excellence."}
            </p>

            {/* Premium Syllabus Button */}
            <motion.a
              href={sub.syllabusUrl || `/pdfs/${sub.name}.pdf`}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(184, 134, 11, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-between w-full bg-white text-gray-800 font-medium py-3.5 px-5 rounded-xl transition-all duration-300 border border-gray-200 group-hover:border-[#B8860B]/30 shadow-sm hover:shadow-md"
            >
              <span className="text-sm tracking-wide">View Syllabus</span>
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] rounded-lg text-white transform transition-transform duration-300 group-hover:rotate-12">
                <FiDownload size={16} />
              </div>
            </motion.a>
          </div>
          
          {/* Subtle corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#B8860B]/30 rounded-tl-2xl"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#B8860B]/30 rounded-tr-2xl"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#B8860B]/30 rounded-bl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#B8860B]/30 rounded-br-2xl"></div>
        </motion.div>
      ))}
    </div>
  );
}