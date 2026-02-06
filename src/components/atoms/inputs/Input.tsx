import * as React from "react";

import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { noStylesInputStyles } from "./styles";

export const inputVariants = cva(noStylesInputStyles(), {
  variants: {
    size: {
      L: "h-10",
      M: "h-9",
    },
  },
  defaultVariants: {
    size: "M",
  },
});
export type InputVariantsType = VariantProps<typeof inputVariants>;

type InputProps = Omit<React.ComponentProps<"input">, "size"> &
  InputVariantsType;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
