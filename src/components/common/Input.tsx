import { forwardRef } from "react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  error?: string | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, error, ...rest }, ref) => {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-gray-700 mb-2">
          {label}
        </label>
        <input
          id={name}
          name={name}
          ref={ref}
          {...rest}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {error && error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
