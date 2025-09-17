import { useState } from "react";
import { motion } from "framer-motion";

const demoTestimonials = [
  {
    name: "Jane Doe",
    message: "My child loves Sunshine Primary!",
    img: "/images/testimonials/jane.jpeg",
  },
  {
    name: "John Smith",
    message: "Excellent teachers and facilities.",
    img: "/images/testimonials/sophie.jpg",
  },
  {
    name: "Mary Johnson",
    message: "A nurturing and safe environment for kids.",
    img: "/images/testimonials/mercy.jpg",
  },
];

export default function TestimonialsPreview({ limit = 3 }) {
  const [index, setIndex] = useState(0);
  const testimonials = demoTestimonials.slice(0, limit);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#002B5B] mb-12">Parent Testimonials</h2>
        <div className="relative">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="p-6 rounded-lg shadow-lg bg-gray-50 flex flex-col md:flex-row items-center gap-6"
          >
            <img
              src={testimonials[index].img}
              alt={testimonials[index].name}
              className="w-20 h-20 rounded-full object-cover border-2 border-[#FFD700]"
            />
            <div>
              <p className="text-gray-700 italic mb-2">"{testimonials[index].message}"</p>
              <p className="font-semibold text-[#002B5B]">{testimonials[index].name}</p>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="px-3 py-1 bg-[#002B5B] text-white rounded hover:bg-[#FFD700] transition">Prev</button>
            <button onClick={next} className="px-3 py-1 bg-[#002B5B] text-white rounded hover:bg-[#FFD700] transition">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}
