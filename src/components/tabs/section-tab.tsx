import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";
import ComingSoonBadge from "../badges/coming-soon-badge";

interface SectionTabProps extends ComponentProps<"button"> {
  showBadge?: boolean;
  active?: boolean;
}

const SectionTab = ({
  className,
  children,
  showBadge,
  active,
  ...props
}: SectionTabProps) => {
  return (
    <button
      className={cn(
        "h-9 inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-4 py-2 text-button text-zinc-800 rounded-[10px] bg-transparent outline outline-1 -outline-offset-1 outline-zinc-100 transition-all relative select-none",
        "hover:outline-zinc-200 hover:text-zinc-900",
        "focus-visible:bg-gray-100 focus-visible:outline-gray-100 focus-visible:text-zinc-800",
        "disabled:bg-transparent disabled:outline-zinc-100 disabled:text-zinc-400",
        {
          "!text-zinc-400 !cursor-not-allowed": showBadge,
          "bg-gray-100 outline-gray-100": active,
        },
        className
      )}
      {...props}
    >
      {children}
      {showBadge && (
        <ComingSoonBadge className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      )}
    </button>
  );
};

export default SectionTab;
