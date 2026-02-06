// Here we will store all the routes for the application.
// This creates a single source of truth for navigation.
// Only routes linked from navbar and footer are included.

export const ROUTES = {
  HOME: "/",
  PLATFORM_OVERVIEW: "/platform-overview",
  DAMODARAN_AI: "/damodaran-ai",
  ABOUT_US: "/about-us",
  BOOK_DEMO: "?book-demo=true",
  SPHERE: "/sphere",
  CAREERS: "/careers",
  TRANSFER_PRICING: "/transfer-pricing",
  VALUATION_SUITE: "/valuation-suite",
} as const;

type ExtractStatic<T> = T extends (...args: any) => any
  ? never
  : T extends object
  ? { [K in keyof T]: ExtractStatic<T[K]> }[keyof T]
  : T;

export type StaticRoute = ExtractStatic<typeof ROUTES>;
