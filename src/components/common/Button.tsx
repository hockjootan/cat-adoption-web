import { forwardRef } from "react";
import clsx from "clsx";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { type = "button", variant = "primary", className, children, ...rest },
    ref
  ) => {
    const baseClasses = "py-2 px-4 rounded";
    const variantClasses = {
      primary: "bg-amber-400 text-amber-800 hover:bg-amber-500",
      secondary: "bg-teal-300 text-teal-800 hover:bg-teal-400",
      tertiary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
      danger: "bg-rose-300 text-rose-800 hover:bg-rose-400",
    };

    return (
      <button
        type={type}
        className={clsx(baseClasses, variantClasses[variant], className)}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
