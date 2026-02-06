import React, { ComponentProps } from "react";
import IconContainer from "../containers/icon-container";
import Link from "next/link";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export type DropItemProps = ComponentProps<typeof Link> & {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  href: string;
  showArrow?: boolean;
  textClassName?: string;
};

const DropItem = ({
  icon,
  title,
  subtitle,
  href,
  showArrow,
  textClassName,
  className,
  ...props
}: DropItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group min-h-9 inline-flex items-center gap-2 p-1 rounded-xl bg-white text-zinc-800 transition-all duration-100 ease-out outline outline-1 outline-transparent ",
        "xl:hover:bg-neutral-50 xl:hover:outline-neutral-100",
        className
      )}
      {...props}
    >
      {icon && (
        <IconContainer className="[&_svg]:size-5 [&_svg]:stroke-[1.5px]">
          {icon}
        </IconContainer>
      )}
      {subtitle ? (
        <div className="flex flex-col">
          <span className={cn("text-body-s flex-grow text-zinc-800", textClassName)}>
            {title}
          </span>
          <span className="text-caption-m text-zinc-400">{subtitle}</span>
        </div>
      ) : (
        <span className={cn("text-body-s flex-grow", textClassName)}>
          {title}
        </span>
      )}

      {showArrow && (
        <IconArrowNarrowRight
          size={16}
          className="group-hover:opacity-100 opacity-0 transition-all min-w-4"
        />
      )}
    </Link>
  );
};

export default DropItem;
