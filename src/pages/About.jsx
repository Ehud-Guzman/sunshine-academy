import { useContext } from "react";
import { TierContext } from "../context/TierContext";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/About/AboutSection";

// New Components
import PageHero from "../components/About/PageHero";
import FeatureCards from "../components/About/FeatureCards";
import TestimonialsPreview from "../components/About/TestimonialsPreview";
import VirtualTour from "../components/VirtualTour";
import CTASection from "../components/About/CTASection";

// School Description Component
function SchoolDescription() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Excellence in Education</h3>
              <p className="text-gray-700 mb-6">
                Sunshine Primary School was established in 1995 with a vision to provide world-class education 
                rooted in Kenyan values and global perspectives. For over two decades, we have been at the 
                forefront of educational innovation, combining the best of international curricula with the 
                rich cultural heritage of Kenya.
              </p>
              
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Philosophy</h3>
              <p className="text-gray-700 mb-6">
                We believe that every child is unique and deserves an education that nurtures their individual 
                talents while preparing them for global citizenship. Our holistic approach focuses on academic 
                excellence, character development, and cultural awareness, creating well-rounded individuals 
                who are proud of their Kenyan heritage while being prepared to thrive in an interconnected world.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Global Perspective</h3>
              <p className="text-gray-700 mb-6">
                As an international school, we welcome students from diverse backgrounds and nationalities. 
                Our curriculum incorporates global best practices while maintaining strong connections to 
                the Kenyan educational framework. Students graduate with both the Kenyan Certificate of 
                Primary Education and international qualifications that open doors to secondary education 
                opportunities worldwide.
              </p>
              
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Community Engagement</h3>
              <p className="text-gray-700">
                We pride ourselves on being an integral part of the local community while maintaining our 
                international standards. Our students participate in community service projects, cultural 
                exchanges, and environmental initiatives that foster a sense of responsibility and global citizenship.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-xl mt-12 border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Our Accreditations</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Kenya Ministry of Education</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <span className="text-gray-700">International Schools Association</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Cambridge Assessment</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Leadership Component
function LeadershipTeam() {
  const leaders = [
    {
      name: "Dr. Wanjiku Mbeki",
      position: "Principal & Director",
      bio: "With over 25 years in education leadership, Dr. Mbeki holds a Ph.D. in Educational Management and has transformed Sunshine Primary into a model international school.",
      image: "/images/leadership/principal.jpg"
    },
    {
      name: "Mr. James Ochieng",
      position: "Academic Dean",
      bio: "Mr. Ochieng brings expertise in curriculum development with international experience from schools in the UK and South Africa.",
      image: "/images/leadership/dean.jpg"
    },
    {
      name: "Mrs. Amina Said",
      position: "Student Affairs Director",
      bio: "Mrs. Said specializes in holistic student development and has implemented innovative wellbeing programs praised by educational organizations.",
      image: "/images/leadership/affairs.jpg"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Leadership Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced leadership team guides our vision for academic excellence and global citizenship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{leader.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{leader.position}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  const { currentTier } = useContext(TierContext);
  const f = currentTier?.features || {};

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      {f.about?.enabled && (
        <PageHero
          title="About Sunshine Primary"
          subtitle="Where Kenyan Heritage Meets Global Education Excellence"
          bgImage="/images/about-hero.jpg"
        />
      )}

      {/* School Description */}
      <SchoolDescription />

      {/* About Text + Values */}
      {f.about?.enabled && <AboutSection />}

      {/* Leadership Team */}
      <LeadershipTeam />

      {/* Feature / Why Choose Us */}
      <FeatureCards
        items={[
          {
            title: "Experienced International Faculty",
            description: "Our educators bring global experience with advanced degrees from prestigious institutions worldwide.",
            img: "/images/about/faculty.jpg",
          },
          {
            title: "World-Class Facilities",
            description: "State-of-the-art classrooms, science labs, sports facilities, and creative arts spaces designed for 21st-century learning.",
            img: "/images/about/facilities.jpg",
          },
          {
            title: "Holistic Development Program",
            description: "Integrated approach focusing on academics, arts, athletics, and character development for balanced growth.",
            img: "/images/about/holistic.jpg",
          },
        ]}
      />

      {/* Testimonials Preview */}
      {f.testimonials?.enabled && <TestimonialsPreview limit={3} />}

      {/* Virtual Tour */}
      {f.virtualTour?.enabled && (
        <VirtualTour
          title="Explore Our International Campus"
          description="Take a virtual journey through our world-class facilities designed to inspire learning and innovation"
        />
      )}

      {/* CTA Section */}
      <CTASection
        title="Begin Your Child's International Educational Journey"
        text="Schedule a personalized tour of our campus to experience the Sunshine Primary difference"
        link="/admissions"
        buttonText="Schedule Tour"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}