// components/Home/CommunitySpotlight.jsx
import { motion } from "framer-motion";

export default function CommunitySpotlight() {
  const spotlights = [
    {
      id: 1,
      name: "Parent-Teacher Association",
      description: "Our active PTA organizes events and supports school initiatives throughout the year.",
      image: "/images/community/Community outreach.jpg",
      link: "/pta"
    },
    {
      id: 2,
      name: "Alumni Network",
      description: "Stay connected with former students who continue to achieve great things.",
      image: "/images/community/alumni.jpg",
      link: "/alumni"
    },
    {
      id: 3,
      name: "Community Outreach",
      description: "Our students participate in various community service projects and initiatives.",
      image: "/images/community/Community outreach.jpg",
      link: "/outreach"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Community Spotlight</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the vibrant community that makes our school special
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spotlights.map((spotlight, index) => (
            <motion.div
              key={spotlight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={spotlight.image} 
                  alt={spotlight.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{spotlight.name}</h3>
                <p className="mb-4 text-white/90">{spotlight.description}</p>
                <button className="px-4 py-2 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}