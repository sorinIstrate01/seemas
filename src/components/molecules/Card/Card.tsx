import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";
import CardBadge from "../../badges/card-badge";
import { DynamicContent } from "../../custom-ui/dynamic-content";
import CardGradientDecor from "./elements/CardGradientDecor";

export interface CardProps extends ComponentProps<"div"> {
  title: string;
  description: string;
  className?: string;
  badges?: string[];
}

const Card = ({ title, description, className, badges = [] }: CardProps) => {
  return (
    <div
      className={cn(
        "p-4 md:p-6 bg-white rounded-2xl outline outline-1 outline-zinc-100 -outline-offset-1 relative overflow-hidden",
        className
      )}
    >
      <div className="relative z-10 flex flex-col gap-4 h-full">
        <div className="flex flex-col gap-1">
          <h3 className="text-subtitle-m md:text-subtitle-l text-zinc-900">
            {title}
          </h3>
          <DynamicContent>{description}</DynamicContent>
        </div>

        {badges?.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {badges.map((badge) => (
              <CardBadge key={badge}>{badge}</CardBadge>
            ))}
          </div>
        )}
      </div>

      <CardGradientDecor />
    </div>
  );
};

export default Card;
