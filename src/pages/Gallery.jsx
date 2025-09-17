// src/pages/GalleryPage.jsx
import { useContext, useState } from "react";
import { TierContext } from "../context/TierContext";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { galleryData, categories } from "../data/galleryData";
import GalleryStats from "../components/gallery/GalleryStats.jsx";
import PhotoOfTheMonth from "../components/gallery/PhotoOfTheMonth.jsx";
import GalleryCTA from "../components/gallery/GalleryCTA.jsx";

export default function GalleryPage({ limit }) {
  const { currentTier } = useContext(TierContext);
  const f = currentTier?.features || {};
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  if (!f.gallery?.enabled) return (
    <>
      <Navbar />
      <Footer />
    </>
  );

  // Filter images by category
  const filteredImages = activeCategory === "all" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);
  
  const imagesToShow = limit ? filteredImages.slice(0, limit) : filteredImages;

  return (
    <>
      <Navbar />

      <section className="min-h-screen py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">School Gallery</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our campus, facilities, and daily life at Sunshine Primary through our photo gallery
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          <PhotoOfTheMonth />

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {imagesToShow.map((img, i) => (
                <motion.div
                  key={i}
                  className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => { setIndex(i); setOpen(true); }}
                  layout
                >
                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Overlay with description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <p className="text-sm font-medium">{img.alt}</p>
                      <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-1">
                        {img.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No images message */}
          {imagesToShow.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <h3 className="text-xl font-medium text-gray-600">No images in this category</h3>
              <p className="text-gray-500 mt-2">Please select a different category.</p>
            </motion.div>
          )}

          {/* Lightbox */}
          {open && (
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={imagesToShow.map(img => ({ 
                src: img.src, 
                description: (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-800">{img.alt}</h3>
                    <p className="text-gray-600">{img.description}</p>
                  </div>
                )
              }))}
              index={index}
              controller={{ closeOnBackdropClick: true }}
              styles={{
                container: { backgroundColor: "rgba(0, 0, 0, 0.85)" },
                slide: { padding: "20px" }
              }}
            />
          )}
        </div>
        <GalleryStats />
        <GalleryCTA />
      </section>

      <Footer />
    </>
  );
}