import { forwardRef } from "react";

interface RadioButtonProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  error?: string | undefined;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, name, value, error, ...rest }, ref) => {
    return (
      <div className="flex items-center mb-2">
        <input
          id={`${name}-${value}`}
          name={name}
          type="radio"
          value={value}
          ref={ref}
          {...rest}
          className="mr-2"
        />
        <label htmlFor={`${name}-${value}`} className="text-gray-700 text-sm">
          {label}
        </label>
        {error && error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }
);

RadioButton.displayName = "RadioButton";

export default RadioButton;
