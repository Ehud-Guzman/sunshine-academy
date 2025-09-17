import { motion } from "framer-motion";

export default function CampusGallery({ gallery = [], className = "", limit, cardBg = "bg-blue-900/10" }) {
  const images = gallery.length ? gallery : [
    "/images/about/campus-1.jpg",
    "/images/about/campus-2.jpg",
    "/images/about/campus-3.jpg",
    "/images/about/campus-4.webp",
  ];

  const imagesToShow = limit ? images.slice(0, limit) : images;

  return (
    <div className={`grid sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center ${className}`}>
      {imagesToShow.map((img, i) => (
        <motion.div
          key={i}
          className={`relative w-full h-40 overflow-hidden rounded-2xl shadow-inner shadow-blue-950/30 ${cardBg}`}
          whileHover={{ scale: 1.05, y: -4 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 70 }}
        >
          <img
            src={img}
            alt={`Campus ${i + 1}`}
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* Optional subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent rounded-2xl pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
}
