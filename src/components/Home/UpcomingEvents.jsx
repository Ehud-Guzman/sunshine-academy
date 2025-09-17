// components/Home/UpcomingEvents.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "2025-11-12",
      time: "8:00 AM - 4:00 PM",
      location: "School Grounds",
      excerpt: "Join us for our annual inter-house sports competition featuring various track and field events."
    },
    {
      id: 2,
      title: "Science Fair Exhibition",
      date: "2025-10-05",
      time: "9:00 AM - 2:00 PM",
      location: "School Hall",
      excerpt: "Students showcase their innovative science projects to parents and judges."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-400 to-blue-700 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Mark your calendars for these exciting school events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {events.map((event, index) => {
            const eventDate = new Date(event.date);
            const formattedDate = eventDate.toLocaleDateString('en-KE', { 
              weekday: 'short', 
              day: 'numeric', 
              month: 'short' 
            });
            
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <div className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                    {formattedDate}
                  </div>
                </div>
                <div className="flex items-center text-blue-100 text-sm mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-blue-100 text-sm mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>{event.location}</span>
                </div>
                <p className="text-blue-100 mb-4">{event.excerpt}</p>
                <button className="px-4 py-2 bg-yellow-400 text-blue-900 rounded-lg font-medium hover:bg-yellow-300 transition-colors">
                  Learn More
                </button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/events"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-700 transition-all"
          >
            View All Events
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}