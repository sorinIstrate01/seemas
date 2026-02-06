import { isValid, parseISO } from "date-fns";
import { FormatOptionsWithTZ, formatInTimeZone } from "date-fns-tz";
export const formatDate = (
  inputDate?: string | null,
  formatString: string = "MMMM d, yyyy",
  options: FormatOptionsWithTZ = {}
): string => {
  if (!inputDate) {
    return "";
  }

  // Check if it's a date-only string (YYYY-MM-DD format)
  const isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(inputDate.trim());

  let date: Date;

  if (isDateOnly) {
    // For date-only strings, parse as UTC to avoid timezone conversion issues
    const [year, month, day] = inputDate.split("-").map(Number);
    date = new Date(Date.UTC(year, month - 1, day));
  } else {
    // For datetime strings, use parseISO as before
    date = parseISO(inputDate);
  }

  if (!isValid(date)) {
    return "";
  }

  // Always format in UTC
  return formatInTimeZone(date, "UTC", formatString, options);
};
