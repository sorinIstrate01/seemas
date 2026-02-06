import { DynamicContent } from "@/components/custom-ui/dynamic-content";
import CardBadge from "@/components/badges/card-badge";
import { LinkWrapper } from "@/components/custom-ui/link-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonProps } from "@/components/ui/button";
import { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

export type ButtonConfig = {
  href: string;
  label: string;
  linkProps?: Partial<LinkProps> &
    Partial<AnchorHTMLAttributes<HTMLAnchorElement>>;
};

export interface ItemContentProps {
  platform: string;
  platformIcon: React.ReactNode;
  title: string;
  description: React.ReactNode | string[];
  badges?: (string | React.ReactNode)[];
  mainButton: ButtonConfig;
  secondaryButton: ButtonConfig;
}

const ItemContent = ({
  platform,
  platformIcon,
  title,
  description,
  badges,
  mainButton,
  secondaryButton,
}: ItemContentProps) => {
  const buttons: { config: ButtonConfig; variant: ButtonProps["variant"] }[] = [
    { config: mainButton, variant: "secondary" },
    { config: secondaryButton, variant: "outline" },
  ];
  return (
    <div className="flex flex-col flex-1 p-4 xl:p-8 xl:pr-14">
      <div className="flex flex-col flex-1 h-full max-w-[640px] justify-between items-start">
        <div className="flex flex-col gap-3 xl:gap-6">
          <Badge
            variant="secondary"
            className="self-start bg-neutral-75 rounded-lg"
          >
            {platformIcon} {platform}
          </Badge>
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
        <div className="flex gap-3">
          {buttons.map((button, i) => (
            <Button key={i} variant={button.variant} size={"L"} asChild>
              <LinkWrapper
                href={button.config.href}
                {...button.config.linkProps}
              >
                {button.config.label}
              </LinkWrapper>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ItemContent;
