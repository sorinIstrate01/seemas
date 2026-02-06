import CardBadge from "@/components/badges/card-badge";
import SectionContainer from "@/components/containers/section-container";
import SectionHeader from "@/components/headers/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Rectangle4441 from "./components/end-to-end/elements/Rectangle4441";
import EndToEndBgDecor from "./components/end-to-end/end-to-end-bg-decor";

export type AccordionItemType = {
  title: string;
  content: ReactNode;
  badges?: string[];
  className?: string;
};

type EndToEndSectionProps = {
  title: string;
  description: string;
  items: AccordionItemType[];
  accordionConfig?: React.ComponentProps<typeof Accordion>;
  accordionItemClassName?: string;
  accordionTriggerClassName?: string;
};

const EndToEndSection = ({
  title,
  description,
  items,
  accordionConfig,
  accordionItemClassName,
  accordionTriggerClassName,
}: EndToEndSectionProps) => {
  const config = accordionConfig ?? {
    type: "single",
    collapsible: true,
  };

  return (
    <section className="relative overflow-hidden">
      <SectionContainer className="grid grid-cols-1 xl:grid-cols-2 gap-x-[72px]">
        <SectionHeader
          title={title}
          description={description}
          className="xl:text-left xl:items-start"
        />
        <Accordion {...config} className="flex flex-col gap-3">
          {items.map(({ title, content, badges }, i) => (
            <AccordionItem
              key={i}
              value={title}
              className={cn(
                "relative bg-white rounded-2xl outline outline-1 outline-zinc-100 -outline-offset-1 text-zinc-700 overflow-hidden",
                accordionItemClassName
              )}
            >
              <AccordionTrigger
                className={cn(
                  "p-5 data-[state=open]:pb-3 gap-4 text-zinc-800 text-subtitle-s data-[state=open]:text-blue-primary",
                  accordionTriggerClassName
                )}
              >
                {title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-3 p-5 pt-0 text-body-m">
                {content}
                {badges && (
                  <div className="flex flex-wrap gap-1">
                    {badges.map((badge) => (
                      <CardBadge key={badge}>{badge}</CardBadge>
                    ))}
                  </div>
                )}
              </AccordionContent>
              <Rectangle4441 />
            </AccordionItem>
          ))}
        </Accordion>
      </SectionContainer>
      <EndToEndBgDecor />
    </section>
  );
};

export default EndToEndSection;
