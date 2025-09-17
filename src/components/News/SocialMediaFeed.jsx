// components/News/SocialMediaFeed.jsx
import { motion } from "framer-motion";

export default function SocialMediaFeed() {
  const socialPosts = [
    {
      platform: "Facebook",
      icon: "📘",
      content: "Our students did an amazing job at the science fair! 🧪🔬",
      time: "2 hours ago",
      engagement: "24 likes • 5 comments",
      color: "from-blue-500 to-blue-600"
    },
    {
      platform: "Twitter",
      icon: "🐦",
      content: "Congratulations to our basketball team for winning the inter-school championship! 🏆 #SchoolPride",
      time: "1 day ago",
      engagement: "18 retweets • 42 likes",
      color: "from-blue-400 to-blue-500"
    },
    {
      platform: "Instagram",
      icon: "📸",
      content: "Art class is in session! 🎨 Our students are creating beautiful masterpieces.",
      time: "2 days ago",
      engagement: "56 likes • 8 comments",
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <motion.div 
      className="max-w-2xl mx-auto bg-white rounded-2xl mt-8 p-8 shadow-xl border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800">Social Media Updates</h3>
        <p className="text-gray-500 mt-2">Stay connected with our latest news</p>
      </div>
      
      <div className="space-y-6">
        {socialPosts.map((post, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-50 rounded-xl p-5 border border-gray-200 transition-all hover:shadow-md"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center mb-3">
              <span className={`bg-gradient-to-r ${post.color} w-10 h-10 rounded-full flex items-center justify-center text-white text-lg mr-3 shadow-md`}>
                {post.icon}
              </span>
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-800">{post.platform}</span>
                  <span className="text-xs text-gray-500 ml-2">• {post.time}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-3 leading-relaxed">{post.content}</p>
            <p className="text-sm text-gray-500">{post.engagement}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center gap-4 mt-8">
        <motion.button 
          className="px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="mr-2">📘</span> Follow on Facebook
        </motion.button>
        <motion.button 
          className="px-5 py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-xl hover:shadow-lg transition-all flex items-center font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="mr-2">🐦</span> Follow on Twitter
        </motion.button>
      </div>
    </motion.div>
  );
}