import { cva, type VariantProps } from "cva";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { ClockIcon } from "@radix-ui/react-icons"; // Importing Radix ClockIcon

const inputVariants = cva(
  ["border border-black200", "rounded-md", "p-2 pl-4", "h-10"],
  {
    variants: {
      variant: {
        default: [],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputVariants extends VariantProps<typeof inputVariants> {}

export const input = (variants: InputVariants) =>
  twMerge(inputVariants(variants));

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, children, variant, type, ...props }, ref) => {
    return (
      <input
        className={twMerge(input({ variant }), className)}
        ref={ref}
        type={type}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
