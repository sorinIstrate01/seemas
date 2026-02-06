"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface WhyUsAccordionItem {
  value: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
}

export interface WhyUsAccordionProps {
  items: WhyUsAccordionItem[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

const WhyUsAccordion = ({
  items,
  defaultValue,
  onValueChange,
  className,
}: WhyUsAccordionProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={
        defaultValue && items.some((i) => i.value === defaultValue)
          ? defaultValue
          : items[0]?.value
      }
      onValueChange={(v) => {
        if (v) onValueChange?.(v);
      }}
      className={cn("flex flex-col gap-3", className)}
    >
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value} className="border-none">
          <AccordionTrigger className="px-3 py-3 bg-white bg-opacity-80 backdrop-filter backdrop-blur-[2px] border border-white rounded-xl data-[state=open]:rounded-b-none data-[state=open]:rounded-l-none data-[state=open]:pb-2">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg border border-zinc-100">{item.icon ? item.icon : null}</div>
              <p className="text-body-m text-zinc-900">{item.title}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-3 pb-3 bg-white bg-opacity-80 backdrop-filter backdrop-blur-[2px] border-b border-white rounded-b-xl">
            {item.description ? <p className="text-body-m text-zinc-600">{item.description}</p> : null}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default WhyUsAccordion;

