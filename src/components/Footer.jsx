import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaInstagram, FaPhoneAlt, FaGlobe, FaCheck } from "react-icons/fa";
import { FiMapPin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-gray-900 text-gray-300 pt-20 pb-10 mt-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div className="relative">
          <div className="absolute -top-10 -left-4 w-16 h-16 bg-yellow-500 rounded-full opacity-20 blur-xl"></div>
          <h2 className="text-2xl font-bold mb-4 tracking-wide bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            Sunshine Primary
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Excellence in education for every child.  
            Nurturing future leaders today.
          </p>
          <div className="flex items-center mt-4">
            <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center mr-3 shadow-lg">
              <FaCheck className="text-yellow-400" />
            </div>
            <span className="text-xs text-gray-400">Trusted by parents nationwide</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-white relative inline-block">
            Quick Links
            <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-yellow-400"></div>
          </h3>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Academics", "Admissions", "Events", "Staff", "Gallery", "Testimonials", "News", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-yellow-400 transition-all duration-300 flex items-center group"
                  >
                    <FaCheck className="h-3 w-3 mr-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Programs / Highlights */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-white relative inline-block">
            Programs
            <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-yellow-400"></div>
          </h3>
          <ul className="space-y-3 text-sm">
            {["STEM Curriculum", "Arts & Music", "Sports & Activities", "Field Trips", "Parent Engagement"].map((prog) => (
              <li key={prog} className="text-gray-400 flex items-center">
                <FaCheck className="h-3 w-3 mr-2 text-yellow-400 flex-shrink-0" />
                {prog}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-white relative inline-block">
            Contact Us
            <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-yellow-400"></div>
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start">
              <FiMapPin className="h-4 w-4 mr-2 text-yellow-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-400">Busia, Kenya</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="h-4 w-4 mr-2 text-yellow-400 flex-shrink-0" />
              <span className="text-gray-400">+254 700 000000</span>
            </div>
            <div className="flex items-center">
              <FiMail className="h-4 w-4 mr-2 text-yellow-400 flex-shrink-0" />
              <span className="text-gray-400">info@sunshineprimary.ac.ke</span>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold mb-3 text-white">Follow Us</h4>
            <div className="flex gap-3">
              {[FaTwitter, FaFacebookF, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-blue-900 flex items-center justify-center transition-all duration-300 hover:bg-yellow-400 hover:scale-110 group"
                >
                  <Icon className="text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400 space-y-2 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <p>© {new Date().getFullYear()} Sunshine Primary. All rights reserved.</p>
        <p className="flex items-center justify-center flex-wrap">
          Website created by{" "}
          <a
            href="https://glimmerink.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white transition-all duration-300 mx-1 flex items-center"
          >
            <FaGlobe className="mr-1" /> GlimmerInk Creations
          </a>{" "}
          <span className="mx-2">|</span>
          <a
            href="tel:+254746527253"
            className="hover:text-white transition-all duration-300 flex items-center"
          >
            <FaPhoneAlt className="mr-1" /> +254 746 527 253
          </a>
        </p>
      </div>
    </footer>
  );
}
