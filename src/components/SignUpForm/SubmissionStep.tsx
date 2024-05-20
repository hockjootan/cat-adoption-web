import Button from "src/components/common/Button";

const SubmissionStep: React.FC = () => {
  return (
    <div className="w-full">
      <p className="mb-4">Your account is created successfully.</p>
      <Button onClick={() => console.log("Go to Login")}>Go to Login</Button>
    </div>
  );
};

export default SubmissionStep;
