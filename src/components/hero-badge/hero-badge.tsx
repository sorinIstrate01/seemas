import { cn } from "@/lib/utils";
import React from "react";
import { BorderTrail } from "@/components/ui/border-trail";

export interface HeroBadgeProps {
  leftIcon?: React.ReactNode;
  text: string;
  rightIcon?: React.ReactNode;
  className?: string;
  href?: string;
  textClassName?: string;
}

export default function HeroBadge({
  leftIcon,
  text,
  rightIcon,
  className,
  textClassName,
  href,
}: HeroBadgeProps) {
  const Comp = href ? "a" : "div";
  return (
    <Comp
      href={href}
      className={cn(
        "inline-flex gap-2 items-center px-3 py-1.5 outline outline-1 -outline-offset-1 outline-zinc-200 text-zinc-800 rounded-md relative",
        className
      )}
    >
      {leftIcon}
      <span className={cn("text-badge md:text-badge-home md:text-nowrap", textClassName)}>
        {text}
      </span>
      {rightIcon}
      {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" /> */}
      <BorderTrail
        style={{
          filter: "blur(10px)",
        }}
        size={40}
      />
    </Comp>
  );
}
