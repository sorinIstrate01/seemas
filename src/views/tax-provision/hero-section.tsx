import HeroBadge, { HeroBadgeProps } from "@/components/hero-badge/hero-badge";
import IcIcon from "@/components/icons/ic-icon";
import { FC } from "react";
import HeroBg from "./components/hero-bg/hero-bg";
import { cn } from "@/lib/utils";
type HeroSectionProps = {
  title: string;
  description: string;
  badge?: HeroBadgeProps;
  titleClassName?: string;
  descriptionClassName?: string;
  children?: React.ReactNode;
  className?: string;
  contentWrapperClassName?: string;
  contentWrapperParentClassName?: string;
};

const HeroSection: FC<HeroSectionProps> = ({
  title,
  description,
  badge,
  titleClassName,
  descriptionClassName,
  children,
  className,
  contentWrapperClassName,
  contentWrapperParentClassName,
}) => {
  return (
    <section
      className={cn(
        "bg-neutral-50 h-[600px] md:h-[800px] relative overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "h-full flex flex-col items-center justify-center px-8",
          contentWrapperParentClassName
        )}
      >
        <HeroBg />

        <div
          className={cn(
            "flex flex-col items-center justify-center text-center max-w-[958px]",
            contentWrapperClassName
          )}
        >
          <HeroBadge
            text="Powered by Domain-specific AI"
            leftIcon={<IcIcon />}
            {...badge}
            className="mb-2"
          />
          <h2
            className={cn(
              "text-subtitle-xl md:text-h2 xl:text-h1 text-zinc-900 mb-4",
              titleClassName
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-body-s md:text-body-xl text-zinc-800 mb-6",
              descriptionClassName
            )}
          >
            {description}
          </p>
        </div>
      </div>
      {children}
    </section>
  );
};

export default HeroSection;
