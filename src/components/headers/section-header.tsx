import { cn } from "@/lib/utils";
import React from "react";

export interface SectionHeaderProps {
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  variant?: VariantType;
}

type VariantType = "dark" | "light";

const SectionHeader = ({
  headingLevel = "h2",
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  variant = "dark",
}: SectionHeaderProps) => {
  const HeadingTag = headingLevel;
  return (
    <div
      className={cn(
        "mx-auto flex flex-col gap-4 items-center text-center mb-8 md:mb-14",
        className
      )}
    >
      <HeadingTag
        className={cn(
          "text-subtitle-xl whitespace-pre-line md:text-h4 xl:text-h3",
          variant === "dark" ? "text-zinc-900" : "text-white",
          titleClassName
        )}
      >
        {title}
      </HeadingTag>
      {description && (
        <p
          className={cn(
            "text-body-s md:text-body-m",
            variant === "dark" ? "text-zinc-800" : "text-zinc-200",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
