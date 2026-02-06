import CarouselBtns from "@/components/custom-ui/carousel-btns";
import CarouselWrapper from "@/components/custom-ui/carousel-wrapper";
import SectionHeader from "@/components/sections/section-header";
import SectionWrapper from "@/components/sections/section-wrapper";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";

import { ROUTES } from "@/constants/routes";
import {
  IconArrowsExchange,
  IconChecklist,
  IconFileReport,
  IconFileSettings,
  IconMessageQuestion,
  IconReportMoney,
  IconShieldLock,
} from "@tabler/icons-react";
import Slide, { SlideProps } from "./components/slide/Slide";
import GlobalTaxManagementSlideMedia from "./components/slide/elements/GlobalTaxManagementSlideMedia";

const btnsList = [
  { label: "Corporate Tax Compliance & Filings" },
  { label: "Tax Provision" },
  { label: "Transfer Pricing " },
  { label: "Indirect Tax Management" },
  { label: "Withholding Taxes" },
  { label: "Specialty Corporate Tax Advisory" },
  { label: "Data Integration & Security" },
];
const carouselItems: SlideProps[] = [
  {
    icon: <IconChecklist />,
    title: "Corporate Tax Compliance & Filings",
    description: [
      "SeemaS simplifies corporate tax return preparation and filing in line with IRS and global standards. Automated workflows and centralized data help teams report with confidence and accuracy. ",
      "The platform ensures compliance across jurisdictions, reducing errors and audit risks through real-time validation and standardized documentation.",
    ],
    badges: [
      "Tax Returns",
      "US multinational reporting forms",
      "BEAT",
      "GILTI",
      "FDII",
    ],
    buttonConfig: {
      href: ROUTES.CORPORATE_TAX_COMPLIANCE_AND_FILING,
      label: "Learn More",
    },
    children: (
      <GlobalTaxManagementSlideMedia
        singleMediaImageProps={{
          src: "/overview/global-tax-management/slide-1.png",
          alt: "global tax management slide media",
        }}
      />
    ),
  },

  {
    icon: <IconFileReport />,
    title: "Tax Provision",
    description: [
      "SeemaS automates tax provision calculations to generate accurate, audit-ready reports in line with ASC 740 / FIN 48. Real-time data and version tracking ensure transparency and consistency across reporting cycles. ",
      "Integrated scenarios and deferred tax forecasting support strategic planning and ease year-end close bottlenecks.",
    ],
    badges: [
      "Tax Provision Calculations",
      "Deferred Tax Analysis",
      "ASC 740 / FIN 48 Compliance",
      "Tax Planning Scenarios",
      "Effective Tax Rate Analysis",
    ],
    buttonConfig: {
      href: ROUTES.TAX_PROVISION,
      label: "Learn More",
    },
    children: (
      <GlobalTaxManagementSlideMedia
        singleMediaImageProps={{
          src: "/overview/global-tax-management/slide-2.png",
          alt: "global tax management slide media",
        }}
      />
    ),
  },
  {
    icon: <IconArrowsExchange />,
    title: "Transfer Pricing ",
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
    buttonConfig: {
      href: ROUTES.TRANSFER_PRICING,
      label: "Learn More",
    },
    children: (
      <GlobalTaxManagementSlideMedia
        singleMediaImageProps={{
          src: "/overview/global-tax-management/slide-3.png",
          alt: "global tax management slide media",
        }}
      />
    ),
  },

  {
    icon: <IconFileSettings />,
    title: "Indirect Tax Management",
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
    buttonConfig: {
      href: ROUTES.INDIRECT_TAX_MANAGEMENT,
      label: "Learn More",
    },
    children: (
      <GlobalTaxManagementSlideMedia
        singleMediaImageProps={{
          src: "/overview/global-tax-management/slide-4.png",
          alt: "global tax management slide media",
        }}
      />
    ),
  },
  {
    icon: <IconReportMoney />,
    title: "Withholding Taxes",
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
    buttonConfig: {
      href: ROUTES.WITHHOLDING_TAXES,
      label: "Learn More",
    },
    children: (
      <GlobalTaxManagementSlideMedia
        singleMediaImageProps={{
          src: "/overview/global-tax-management/slide-5.png",
          alt: "global tax management slide media",
        }}
      />
    ),
  },
  {
    icon: <IconMessageQuestion />,
    title: "Specialty Corporate Tax Advisory",
    description: [
      "SeemaS supports specialized tax needs such as R&D credits, expatriate planning, and OECD Pillar compliance. With tailored workflows and subject-specific modules, complex advisory scenarios are easier to manage.",
      "Whether preparing due diligence or modeling global tax strategy, SeemaS provides a scalable foundation for expert-level tax planning.",
    ],
    badges: [
      "Credits (R&D, Environmental & Carbon)",
      "Tax Incentives Management",
      "Expatriate Services",
      "Government Subsidiaries Advisory",
      "Due Diligence Support",
      "OECD Pillars (1 & 2) / DST",
    ],
    buttonConfig: {
      href: ROUTES.SPECIALTY_CORPORATE_TAX_ADVISORY,
      label: "Learn More",
    },
    children: (
      <GlobalTaxManagementSlideMedia
        singleMediaImageProps={{
          src: "/overview/global-tax-management/slide-6.png",
          alt: "global tax management slide media",
        }}
      />
    ),
  },
  {
    icon: <IconShieldLock />,
    title: "Data Integration & Security",
    description: [
      "SeemaS connects seamlessly with ERP and financial systems to centralize tax data across entities and platforms. End-to-end encryption, access controls, and real-time synchronization ensure data privacy and compliance.",
      "With multi-system connectivity, you can reduce duplication, speed up collaboration, and maintain data integrity throughout the tax lifecycle.",
    ],
    badges: [
      "Enterprise Data Integration",
      "Multi-system Connectivity",
      "Data Privacy Compliance",
      "Advanced Security Protocols",
      "Real-time Data Synchronization",
    ],
    buttonConfig: {
      href: ROUTES.DATA_INTEGRATION_AND_SECURITY,
      label: "Learn More",
    },
    children: (
      <GlobalTaxManagementSlideMedia
        singleMediaImageProps={{
          src: "/overview/global-tax-management/slide-7.png",
          alt: "global tax management slide media",
        }}
      />
    ),
  },
];

