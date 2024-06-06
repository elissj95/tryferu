import { cva, type VariantProps } from "cva";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const labelVariants = cva(["font-bold uppercase text-sm text-black600"], {
  variants: {
    variant: {
      default: [],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface LabelVariants extends VariantProps<typeof labelVariants> {}

export const label = (variants: LabelVariants) =>
  twMerge(labelVariants(variants));

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <label className={label({ variant })} ref={ref} {...props}>
        {children}
      </label>
    );
  }
);

Label.displayName = "Label";
