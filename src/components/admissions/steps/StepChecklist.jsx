import { motion } from "framer-motion";

export default function StepChecklist({ goToNextStep }) {
  const checklistItems = [
    "Full Name, Email & Phone Number",
    "Current Grade / School",
    "Academic Achievements / Awards (if any)",
    "Required Documents: Birth Certificate, Report Cards, Recommendation Letters",
    "Digital copies ready for upload (PDF, JPG, PNG)",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="bg-blue-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-[#002B5B] mb-4">
          Before You Begin
        </h3>
        <p className="text-gray-700 mb-6">
          To make your application smooth and complete, please have the following ready:
        </p>

        <ul className="space-y-3">
          {checklistItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#FFD700] font-bold text-lg">•</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-gray-600 italic text-sm">
          Once you have all items ready, click "Next" to start your application.
        </p>
      </div>

      <div className="text-center mt-8">
        <button
          type="button"
          onClick={goToNextStep}
          className="px-6 py-3 bg-[#002B5B] text-white rounded-lg hover:bg-[#003366] transition-all"
        >
          I'm Ready, Let's Start
        </button>
      </div>
    </motion.div>
  );
}