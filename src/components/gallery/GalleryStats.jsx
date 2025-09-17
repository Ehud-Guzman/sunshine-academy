// components/Gallery/GalleryStats.jsx
import { motion } from "framer-motion";
import CountUp from 'react-countup';

export default function GalleryStats() {
  const stats = [
    { number: 150, suffix: "+", label: "Photos in Gallery" },
    { number: 12, suffix: "", label: "School Events Covered" },
    { number: 25, suffix: "+", label: "Classroom Moments" },
    { number: 8, suffix: "", label: "Years of Memories" }
  ];

  return (
    <section className="py-24 px-4 mt-8 mb-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <CountUp end={stat.number} duration={3} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}