import { useContext, useState, useEffect } from "react";
import { TierContext } from "../context/TierContext";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { currentTier } = useContext(TierContext);
  const f = currentTier?.features || {};
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Determine if this page uses a hero image / transparent navbar
  const transparentPages = ["/"]; // only home for now
  const isTransparent = transparentPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    
    // Prevent body scrolling when mobile menu is open
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const links = [
    { name: "Home", path: "/", enabled: true },
    { name: "About", path: "/about", enabled: f.about?.enabled },
    { name: "Academics", path: "/academics", enabled: f.academics?.enabled },
    { name: "Admissions", path: "/admissions", enabled: f.admissions?.enabled },
    { name: "Events", path: "/events", enabled: f.events?.enabled },
    { name: "Staff", path: "/staff", enabled: f.staff?.enabled },
    { name: "Gallery", path: "/gallery", enabled: f.gallery?.enabled },
    { name: "Testimonials", path: "/testimonials", enabled: f.testimonials?.enabled },
    { name: "News", path: "/news", enabled: f.news?.enabled },
    { name: "Contact", path: "/contact", enabled: f.contact?.enabled },
  ];

  // Dynamic styling
  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled || !isTransparent
      ? "backdrop-blur-md bg-white/95 shadow-md py-4"
      : "bg-transparent py-6"
  }`;
  const linkColor = scrolled || !isTransparent ? "text-[#0A2342]" : "text-white";
  const linkHover = scrolled || !isTransparent ? "hover:text-[#B8860B]" : "hover:text-[#FDF5BF]";

  return (
    <>
      {/* Global page blur when mobile menu is open */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 backdrop-blur-xl bg-black/30 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif font-bold text-2xl tracking-tight transition-colors duration-300 ${linkColor}`}
          >
            Sunshine Primary
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 items-center">
            {links.map(
              (link, i) =>
                link.enabled && (
                  <li key={i} className="relative group">
                    <Link
                      to={link.path}
                      className={`transition-all duration-300 font-medium tracking-wide ${
                        location.pathname === link.path
                          ? "text-[#B8860B] font-bold"
                          : linkColor
                      } ${linkHover}`}
                    >
                      {link.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#B8860B] group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                  </li>
                )
            )}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden text-xl transition-colors duration-300 ${linkColor} z-50`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 z-40 pt-24"
            >
              <motion.ul
                className="relative flex flex-col gap-6 px-8 z-50"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
              >
                {links.map(
                  (link, i) =>
                    link.enabled && (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05 } }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setOpen(false)}
                          className={`transition-colors py-3 block text-xl font-medium hover:text-[#B8860B] ${
                            location.pathname === link.path
                              ? "text-[#B8860B] font-bold"
                              : "text-white"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    )
                )}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: links.length * 0.05 } }}
                  className="mt-6"
                >
                  <Link
                    to="/admissions"
                    onClick={() => setOpen(false)}
                    className="bg-[#B8860B] text-white font-medium px-6 py-3 rounded-md hover:bg-[#A47C0B] transition-all duration-300 block text-center"
                  >
                    Apply Now
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}