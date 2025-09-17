// components/Home/ValueProposition.jsx
import { motion } from "framer-motion";

export default function ValueProposition() {
  const values = [
    {
      icon: "🎓",
      title: "Quality Education",
      description: "Comprehensive CBC curriculum delivered by experienced educators"
    },
    {
      icon: "🌱",
      title: "Holistic Development",
      description: "Focus on academic, social, and emotional growth"
    },
    {
      icon: "🤝",
      title: "Community Partnership",
      description: "Strong collaboration between parents, teachers, and students"
    },
    {
      icon: "🚀",
      title: "Future Ready",
      description: "Preparing students for secondary education and beyond"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Sunshine Primary?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes our school the preferred choice for parents who value quality education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}