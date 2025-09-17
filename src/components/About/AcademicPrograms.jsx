import { motion } from "framer-motion";

export default function AcademicPrograms({ 
  programs, 
  className = "", 
  limit, 
  cardBg = "bg-white", 
  textColor = "text-gray-800",
  borderColor = "border-gray-200"
}) {
  const defaultPrograms = [
    { icon: "📚", title: "CBC Curriculum", description: "Comprehensive national curriculum with modern teaching approaches" },
    { icon: "🎨", title: "Arts & Music", description: "Creative expression through various artistic mediums" },
    { icon: "🧪", title: "STEM Labs", description: "Hands-on science, technology, engineering, and math" },
    { icon: "🏅", title: "Extra-Curriculars", description: "Sports, clubs, and activities beyond the classroom" },
  ];

  const displayPrograms = programs ? programs : defaultPrograms;
  const programsToShow = limit ? displayPrograms.slice(0, limit) : displayPrograms;

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {programsToShow.map((p, i) => (
        <motion.div
          key={i}
          className={`flex flex-col items-center p-6 rounded-xl shadow-sm border ${cardBg} ${textColor} ${borderColor} cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-[#B8860B]/30 relative overflow-hidden`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
          whileHover={{ y: -5 }}
        >
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B8860B] to-[#D4AF37]"></div>
          
          <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
            {p.icon}
          </div>
          
          <h3 className="font-serif font-bold text-lg text-center mb-2">{p.title}</h3>
          
          {p.description && (
            <p className="text-sm text-gray-600 text-center font-light leading-tight">
              {p.description}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}