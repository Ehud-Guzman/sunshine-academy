import { useContext, useState, useEffect, useCallback } from "react";
import { TierContext } from "../context/TierContext";
import { motion, AnimatePresence } from "framer-motion";

// Enhanced testimonials data with ratings and roles
const testimonialsData = [
  { 
    name: "Jane Doe", 
    role: "Parent of Student",
    message: "My child loves Sunshine Primary! The caring environment and excellent curriculum have made such a positive impact on their development. We couldn't be happier with our choice.",
    image: "/images/testimonials/jane.jpeg",
    rating: 5,
    highlight: "Caring environment"
  },
  { 
    name: "Mercy Wanjiku", 
    role: "Parent & PTA Member",
    message: "Excellent teachers and facilities. The attention to individual student needs and the modern learning tools available make this school stand out from the rest.",
    image: "/images/testimonials/mercy.jpg",
    rating: 5,
    highlight: "Modern learning tools"
  },
  { 
    name: "Dr. Robert Chen", 
    role: "Education Consultant",
    message: "As an education professional, I'm thoroughly impressed with Sunshine Primary's innovative approach to holistic education. They're setting new standards in primary education.",
    image: "/images/testimonials/robert.jpg",
    rating: 5,
    highlight: "Innovative approach"
  },
];

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-[#FFD700]" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  );
};

// Floating background elements
const FloatingElements = () => (
  <>
    <motion.div
      className="absolute top-10 left-10 w-6 h-6 bg-[#FFD700] rounded-full opacity-20"
      animate={{
        y: [0, -20, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute bottom-20 right-16 w-8 h-8 bg-[#002B5B] rounded-full opacity-10"
      animate={{
        y: [0, 15, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    />
    <motion.div
      className="absolute top-1/2 left-20 w-4 h-4 bg-[#FF6B6B] rounded-full opacity-15"
      animate={{
        y: [0, -15, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
    />
  </>
);

export default function Testimonials() {
  const { currentTier } = useContext(TierContext);
  const f = currentTier?.features || {};
  if (!f.testimonials?.enabled) return null;

  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  const nextTestimonial = useCallback(() => {
    setIndex((current) => (current + 1) % testimonialsData.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  const goToSlide = (newIndex) => {
    setIndex(newIndex);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#EFF3FB] via-white to-[#F8FAFF] relative overflow-hidden">
      {/* Background Elements */}
      <FloatingElements />
      
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/5 to-transparent transform -skew-y-3"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#002B5B]/10 text-[#002B5B] text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
            What Parents Say
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#002B5B] mb-6 bg-gradient-to-r from-[#002B5B] to-[#004E89] bg-clip-text text-transparent">
            Loved by Families
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover why parents trust Sunshine Primary for their children's education journey
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={index}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="relative"
            >
              <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl shadow-[#002B5B]/10 p-12 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FFD700]/10 to-transparent rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#002B5B]/5 to-transparent rounded-tr-3xl"></div>

                <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
                  {/* Image Section */}
                  <motion.div
                    className="flex-shrink-0"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                  >
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src={testimonialsData[index].image} 
                          alt={testimonialsData[index].name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      {/* Decorative ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#FFD700]"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <div className="flex-1 text-center lg:text-left">
                    {/* Quote Icon */}
                    <motion.div
                      className="text-[#FFD700] mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </motion.div>

                    {/* Rating */}
                    <StarRating rating={testimonialsData[index].rating} />

                    {/* Message */}
                    <motion.p
                      className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-6 font-light italic"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      "{testimonialsData[index].message}"
                    </motion.p>

                    {/* Highlight Tag */}
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700]/20 rounded-full mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                      <span className="text-sm font-semibold text-[#002B5B]">
                        {testimonialsData[index].highlight}
                      </span>
                    </motion.div>

                    {/* Author Info */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h4 className="text-xl font-bold text-[#002B5B]">
                        {testimonialsData[index].name}
                      </h4>
                      <p className="text-gray-600 font-medium">
                        {testimonialsData[index].role}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => goToSlide((index - 1 + testimonialsData.length) % testimonialsData.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full shadow-lg flex items-center justify-center text-[#002B5B] hover:text-[#FFD700] transition-all duration-300 hover:scale-110 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => goToSlide((index + 1) % testimonialsData.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full shadow-lg flex items-center justify-center text-[#002B5B] hover:text-[#FFD700] transition-all duration-300 hover:scale-110 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonialsData.map((_, i) => (
            <motion.button
              key={i}
              className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                i === index ? "bg-[#FFD700]" : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => goToSlide(i)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {i === index && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#FFD700]"
                  layoutId="activeDot"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-[#002B5B] transition-colors"
          >
            <div className={`w-3 h-3 rounded-full ${isAutoPlaying ? "bg-green-500" : "bg-gray-400"}`}></div>
            {isAutoPlaying ? "Auto-playing" : "Click to play"}
          </button>
        </div>
      </div>
    </section>
  );
}