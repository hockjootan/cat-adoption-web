import { forwardRef } from "react";

interface TextareaProps extends React.ComponentPropsWithoutRef<"textarea"> {
  label: string;
  error?: string | undefined;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, name, error, ...rest }, ref) => {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-gray-700 mb-2">
          {label}
        </label>
        <textarea
          id={name}
          name={name}
          ref={ref}
          {...rest}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
        {error && error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
