import { cva, type VariantProps } from "cva";
import Link from "next/link";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  [
    "rounded-md",
    "px-4 py-1",
    "text-sm",
    "transition",
    "duration-150",
    "ease-in-out",
    "transform",
    "hover:-translate-y-0.5",
    "active:translate-y-0.25",
    "hover:scale-101",
    "active:scale-97",
    "flex",
    "items-center",
    "gap-2",
  ],
  {
    variants: {
      variant: {
        solid: [
          "bg-seaweed",
          "text-white",
          "hover:bg-seaweed-dark",
          "active:bg-seaweed-light",
        ],
        outline: [
          "text-seaweed",
          "border border-seaweed",
          "hover:bg-seaweed",
          "hover:text-white",
        ],
        ghost: ["hover:bg-seaweed-light", "active:bg-seaweed-light"],
        icon: [
          "p-0",
          "rounded-full",
          "flex",
          "items-center",
          "justify-center",
          "text-black600",
          "hover:bg-seaweed-light",
          "active:bg-seaweed-dark",
        ],
      },
    },
    defaultVariants: {
      variant: "ghost",
    },
  }
);

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}

export const button = (variants: ButtonVariants) =>
  twMerge(buttonVariants(variants));

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <button className={button({ variant })} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
