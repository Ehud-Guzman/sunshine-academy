// components/Contact/QuickContactCards.jsx
import { motion } from "framer-motion";

export default function QuickContactCards() {
  const contactMethods = [
    {
      title: "Admissions Office",
      description: "For enrollment inquiries and school tours",
      phone: "+254 746 527 253",
      email: "admissions@sunshineprimary.ac.ke",
      icon: "🎓"
    },
    {
      title: "General Inquiries",
      description: "For general questions and information",
      phone: "++254 746 527 253",
      email: "info@sunshineprimary.ac.ke",
      icon: "🏫"
    },
    {
      title: "Student Affairs",
      description: "For student-related matters and support",
      phone: "++254 746 527 253",
      email: "students@sunshineprimary.ac.ke",
      icon: "👨‍🎓"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Quick Contact</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Reach out to the right department for faster assistance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-3xl mb-4">{method.icon}</div>
              <h3 className="font-bold text-lg mb-2">{method.title}</h3>
              <p className="text-blue-100 mb-4 text-sm">{method.description}</p>
              
              <div className="space-y-2">
                <a 
                  href={`tel:${method.phone}`}
                  className="flex items-center text-white hover:text-blue-200 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  {method.phone}
                </a>
                
                <a 
                  href={`mailto:${method.email}`}
                  className="flex items-center text-white hover:text-blue-200 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  {method.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}