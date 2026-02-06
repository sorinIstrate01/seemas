// Here we will store all the routes for the application.
// This creates a single source of truth for navigation.

export const ROUTES = {
  HOME: "/",
  PLATFORM_OVERVIEW: "/platform-overview",
  BLOG: "/blog",
  DAMODARAN_AI: "/damodaran-ai",
  FAQ: "/faq",
  ABOUT_US: "/about-us",
  BOOK_DEMO: "?book-demo=true",
  SPHERE: "/sphere",
  CAREERS: "/careers",
  // Products from the dropdown
  GLOBAL_TAX_MANAGEMENT: "/global-tax-management",
  VALUATION_SUITE: "/valuation-suite",

  // Global Tax Management
  CORPORATE_TAX_COMPLIANCE_AND_FILING: "/corporate-tax-compliance-and-filing",
  TAX_PROVISION: "/tax-provision",
  TRANSFER_PRICING: "/transfer-pricing",
  INDIRECT_TAX_MANAGEMENT: "/indirect-tax-management",
  WITHHOLDING_TAXES: "/withholding-taxes",
  SPECIALTY_CORPORATE_TAX_ADVISORY: "/specialty-corporate-tax-advisory",
  DATA_INTEGRATION_AND_SECURITY: "/data-integration-and-security",

  // Valuation Suite
  ENTITY_VALUATION: "/entity-valuation",
  INTANGIBLE_VALUATION: "/intangible-valuation",
  FINANCIAL_INSTRUMENTS: "/financial-instruments",

  // REPORTS: {
  //   ROOT: "/reports",
  //   DETAIL: (id: string | number) => `/reports/${id}`,
  //   EDIT: (id: string | number) => `/reports/${id}/edit`,
  //   HISTORY: (id: string | number, revision: number) =>
  //     `/reports/${id}/revisions/${revision}`,
  // },
} as const;

type ExtractStatic<T> = T extends (...args: any) => any
  ? never
  : T extends object
  ? { [K in keyof T]: ExtractStatic<T[K]> }[keyof T]
  : T;

export type StaticRoute = ExtractStatic<typeof ROUTES>;
