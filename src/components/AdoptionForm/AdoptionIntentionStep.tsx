import { useForm, Controller, SubmitHandler } from "react-hook-form";

import Input from "src/components/common/Input";
import RadioButton from "src/components/common/RadioButton";
import Button from "src/components/common/Button";

interface AdoptionIntentionStepProps {
  formData: any;
  submitForm: (data: any) => void;
}

const AdoptionIntentionStep: React.FC<AdoptionIntentionStepProps> = ({
  formData,
  submitForm,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: formData,
  });

  const watchAdoptionReason = watch("adoption_reason");

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("data", data);
    submitForm(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <h2 className="font-bold mb-4">Adoption Intentions & Commitment</h2>

      <div className="mb-4">
        <p className="mb-2 text-sm font-bold text-gray-700">
          Why do you want to adopt a cat?
        </p>
        <Controller
          name="adoption_reason"
          control={control}
          rules={{ required: "Reason is required" }}
          render={({ field }) => (
            <>
              <RadioButton label="Companion" {...field} value="companion" />
              <RadioButton label="Family Pet" {...field} value="family_pet" />
              <RadioButton
                label="Others, please specify"
                {...field}
                value="others"
              />
            </>
          )}
        />
        {errors.adoption_reason &&
          (errors.adoption_reason.message as string) && (
            <p className="text-red-500 text-sm">
              {errors.adoption_reason.message as string}
            </p>
          )}
      </div>

      {watchAdoptionReason === "others" && (
        <div className="mb-4">
          <p className="mb-2 text-sm font-bold text-gray-700">
            Please specify the reason for adoption
          </p>
          <Controller
            name="other_adoption_reason"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <Input
                label=""
                {...field}
                error={
                  errors.other_adoption_reason &&
                  (errors.other_adoption_reason.message as string)
                }
              />
            )}
          />
        </div>
      )}

      <div className="mb-4">
        <p className="mb-2 text-sm font-bold text-gray-700">
          Are you prepared for the long-term commitment of owning a cat?
        </p>
        <Controller
          name="long_term_commitment"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <>
              <RadioButton {...field} label="Yes" value="yes" />
              <RadioButton {...field} label="No" value="no" />
            </>
          )}
        />
        {errors.long_term_commitment &&
          (errors.long_term_commitment.message as string) && (
            <p className="text-red-500 text-sm">
              {errors.long_term_commitment.message as string}
            </p>
          )}
      </div>

      <div className="mb-4">
        <p className="mb-2 text-sm font-bold text-gray-700">
          Are you willing to provide regular veterinary care?
        </p>
        <Controller
          name="vet_care"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <>
              <RadioButton {...field} label="Yes" value="yes" />
              <RadioButton {...field} label="No" value="no" />
            </>
          )}
        />
        {errors.vet_care && (errors.vet_care.message as string) && (
          <p className="text-red-500 text-sm">
            {errors.vet_care.message as string}
          </p>
        )}
      </div>

      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
};

export default AdoptionIntentionStep;
