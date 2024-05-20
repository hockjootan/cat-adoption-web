import Header from "src/components/Header";
import LoginForm from "../containers/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-teal-50 w-full flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
