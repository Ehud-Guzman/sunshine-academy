import { useContext } from "react";
import { TierContext } from "../context/TierContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SocialMediaFeed from "./News/SocialMediaFeed.jsx";

// News data with more details
const newsData = [
  { 
    id: 1,
    title: "New Library and Learning Commons Opens", 
    date: "2025-09-20", 
    snippet: "Our state-of-the-art library is now open, featuring interactive learning spaces and a vast collection of books.",
    category: "Facilities",
    image: "/images/about/campus-5.jpg",
    readTime: "2 min read"
  },
  { 
    id: 2,
    title: "Art Competition Winners Announced", 
    date: "2025-09-15", 
    snippet: "Congratulations to our talented students who showcased exceptional creativity in the annual art competition.",
    category: "Achievements",
    image: "/images/academics/trophy.webp",
    readTime: "3 min read"
  },
  { 
    id: 3,
    title: "Science Fair 2025: Young Innovators Shine", 
    date: "2025-09-10", 
    snippet: "Students presented innovative projects at our annual science fair, demonstrating remarkable scientific thinking.",
    category: "Events",
    image: "/images/academics/kids-cert1.jpg",
    readTime: "4 min read"
  },
  { 
    id: 4,
    title: "Sports Day: Record Participation", 
    date: "2025-08-28", 
    snippet: "This year's sports day saw record participation with students showcasing teamwork and sportsmanship.",
    category: "Sports",
    image: "/images/academics/kids award 2.jpg",
    readTime: "3 min read"
  }
];

export default function News() {
  const { currentTier } = useContext(TierContext);
  const f = currentTier?.features || {};
  if (!f.news?.enabled) return null;

  // Get featured news (first item)
  const featuredNews = newsData[0];
  // Get other news
  const otherNews = newsData.slice(1);

  return (
    <section className="py-16 px-6 pt-48 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800  mb-4">School News & Updates</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest events, achievements, and developments at Sunshine Primary
          </p>
        </motion.div>

        {/* Featured News */}
        <motion.article 
          className="mb-16 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={featuredNews.image} 
                alt={featuredNews.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                  {featuredNews.category}
                </span>
                <span className="text-sm text-gray-500">{featuredNews.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{featuredNews.title}</h3>
              <p className="text-gray-600 mb-6">{featuredNews.snippet}</p>
              <div className="flex items-center justify-between">
                <time className="text-sm text-gray-500">
                  {new Date(featuredNews.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
                <Link 
                  to={`/news/${featuredNews.id}`}
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.article>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {otherNews.map((news, i) => (
            <motion.article
              key={news.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    {news.category}
                  </span>
                  <span className="text-xs text-gray-500">{news.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{news.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{news.snippet}</p>
                <div className="flex items-center justify-between">
                  <time className="text-xs text-gray-500">
                    {new Date(news.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                  <Link 
                    to={`/news/${news.id}`}
                    className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors flex items-center"
                  >
                    Read more
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <SocialMediaFeed />

        {/* Newsletter Subscription */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6 max-w-md mx-auto">Subscribe to our newsletter to receive the latest news and updates directly to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}