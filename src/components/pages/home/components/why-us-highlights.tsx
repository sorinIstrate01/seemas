import * as React from "react";
import { cn } from "@/lib/utils";

export interface WhyUsHighlightItem {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
}

export interface WhyUsHighlightsProps {
  items: WhyUsHighlightItem[];
  className?: string;
}

const WhyUsHighlights = ({ items, className }: WhyUsHighlightsProps) => {
  return (
    <div className={cn("relative flex items-stretch flex-col md:flex-row", className)}>
      {items.length === 2 ? (
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#E4E4E7]"
        />
      ) : null}

      {items.map((item, index) => (
        <div key={index} className="flex gap-3 py-2 flex-1">
          {item.icon ? <div className="w-6 h-6">{item.icon}</div> : null}
          <div className="flex flex-col gap-2">
            <p className="text-body-m text-zinc-900">{item.title}</p>
            {item.description ? <p className="text-body-m text-zinc-500">{item.description}</p> : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyUsHighlights;

