import HeroBadge, { HeroBadgeProps } from "@/components/hero-badge/hero-badge";
import IcIcon from "@/components/icons/ic-icon";
import { cn } from "@/lib/utils";
import React from "react";

export interface HeroHeadingProps {
  title: React.ReactNode;
  description: React.ReactNode;
  contentWrapperClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  badge?: HeroBadgeProps;
  badgeClassName?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const HeroHeading = ({
  title,
  description,
  contentWrapperClassName,
  titleClassName,
  descriptionClassName,
  badge,
  badgeClassName,
  headingLevel = "h2",
}: HeroHeadingProps) => {
  const HeadingTag = headingLevel;

  return (
    <header
      className={cn(
        "flex flex-col items-center justify-center text-center",
        contentWrapperClassName
      )}
    >
      <HeroBadge
        text="Powered by Domain-specific AI"
        leftIcon={<IcIcon />}
        {...badge}
        className={cn("mb-2", badgeClassName)}
      />
      <HeadingTag
        className={cn(
          "text-subtitle-xl md:text-h2 xl:text-h1 text-zinc-900 mb-4 text-ra",
          titleClassName
        )}
      >
        {title}
      </HeadingTag>
      <p
        className={cn(
          "text-body-s md:text-body-xl text-zinc-800",
          descriptionClassName
        )}
      >
        {description}
      </p>
    </header>
  );
};

export default HeroHeading;
