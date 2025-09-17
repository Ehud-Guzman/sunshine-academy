import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function PremiumTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Mr. & Mrs. Ochieng",
      role: "Parents of Grade 5 Student",
      content: "The teachers at this school have transformed our son's attitude toward learning. He's now excited to go to school every day!",
      image: "/images/testimonials/dr-lucy.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Grace Wanjiku",
      role: "Alumni, Class of 2020",
      content: "The foundation I received here prepared me perfectly for secondary school. I'm now top of my class in Sciences!",
      image: "/images/testimonials/jane.jpeg",
      rating: 5
    },
    {
      id: 3,
      name: "Mr. Kamau",
      role: "School Board Member",
      content: "I'm continually impressed by the dedication of our teaching staff and the progress our students make each year.",
      image: "/images/testimonials/sophie.jpg",
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-amber-200 rounded-full opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What People Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from parents, students, and community members about their experiences with our school.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="relative h-96">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: index === activeTestimonial ? 1 : 0.5,
                x: index === activeTestimonial ? 0 : 100,
                scale: index === activeTestimonial ? 1 : 0.95
              }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between ${
                index === activeTestimonial ? 'z-10' : 'z-0'
              }`}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-blue-100" style={{ fontSize: '4rem' }}>
                "
              </div>
              
              {/* Rating stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial content */}
              <p className="text-lg text-gray-700 italic mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              
              {/* Author info */}
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full mx-2 transition-all ${
                index === activeTestimonial ? 'bg-blue-600 scale-125' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Decorative elements at bottom */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-4">
            <div className="w-12 h-1 bg-blue-400 rounded-full"></div>
            <div className="w-6 h-1 bg-amber-400 rounded-full"></div>
            <div className="w-12 h-1 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}