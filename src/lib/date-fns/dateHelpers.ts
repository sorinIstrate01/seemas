import {
  Locale,
  addMonths,
  addYears,
  differenceInMonths,
  differenceInYears,
  endOfMonth,
  endOfYear,
  format,
  isAfter,
  isBefore,
  isValid,
  parseISO,
  setMonth,
  setYear,
  startOfMonth,
  startOfYear,
  subMonths,
  subYears,
} from "date-fns";
import { FormatOptionsWithTZ, formatInTimeZone } from "date-fns-tz";

type DateInput = string | Date | undefined;

export const formatDate = (
  inputDate?: DateInput | null,
  formatString: string = "yyyy-MM-dd",
  options: FormatOptionsWithTZ = {}
): string => {
  if (!inputDate) {
    return "";
  }

  // Перетворюємо вхідну дату в об'єкт Date
  let date: Date;
  if (typeof inputDate === "string") {
    // Якщо це рядок, парсимо його
    date = parseISO(inputDate);
  } else {
    // Якщо це вже Date, використовуємо як є
    date = inputDate;
  }

  // Перевіряємо, чи валідна дата
  if (!isValid(date)) {
    return "";
  }

  // Always format in UTC
  return formatInTimeZone(date, "UTC", formatString, options);
};

// Напрямок для перемикання
type Direction = "forward" | "backward";

// Перемикання року
export const changeYear = (date: Date, direction: Direction): Date => {
  return direction === "forward" ? addYears(date, 1) : subYears(date, 1);
};

// Перемикання місяця
export const changeMonth = (date: Date, direction: Direction): Date => {
  return direction === "forward" ? addMonths(date, 1) : subMonths(date, 1);
};

export const formatYear = (date: Date): string => {
  return formatDate(date, "yyyy");
};

export const formatMonthShort = (
  date: Date,
  options: FormatOptionsWithTZ = {}
): string => {
  return formatDate(date, "MMM", options);
};

// Повна дата: "15 жовтня 2025" або "October 15, 2025"
export const formatFullDate = (
  date: Date,
  options: FormatOptionsWithTZ = {}
): string => {
  return formatDate(date, "MMMM d, yyyy", options);
};

export const canChangeYear = (
  currentDate: Date,
  direction: Direction,
  fromDate?: Date,
  toDate?: Date
): boolean => {
  const newDate = changeYear(currentDate, direction);
  const newYearStart = startOfYear(newDate);
  const newYearEnd = endOfYear(newDate);

  if (direction === "forward") {
    // Якщо toDate не визначено, перемикання вперед завжди дозволено
    if (!toDate || !isValid(toDate)) return true;
    const toYearEnd = endOfYear(toDate);
    return !isAfter(newYearStart, toYearEnd); // Перевіряємо, чи початок нового року не після кінця діапазону
  } else {
    // Якщо fromDate не визначено, перемикання назад завжди дозволено
    if (!fromDate || !isValid(fromDate)) return true;
    const fromYearStart = startOfYear(fromDate);
    return !isBefore(newYearEnd, fromYearStart); // Перевіряємо, чи кінець нового року не перед початком діапазону
  }
};

// Перевірка, чи можна переключити місяць
export const canChangeMonth = (
  currentDate: Date,
  direction: Direction,
  fromDate?: Date,
  toDate?: Date
): boolean => {
  const newDate = changeMonth(currentDate, direction);
  const newMonthStart = startOfMonth(newDate);
  const newMonthEnd = endOfMonth(newDate);

  if (direction === "forward") {
    // Якщо toDate не визначено, перемикання вперед завжди дозволено
    if (!toDate || !isValid(toDate)) return true;
    const toMonthEnd = endOfMonth(toDate);
    return !isAfter(newMonthStart, toMonthEnd); // Перевіряємо, чи початок нового місяця не після кінця діапазону
  } else {
    // Якщо fromDate не визначено, перемикання назад завжди дозволено
    if (!fromDate || !isValid(fromDate)) return true;
    const fromMonthStart = startOfMonth(fromDate);
    return !isBefore(newMonthEnd, fromMonthStart); // Перевіряємо, чи кінець нового місяця не перед початком діапазону
  }
};

export const generateMonths = (
  activeYear: number,
  activeMonth: Date,
  fromDate?: Date,
  toDate?: Date,
  locale?: Locale
) => {
  return Array.from({ length: 12 }, (_, i) => {
    const date = new Date(activeYear, i, 1);
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const isDisabled = !!(
      (fromDate &&
        isBefore(date, fromDate) &&
        differenceInMonths(date, fromDate) !== 0) ||
      (toDate &&
        isAfter(date, toDate) &&
        differenceInMonths(date, toDate) !== 0)
    );
    return {
      value: i,
      name: format(date, "MMMM", { locale }), // Назва місяця
      isSelected: i === activeMonth.getMonth(),
      isDisabled,
      isCurrent: currentMonth === i && activeYear === currentYear,
      goToDateValue: setMonth(activeMonth, i),
    };
  });
};

export const generateYears = (
  startYear: number,
  endYear: number,
  activeMonth: Date,
  fromDate?: Date,
  toDate?: Date
) =>
  Array.from({ length: endYear - startYear + 1 }, (_, i) => {
    const year = startYear + i;
    const date = new Date(year, 0, 1);
    const currentYear = new Date().getFullYear();
    const isDisabled = !!(
      (fromDate &&
        isBefore(date, fromDate) &&
        differenceInYears(date, fromDate)) ||
      (toDate && isAfter(date, toDate) && differenceInYears(date, toDate))
    );
    return {
      value: year,
      name: year.toString(),
      isSelected: year === activeMonth.getFullYear(),
      isDisabled,
      isCurrent: currentYear === year,
      goToDateValue: setYear(activeMonth, year),
    };
  });
