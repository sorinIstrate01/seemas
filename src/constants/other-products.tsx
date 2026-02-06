import {
  IconArrowsExchange,
  IconChartLine,
  IconChecklist,
  IconFileReport,
  IconFileSettings,
  IconMessageQuestion,
  IconReportMoney,
  IconShieldLock,
} from "@tabler/icons-react";
import { ROUTES } from "./routes";
import { OtherFeatureCardProps } from "@/components/cards/feature-card";
import PatentIcon from "@/components/icons/patent-icon";
import { EPlatformProduct } from "@/config/platform";

type ProductKey = keyof typeof otherProductsMap;

export const otherProductsMap = {
  entity_valuation: {
    leftIcon: <IconChartLine />,
    title: EPlatformProduct.ENTITY_VALUATION,
    description: [
      "SeemaS simplifies the valuation of businesses — from standalone private companies to subsidiaries of public companies. AI-powered models and real-time data replace manual processes, delivering fast, accurate, and defensible results.",
      "SeemaS’s customization features facilitate scenario planning by allowing you to instantly see how the value of the business would change under different forecast and benchmarking assumptions.",
    ],
    badges: ["Going Concern", "Liquidation"],
    href: ROUTES.ENTITY_VALUATION,
  },
  intangible_valuation: {
    leftIcon: <PatentIcon />,
    title: EPlatformProduct.INTANGIBLE_VALUATION,
    description: [
      "Eliminate complexity from intangible valuation. ",
      "SeemaS unifies your financial, operational, and market data in real time, delivering consistent, defensible valuations without the endless spreadsheets and manual modeling.",
    ],
    badges: [
      "Compliance & Financial Reporting",
      "Transaction & Transfer Pricing Valuations",
      "Licensing, Royalty & Commercial",
      "Dispute, Litigation & Early-Stage ",
    ],
    href: ROUTES.INTANGIBLE_VALUATION,
  },
  financial_instruments: {
    leftIcon: <IconChartLine />,
    title: EPlatformProduct.FINANCIAL_INSTRUMENTS,
    description: [
      "Using proprietary credit analytics and techniques informed by cutting-edge academic research, SeemaS values financial instruments to support pricing in intra-company transactions.",
      "You can quickly obtain the value of a security, along with filing-ready documentation describing the analysis and supporting the conclusion.",
    ],
    badges: ["Loans", "Preferred Shares", "Derivative Securities"],
    href: ROUTES.FINANCIAL_INSTRUMENTS,
  },

  corporate_tax_compliance: {
    leftIcon: <IconChecklist />,
    title: EPlatformProduct.CORPORATE_TAX_COMPLIANCE_AND_FILING,
    description: [
      "SeemaS simplifies corporate tax return preparation and filing in line with IRS and global standards. Automated workflows and centralized data help teams report with confidence and accuracy.",
      "The platform ensures compliance across jurisdictions, reducing errors and audit risks through real-time validation and standardized documentation.",
    ],
    badges: [
      "Tax Returns",
      "US multinational reporting forms",
      "BEAT",
      "GILTI",
      "FDII",
    ],
    href: ROUTES.CORPORATE_TAX_COMPLIANCE_AND_FILING,
  },
  tax_provision: {
    leftIcon: <IconFileReport />,
    title: EPlatformProduct.TAX_PROVISION,
    description: [
      "SeemaS automates tax provision calculations to generate accurate, audit-ready reports in line with ASC 740 / FIN 48. Real-time data and version tracking ensure transparency and consistency across reporting cycles.",
      "Integrated scenarios and deferred tax forecasting support strategic planning and ease year-end close bottlenecks.",
    ],
    badges: [
      "Tax Provision Calculations",
      "Deferred Tax Analysis",
      "ASC 740 / FIN 48 Compliance",
      "Tax Planning Scenarios",
      "Effective Tax Rate Analysis",
    ],
    href: ROUTES.TAX_PROVISION,
  },
  transfer_pricing: {
    leftIcon: <IconArrowsExchange />,
    title: EPlatformProduct.TRANSFER_PRICING,
    description: [
      "SeemaS simplifies the creation of transfer pricing documentation by unifying local file, master file, and CbCR requirements. AI-based benchmarking and economic analysis tools ensure defensible, arm’s-length support.",
      "The platform adapts to evolving regulations globally, giving your teams flexibility and confidence during audits or reviews.",
    ],
    badges: [
      "Local File",
      "Master File",
      "CbCR",
      "Operational TP",
      "Economic Analysis & Benchmarking",
    ],
    href: ROUTES.TRANSFER_PRICING,
  },

  indirect_tax_management: {
    leftIcon: <IconFileSettings />,
    title: EPlatformProduct.INDIRECT_TAX_MANAGEMENT,
    description: [
      "SeemaS helps businesses manage VAT/GST, sales tax, and customs compliance across multiple jurisdictions. Real-time updates and jurisdiction-specific rule engines reduce manual effort and increase filing accuracy.",
      "Built-in analytics provide insight into liability exposures and optimization opportunities in your indirect tax footprint.",
    ],
    badges: [
      "VAT/GST Registration & Compliance",
      "Sales Tax Management",
      "Customs Duty Optimization",
      "Multi-jurisdiction Filing",
      "Real-time Rate Updates",
    ],
    href: ROUTES.INDIRECT_TAX_MANAGEMENT,
  },

  withholding_taxes: {
    leftIcon: <IconReportMoney />,
    title: EPlatformProduct.WITHHOLDING_TAXES,
    description: [
      "SeemaS enables accurate calculation and reporting of withholding taxes on cross-border payments. Built-in rules for treaties, exemptions, and local requirements ensure compliant and optimized outcomes.",
      "Automation tools streamline certificate tracking and reduce the risk of double taxation or costly penalties.",
    ],
    badges: [
      "Tax Treaty Management",
      "FTC Optimization",
      "Withholding Rate Applications",
      "Cross-border Payment Analysis",
      "Automated Exemption Management",
    ],
    href: ROUTES.WITHHOLDING_TAXES,
  },

  specialty_corporate_tax_advisory: {
    leftIcon: <IconMessageQuestion />,
    title: EPlatformProduct.SPECIALTY_CORPORATE_TAX_ADVISORY,
    description: [
      "SeemaS supports specialized tax needs such as R&D credits, expatriate planning, and OECD Pillar compliance. With tailored workflows and subject-specific modules, complex advisory scenarios are easier to manage.",
      "Whether preparing due diligence or modeling global tax strategy, SeemaS provides a scalable foundation for expert-level tax planning.",
    ],
    badges: [
      "Credits",
      "Tax Incentives Management",
      "Expatriate Services",
      "Government Subsidiaries Advisory",
      "Due Diligence Support",
      "OECD Pillars (1 & 2) / DST",
    ],
    href: ROUTES.SPECIALTY_CORPORATE_TAX_ADVISORY,
  },

  data_integration_and_security: {
    leftIcon: <IconShieldLock />,
    title: EPlatformProduct.DATA_INTEGRATION_AND_SECURITY,
    description: [
      "SeemaS connects seamlessly with ERP and financial systems to centralize tax data across entities and platforms. End-to-end encryption, access controls, and real-time synchronization ensure data privacy and compliance.",
      "With multi-system connectivity, you can reduce duplication, speed up collaboration, and maintain data integrity throughout the tax lifecycle.",
    ],
    badges: [
      "Enterprise Data Integration",
      "Multi-system Connectivity",
      "Withholding Rate Applications",
      "Advanced Security Protocols",
      "Real-time Data Synchronization",
    ],
    href: ROUTES.DATA_INTEGRATION_AND_SECURITY,
  },
} as const satisfies Record<string, OtherFeatureCardProps>;

