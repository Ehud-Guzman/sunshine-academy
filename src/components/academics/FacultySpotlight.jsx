import { motion } from "framer-motion";
import { useState } from "react";

export default function FacultySpotlight() {
  const [activeDepartment, setActiveDepartment] = useState("all");

  const facultyData = [
    {
      id: 1,
      name: "Mr. Otieno",
      position: "Class 8 Teacher",
      department: "upper",
      bio: "Dedicated teacher with over 12 years guiding pupils towards success in KCPE exams.",
      image: "/images/testimonials/dr-lucy.jpg",
      achievements: ["KCPE Best Performing Teacher 2022", "Head of Science Club"]
    },
    {
      id: 2,
      name: "Ms. Achieng",
      position: "Lower Primary Teacher",
      department: "lower",
      bio: "Passionate about helping young learners discover reading and writing with joy.",
      image: "/images/testimonials/jane.jpeg",
      achievements: ["Best Class Teacher 2021", "Founder of Reading Corner Initiative"]
    },
    {
      id: 3,
      name: "Mrs. Kamau",
      position: "Sports & Games",
      department: "sports",
      bio: "Encourages pupils to build confidence and teamwork through sports and physical fitness.",
      image: "/images/testimonials/sophie.jpg",
      achievements: ["Led Football Team to County Finals", "National Primary Games Coach Award"]
    },
    {
      id: 4,
      name: "Mrs. Wanjiku",
      position: "Head of Creative Arts",
      department: "arts",
      bio: "Believes in nurturing talent in music, drawing, and drama to build confidence in pupils.",
      image: "/images/testimonials/mercy.jpg",
      achievements: ["Led Choir to Music Festival Nationals", "Art Exhibition Organizer"]
    }
  ];

  const departments = [
    { id: "all", name: "All Teachers" },
    { id: "lower", name: "Lower Primary" },
    { id: "upper", name: "Upper Primary" },
    { id: "sports", name: "Sports" },
    { id: "arts", name: "Creative Arts" }
  ];

  const filteredFaculty =
    activeDepartment === "all"
      ? facultyData
      : facultyData.filter((teacher) => teacher.department === activeDepartment);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-4 py-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Meet Our Teachers
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Dedicated, caring, and committed to nurturing every child’s potential.
        </p>
      </div>

      {/* Department Filter */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex flex-wrap justify-center gap-2">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDepartment(dept.id)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                activeDepartment === dept.id
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>
      </div>

      {/* Teachers Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {filteredFaculty.map((teacher) => (
          <motion.div
            key={teacher.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {teacher.name}
              </h3>
              <p className="text-green-600 font-medium mb-3">
                {teacher.position}
              </p>
              <p className="text-gray-600 text-sm mb-4">{teacher.bio}</p>

              <div className="border-t border-gray-100 pt-4">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Achievements
                </h4>
                <ul className="space-y-1">
                  {teacher.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-700 flex items-start"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
        >
          View All Teachers
        </motion.button>
      </div>
    </motion.div>
  );
}
