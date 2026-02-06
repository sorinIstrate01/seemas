import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "px-4 py-3 flex min-h-20 bg-white w-full rounded-xl border border-gray-200 hover:border-gray-400 focus-within:border-gray-400 text-body-s text-zinc-800 placeholder:text-body-s placeholder:text-zinc-400 file:text-sm file:font-medium file:text-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
