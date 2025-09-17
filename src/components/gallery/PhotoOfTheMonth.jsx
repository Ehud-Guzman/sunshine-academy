// components/Gallery/PhotoOfTheMonth.jsx
import { motion } from "framer-motion";

export default function PhotoOfTheMonth() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Photo of the Month</h2>
          <p className="text-lg text-gray-600 mb-8">
            Each month, we feature an exceptional photo capturing life at Sunshine Primary
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="aspect-video overflow-hidden">
            <img 
              src="/images/academics/kids award 2.jpg" 
              alt="Students participating in science experiment"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Young Sportsmen at Work</h3>
           <p className="text-gray-600 mb-4">
  Our team celebrating a hard-fought victory on the field during the inter-school games. 
  This photo captures the thrill of teamwork, determination, and the joy of winning together.
</p>

            <div className="text-sm text-gray-500">November 2024 • Taken by: Mr. Otieno</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}