import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Input from "src/components/common/Input";
import Button from "src/components/common/Button";

interface PersonalInfoStepProps {
  formData: any;
  setFormData: (data: any) => void;
  nextStep: () => void;
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({
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
      <h2 className="font-bold mb-4">Personal Information</h2>
      <Controller
        name="phone"
        control={control}
        rules={{
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]{10,11}$/,
            message: "Invalid phone number",
          },
        }}
        render={({ field }) => (
          <Input
            label="Phone Number"
            error={errors.phone && (errors.phone.message as string)}
            {...field}
          />
        )}
      />
      <Button type="submit" variant="primary">
        Next
      </Button>
    </form>
  );
};

export default PersonalInfoStep;
