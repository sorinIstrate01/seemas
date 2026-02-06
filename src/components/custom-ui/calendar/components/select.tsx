import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
} from "@tabler/icons-react";

import { Icon } from "@/components/Icon/Icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { CalendarSelectProps } from "../calendar.types";

const CalendarSelect: React.FC<CalendarSelectProps> = ({
  isOpen,
  text,
  onClick,
  onLeftArrowClick,
  onRightArrowClick,
  isLeftBtnDisabled,
  isRightBtnDisabled,
}) => {
  return (
    <div className="h-8 w-[140px] flex items-center cursor-pointer z-[11]">
      {!isOpen ? (
        <Button
          variant="ghost"
          size="S"
          iconOnly
          disabled={isLeftBtnDisabled}
          onClick={onLeftArrowClick}
        >
          <Icon icon={IconChevronLeft} size={16} />
        </Button>
      ) : null}
      <div
        className={cn(
          "flex flex-auto items-center justify-center select-none h-full",
          isOpen ? "bg-gray-100 rounded-lg" : ""
        )}
        onClick={onClick}
      >
        <div className="flex gap-1 items-center">
          <span className="typography-button-base">{text}</span>
          <Icon
            icon={isOpen ? IconChevronUp : IconChevronDown}
            size={12}
            strokeWidth={3}
          />
        </div>
      </div>
      {!isOpen ? (
        <Button
          variant="ghost"
          size="S"
          iconOnly
          disabled={isRightBtnDisabled}
          onClick={onRightArrowClick}
        >
          <Icon icon={IconChevronRight} size={16} />
        </Button>
      ) : null}
    </div>
  );
};

export default CalendarSelect;
