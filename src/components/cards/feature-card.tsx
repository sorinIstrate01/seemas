import { cn } from "@/lib/utils";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { FC } from "react";
import CardBadge from "../badges/card-badge";
import IconContainer from "../containers/icon-container";
import { DynamicContent } from "../custom-ui/dynamic-content";
import { Button } from "../ui/button";
import FeatureCardGradientDecor from "./elements/FeatureCardGradientDecor";

export interface OtherFeatureCardProps {
  title: string;
  description: React.ReactNode | string[];
  className?: string;
  badges: string[];
  leftIcon: React.ReactNode;
  href?: string;
}

const FeatureCard: FC<OtherFeatureCardProps> = ({
  title,
  description,
  className,
  badges,
  leftIcon,
  href,
}) => {
  return (
    <Link
      href={href ?? "/"}
      className={cn(
        "flex flex-col rounded-2xl bg-white px-6 py-5 outline outline-1 outline-zinc-100 -outline-offset-1 relative overflow-hidden group xl:min-h-[280px]",
        className
      )}
    >
      <div className="relative z-10 flex flex-col gap-4 md:gap-6 h-full grow">
        <header className="flex items-center justify-between md:justify-normal gap-3">
          <IconContainer className="[&_svg]:stroke-[1.5px]">
            {leftIcon}
          </IconContainer>
          <span className="hidden md:flex flex-1 text-subtitle-m text-zinc-900">
            {title}
          </span>
          <Button
            variant="layer"
            size="iconS"
            className="xl:invisible xl:opacity-0 xl:group-hover:visible xl:group-hover:opacity-100 pointer-events-none"
          >
            <IconArrowNarrowRight />
          </Button>
        </header>

        <div className="flex-1 flex flex-col gap-1">
          <span className="md:hidden text-subtitle-s text-zinc-900">
            {title}
          </span>
          <DynamicContent>{description}</DynamicContent>
        </div>

        <footer className="flex flex-wrap gap-1">
          {badges?.map((badge) => (
            <CardBadge key={badge}>{badge}</CardBadge>
          ))}
        </footer>
      </div>

      <FeatureCardGradientDecor />
    </Link>
  );
};

export default FeatureCard;
