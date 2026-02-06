import { OtherFeatureCardProps } from "@/components/cards/feature-card";
import { FeatureCardProps } from "@/components/feature-card/feature-card";
import { getOtherProductsForProduct } from "@/constants/other-products";
import { AccordionItemType } from "@/views/tax-provision/end-to-end";
import Image from "next/image";

export const features: FeatureCardProps[] = [
  {
    title: "Real-Time Data Integration",
    description:
      "Seamlessly capture and harmonize payee data, payment flows, and withholding obligations across all your systems. SeemaS centralizes tax data from payroll, accounts payable, and finance platforms, delivering unified, audit-ready data for every jurisdiction.",
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
    title: "AI-Powered Rules & Filing Automation",
    description:
      "Let SeemaS handle evolving withholding rules and form requirements. Built-in AI automatically applies the right tax rates, identifies source-country treaties, and auto-generates IRS, FATCA, and global forms—minimizing errors and staying current with every regulation update.",
    content: (
      <div className="relative h-[230px] md:h-full w-full">
        <Image fill src={"/features/star.svg"} alt="Feature 4" />
      </div>
    ),
    className: "xl:flex-col-reverse",
  },
  {
    title: "Automated Payments, Reconciliation & Audit Trail",
    description:
      "Never miss a deadline, underpay, or overpay—SeemaS keeps you in control. Automate payment scheduling, remittance, and return filing for multiple jurisdictions. Instantly reconcile liability to deposits and generate a transparent audit trail at the click of a button. Take the manual headaches and compliance risk out of withholding tax. With SeemaS, you get a future-ready, fully automated compliance process—purpose- built for modern, global businesses.",
    content: (
      <div className="relative h-[230px] md:h-full w-full overflow-hidden">
        <Image
          fill
          src={"/features/bubbles-flow.svg"}
          className="object-cover hidden sm:block"
          alt="Feature 3"
        />
        <Image
          fill
          src={"/features/bubbles-flow-sm.svg"}
          className="object-cover sm:hidden"
          alt="Feature 3"
        />
      </div>
    ),
    className: "xl:flex-col-reverse",
  },
  {
    title: "Digital Document Collection & Validation",
    description:
      "Streamline W-8, W-9, 1099—and more—with guided, digital workflows. Smart onboarding, e-signature, and instant TIN-matching remove bottlenecks. Every tax form is tracked, digitized, and verified, helping you avoid missing or incomplete documentation.",
    content: (
      <div className="relative h-[230px] md:h-full w-full overflow-hidden">
        <Image
          fill
          src={"/features/my-documents-md.svg"}
          alt="Feature 3"
          className="object-cover md:object-cover hidden sm:block xl:hidden"
        />

        <Image
          fill
          src={"/features/my-documents.svg"}
          alt="Feature 4"
          className="object-cover block sm:hidden xl:block"
        />
      </div>
    ),
  },
];

export const endToEndItems: AccordionItemType[] = [
  {
    title: "Tax Treaty Management",
    content:
      "Streamline tax treaty management with automated tracking and analysis — maximize treaty benefits, minimize withholding taxes, andensure compliance across jurisdictions.",
  },
  {
    title: "Foreign Tax Credit (FTC) Optimization",
    content:
      "Maximize your tax savings with automated Foreign Tax Credit optimization — accurately calculate credits, avoid double taxation, and align with global tax strategies seamlessly.",
  },
  {
    title: "Withholding Rate Applications",
    content:
      "Simplify withholding rate applications with automated processing — ensure accurate rate determination, compliance with treaty provisions, and timely submissions through one streamlined platform.",
  },
  {
    title: "Cross-border Payment Analysis",
    content:
      "Enhance cross-border payment analysis with real-time insights — optimize cash flow, ensure compliance, and identify tax-efficient structures.",
  },
  {
    title: "Automated Exemption Management",
    content:
      "Streamline exemption management with automated tracking and validation — reduce manual effort, ensure compliance, and maintain up-to-date exemption certificates effortlessly.",
  },
];

export const otherProducts: Array<OtherFeatureCardProps> =
  getOtherProductsForProduct("withholding_taxes");
