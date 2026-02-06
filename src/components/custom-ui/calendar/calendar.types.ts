import { DayPickerSingleProps } from "react-day-picker";

import { IconType } from "@/components/Icon/Icon";

export enum CalendarSelectEnum {
  Month = "month",
  Year = "year",
}

export interface CustomCalendarProps {
  selectedDate?: Date | string | null;
  label: string;
  onChange: (selectedDate?: Date) => void;
  labelRightText?: string;
  calendarProps?: Omit<DayPickerSingleProps, "mode">;
  className?: string;
  inputClassname?: string;
  rightIcon?: IconType;
  error?: string;
  onBlur?: () => void;
  placeholder?: string;
}

export interface CalendarCellProps {
  text: string;
  isDisabled: boolean;
  isSelected: boolean;
  isCurrent: boolean;
  onClick: () => void;
}

export interface CalendarSelectProps {
  isOpen: boolean;
  text: string;
  onClick: () => void;
  onLeftArrowClick: () => void;
  onRightArrowClick: () => void;
  isLeftBtnDisabled: boolean;
  isRightBtnDisabled: boolean;
}
