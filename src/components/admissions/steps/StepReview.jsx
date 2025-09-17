import { motion } from "framer-motion";

export default function StepReview({ formData, onSubmit, isSubmitting }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <h3 className="text-xl font-semibold text-[#002B5B] mb-2">
        Review Your Application
      </h3>
      <p className="text-gray-600 mb-6">
        Please review all information before submitting.
      </p>

      <div className="bg-gray-50 p-6 rounded-lg">
        {/* Personal Info */}
        <h4 className="font-medium text-[#002B5B] mb-4">
          Personal Information
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Info label="Full Name" value={formData.name} />
          <Info label="Email" value={formData.email} />
          <Info label="Phone" value={formData.phone} />
        </div>

        {/* Academic Info */}
        <h4 className="font-medium text-[#002B5B] mb-4">
          Academic Information
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Info label="Grade Applying For" value={formData.grade} />
          <Info label="Previous School" value={formData.school} />
          <Info label="Achievements/Notes" value={formData.achievements} full />
        </div>

        {/* Documents */}
        <h4 className="font-medium text-[#002B5B] mb-4">Documents</h4>
        <div>
          <p className="text-sm text-gray-600">Uploaded Files</p>
          {formData.documents?.length > 0 ? (
            <ul className="list-disc list-inside mt-2">
              {formData.documents.map((file, i) => (
                <li key={i} className="text-gray-700">
                  {file.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="font-medium">No documents uploaded</p>
          )}
        </div>
      </div>

      {/* Submit CTA */}
      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className="px-6 py-2 rounded-lg bg-[#002B5B] text-white hover:bg-[#004080] disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </motion.div>
  );
}

// helper component to reduce repetition
function Info({ label, value, full }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="font-medium">{value || "Not provided"}</p>
    </div>
  );
}
