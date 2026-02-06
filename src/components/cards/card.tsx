import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
import Rectangle5 from "../decor/rectangle-5";

interface CardHeaderProps {
  title: string;
  description: string;
  headerClassName?: string;
  isAccordion?: boolean;
}

export interface CardProps extends CardHeaderProps {
  children?: ReactNode;
  className?: string;
}

const CardHeader: FC<CardHeaderProps> = ({
  title,
  description,
  headerClassName,
  isAccordion,
}) => (
  <header className={cn("p-4 md:p-6 z-[-1] relative", headerClassName)}>
    <h3 className="text-subtitle-s md:text-subtitle-l text-gray-900 mb-2">
      {title}
    </h3>
    <p className="text-body-s md:text-body-m text-zinc-500">{description}</p>
    {isAccordion && (
      <Rectangle5 className="xs:top-[-173px] xs:right-[-44.5px] md:top-[-139px] md:right-[-76.5px] xl:right-auto xl:top-auto xl:left-[-73px] xl:bottom-[-105.5px]" />
    )}
  </header>
);

export const Card: FC<CardProps> = ({
  title,
  description,
  className,
  children,
  headerClassName,
  isAccordion,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col bg-zinc-50 rounded-2xl outline outline-1 outline-zinc-100 -outline-offset-1 relative z-[1] overflow-hidden",
        className
      )}
    >
      <CardHeader
        title={title}
        description={description}
        headerClassName={headerClassName}
        isAccordion={isAccordion}
      />
      {children}
    </div>
  );
};
