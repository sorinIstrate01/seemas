import * as React from "react";

import { cn } from "@/lib/utils";
const defaultInputClassName =
  "px-4 py-3 flex min-h-11 h-11 bg-white w-full rounded-xl border border-gray-200 hover:border-gray-400 focus-within:border-gray-400 text-body-s text-zinc-800 placeholder:text-body-s placeholder:text-zinc-400 file:text-sm file:font-medium file:text-foreground disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0 [&[aria-invalid=true]]:border-red-300 hover:[&[aria-invalid=true]]:border-red-400 focus-within:[&[aria-invalid=true]]:border-red-700";
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(defaultInputClassName, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, defaultInputClassName };
