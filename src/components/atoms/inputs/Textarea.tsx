import * as React from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { noStylesInputStyles } from "./styles";

export const textareaStyles = cva(`py-3 h-[112px] resize-none`);

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(noStylesInputStyles(), textareaStyles(), className)}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
