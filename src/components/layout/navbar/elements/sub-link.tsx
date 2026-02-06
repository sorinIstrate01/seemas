import { cn } from "@/lib/utils";
import { TSubLink } from "@/types";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { forwardRef } from "react";
const SubLink = forwardRef<
  HTMLAnchorElement,
  {
    data: TSubLink;
    isNoDescription?: boolean;
    className?: HTMLDivElement["className"];
  }
>(
  ({
    data,
    isNoDescription,
    className,
  }: {
    data: TSubLink;
    isNoDescription?: boolean;
    className?: HTMLDivElement["className"];
  }) => {
    const Icon = data.icon;
    return (
      <Link
        href={data.href}
        className={cn(
          "flex gap-2 items-center border border-white bg-white px-2 py-1.5 rounded-xl transition-colors duration-300 hover:border-neutral-100 hover:bg-neutral-50 [&:hover>.arrow]:opacity-100 min-h-10",
          className
        )}
      >
        {Icon && (
          <div className="p-2 border border-neutral-100 bg-neutral-25 rounded-lg">
            <Icon className="size-4" />
          </div>
        )}
        <div className="flex flex-col flex-1">
          <span className="text-body-s text-zinc-900">{data.label}</span>
          {!isNoDescription && (
            <span className="text-caption-m text-zinc-400">
              {data.description}
            </span>
          )}
        </div>
        <IconArrowNarrowRight className="size-4 arrow opacity-0 transition-opacity duration-300 group-hover/sub-link:opacity-100" />
      </Link>
    );
  }
);
SubLink.displayName = "SubLink";
export default SubLink;