const GlobalTaxManagementSection = () => {
  return (
    <SectionWrapper contentWrapperClassName="flex flex-col gap-8 md:gap-14">
      <SectionHeader
        className="gap-4 mx-auto"
        title="Global Tax Management"
        description="AI-driven global tax management for seamless compliance and strategic control across jurisdictions. Automated, accurate, and built for enterprise scale."
        descriptionClassName="max-w-[662px]"
      />
      <CarouselWrapper className="max-w-[1140px] mx-auto flex flex-col gap-5 md:gap-8 xl:gap-14">
        <CarouselBtns
          btnsList={btnsList}
          buttonProps={{ variant: "tab", className: "" }}
          carouselItemClassName="basis-[fit-content] md:pl-0 "
          className="md:max-w-[905px] md:mx-auto md:flex md:flex-wrap md:items-center md:justify-center md:gap-2"
        />
        <div className="hidden xl:block absolute bottom-0 left-0 z-10 h-[520px] w-[calc((100vw-100%)/2)] -translate-x-full bg-[linear-gradient(90deg,#FFF_0.87%,rgba(255,255,255,0.00)_100%)] pointer-events-none" />
        <CarouselContent containerClassName="overflow-visible">
          {carouselItems.map((carouselItem, index) => (
            <CarouselItem key={index} className="basis-[fit-content]">
              <Slide
                className="min-h-[780px] md:min-h-[840px] xl:min-h-[520px] xl:max-h-[520px] w-[360px] md:w-[540px] xl:w-full"
                {...carouselItem}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden xl:block absolute bottom-0 right-0 z-10 h-[520px] w-[calc((100vw-100%)/2)] translate-x-full bg-[linear-gradient(270deg,#FFF_0.87%,rgba(255,255,255,0.00)_100%)] pointer-events-none" />
      </CarouselWrapper>
    </SectionWrapper>
  );
};
export default GlobalTaxManagementSection;
