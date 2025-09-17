import { useContext, useState } from "react";
import { TierContext } from "../../context/TierContext";
import StepChecklist from "./steps/StepChecklist";
import StepPersonalInfo from "./steps/StepPersonalInfo";
import StepAcademicInfo from "./steps/StepAcademicInfo";
import StepDocumentsUpload from "./steps/StepDocumentsUpload";
import StepReview from "./steps/StepReview";
import StepConfirmation from "./steps/StepConfirmation";
import ProgressBar from "./ProgressBar";
import "./AdmissionsForm.css";

// Define form steps for better maintainability
const FORM_STEPS = [
  { id: "checklist", title: "Pre-Application Checklist", component: StepChecklist },
  { id: "personal", title: "Personal Information", component: StepPersonalInfo },
  { id: "academic", title: "Academic Background", component: StepAcademicInfo },
  { id: "documents", title: "Required Documents", component: StepDocumentsUpload },
  { id: "review", title: "Review & Submit", component: StepReview },
  { id: "confirmation", title: "Confirmation", component: StepConfirmation },
];

export default function AdmissionsForm() {
  const { currentTier } = useContext(TierContext);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    school: "",
    achievements: "",
    documents: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if admissions are enabled
  const isAdmissionsEnabled = currentTier?.features?.admissions?.enabled;

  // Handle form data updates
  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Navigation handlers
  const goToNextStep = () => {
    if (currentStep < FORM_STEPS.length - 2) { // -2 to exclude confirmation from navigation
      setCurrentStep(prev => prev + 1);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (currentStep !== FORM_STEPS.length - 2) {
      goToNextStep();
      return;
    }
    
 setIsSubmitting(true);
  try {
    console.log("Submitting application:", formData);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setCurrentStep(FORM_STEPS.length - 1); // finally show confirmation
  } catch (error) {
    console.error("Submission error:", error);
  } finally {
    setIsSubmitting(false);
  }
};

  // Render current step component
const renderCurrentStep = () => {
  const StepComponent = FORM_STEPS[currentStep].component;

  switch (FORM_STEPS[currentStep].id) {
    case "personal":
    case "academic":
    case "documents":
      return <StepComponent formData={formData} updateFormData={updateFormData} />;
    case "review":
      return <StepComponent formData={formData} />;
    case "confirmation":
      return (
        <StepComponent
          onReset={() => {
            setCurrentStep(0); // go back to checklist
            setFormData({
              name: "",
              email: "",
              phone: "",
              grade: "",
              school: "",
              achievements: "",
              documents: [],
            });
          }}
        />
      );
    default:
      return <StepComponent />;
  }
};


  // Show unavailable message if admissions are disabled
  if (!isAdmissionsEnabled) {
    return (
      <section className="admissions-section">
        <div className="admissions-unavailable">
          <div className="unavailable-icon">📋</div>
          <h2>Admissions Currently Closed</h2>
          <p>Our admissions process is not open at this time. Please check back later for updates.</p>
          <button className="notify-button" onClick={() => console.log("Notify me clicked")}>
            Notify Me When Admissions Open
          </button>
        </div>
      </section>
    );
  }

  const isConfirmationStep = currentStep === FORM_STEPS.length - 1;
  const isReviewStep = currentStep === FORM_STEPS.length - 2;

  return (
    <section className="admissions-section pt-24">

      <div className="admissions-form-container">
        {/* Header */}
        <div className="form-header">
          <h1>Admissions Application</h1>
          <p>Complete your application in {FORM_STEPS.length - 1} simple steps</p>
        </div>

        {/* Progress Bar */}
        {!isConfirmationStep && (
          <div className="progress-section">
            <ProgressBar 
              currentStep={currentStep} 
              totalSteps={FORM_STEPS.length - 1} 
              stepTitles={FORM_STEPS.slice(0, -1).map(step => step.title)}
            />
          </div>
        )}

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="form-content">
          <div className="step-container">
            {renderCurrentStep()}
          </div>

          {/* Navigation */}
          {!isConfirmationStep && (
            <div className="navigation-buttons">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={goToPrevStep}
                  className="nav-button prev-button"
                  disabled={isSubmitting}
                >
                  ← Previous
                </button>
              )}
              
              {currentStep < FORM_STEPS.length - 2 ? (
                <button
                  type="button"
                  onClick={goToNextStep}
                  className="nav-button next-button"
                >
                  Next →
                </button>
              ) : (
                <button
                  type="submit"
                  className="nav-button submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              )}
            </div>
          )}
        </form>

        {/* Step Indicator for mobile */}
        {!isConfirmationStep && (
          <div className="mobile-step-indicator">
            Step {currentStep + 1} of {FORM_STEPS.length - 1}
          </div>
        )}
      </div>
    </section>
  );
}