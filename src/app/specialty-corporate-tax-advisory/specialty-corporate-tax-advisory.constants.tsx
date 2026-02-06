import { OtherFeatureCardProps } from "@/components/cards/feature-card";
import { FeatureCardProps } from "@/components/feature-card/feature-card";
import { getOtherProductsForProduct } from "@/constants/other-products";
import { AccordionItemType } from "@/views/tax-provision/end-to-end";
import Image from "next/image";

export const features: FeatureCardProps[] = [
  {
    title: "Maximize Incentive. Unlock New Savings.",
    description:
      "SeemaS analyzes your business activities and spend, instantly identifying opportunities for R&D benefits and environmental tax credits—across every jurisdiction. Automated qualification checks and application tracking ensure you never leave money on the table.",
    content: (
      <div className="relative h-[230px] md:h-full w-full">
        <Image
          fill
          src={"/features/unlock-new-savings.svg"}
          className="object-cover hidden xl:block"
          alt="Feature 3"
        />
        <Image
          fill
          src={"/features/unlock-new-savings-md.svg"}
          className="object-contain hidden md:block xl:hidden"
          alt="Feature 3"
        />
        <Image
          fill
          src={"/features/unlock-new-savings-sm.svg"}
          className="object-contain block md:hidden"
          alt="Feature 3"
        />
      </div>
    ),
  },
  {
    title: "Reliable Global Compliance. Automated for Confidence.",
    description:
      "SeemaS automates the complex calculations, data pulls, and reporting needed for OECD Pillar 1 & 2. Map exposures, model impacts, and prepare bulletproof compliance files—so you meet new multinational tax standards with confidence.",
    content: (
      <div className="relative h-[230px] md:h-full w-full">
        <Image
          fill
          src={"/features/gear.svg"}
          className="object-cover hidden md:block"
          alt="Feature 3"
        />
        <Image
          fill
          src={"/features/gear-sm.svg"}
          className="object-contain block md:hidden"
          alt="Feature 3"
        />
      </div>
    ),
    className: "xl:flex-col-reverse",
  },
  {
    title: "Support your Global Workforce without the Hassle.",
    description:
      "SeemaS streamlines expatriate payroll, residency tracking, tax equalization, and compliance form generation. Employees and HR get clear, simple workflows—so cross- border mobility becomes effortless, not overwhelming.",
    content: (
      <div className="relative h-[230px] md:h-full w-full">
        <Image
          fill
          src={"/corporate-tax-advisory/card-3.svg"}
          alt="Feature 1"
          className="object-cover"
        />
      </div>
    ),
    className: "xl:flex-col-reverse",
  },
  {
    title: "Accelerate Deals & Mitigate Risks with AI.",
    description:
      "With SeemaS, upload data and receive instant diagnostics on tax risks, exposures, and optimization opportunities. AI-powered scenario modeling guides smarter negotiations and unlocks deal value with thorough, rapid diligence. Upgrade your specialty corporate tax advisory with SeemaS—AI-driven, seamlessly automated, and ready for the world’s most complex challenges.",

    content: (
      <div className="relative h-[230px] md:h-full w-full">
        <Image fill src={"/features/star.svg"} alt="Feature 4" />
      </div>
    ),
  },
];

export const endToEndItems: AccordionItemType[] = [
  {
    title: "Credits (R&D, Environmental & Carbon)",
    content:
      "Maximize value from R&D, environmental, and carbon credits with automated identification, tracking, and reporting — ensuring compliance while boosting your sustainability and innovation goals.",
  },
  {
    title: "Tax Incentives Management",
    content:
      "Optimize tax incentives with automated tracking and compliance — identify opportunities, manage applications, and maximize benefits.",
  },
  {
    title: "Expatriate Services",
    content:
      "Simplify expatriate tax and compliance management — streamline global payroll, tax filings, and regulatory adherence to support your mobile workforce efficiently.",
  },
  {
    title: "Government Subsidiaries Advisory",
    content:
      "Deliver specialized advisory for government subsidiaries — navigate regulatory requirements, optimize compliance, and enhance governance with expert insights and tailored solutions.",
  },
  {
    title: "Due Diligence Support",
    content:
      "Provide comprehensive due diligence support — streamline data analysis, identify risks, and ensure accurate tax and financial assessments to facilitate informed decision-making.",
  },
  {
    title: "OECD Pillars (1 & 2) / DST",
    content:
      "Stay ahead of global tax reforms with automated support for OECD Pillars 1 & 2 and DST — assess exposure, model impact, and ensure seamless compliance across jurisdictions.",
  },
];

export const otherProducts: Array<OtherFeatureCardProps> =
  getOtherProductsForProduct("specialty_corporate_tax_advisory");
