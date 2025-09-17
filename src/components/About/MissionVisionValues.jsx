import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaGem } from "react-icons/fa";

export default function MissionVisionValues({ className = "", limit, cardBg = "bg-blue-900/30", textColor = "text-white/90", hoverEffect = true }) {
  const cards = [
    {
      title: "Mission",
      text: "Empowering every child to reach their potential.",
      icon: <FaBullseye className="w-10 h-10 mb-3 text-[#FFD700]" />,
      img: "/images/about/values-motto-vission.jpg",
    },
    {
      title: "Vision",
      text: "Building a community of lifelong learners and leaders.",
      icon: <FaEye className="w-10 h-10 mb-3 text-[#FFD700]" />,
      img: "/images/about/values-motto-vission.jpg",
    },
    {
      title: "Values",
      text: "Integrity, creativity, collaboration, and excellence.",
      icon: <FaGem className="w-10 h-10 mb-3 text-[#FFD700]" />,
      img: "/images/about/values-motto-vission.jpg",
    },
  ];

  const displayCards = limit ? cards.slice(0, limit) : cards;

  return (
    <div className={`grid md:grid-cols-3 gap-10 justify-items-center ${className}`}>
      {displayCards.map((card, i) => (
        <motion.div
          key={i}
          className={`flex flex-col items-center justify-center relative p-6 ${cardBg} backdrop-blur-md border border-white/20 rounded-2xl shadow-inner shadow-blue-950/40 cursor-pointer transform transition-transform hover:-translate-y-2 hover:shadow-2xl`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, type: "spring", stiffness: 70 }}
          whileHover={{ rotateY: hoverEffect ? 3 : 0 }}
        >
          <div className="mb-4 w-full h-40 overflow-hidden rounded-xl shadow-inner">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col items-center justify-center mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-tr from-[#FFD700]/40 to-[#FFB800]/40 shadow-md">
            {card.icon}
          </div>
          <h3 className={`text-xl font-semibold mb-2 text-center ${textColor}`}>{card.title}</h3>
          <p className={`text-sm md:text-base text-center ${textColor}`}>{card.text}</p>

          {/* Optional hover shine overlay */}
          {hoverEffect && (
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-2xl"
              style={{
                background: "linear-gradient(120deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%)",
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
