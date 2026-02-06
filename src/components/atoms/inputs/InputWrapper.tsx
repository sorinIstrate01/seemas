import * as React from "react";

import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { baseInputStyles } from "./styles";

export const inputWrapperVariants = cva(``, {
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
export type InputWrapperVariantsType = VariantProps<
  typeof inputWrapperVariants
>;
interface InputWrapperProps
  extends React.ComponentProps<"div">,
    InputWrapperVariantsType {
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  isError?: boolean;
  isDisabled?: boolean;
}
const InputWrapper = React.forwardRef<HTMLDivElement, InputWrapperProps>(
  (
    {
      className,
      startElement,
      endElement,
      children,
      size,
      isError,
      isDisabled,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          baseInputStyles(),
          "w-full flex items-center gap-2 py-0",
          "group/input",
          "relative",
          inputWrapperVariants({ size }),
          className
        )}
        aria-invalid={isError}
        aria-disabled={isDisabled}
        {...props}
        ref={ref}
      >
        {startElement}
        {children}
        {endElement}
      </div>
    );
  }
);
InputWrapper.displayName = "InputWrapper";

export { InputWrapper };
