import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Input from "src/components/common/Input";
import Button from "src/components/common/Button";

interface EmailStepProps {
  formData: any;
  setFormData: (data: any) => void;
  nextStep: () => void;
}

const EmailStep: React.FC<EmailStepProps> = ({
  formData,
  setFormData,
  nextStep,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    setFormData(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
      <Button className="w-full" type="submit" variant="secondary">
        Next
      </Button>
    </form>
  );
};

export default EmailStep;
