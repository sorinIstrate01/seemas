import React, { FC } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { cn } from '@/lib/utils';

export interface AccordionItemType {
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface CustomAccordionProps {
  items: AccordionItemType[];
  className?: string;
}

const CustomAccordion: FC<CustomAccordionProps> = ({ items, className }) => {
  return (
    <Accordion type="single" collapsible className={cn('', className)}>
      {items.map(({ title, content }, index) => (
        <AccordionItem className='last:border-b-0 p-4 md:p-5' key={index} value={`item-${index}`}>
          <AccordionTrigger className='gap-4 p-0 text-subtitle-xs text-zinc-700 data-[state=open]:text-zinc-900 hover:text-zinc-900  md:text-subtitle-s text-left' rightIconClassName='size-6 text-zinc-700'>{title}</AccordionTrigger>
          <AccordionContent className='mt-3 pb-0 text-body-s md:text-body-m text-zinc-700'>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default CustomAccordion