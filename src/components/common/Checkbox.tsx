import { forwardRef } from "react";

interface CheckboxProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  error?: string | undefined;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, name, error, ...rest }, ref) => {
    return (
      <div className="flex items-center mb-2">
        <input
          id={`${name}-${rest.value}`}
          name={name}
          type="checkbox"
          ref={ref}
          {...rest}
          className="mr-2"
        />
        <label
          htmlFor={`${name}-${rest.value}`}
          className="text-sm text-gray-700"
        >
          {label}
        </label>
        {error && error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
