import { useContext, useState } from "react";
import { TierContext } from "../context/TierContext";
import { motion, AnimatePresence } from "framer-motion";

// Example images for each testimonial
const testimonialsData = [
  { 
    name: "Jane Doe", 
    message: "My child loves Sunshine Primary!", 
    image: "/images/testimonials/jane.jpeg" 
  },
  { 
    name: "Mercy Wanjiku", 
    message: "Excellent teachers and facilities.", 
    image: "/images/testimonials/mercy.jpg" 
  },
];

export default function Testimonials() {
  const { currentTier } = useContext(TierContext);
  const f = currentTier?.features || {};
  if (!f.testimonials?.enabled) return null;

  const [index, setIndex] = useState(0);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#EFF3FB] to-[#FFFFFF]">
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#002B5B] mb-12 drop-shadow-md">
          Testimonials
        </h2>

        <AnimatePresence>
          <motion.div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-4 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#FFD700] shadow-md mb-4">
              <img src={testimonialsData[index].image} alt={testimonialsData[index].name} className="w-full h-full object-cover" />
            </div>
            <svg className="w-8 h-8 text-[#FFD700] mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.17 6A5.002 5.002 0 007 16h4a2 2 0 002-2v-3a2 2 0 00-2-2H7.17zM17.17 6A5.002 5.002 0 0017 16h4a2 2 0 002-2v-3a2 2 0 00-2-2h-4.83z"></path>
            </svg>
            <p className="text-gray-700 text-lg md:text-xl">"{testimonialsData[index].message}"</p>
            <p className="font-semibold text-[#002B5B]">{testimonialsData[index].name}</p>

            <div className="flex justify-center gap-3 mt-4">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === index ? "bg-[#FFD700]" : "bg-gray-300"}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
