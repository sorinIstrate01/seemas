import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { NavigationOption } from "@/types";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { Button } from "../ui/button";
import ActiveLinkWrapper from "./active-link-wrapper";
const NavigationItemVariants = cva(
  "[&_svg]:size-4 gap-1 px-3 py-2 rounded-lg bg-transparent",
  {
    variants: {
      variant: {
        light: `text-zinc-600 
          hover:bg-white hover:text-zinc-600 
          data-[state=open]:text-zinc-800 data-[state=open]:bg-white 
          group-[.dark-mode]:text-zinc-300 group-[.dark-mode]:outline-neutral-800 
          group-[.dark-mode]:hover:bg-neutral-900 group-[.dark-mode]:hover:outline group-[.dark-mode]:hover:
          group-[.dark-mode]:data-[state=open]:bg-neutral-900 group-[.dark-mode]:data-[state=open]:outline group-[.dark-mode]:data-[state=open]:text-white`,
      },
    },
    defaultVariants: {
      variant: "light",
    },
  }
);
export interface NavigationItemProps
  extends VariantProps<typeof NavigationItemVariants> {
  data: NavigationOption;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}
const NavigationItem = ({ data, className, variant }: NavigationItemProps) => {
  if (data.dropDown) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              "[&_svg]:size-4 [&[data-state=closed]&_.up]:hidden [&[data-state=open]&_.down]:hidden",
              NavigationItemVariants({ variant }),
              className
            )}
            size={"content"}
            variant={"ghost"}
          >
            {data.label}
            <IconChevronUp size={16} className="up" />
            <IconChevronDown size={16} className="down" />
          </Button>
        </PopoverTrigger>

        {data.dropDown}
      </Popover>
    );
  }
  if (data.href) {
    return (
      <ActiveLinkWrapper href={data.href} activeStateName="open">
        <Button
          className={cn(
            "[&_svg]:size-4 [&[data-state=closed]&_.up]:hidden [&[data-state=open]&_.down]:hidden",
            NavigationItemVariants({ variant }),
            className
          )}
          size={"content"}
          variant={"ghost"}
          asChild
        >
          <Link href={data.href}>{data.label}</Link>
        </Button>
      </ActiveLinkWrapper>
    );
  }

  return null;
};
export default NavigationItem;
