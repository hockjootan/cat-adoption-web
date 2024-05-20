import { useState } from "react";
import PersonalInfoStep from "src/components/AdoptionForm/PersonalInfoStep";
import HouseholdInfoStep from "src/components/AdoptionForm/HouseholdInfoStep";
import AdoptionIntentionStep from "src/components/AdoptionForm/AdoptionIntentionStep";
import SubmissionStep from "src/components/AdoptionForm/SubmissionStep";
import CatCard from "src/components/Cat/Card";

const AdoptionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    phone: "",
    // Add other form fields here
  });
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const submitForm = () => {
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="p-6 bg-white flex flex-col md:flex-row">
      <div className="min-w-64 md:w-2/5 p-4">
        <CatCard
          name="Cat Name"
          breed="Breed"
          age="2 years old"
          gender="Female"
        />
      </div>
      <div className="md:w-3/5 p-4 min-w-[400px]">
        <div className="flex flex-col mb-4">
          <h1 className="text-xl font-medium mb-4">Cat Adoption Form for</h1>
          <h2 className="text-2xl font-semibold text-gray-900">Cat Name</h2>
        </div>
        {step === 1 && (
          <PersonalInfoStep
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <HouseholdInfoStep
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )}
        {step === 3 && (
          <AdoptionIntentionStep formData={formData} submitForm={submitForm} />
        )}
        {step === 4 && <SubmissionStep />}
      </div>
    </div>
  );
};

export default AdoptionForm;
