import * as React from "react";

import { cn } from "@/lib/utils";

import { CalendarCellProps } from "../calendar.types";

const CalendarCell: React.FC<CalendarCellProps> = ({
  text,
  isDisabled,
  isSelected,
  isCurrent,
  onClick,
}) => {
  return (
    <button
      key={text}
      className={cn(
        `flex h-[44px] px-2 py-1 flex-col justify-center items-center gap-[3px] rounded-lg transition-all border relative`,
        isSelected ? "border-blue-primary bg-gray-100" : "border-transparent",
        isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      <span>{text}</span>
      {isCurrent && (
        <span className="absolute bottom-1 right-1/2 translate-x-1/2 bg-blue-primary rounded-full size-[5px]"></span>
      )}
    </button>
  );
};

export default CalendarCell;
