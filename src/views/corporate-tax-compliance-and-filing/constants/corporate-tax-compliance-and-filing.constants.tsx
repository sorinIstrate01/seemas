import { AccordionItemType } from "@/views/tax-provision/end-to-end";

import { OtherFeatureCardProps } from "@/components/cards/feature-card";
import { FeatureCardProps } from "@/components/feature-card/feature-card";
import { otherProductsMap } from "@/constants/other-products";
import Image from "next/image";

export const features: FeatureCardProps[] = [
  {
    title: "Speed up. Save more. Simplify it all.",
    description: `Automate complex filings, slash advisory costs, and get real-time insights.
SeemaS handles the intricacies of your corporate taxes, turns months of manual work
into minutes, and puts actionable clarity at your fingertips. No more drowning in
spreadsheets.`,
    content: (
      <div className="relative h-[230px] md:h-full w-full">
        <Image
          fill
          src={"/features/get-report.svg"}
          className="object-cover hidden xl:block"
          alt="Feature 1"
        />
        <Image
          fill
          src={"/features/get-report-md.svg"}
          className="object-contain hidden md:block xl:hidden"
          alt="Feature 1"
        />
        <Image
          fill
          src={"/features/get-report-sm.svg"}
          className="object-contain block md:hidden"
          alt="Feature 1"
        />
      </div>
    ),
  },
  {
    title: "Defensible, Audit-Ready Reports",
    description: `Stay ready for any review—anywhere, anytime. Generate transparent, bulletproof reports aligned with global and local standards.
Whether facing an IRS inquiry or a global audit, SeemaS equips you with the
documentation and confidence to pass any test.`,
    content: (
      <div className="relative h-[230px] md:h-full w-full">
        <Image
          fill
          src={"/features/tax-compliance.svg"}
          className="object-cover hidden xl:block"
          alt="Feature 2"
        />
        <Image
          fill
          src={"/features/tax-compliance-md.svg"}
          className="object-contain hidden md:block xl:hidden"
          alt="Feature 2"
        />
        <Image
          fill
          src={"/features/tax-compliance-sm.svg"}
          className="object-contain block md:hidden"
          alt="Feature 2"
        />
      </div>
    ),
    className: "xl:flex-col-reverse",
  },

  {
    title: "AI-Powered Automated Compliance",
    description: `AI tools that deliver fast solutions.
SeemaS’s smart automation manages updates to global regulations, auto-generates
required filings, and keeps you agile with up-to-the-minute compliance changes, making
corporate tax effortless and foolproof.
Unlock a new level of speed, assurance, and control.
With SeemaS, corporate tax compliance and filing is no longer a burden—it’s a strategic advantage.`,
    content: (
      <div className="relative h-[230px] md:h-full w-full">
        <Image fill src={"/features/star.svg"} alt="Feature 4" />
      </div>
    ),
    className: "xl:flex-col-reverse",
  },
  {
    title: "Real-Time Data Integration",
    description: `Unify all your financial data—automatically.
SeemaS connects ERP, GL, and every other data source you need, transforming
sprawling complexity into strategic clarity. Always work with the latest numbers, across
every entity and jurisdiction.
AI-Powered Automated Compliance.`,
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
];

export const accordionItems: AccordionItemType[] = [
  {
    title: "Federal, State and Local tax returns preparation and planning",
    content:
      "Simplify your U.S. tax compliance with intelligent automation — prepare, plan, and file Federal, State, and Local tax returns with accuracy and ease. Stay ahead of deadlines, reduce risk, and ensure end-to-end compliance.",
  },
  {
    title: "US multinational reporting forms ",
    content:
      "Effortlessly manage complex U.S. international tax forms — automate and streamline the preparation of Forms 5471, 5472, 8858, and more. Stay compliant with IRS requirements while maintaining consistency across your global reporting.",
  },
  {
    title: "US International tax (BEAT, GILTI, FDII)",
    content:
      "Navigate U.S. international tax with confidence — automate complex calculations for BEAT, GILTI, and FDII, and align them with your global tax strategy. Stay compliant, minimize risk, and optimize outcomes.",
  },
];

export const otherProducts: Array<OtherFeatureCardProps> = [
  otherProductsMap.tax_provision,
  otherProductsMap.transfer_pricing,
  otherProductsMap.indirect_tax_management,
  otherProductsMap.withholding_taxes,
  otherProductsMap.specialty_corporate_tax_advisory,
  otherProductsMap.data_integration_and_security,
  otherProductsMap.entity_valuation,
  otherProductsMap.financial_instruments,
];
