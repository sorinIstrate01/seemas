import { Locale } from "date-fns";
import { enUS, fr, uk } from "date-fns/locale";

const localeMap: Record<string, Locale> = {
  "en-US": enUS,
  "uk-UA": uk,
  "fr-FR": fr,
  // Додай інші локалі, якщо потрібно
};
// Функція для визначення локалі користувача
export const getUserLocale = (): Locale => {
  const userLocale = navigator.language || "en-US"; // Беремо локаль із браузера
  return localeMap[userLocale] || enUS; // Повертаємо локаль або enUS за замовчуванням
};
