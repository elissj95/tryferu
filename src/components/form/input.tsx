import { cva, type VariantProps } from "cva";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const inputVariants = cva(
  ["border border-black200", "rounded-md", "p-2 pl-4"],
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
  ({ className, children, variant, ...props }, ref) => {
    return (
      <input className={input({ variant })} ref={ref} {...props}>
        {children}
      </input>
    );
  }
);

Input.displayName = "Input";
