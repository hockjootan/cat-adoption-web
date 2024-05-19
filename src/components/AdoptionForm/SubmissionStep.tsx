interface SubmissionStepProps {
  formData: any;
}

const SubmissionStep: React.FC<SubmissionStepProps> = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">Thank you for your submission!</h2>
      <p>
        We appreciate your interest in providing a loving home for one of our
        cats.
        <br /> Our team will review your application and get back to you soon.
        You can check the status from the homepage.
      </p>
      <button className="bg-gray-300 text-gray-900 py-2 px-4 rounded hover:bg-gray-400">
        Back to Home
      </button>
    </div>
  );
};

export default SubmissionStep;
