import { OtherFeatureCardProps } from "@/components/cards/feature-card";
import { FeatureCardProps } from "@/components/feature-card/feature-card";
import { getOtherProductsForProduct } from "@/constants/other-products";
import { AccordionItemType } from "@/views/tax-provision/end-to-end";
import Image from "next/image";

export const features: FeatureCardProps[] = [
  {
    title: "Real-Time Tax Data Integration",
    description:
      "Sync sales, purchase, and financial data from all your ERP and commerce systems in seconds. SeemaS connects with your core platforms, continuously pulling and harmonizing transactional data, so your VAT, GST, and sales tax calculations are always up to date, no matter how many systems or jurisdictions you operate in.",
    content: (
      <div className="relative h-[230px] md:h-full w-full">
        <Image
          fill
          src={"/features/bubbles-icons.svg"}
          className="object-cover hidden xl:block"
          alt="Feature 3"
        />
        <Image
          fill
          src={"/features/bubbles-icons-md.svg"}
          className="object-contain hidden md:block xl:hidden"
          alt="Feature 3"
        />
        <Image
          fill
          src={"/features/bubbles-icons-sm.svg"}
          className="object-contain block md:hidden"
          alt="Feature 3"
        />
      </div>
    ),
  },
  {
    title: "AI-Powered Tax Determination & Rate Updates",
    description:
      "SeemaS’s smart engine automatically applies up-to-date tax rates for 56,000+ jurisdictions and adapts instantly as laws change, ensuring error-free calculations for every transaction, everywhere.",
    content: (
      <div className="relative h-[230px] md:h-full w-full">
        <Image
          fill
          src={"/features/star.svg"}
          className="object-contain md:object-cover"
          alt="Feature 2"
        />
      </div>
    ),
    className: "xl:flex-col-reverse",
  },
  {
    title: "Automated Compliance & Exemption Management",
    description:
      "Automate return filings, audit trails, and compliance documentation — plus, manage exemption certificates seamlessly, with smart reminders and built-in validation for every exemption scenario.",
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
    title: "Integrated Audit-Readiness and Risk Alerts",
    description:
      "SeemaS stores every tax record and provides instant, graphic reports. Proactive alerts flag anomalies and potential compliance risks, giving you total peace of mind — before the auditors arrive. SeemaS makes indirect tax management seamless, accurate, and future-proof — so your team can focus less on complexity and more on growth.",
    content: (
      <div className="relative h-[230px] md:h-full w-full">
        <Image
          fill
          src={"/features/bell-dashboard.svg"}
          className="object-cover hidden xl:block"
          alt="Feature 3"
        />
        <Image
          fill
          src={"/features/bell-dashboard-md.svg"}
          className="object-contain hidden sm:block xl:hidden"
          alt="Feature 3"
        />
        <Image
          fill
          src={"/features/bell-dashboard-sm.svg"}
          className="object-cover block sm:hidden"
          alt="Feature 3"
        />
      </div>
    ),
  },
];

export const endToEndItems: AccordionItemType[] = [
  {
    title: "VAT/GST Registration & Compliance",
    content:
      "Simplify VAT and GST registration and compliance with automated workflows — ensure timely filings, accurate returns, and full regulatory adherence across jurisdictions.",
  },
  {
    title: "Sales Tax Management",
    content:
      "Take control of sales tax management with automated calculation, filing, and compliance — reduce errors, stay up-to-date with changing regulations, and simplify multistate reporting.",
  },
  {
    title: "Customs Duty Optimization",
    content:
      "Optimize customs duties with smart automation — minimize costs, ensure compliance, and streamline import-export processes through data-driven insights and seamless platform integration.",
  },
  {
    title: "Multi-jurisdiction Filing",
    content:
      "Simplify multi-jurisdiction filing with centralized automation — manage diverse tax filings seamlessly across regions, ensuring timely compliance and consistent reporting.",
  },
  {
    title: "Real-time Rate Updates",
    content:
      "Stay ahead with real-time tax rate updates — automatically receive the latest changes to rates and regulations, ensuring accurate calculations and compliance at all times.",
  },
];

export const otherProducts: Array<OtherFeatureCardProps> =
  getOtherProductsForProduct("indirect_tax_management");
