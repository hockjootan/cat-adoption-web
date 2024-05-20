import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import Input from "src/components/common/Input";
import Button from "src/components/common/Button";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white w-1/2 min-w-[400px] max-w-[600px] shadow rounded flex flex-col p-8 items-center">
        <h1 className="text-xl font-bold mb-4">Welcome to FurEverHome</h1>
        <p className="mb-4">Where you find your purr-fect companion.</p>
        <div className="w-full">
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
            }}
            render={({ field }) => (
              <Input
                label=""
                placeholder="Enter your email"
                error={errors.email && (errors.email.message as string)}
                {...field}
              />
            )}
          />
        </div>
        <div className="w-full">
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
            }}
            render={({ field }) => (
              <Input
                label=""
                placeholder="Enter your password"
                type="password"
                error={errors.password && (errors.password.message as string)}
                {...field}
              />
            )}
          />
        </div>
        <Button className="w-full" type="submit" variant="secondary">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
