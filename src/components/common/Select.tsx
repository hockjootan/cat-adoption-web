import React from "react";
import ReactSelect, {
  Props as ReactSelectProps,
  GroupBase,
} from "react-select";

// Define the type for your option
export interface OptionType {
  value: string;
  label: string;
}

// Define the props for your custom select component
interface SelectProps
  extends ReactSelectProps<OptionType, boolean, GroupBase<OptionType>> {}

const Select: React.FC<SelectProps> = (props) => {
  return (
    <ReactSelect
      classNames={{
        container: () => "shadow-xs rounded-lg",
        control: () => "border border-gray-300",
        valueContainer: () => "text-sm",
      }}
      components={{
        Option: ({ children, ...props }) => (
          <div
            {...props.innerProps}
            className="text-sm px-4 py-2 cursor-pointer hover:bg-teal-100"
          >
            {children}
          </div>
        ),
      }}
      {...props}
    />
  );
};

export default Select;
