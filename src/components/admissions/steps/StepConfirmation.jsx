import { motion } from "framer-motion";
import { useState } from "react";

export default function StepConfirmation({ onReset }) {
  const [reference] = useState(
    `APP-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center min-h-[500px] py-12 px-6"
    >
      {/* Success Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        className="relative mb-8"
      >
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <motion.div 
          className="absolute -inset-4 bg-green-100 rounded-full opacity-0 z-[-1]"
          animate={{ opacity: 0.4, scale: 1.3 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </motion.div>

      {/* Title */}
      <h3 className="text-3xl font-bold text-[#002B5B] mb-4 text-center">
        Application Submitted Successfully!
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 max-w-xl mx-auto mb-10 text-center leading-relaxed text-lg">
        Thank you for submitting your application. Our admissions team will
        review your details and reach out within{" "}
        <span className="font-medium text-[#002B5B]">5-7 business days</span>.
      </p>

      {/* Reference Number */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-100 mb-12 w-full max-w-md"
      >
        <p className="text-sm text-gray-600 uppercase tracking-wider font-medium mb-2 text-center">
          Your Application Reference
        </p>
        <p className="font-mono font-bold text-[#002B5B] text-xl text-center tracking-wide">
          {reference}
        </p>
        <p className="text-xs text-gray-500 mt-3 text-center">
          Please save this number for future reference
        </p>
      </motion.div>

      {/* Next Steps */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-gray-50 p-6 rounded-xl mb-10 w-full max-w-xl"
      >
        <h4 className="font-semibold text-[#002B5B] mb-3 text-center">What happens next?</h4>
        <ul className="text-sm text-gray-600 space-y-2">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>You'll receive a confirmation email shortly</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>Our team will review your application</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span>We'll contact you to schedule an interview if needed</span>
          </li>
        </ul>
      </motion.div>

      {/* Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -10px rgba(0, 43, 91, 0.3)" }}
          whileTap={{ scale: 0.97 }}
          onClick={onReset}
          className="px-8 py-4 rounded-xl bg-[#002B5B] text-white font-medium shadow-md hover:bg-[#004080] transition-colors flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Admissions Portal
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-4 rounded-xl bg-white text-[#002B5B] font-medium border border-[#002B5B] shadow-sm hover:bg-gray-50 transition-colors"
          onClick={() => window.print()}
        >
          Print Confirmation
        </motion.button>
      </motion.div>

      {/* Support Info */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 text-center text-sm text-gray-500"
      >
        <p>Need help? Contact admissions support at <a href="mailto:admissions@school.edu" className="text-[#002B5B] underline">admissions@school.edu</a></p>
      </motion.div>
    </motion.div>
  );
}