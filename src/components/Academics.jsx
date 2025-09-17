import { useState } from "react";
import { motion } from "framer-motion";
import { subjectsData } from "../data/subjectsData";
import SubjectsGrid from "../components/SubjectsGrid";
import LearningHighlights from "../components/academics/LearningHighlights";
import HeroAcademics from "../components/academics/HeroAcademics"; // new import
import FacultySpotlight from "../components/academics/FacultySpotlight"; 

export default function Academics() {
  const [activeGrade, setActiveGrade] = useState(subjectsData[0].grade);
  const currentSubjects =
    subjectsData.find((g) => g.grade === activeGrade)?.subjects || [];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <HeroAcademics />

        {/* Grade Selector */}
        <div className="flex overflow-x-auto gap-4 justify-center mb-12 py-2">
          {subjectsData.map((g) => (
            <motion.button
              key={g.grade}
              onClick={() => setActiveGrade(g.grade)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold transition-all border-2 ${
                g.grade === activeGrade
                  ? "bg-gradient-to-r from-[#FFD700] to-[#FFB800] text-[#002B5B] border-transparent shadow-xl"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {g.grade}
            </motion.button>
          ))}
        </div>

        {/* Subjects Grid */}
        <SubjectsGrid subjects={currentSubjects} />

        <FacultySpotlight />

        {/* Learning Highlights */}
        <LearningHighlights limit={10} />
      </div>
    </section>
  );
}
