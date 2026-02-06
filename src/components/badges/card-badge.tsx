import { cn } from "@/lib/utils";
import React, { ComponentProps, FC } from "react";

export type CardBadgeProps = ComponentProps<"div">;
const CardBadge: FC<CardBadgeProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center py-[5px] px-2 bg-neutral-50 line-clamp-1 text-zinc-800 rounded-md text-badge-s outline outline-1 outline-neutral-100 -outline-offset-1",
        className
      )}
      {...props}
    />
  );
};

export default CardBadge;
