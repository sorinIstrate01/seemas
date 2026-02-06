import { cn } from "@/lib/utils";
import React, { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { LinkWrapper } from "../custom-ui/link-wrapper";
import HeroBadge, { HeroBadgeProps } from "../hero-badge/hero-badge";
import { Button, ButtonProps } from "../ui/button";
import { LinkProps } from "next/link";

interface ButtonConfig extends ButtonProps {
  href?: string;
  linkProps?: Partial<LinkProps> &
    Partial<AnchorHTMLAttributes<HTMLAnchorElement>>;
}
interface HeroHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  description: ReactNode;
  badge?: HeroBadgeProps;
  buttonConfig?: ButtonConfig[];
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  badgeClassName?: string;
  btnsWrapperClassName?: HTMLAttributes<HTMLDivElement>["className"];
}

const HeroHeader: React.FC<HeroHeaderProps> = ({
  title,
  subtitle,
  description,
  badge,
  buttonConfig,
  className,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
  badgeClassName,
  btnsWrapperClassName,
}) => {
  return (
    <header
      className={cn(
        "mx-auto flex flex-col items-center text-center",
        className
      )}
    >
      {badge && <HeroBadge className={cn("mb-2", badgeClassName)} {...badge} />}
      <h1
        className={cn(
          "text-subtitle-xl md:text-h2 xl:text-h1 mb-4 xl:mb-5 text-zinc-900 whitespace-pre-line",
          titleClassName
        )}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={cn(
            "text-body-s md:text-xl xl:text-2xl mb-4 xl:mb-5 text-zinc-800 whitespace-pre-line",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
      <p
        className={cn(
          "text-body-s mb-4 px-[31px] text-zinc-800 md:text-body-m md:px-0 md:mb-8",
          descriptionClassName
        )}
      >
        {description}
      </p>
      {buttonConfig && (
        <div className={cn("flex gap-3", btnsWrapperClassName)}>
          {buttonConfig.map((button, index) => {
            const { href, linkProps, ...rest } = button;
            return (
              <Button key={index} asChild={!!href} {...rest}>
                {href ? (
                  <LinkWrapper href={href} {...linkProps}>
                    {button.children}
                  </LinkWrapper>
                ) : (
                  button.children
                )}
              </Button>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default HeroHeader;
