import React, { ComponentProps } from "react";
import IconContainer from "../containers/icon-container";
import Link from "next/link";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export type HeaderItemProps = ComponentProps<"div"> & {
  icon: React.ReactNode;
  href: string;
  title: string;
  hint?: string;
  description?: string;
  linkClassName?: string;
};

const HeaderItem = ({
  icon,
  href,
  title,
  hint,
  description,
  className,
  linkClassName,
  ...restProps
}: HeaderItemProps) => {
  return (
    <div
      className={cn(
        "inline-flex flex-col gap-1 p-1 bg-white rounded-lg ",
        className
      )}
      {...restProps}
    >
      <Link
        href={href}
        className={cn(
          "group h-10 flex items-center gap-2 px-1 bg-white hover:bg-neutral-75 rounded-md",
          linkClassName
        )}
      >
        {icon && <IconContainer>{icon}</IconContainer>}
        <div className="flex flex-col grow">
          <span className="text-body-s text-zinc-800">{title}</span>
          {hint && <span className="text-caption-m text-zinc-400">{hint}</span>}
        </div>
        <IconArrowNarrowRight
          size={16}
          className="group-hover:opacity-100 opacity-0 transition-all"
        />
      </Link>

      {description && (
        <p className="text-caption-m leading-[17px] text-zinc-500">
          {description}
        </p>
      )}
    </div>
  );
};

export default HeaderItem;
