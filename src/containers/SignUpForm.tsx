import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

import EmailStep from "src/components/SignUpForm/EmailStep";
import NamePasswordStep from "src/components/SignUpForm/NamePasswordStep";
import SubmissionStep from "src/components/SignUpForm/SubmissionStep";

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prevStep) => prevStep + 1);

  const submitForm: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white min-w-[400px] shadow rounded flex flex-col p-8 items-center">
      <h1 className="text-xl font-bold mb-4">Welcome to FurEverHome</h1>
      <p className="mb-4">Sign up to find your purr-fect companion.</p>
      {step === 1 && (
        <EmailStep
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <NamePasswordStep formData={formData} submitForm={submitForm} />
      )}
      {step === 3 && <SubmissionStep />}
    </div>
  );
};

export default SignUpForm;
