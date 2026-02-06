import { OtherFeatureCardProps } from "@/components/cards/feature-card";
import { FeatureCardProps } from "@/components/feature-card/feature-card";
import { getOtherProductsForProduct } from "@/constants/other-products";
import { AccordionItemType } from "@/views/tax-provision/end-to-end";
import Image from "next/image";

export const features: FeatureCardProps[] = [
  {
    title: "Instant Data Integration",
    description:
      "Pull every critical number from your ERP, GL, and financial systems— automatically. SeemaS centralizes all your tax data, updates in real time, and ensures you’re working with the most current, reliable figures—eliminating manual entry and spreadsheet headaches.",
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
    title: "Automation from Calculation to Compliance",
    description:
      "Automate even the most complex ASC 740 and global tax provision tasks. SeemaS auto-calculates current and deferred taxes, manages reconciliation and journal entries, and applies the most up-to-date tax rates and rules—so you never miss a detail.",
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
    title: "Effortless Audit-Readiness",
    description: `Prepare and store audit-ready tax provision reports at the click of a button. SeemaS organizes all your provision workpapers, adjustment trails, and support
documents, ensuring fast, confident audit responses and peace of mind every period.
Transform the way you handle tax provision—move faster, comply smarter, and make
your tax team’s life easier with SeemaS.`,
    content: (
      <div className="relative h-[230px] md:h-full w-full">
        <Image
          fill
          src={"/features/file-board.svg"}
          className="object-cover hidden md:block"
          alt="Feature 3"
        />
        <Image
          fill
          src={"/features/file-board-mobile.svg"}
          className="object-contain block md:hidden"
          alt="Feature 3"
        />
      </div>
    ),
    className: "xl:flex-col-reverse",
  },
  {
    title: "AI-Driven Accuracy and Insights",
    description: `Let SeemaS do the heavy lifting—minimizing errors, maximizing confidence. AI checks every calculation, flags discrepancies, and continuously monitors for
compliance issues. Go beyond manual checks with smart suggestions and real-time risk
alerts.`,
    content: (
      <div className="relative h-[230px] md:h-full w-full">
        <Image fill src={"/features/star.svg"} alt="Feature 4" />
      </div>
    ),
  },
];

export const endToEndItems: AccordionItemType[] = [
  {
    title: "Current Tax Provision Calculations",
    content:
      "Accelerate accurate current tax provision calculations with AI-driven automation — ensure compliance, enhance transparency, and streamline your financial close process, all within a single, unified platform.",
  },
  {
    title: "Deferred Tax Analysis",
    content:
      "Simplify deferred tax analysis with automated calculations and insightful reporting — accurately track timing differences, assess tax impacts, and support strategic financial planning from one seamless platform.",
  },
  {
    title: "ASC 740 / FIN 48 Compliance",
    content:
      "Streamline ASC 740 and FIN 48 compliance with automated tax accounting — ensure precise uncertainty assessments, comprehensive disclosures, and audit-ready documentation.",
  },
  {
    title: "Tax Planning Scenarios",
    content:
      "Explore dynamic tax planning scenarios with powerful modeling tools — evaluate impacts, optimize strategies, and make informed decisions to maximize tax efficiency.",
  },
  {
    title: "Effective Tax Rate Analysis",
    content:
      "Gain clear insights with automated effective tax rate analysis — track, compare, and optimize your tax burden to drive strategic decision-making.",
  },
];

export const otherProducts: Array<OtherFeatureCardProps> =
  getOtherProductsForProduct("tax_provision");
