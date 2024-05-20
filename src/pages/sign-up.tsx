import Header from "src/components/Header";
import SignUpForm from "../containers/SignUpForm";

const SignUp: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-teal-50 w-full flex justify-center items-center">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
