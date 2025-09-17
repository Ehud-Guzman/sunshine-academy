import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrophy, FaBook, FaPalette, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function LearningHighlightsCarousel({ highlightsData }) {
  const highlights = highlightsData || [
    { img: "/images/academics/learning.jpg", title: "Hands-on Learning", desc: "Inspiring students through practical activities.", icon: <FaBook /> },
    { img: "/images/academics/learning-2.jpeg", title: "Science Lab Experiments", desc: "Students exploring science practically.", icon: <FaBook /> },
    { img: "/images/academics/kids award 2.jpg", title: "Student Awards", desc: "Celebrating achievements and milestones.", icon: <FaTrophy /> },
    { img: "/images/academics/kids-cert1.jpg", title: "Certificates & Achievements", desc: "Certificates for excellence in academics.", icon: <FaTrophy /> },
    { img: "/images/academics/kids-art2.jpg", title: "Arts & Creativity", desc: "Showcasing creativity in arts and crafts.", icon: <FaPalette /> },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      const handleResize = () => setContainerWidth(containerRef.current.offsetWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? highlights.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === highlights.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative w-full py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-10">
          Learning Highlights
        </h2>
        
        <div className="relative w-full" ref={containerRef}>
          {/* Carousel container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex justify-center items-center gap-6"
              animate={{ x: -activeIndex * 304 + (containerWidth / 2 - 152) }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className={`relative rounded-xl overflow-hidden cursor-pointer flex-shrink-0 w-72 h-80 transition-all duration-500 ${
                    i === activeIndex 
                      ? "scale-110 z-20 shadow-xl" 
                      : "scale-90 opacity-70 z-10 shadow-lg"
                  }`}
                  whileHover={{ scale: i === activeIndex ? 1.12 : 0.95 }}
                  onClick={() => setActiveIndex(i)}
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  
                  {/* Content */}
                  <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 ${
                    i === activeIndex ? "opacity-100" : "opacity-80"
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-gold-400 text-xl">
                        {item.icon}
                      </div>
                      <h3 className="font-serif font-bold text-xl tracking-wide">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-100 font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {highlights.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-[#B8860B] scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}