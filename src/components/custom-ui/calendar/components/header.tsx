import { useMemo, useState } from "react";

import { useDayPicker, useNavigation } from "react-day-picker";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  canChangeMonth,
  canChangeYear,
  changeMonth,
  changeYear,
  formatMonthShort,
  formatYear,
  generateMonths,
  generateYears,
} from "@/lib/date-fns/dateHelpers";
import { cn } from "@/lib/utils";

import { CalendarSelectEnum } from "../calendar.types";
import CalendarCell from "./cell";
import CalendarSelect from "./select";

const CalendarHeader = () => {
  const { fromDate, toDate, fromYear, toYear } = useDayPicker();
  const { currentMonth, goToDate } = useNavigation();
  const [isOpen, setIsOpen] = useState<CalendarSelectEnum | null>(null);

  const currentYear = new Date().getFullYear();
  const showYears = isOpen === CalendarSelectEnum.Year;
  const showMonths = isOpen === CalendarSelectEnum.Month;

  const isLeftMonthArrowDisabled = useMemo(
    () => !canChangeMonth(currentMonth, "backward", fromDate, toDate),
    [currentMonth, fromDate, toDate]
  );
  const isRightMonthArrowDisabled = useMemo(
    () => !canChangeMonth(currentMonth, "forward", fromDate, toDate),
    [currentMonth, fromDate, toDate]
  );

  const isLeftYearArrowDisabled = useMemo(
    () => !canChangeYear(currentMonth, "backward", fromDate, toDate),
    [currentMonth, fromDate, toDate]
  );
  const isRightYearArrowDisabled = useMemo(
    () => !canChangeYear(currentMonth, "forward", fromDate, toDate),
    [currentMonth, fromDate, toDate]
  );

  const startYear = useMemo(
    () => fromDate?.getFullYear() || fromYear || currentYear - 20,
    [currentYear, fromDate, fromYear]
  );
  const endYear = useMemo(
    () => toDate?.getFullYear() || toYear || currentYear + 20,
    [currentYear, toDate, toYear]
  );

  const months = useMemo(
    () =>
      generateMonths(
        currentMonth.getFullYear(),
        currentMonth,
        fromDate,
        toDate
      ),
    [currentMonth, fromDate, toDate]
  );

  const years = useMemo(
    () => generateYears(startYear, endYear, currentMonth, fromDate, toDate),
    [currentMonth, endYear, fromDate, startYear, toDate]
  );

  const showData = showYears ? years : showMonths ? months : [];

  return (
    <div className={cn("h-11 border-b border-gray-200 flex gap-4")}>
      <CalendarSelect
        onClick={() =>
          setIsOpen(prev =>
            prev === CalendarSelectEnum.Month ? null : CalendarSelectEnum.Month
          )
        }
        isOpen={showMonths}
        text={formatMonthShort(currentMonth)}
        onLeftArrowClick={() => goToDate(changeMonth(currentMonth, "backward"))}
        onRightArrowClick={() => goToDate(changeMonth(currentMonth, "forward"))}
        isLeftBtnDisabled={isLeftMonthArrowDisabled}
        isRightBtnDisabled={isRightMonthArrowDisabled}
      />
      <CalendarSelect
        onClick={() =>
          setIsOpen(prev =>
            prev === CalendarSelectEnum.Year ? null : CalendarSelectEnum.Year
          )
        }
        isOpen={showYears}
        text={formatYear(currentMonth)}
        onLeftArrowClick={() => goToDate(changeYear(currentMonth, "backward"))}
        onRightArrowClick={() => goToDate(changeYear(currentMonth, "forward"))}
        isLeftBtnDisabled={isLeftYearArrowDisabled}
        isRightBtnDisabled={isRightYearArrowDisabled}
      />

      <div
        className={cn(
          isOpen
            ? "bg-white absolute top-14 left-0 bottom-0 right-0 z-10 flex flex-col"
            : "hidden"
        )}
      >
        <ScrollArea className="[&_.vertical-scrollbar]:px-1 [&_.vertical-scrollbar]:w-4">
          <div
            className={cn("grid grid-cols-2 gap-1", showYears ? "pr-6" : "")}
            style={{
              gridTemplateColumns: `repeat(${
                showYears ? 3 : 2
              }, minmax(0, 1fr))`,
            }}
          >
            {showData.map((item, index) => {
              return (
                <CalendarCell
                  key={`${item.name}_${index}`}
                  text={item.name}
                  onClick={() => {
                    goToDate(item.goToDateValue);
                    setIsOpen(null);
                  }}
                  {...item}
                />
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CalendarHeader;
