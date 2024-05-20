import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Input from "src/components/common/Input";
import Button from "src/components/common/Button";

interface NamePasswordStepProps {
  formData: any;
  submitForm: (data: any) => void;
}

const NamePasswordStep: React.FC<NamePasswordStepProps> = ({
  formData,
  submitForm,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    submitForm(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <Controller
        name="name"
        control={control}
        rules={{
          required: "Name is required",
        }}
        render={({ field }) => (
          <Input
            label=""
            placeholder="Enter your name"
            error={errors.name && (errors.name.message as string)}
            {...field}
          />
        )}
      />
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
            error={errors.password && (errors.password.message as string)}
            {...field}
          />
        )}
      />
      <Button className="w-full" type="submit" variant="primary">
        Sign Up
      </Button>
    </form>
  );
};

export default NamePasswordStep;