const VALUATION_SUITE_KEYS: ProductKey[] = [
  "entity_valuation",
  "intangible_valuation",
  "financial_instruments",
];

const GLOBAL_TAX_MANAGEMENT_KEYS: ProductKey[] = [
  "corporate_tax_compliance",
  "tax_provision",
  "transfer_pricing",
  "indirect_tax_management",
  "withholding_taxes",
  "specialty_corporate_tax_advisory",
  "data_integration_and_security",
];

export function getOtherProductsForProduct(
  currentProductKey: ProductKey
): Array<OtherFeatureCardProps> {
  const isValuationSuite = VALUATION_SUITE_KEYS.includes(currentProductKey);
  const isGlobalTaxSuite =
    GLOBAL_TAX_MANAGEMENT_KEYS.includes(currentProductKey);

  let resultKeys: ProductKey[] = [];

  if (isValuationSuite) {
    resultKeys = [
      ...VALUATION_SUITE_KEYS.filter((key) => key !== currentProductKey),
      ...GLOBAL_TAX_MANAGEMENT_KEYS,
    ];
  } else if (isGlobalTaxSuite) {
    resultKeys = [
      ...GLOBAL_TAX_MANAGEMENT_KEYS.filter((key) => key !== currentProductKey),
      ...VALUATION_SUITE_KEYS,
    ];
  } else {
    resultKeys = [
      ...VALUATION_SUITE_KEYS,
      ...GLOBAL_TAX_MANAGEMENT_KEYS,
    ].filter((key) => key !== currentProductKey);
  }

  return resultKeys.map((key) => otherProductsMap[key]);
}
