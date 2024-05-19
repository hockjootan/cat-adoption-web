import { useForm, Controller, SubmitHandler } from "react-hook-form";

import Input from "src/components/common/Input";
import RadioButton from "src/components/common/RadioButton";
import Button from "src/components/common/Button";

interface HouseholdInfoStepProps {
  formData: any;
  setFormData: (data: any) => void;
  nextStep: () => void;
}

const HouseholdInfoStep: React.FC<HouseholdInfoStepProps> = ({
  formData,
  setFormData,
  nextStep,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: formData,
  });

  const watchHousingType = watch("housing_type");

  const onSubmit: SubmitHandler<any> = (data) => {
    setFormData(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <h2 className="font-bold mb-4">Household Information</h2>

      <div className="mb-4">
        <p className="mb-2 text-sm font-bold text-gray-700">Housing Type</p>
        <Controller
          name="housing_type"
          control={control}
          rules={{ required: "Housing type is required" }}
          render={({ field }) => (
            <>
              <RadioButton {...field} label="Apartment" value="apartment" />
              <RadioButton {...field} label="House" value="house" />
              <RadioButton
                {...field}
                label="Others, please specify"
                value="others"
              />
            </>
          )}
        />
        {errors.housing_type && (errors.housing_type.message as string) && (
          <p className="text-red-500 text-sm">
            {errors.housing_type.message as string}
          </p>
        )}
      </div>

      {watchHousingType === "others" && (
        <div className="mb-4">
          <p className="mb-2 text-sm font-bold text-gray-700">
            Enter the housing type
          </p>
          <Controller
            name="other_housing_type"
            control={control}
            rules={{ required: "Other housing type is required" }}
            render={({ field }) => (
              <Input
                label=""
                {...field}
                error={
                  errors.other_housing_type &&
                  (errors.other_housing_type.message as string)
                }
              />
            )}
          />
        </div>
      )}

      <div className="mb-4">
        <p className="mb-2  text-sm font-bold text-gray-700">
          Do you own or rent your home?
        </p>
        <Controller
          name="ownership"
          control={control}
          rules={{ required: "Ownership status is required" }}
          render={({ field }) => (
            <>
              <RadioButton {...field} label="Own" value="own" />
              <RadioButton {...field} label="Rent" value="rent" />
            </>
          )}
        />
        {errors.ownership && (errors.ownership.message as string) && (
          <p className="text-red-500 text-sm">
            {errors.ownership.message as string}
          </p>
        )}
      </div>

      <div className="mb-4">
        <p className="mb-2 text-sm font-bold text-gray-700">
          Do you have landlord permission to have pets (if renting)?
        </p>
        <Controller
          name="landlord_permission"
          control={control}
          rules={{ required: "Landlord permission is required" }}
          render={({ field }) => (
            <>
              <RadioButton {...field} label="Yes" value="yes" />
              <RadioButton {...field} label="No" value="no" />
            </>
          )}
        />
        {errors.landlord_permission &&
          (errors.landlord_permission.message as string) && (
            <p className="text-red-500 text-sm">
              {errors.landlord_permission.message as string}
            </p>
          )}
      </div>

      <div className="mb-4">
        <p className="mb-2 text-sm font-bold text-gray-700">
          Do you currently have any pets?
        </p>
        <Controller
          name="have_pets"
          control={control}
          rules={{ required: "Pet status is required" }}
          render={({ field }) => (
            <>
              <RadioButton {...field} label="Yes" value="yes" />
              <RadioButton {...field} label="No" value="no" />
            </>
          )}
        />
        {errors.have_pets && (errors.have_pets.message as string) && (
          <p className="text-red-500 text-sm">
            {errors.have_pets.message as string}
          </p>
        )}
      </div>

      <Button type="submit" variant="primary">
        Next
      </Button>
    </form>
  );
};

export default HouseholdInfoStep;
