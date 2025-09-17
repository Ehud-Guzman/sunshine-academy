import { useContext } from "react";
import { TierContext } from "../context/TierContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeAbout from "../components/Home/HomeAbout";
import VirtualTour from "../components/VirtualTour";
import News from "../components/News";

// New components
import ValueProposition from "../components/Home/ValueProposition";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import CommunitySpotlight from "../components/Home/CommunitySpotlight";

export default function Home() {
  const { currentTier } = useContext(TierContext);
  const f = currentTier?.features || {};

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        {/* Hero */}
        {f.hero?.enabled && <Hero />}

        {/* Value Proposition */}
        <section className="py-16 md:py-0 bg-gradient-to-b from-blue-50 to-white">
          <ValueProposition />
        </section>

        {/* About / Mission & Vision */}
        {f.about?.enabled && (
          <section className="py-16 md:py-0 bg-white">
            <HomeAbout />
          </section>
        )}

        {/* Upcoming Events */}
        <section className="py-16 md:py-0 bg-gradient-to-b from-blue-50 to-white">
          <UpcomingEvents />
        </section>

        {/* Community Spotlight / Testimonials */}
        <section className="py-16 md:py-0 bg-white">
          <CommunitySpotlight />
        </section>

        {/* Virtual Tour Video */}
        {f.virtualTour?.enabled && (
          <section className="py-16 md:py-0 bg-gradient-to-b from-blue-50 to-white">
            <VirtualTour />
          </section>
        )}

        {/* Latest News */}
        {f.news?.enabled && (
          <section className="py-16 md:py-0 bg-white">
            <News />
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
