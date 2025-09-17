import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TierContext } from "./context/TierContext";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import AcademicsPage from "./pages/Academics";
import ContactPage from "./pages/Contact";
import AdmissionsPage from "./pages/Admissions";
import EventsPage from "./pages/Events";
import StaffPage from "./pages/Staff";
import GalleryPage from "./pages/Gallery";
import TestimonialsPage from "./pages/Testimonials";
import NewsPage from "./pages/News";



// Features JSON
import tiers from "./config/features.json"; // basic, standard, premium

export default function App() {
  const [currentTier, setCurrentTier] = useState(tiers.premium);

  return (
    <TierContext.Provider value={{ currentTier, setCurrentTier }}>
      <Router>
      <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/news" element={<NewsPage />} />
        
        </Routes>
        
      </Router>
    </TierContext.Provider>
  );
}
