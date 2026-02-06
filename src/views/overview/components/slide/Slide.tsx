import CardBadge from "@/components/badges/card-badge";
import IconContainer from "@/components/containers/icon-container";
import { DynamicContent } from "@/components/custom-ui/dynamic-content";
import { LinkWrapper } from "@/components/custom-ui/link-wrapper";
import { ButtonConfig } from "@/components/pages/home/elements/carousel/item-content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

export type SlideProps = {
  title: string;
  description: React.ReactNode | string[];
  badges: (string | React.ReactNode)[];
  icon: React.ReactNode;
  buttonConfig: ButtonConfig;
  children: React.ReactNode;
  className?: string;
};

const Slide = ({
  icon,
  title,
  description,
  badges,
  buttonConfig,
  children,
  className,
}: SlideProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 xl:grid-cols-[600fr_540fr] grid-rows-[1fr_auto] xl:grid-rows-1 w-full h-full flex-1 rounded-2xl bg-white border border-zinc-100 overflow-hidden",
        className
      )}
    >
      <div className="p-4 xl:p-8 xl:pr-14 flex flex-col flex-1 h-full justify-between items-start gap-6 md:gap-8">
        <div className="flex flex-col gap-3 xl:gap-4 ">
          <IconContainer className="bg-zinc-50 size-9 md:size-12 [&_svg]:size-7 [&_svg]:stroke-[1.5px] rounded-xl">
            {icon}
          </IconContainer>
          <div className="flex flex-col gap-2 xl:gap-4 w-full">
            <h6 className="text-subtitle-l md:text-subtitle-xl text-zinc-900">
              {title}
            </h6>
            <DynamicContent>{description}</DynamicContent>
            {badges && (
              <div className="flex w-full flex-wrap gap-1 mt-1 xl:mt-0">
                {badges.map((badge, i) => (
                  <CardBadge key={i}>{badge}</CardBadge>
                ))}
              </div>
            )}
          </div>
        </div>
        {buttonConfig && (
          <Button variant={"outline"} size={"L"} asChild>
            <LinkWrapper href={buttonConfig.href} {...buttonConfig.linkProps}>
              {buttonConfig.label}
            </LinkWrapper>
          </Button>
        )}
      </div>
      {children}
    </div>
  );
};

export default Slide;
