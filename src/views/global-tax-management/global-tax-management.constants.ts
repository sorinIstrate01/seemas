import { ROUTES } from "@/constants/routes";
import { IconChecklist } from "@tabler/icons-react";

import {
  IconFileReport,
  IconLayoutGrid,
  IconShieldCheck,
} from "@tabler/icons-react";

import {
  IconArrowsExchange,
  IconFileSettings,
  IconMessageQuestion,
  IconReportMoney,
  IconShieldLock,
} from "@tabler/icons-react";

export const heroCards = [
  {
    title: "AI-powered filings across jurisdictions",
    icon: IconFileReport,
  },
  {
    title: "Real-time dashboards & risk alerts",
    icon: IconLayoutGrid,
  },
  {
    title: "Built-in support for Pillar Two & OECD compliance",
    icon: IconShieldCheck,
    titleClassName: "xl:w-[237px]",
  },
];

export const allInOneCards = [
  {
    title: "Corporate Tax Compliance & Filings",
    description: "File Smarter. Scale Faster.",
    icon: IconChecklist,
    points: [
      "Federal, State and Local Tax Returns Preparation and Planning",
      "US Multinational Reporting Forms (5471, 5472, 8858, etc.)",
      "US International Tax (BEAT, GILTI, FDII)",
    ],
    link: ROUTES.CORPORATE_TAX_COMPLIANCE_AND_FILING,
  },
  {
    title: "Tax Provision",
    description: "Replace Spreadsheets with Certainty.",
    icon: IconFileReport,
    points: [
      "Current Tax Provision Calculations",
      "Deferred Tax Analysis",
      "ASC 740 / FIN 48 Compliance",
      "Tax Planning Scenarios",
      "Effective Tax Rate Analysis",
    ],
    link: ROUTES.TAX_PROVISION,
  },
  {
    title: "Transfer Pricing",
    description: "All your TP Work. Scale with Confidence.",
    icon: IconArrowsExchange,
    points: [
      "Local File Preparation & Management",
      "Master File Documentation",
      "CbCR (Country-by-Country Reporting)",
      "Operational Transfer Pricing",
      "Economic Analysis & Benchmarking",
    ],
    link: ROUTES.TAX_PROVISION,
  },
  {
    title: "Indirect Tax Management",
    description: "Low-touch Compliance. High-Impact Savings.",
    icon: IconFileSettings,
    points: [
      "VAT/GST Registration & Compliance",
      "Sales Tax Management",
      "Customs Duty Optimization",
      "Multi-jurisdiction Filing",
      "Real-time Rate Updates",
    ],
    link: ROUTES.INDIRECT_TAX_MANAGEMENT,
  },
  {
    title: "Withholding Taxes",
    description: "Reduce Burden. Retain Value.",
    icon: IconReportMoney,
    points: [
      "Tax Treaty Management",
      "Foreign Tax Credit (FTC) Optimization",
      "Withholding Rate Applications",
      "Cross-border Payment Analysis",
      "Automated Exemption Management",
    ],
    link: ROUTES.WITHHOLDING_TAXES,
  },
  {
    title: "Specialty Corporate Tax Advisory",
    description: "One Seamless Tool. Plan with Clarity.",
    icon: IconMessageQuestion,
    points: [
      "Credits (R&D, Environmental & Carbon)",
      "Tax Incentives Management",
      "Expatriate Services",
      "Government Subsidiaries Advisory",
      "Due Diligence Support",
      "OECD Pillars (1 & 2) / DST",
    ],
    link: ROUTES.SPECIALTY_CORPORATE_TAX_ADVISORY,
  },
  {
    title: "Data Integration & Security",
    description: "Reliable, Secure Data.",
    icon: IconShieldLock,
    points: [
      "Enterprise Data Integration",
      "Multi-system Connectivity",
      "Advanced Security Protocols",
      "Data Privacy Compliance",
      "Real-time Data Synchronization",
    ],
    link: ROUTES.DATA_INTEGRATION_AND_SECURITY,
  },
];
