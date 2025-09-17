import { useContext, useEffect, useState } from "react";
import { TierContext } from "../context/TierContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const { currentTier } = useContext(TierContext);
  const f = currentTier?.features || {};
  const [offsetY, setOffsetY] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const taglines = [
    "Where education meets excellence.",
    "Nurturing tomorrow's leaders today.",
    "Building foundations for lifelong success.",
    "Inspiring young minds to shine brightly."
  ];

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.4);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  if (!f.hero?.enabled) return null;

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/about/campus-1.jpg"
          alt="School Background"
          className="w-full h-full object-cover brightness-75 scale-105"
          style={{ transform: `translateY(${offsetY}px)` }}
        />
        
        {/* Enhanced Gradient Overlay */}
       
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5 + Math.random() * 5, 
              delay: Math.random() * 3 
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 px-6 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
    

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Sunshine <span className="text-yellow-400">Academy</span>
        </motion.h1>

        <motion.div 
          className="h-10 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p
            key={currentTextIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl text-white font-light"
          >
            {taglines[currentTextIndex]}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            to="/admissions"
            className="relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 font-semibold rounded-lg shadow-lg overflow-hidden group"
          >
            <span className="relative z-10">Apply Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          <Link
            to="/contact"
            className="relative px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg overflow-hidden group"
          >
            <span className="relative z-10">Schedule Tour</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </Link>
        </motion.div>

        {/* Stats counter */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-12 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">25+</div>
            <div className="text-sm uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">98%</div>
            <div className="text-sm uppercase tracking-wider">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">500+</div>
            <div className="text-sm uppercase tracking-wider">Happy Students</div>
          </div>
        </motion.div>
      </motion.div>

     


    </section>
  );
}