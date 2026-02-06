"use client";

import * as React from "react";
import { HTMLAttributes } from "react";

import * as SelectPrimitive from "@radix-ui/react-select";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

import { Icon } from "../Icon/Icon";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    hideChevron?: boolean;
  }
>(({ className, children, hideChevron, ...props }, ref) => {
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm placeholder:text-neutral-500  disabled:cursor-not-allowed [&>span]:line-clamp-1 [&_.chevron-wrapper]:overflow-visible group text-start",
        className
      )}
      {...props}
    >
      {children}
      {!hideChevron && (
        <SelectPrimitive.Icon className="chevron-wrapper">
          <Icon
            icon={IconChevronDown}
            size={20}
            className="group-data-[state=open]:rotate-180"
          />
        </SelectPrimitive.Icon>
      )}
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <Icon icon={IconChevronUp} size={16} />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <Icon icon={IconChevronDown} size={16} />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
    scrollAreaClassName?: HTMLAttributes<HTMLDivElement>["className"];
  }
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 min-w-32 overflow-hidden rounded-xl border border-gray-100 bg-white text-neutral-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", // data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2
        // position === "popper" &&
        //   "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          position === "popper" &&
            "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)",
          "overflow-visible flex flex-col"
        )}
      >
        {children}
        {/* <ScrollArea
            className={cn("flex-1 max-h-96 px-1", scrollAreaClassName)}
            scrollbarClassName="pr-1.5 pl-0.5 w-3"
          >
          </ScrollArea> */}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    showRightIcon?: boolean;
  }
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item ref={ref} className={cn("", className)} {...props}>
    {children}
    {/* <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

    {showRightIcon && (
      <SelectPrimitive.ItemIndicator className="text-blue-primary-600">
        <Icon icon={IconCheck} size={16} />
      </SelectPrimitive.ItemIndicator>
    )} */}
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn(
      "-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800",
      className
    )}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const ItemText = SelectPrimitive.ItemText;
const SelectIcon = SelectPrimitive.Icon;
export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  ItemText,
  SelectIcon,
};
