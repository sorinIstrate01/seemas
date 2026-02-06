import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';
import React, { FC } from 'react';

interface FaqAccordionItemProps {
  value: string;
  title: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}
const FaqAccordionItem: FC<FaqAccordionItemProps> = ({ value, title, content, className }) => {
  return (
    <AccordionItem
      value={value}
      className={cn("bg-white rounded-2xl px-4 py-5 md:px-6 outline outline-1 outline-neutral-100 -outline-offset-1 border-0", className)}
    >
      <AccordionTrigger className='gap-1 p-0 text-subtitle-s text-zinc-700 data-[state=open]:text-zinc-900 hover:text-zinc-900 items-start text-left' rightIconClassName='size-6 text-zinc-600'>{title}</AccordionTrigger>
      <AccordionContent className='mt-2 pb-0 text-body-m text-zinc-700'>{content}</AccordionContent>
    </AccordionItem>
  )
}

export default FaqAccordionItem;



