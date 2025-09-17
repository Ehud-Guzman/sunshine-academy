import { motion } from "framer-motion";

export default function ProgressBar({ currentStep, totalSteps }) {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <motion.div
        className="h-2 bg-[#FFD700] rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
