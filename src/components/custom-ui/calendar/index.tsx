"use client";

import { FC, useEffect, useMemo, useRef, useState } from "react";

import { InputMask } from "@react-input/mask";
import {
  format,
  formatISO,
  isValid,
  parse,
  parseISO,
  startOfDay,
} from "date-fns";
import { useClickAway } from "react-use";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { isISOString } from "@/utils/helpers";

import CustomInput from "./components/input";
import { Icon } from "@/components/Icon/Icon";
import { IconCalendar } from "@tabler/icons-react";
import CalendarHeader from "./components/header";

interface CustomCalendarProps {
  selectedDate?: string | null;
  onChange: (value: string | null) => void;
  label?: string;
  labelRightText?: string;
  calendarProps?: any;
  className?: string;
  inputClassname?: string;
  rightIcon?: FC;
  error?: string;
  onBlur?: () => void;
  placeholder?: string;
}

const parseISODateSafely = (dateString: string): Date | undefined => {
  if (!dateString || !isISOString(dateString)) return undefined;

  try {
    const parsed = parseISO(dateString);

    if (!isValid(parsed)) return undefined;
    // Якщо дата без часу (формат YYYY-MM-DD), встановлюємо початок дня в локальній зоні
    // Це вирішує проблему зсуву дат для користувачів з Америки

    return dateString.includes("T") ? parsed : startOfDay(parsed);
  } catch {
    return undefined;
  }
};

const formatDateToISO = (date: Date): string => {
  return formatISO(startOfDay(date), { representation: "date" });
};

const CustomCalendar: FC<CustomCalendarProps> = ({
  selectedDate,
  label,
  onChange,
  calendarProps,
  className,
  rightIcon = IconCalendar,
  error,
  onBlur,
  placeholder = "mm/dd/yyyy",
}) => {
  const baseRawValue = useMemo(() => {
    if (!selectedDate) return "";

    const parsedDate = parseISODateSafely(selectedDate);
    return parsedDate ? format(parsedDate, "MM/dd/yyyy") : "";
  }, [selectedDate]);

  const baseDateValue = useMemo(() => {
    return selectedDate ? parseISODateSafely(selectedDate) : undefined;
  }, [selectedDate]);

  const [rawValue, setRawValue] = useState<string>(baseRawValue);
  const [selected, setSelected] = useState<Date | undefined>(baseDateValue);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(rawValue);
    setRawValue(baseRawValue);
    setSelected(baseDateValue);
  }, [baseDateValue, baseRawValue, rawValue]);

  const ref = useRef<HTMLDivElement>(null);
  useClickAway(ref, () => {
    if (isOpen) {
      setIsOpen(false);
      onBlur?.();
    }
  }); // закриваємо календар при кліку поза

  const handleDateSelect = (d: Date) => {
    setSelected(d);
    setRawValue(format(d, "MM/dd/yyyy")); // Формат для інпуту: MM/DD/YYYY
    const formatted = formatDateToISO(d);
    onChange(formatted);
    setIsOpen(false);
    onBlur?.();
  };

  const handleInputChange = (value: string) => {
    setRawValue(value);

    if (!value || value === placeholder) {
      setSelected(undefined);
      onChange(null);
      return;
    }

    const parsed = parse(value, "MM/dd/yyyy", new Date());
    if (isValid(parsed)) {
      setSelected(parsed);
      const formatted = formatDateToISO(parsed);
      onChange(formatted);
    } else {
      setSelected(undefined);
      onChange(value);
    }
  };

  const handleIconClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setIsOpen(prev => !prev);
    if (isOpen) {
      onBlur?.();
    }
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <label className="typography-body-s text-gray-800">{label}</label>
      )}

      <div ref={ref}>
        <div className="relative">
          <InputMask
            type="text"
            name="date-input"
            mask={placeholder}
            replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
            showMask
            separate
            value={rawValue}
            onChange={handleInputChange}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
            component={CustomInput}
            rightChild={
              <button type="button" onClick={handleIconClick}>
                <Icon icon={rightIcon} size={20} />
              </button>
            }
            error={error}
          />

          {isOpen && (
            <div className="absolute z-50 mt-2 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden">
              <Calendar
                mode="single"
                selected={selected}
                onSelect={d => {
                  if (d) {
                    handleDateSelect(d);
                  }
                }}
                fixedWeeks
                components={{ Caption: CalendarHeader }}
                {...calendarProps}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;
