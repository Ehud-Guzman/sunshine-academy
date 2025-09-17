import { motion } from "framer-motion";

export default function StepAcademicInfo({ formData, updateFormData }) {
  const grades = ["Kindergarten", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"];
  const schools = ["Sunshine Preschool", "Bright Future Academy", "Other"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <h3 className="text-xl font-semibold text-[#002B5B] mb-2">Academic Information</h3>
      <p className="text-gray-600 mb-6">Tell us about your academic background.</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Grade Applying For</label>
          <select
            value={formData.grade}
            onChange={(e) => updateFormData("grade", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all"
            required
          >
            <option value="" disabled>Select Grade</option>
            {grades.map((grade, i) => (
              <option key={i} value={grade}>{grade}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Previous School</label>
          <select
            value={formData.school}
            onChange={(e) => updateFormData("school", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all"
            required
          >
            <option value="" disabled>Select Previous School</option>
            {schools.map((school, i) => (
              <option key={i} value={school}>{school}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Achievements / Notes</label>
          <textarea
            value={formData.achievements}
            onChange={(e) => updateFormData("achievements", e.target.value)}
            placeholder="Any academic achievements, awards, or notes..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all resize-none"
            rows={4}
          />
        </div>
      </div>
    </motion.div>
  );
}