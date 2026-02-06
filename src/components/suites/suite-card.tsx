import * as React from "react";
import { cn } from "@/lib/utils";

export interface SuiteCardItem {
  title: string | React.ReactNode;
  description: React.ReactNode;
  icon?: React.ReactNode;
  desktopWidth?: number;
  categories?: string[];
}

export interface SuiteCardProps {
  item: SuiteCardItem;
  /** Extra classes for the card wrapper */
  className?: string;
  /** Override default max width if `item.desktopWidth` is not set */
  defaultMaxWidthPx?: number;
  /** Optional extra styles for the card wrapper */
  style?: React.CSSProperties;
  /** Extra classes for icon wrapper */
  iconWrapperClassName?: string;
  /** Extra classes for title element */
  titleClassName?: string;
  /** Extra classes for description element */
  descriptionClassName?: string;
}

export const SuiteCard = ({
  item,
  className,
  defaultMaxWidthPx = 400,
  style,
  iconWrapperClassName,
  titleClassName,
  descriptionClassName,
}: SuiteCardProps) => {
  const maxWidth = item.desktopWidth
    ? `${item.desktopWidth}px`
    : `${defaultMaxWidthPx}px`;

  const styleWithVar = {
    ...style,
    ["--suite-card-maxw" as string]: maxWidth,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "w-auto p-4 md:p-6 bg-[#ffffff40] shadow-[inset_4px_4px_20px_0_rgba(255,255,255,0.35)] rounded-xl filter-blur-[2px] border-2 border-white flex-1 xl:flex-none xl:h-fit xl:w-[var(--suite-card-maxw)]",
        className
      )}
      style={styleWithVar}
    >
      <div className={cn("flex gap-2 items-center mb-2", iconWrapperClassName)}>
        {item.icon ? (
          <div className={cn("w-fit", iconWrapperClassName)}>{item.icon}</div>
        ) : null}
        <p
          className={cn(
            "text-subtitle-s xl:text-subtitle-m text-zinc-900",
            titleClassName
          )}
        >
          {item.title}
        </p>
      </div>
      <p className={cn("text-body-s xl:text-body-m text-zinc-700", descriptionClassName)}>
        {item.description}
      </p>
      {item?.categories && (
        <div className="flex gap-1 items-center mt-3 flex-wrap md:mt-auto">
          {item?.categories?.map((category: string, index: number) => (
            <span key={index} className="text-badge-s text-zinc-800 py-[6px] px-2 bg-[#719CEE1A] rounded-md">{category}</span>
          ))}
        </div>
      )}
    </div>
  );
};

