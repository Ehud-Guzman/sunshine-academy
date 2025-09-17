import { useRef } from "react";
import { motion } from "framer-motion";

export default function StepDocumentsUpload({ formData, updateFormData }) {
  const fileInputRef = useRef();

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    updateFormData("documents", [...formData.documents, ...files]);
  };

  const removeFile = (index) => {
    const newDocs = [...formData.documents];
    newDocs.splice(index, 1);
    updateFormData("documents", newDocs);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <h3 className="text-xl font-semibold text-[#002B5B] mb-2">Document Upload</h3>
      <p className="text-gray-600 mb-6">Please upload all required documents for your application.</p>
      
      <div
        onClick={() => fileInputRef.current.click()}
        className="border-2 border-dashed border-gray-300 p-8 rounded-lg text-center cursor-pointer hover:border-[#FFD700] transition-all bg-gray-50"
      >
        <div className="text-4xl mb-4">📁</div>
        <p className="text-gray-600">Click or drag files to upload</p>
        <p className="text-sm text-gray-500 mt-2">Supported formats: PDF, JPG, PNG (Max 5MB each)</p>
      </div>
      
      <input
        type="file"
        multiple
        ref={fileInputRef}
        onChange={handleFiles}
        className="hidden"
      />

      {formData.documents.length > 0 && (
        <div className="mt-6">
          <h4 className="font-medium text-gray-700 mb-3">Uploaded Files:</h4>
          <ul className="space-y-2">
            {formData.documents.map((file, i) => (
              <li key={i} className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
                <span className="text-gray-700 truncate">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="text-red-500 hover:text-red-700 font-bold ml-2"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}