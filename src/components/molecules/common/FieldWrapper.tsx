import * as React from "react";

import { cn } from "@/lib/utils";

// import { InputLabelBaseProps } from "../InputLabel/InputLabel";

interface FieldWrapperProps
  extends Pick<React.HTMLAttributes<HTMLDivElement>, "className" | "id"> {
  label?: string | React.ReactNode;
  bottomHint?: string;
  error?: string;
  children: React.ReactNode;
  bottomRightElement?: React.ReactNode;
}

const FieldWrapper = React.forwardRef<HTMLDivElement, FieldWrapperProps>(
  (
    {
      label,
      children,
      bottomHint,
      error,
      className,
      bottomRightElement,
      id,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn("relative flex flex-col gap-1 w-full", className)}
        ref={ref}
        {...props}
      >
        {/* Label Row */}
        {label && (
          <label id={id} className="typography-body-s text-gray-800">
            {label}
          </label>
        )}

        {children}
        {/* Bottom Text */}
        {(error || bottomHint) && (
          <div className="absolute -bottom-[2px] translate-y-full typography-helper-text flex justify-between w-full">
            {error ? (
              <p className="text-red-600">{error}</p>
            ) : bottomHint ? (
              <p className="text-gray-500">{bottomHint}</p>
            ) : null}
            {bottomRightElement}
          </div>
        )}
      </div>
    );
  }
);

FieldWrapper.displayName = "FieldWrapper";

export { FieldWrapper, type FieldWrapperProps };
