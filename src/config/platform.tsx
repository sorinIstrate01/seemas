import PatentIcon from "@/components/icons/patent-icon";
import { ROUTES } from "@/constants/routes";
import {
  IconChartLine,
  IconBuilding,
  IconChecklist,
  IconFileReport,
  IconArrowsExchange,
  IconFileSettings,
  IconReportMoney,
  IconMessageQuestion,
  IconShieldLock,
} from "@tabler/icons-react";
export enum EPlatformGroup {
  VALUATION_SUITE = "Valuation Suite",
  GLOBAL_TAX_MANAGEMENT = "Global Tax Management",
}
export enum EPlatformProduct {
  ENTITY_VALUATION = "Valuation Suite",
  INTANGIBLE_VALUATION = "Intangible Valuation",
  FINANCIAL_INSTRUMENTS = "Financial Instruments",
  CORPORATE_TAX_COMPLIANCE_AND_FILING = "Corporate Tax Compliance & Filing",
  TAX_PROVISION = "Tax Provision",
  TRANSFER_PRICING = "Transfer Pricing",
  INDIRECT_TAX_MANAGEMENT = "Indirect Tax Management",
  WITHHOLDING_TAXES = "Withholding Taxes",
  SPECIALTY_CORPORATE_TAX_ADVISORY = "Specialty Corporate Tax Advisory",
  DATA_INTEGRATION_AND_SECURITY = "Data Integration & Security",
}
export const GROUP_TO_PRODUCTS_MAP = {
  [EPlatformGroup.VALUATION_SUITE]: [
    EPlatformProduct.ENTITY_VALUATION,
    EPlatformProduct.INTANGIBLE_VALUATION,
    EPlatformProduct.FINANCIAL_INSTRUMENTS,
  ],
  [EPlatformGroup.GLOBAL_TAX_MANAGEMENT]: [
    EPlatformProduct.CORPORATE_TAX_COMPLIANCE_AND_FILING,
    EPlatformProduct.TAX_PROVISION,
    EPlatformProduct.TRANSFER_PRICING,
    EPlatformProduct.INDIRECT_TAX_MANAGEMENT,
    EPlatformProduct.WITHHOLDING_TAXES,
    EPlatformProduct.SPECIALTY_CORPORATE_TAX_ADVISORY,
    EPlatformProduct.DATA_INTEGRATION_AND_SECURITY,
  ],
};
export const explore_platform_config = [
  {
    group: EPlatformGroup.VALUATION_SUITE,
    product: EPlatformProduct.ENTITY_VALUATION,
    icon: IconChartLine,
    link: ROUTES.ENTITY_VALUATION,
  },
  {
    group: EPlatformGroup.VALUATION_SUITE,
    product: EPlatformProduct.INTANGIBLE_VALUATION,
    icon: PatentIcon,
    link: ROUTES.INTANGIBLE_VALUATION,
  },
  {
    group: EPlatformGroup.VALUATION_SUITE,
    product: EPlatformProduct.FINANCIAL_INSTRUMENTS,
    icon: IconBuilding,
    link: ROUTES.FINANCIAL_INSTRUMENTS,
  },
  {
    group: EPlatformGroup.GLOBAL_TAX_MANAGEMENT,
    product: EPlatformProduct.CORPORATE_TAX_COMPLIANCE_AND_FILING,
    icon: IconChecklist,
    link: ROUTES.CORPORATE_TAX_COMPLIANCE_AND_FILING,
  },
  {
    group: EPlatformGroup.GLOBAL_TAX_MANAGEMENT,
    product: EPlatformProduct.TAX_PROVISION,
    icon: IconFileReport,
    link: ROUTES.TAX_PROVISION,
  },
  {
    group: EPlatformGroup.GLOBAL_TAX_MANAGEMENT,
    product: EPlatformProduct.TRANSFER_PRICING,
    icon: IconArrowsExchange,
    link: ROUTES.TRANSFER_PRICING,
  },
  {
    group: EPlatformGroup.GLOBAL_TAX_MANAGEMENT,
    product: EPlatformProduct.INDIRECT_TAX_MANAGEMENT,
    icon: IconFileSettings,
    link: ROUTES.INDIRECT_TAX_MANAGEMENT,
  },
  {
    group: EPlatformGroup.GLOBAL_TAX_MANAGEMENT,
    product: EPlatformProduct.WITHHOLDING_TAXES,
    icon: IconReportMoney,
    link: ROUTES.WITHHOLDING_TAXES,
  },
  {
    group: EPlatformGroup.GLOBAL_TAX_MANAGEMENT,
    product: EPlatformProduct.SPECIALTY_CORPORATE_TAX_ADVISORY,
    icon: IconMessageQuestion,
    link: ROUTES.SPECIALTY_CORPORATE_TAX_ADVISORY,
  },
  {
    group: EPlatformGroup.GLOBAL_TAX_MANAGEMENT,
    product: EPlatformProduct.DATA_INTEGRATION_AND_SECURITY,
    icon: IconShieldLock,
    link: ROUTES.DATA_INTEGRATION_AND_SECURITY,
  },
];
