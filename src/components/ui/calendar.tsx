"use client";

import * as React from "react";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { DayPicker } from "react-day-picker";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Icon } from "../Icon/Icon";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4 pt-3", className)}
      classNames={{
        months:
          "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 relative",
        month: "space-y-3",
        caption:
          "flex justify-center relative items-center border-b border-gray-200 h-11",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse",
        head_row: "flex gap-0.5",
        head_cell:
          "w-10 h-10 flex items-center justify-center text-neutral-500 rounded-md font-normal text-[0.8rem] dark:text-neutral-400",
        row: "flex w-full mt-1 gap-0.5",
        cell: "w-10 h-10 flex items-center justify-center  text-sm p-0 relative rounded-md  [&:has([aria-selected].day-range-end)]:rounded-md  [&:has([aria-selected].day-outside)]:bg-neutral-100/50 [&:has([aria-selected])]:bg-neutral-100 first:[&:has([aria-selected])]:rounded-md  last:[&:has([aria-selected])]:rounded-md  focus-within:relative focus-within:z-20 dark:[&:has([aria-selected].day-outside)]:bg-neutral-800/50 dark:[&:has([aria-selected])]:bg-neutral-800",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-10 h-10 p-0 text-14 text-gray-600 font-medium rounded-md"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "border border-blue-primary bg-gray-100 text-gray-800 hover:bg-gray-200 hover:border-blue-900 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50 dark:hover:text-neutral-900",
        day_today:
          "dark:bg-neutral-800 dark:text-neutral-50 after:w-[5px] after:h-[5px] after:absolute after:bottom-1 after:bg-blue-primary after:rounded-md ",
        day_outside:
          "day-outside text-neutral-500 aria-selected:bg-neutral-100/50 aria-selected:text-neutral-500 dark:text-neutral-400 dark:aria-selected:bg-neutral-800/50 dark:aria-selected:text-neutral-400",
        day_disabled: "text-gray-300 dark:text-neutral-400",
        day_range_middle:
          "aria-selected:bg-neutral-100 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50",
        day_hidden: "invisible",

        ...classNames,
      }}
      captionLayout="dropdown-buttons"
      components={{
        IconLeft: ({ className, ...props }) => (
          <Icon
            icon={IconChevronLeft}
            size={16}
            className={cn("", className)}
            {...props}
          />
        ),
        IconRight: ({ className, ...props }) => (
          <Icon
            icon={IconChevronRight}
            size={16}
            className={cn("", className)}
            {...props}
          />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
