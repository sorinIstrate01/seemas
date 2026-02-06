import { OtherFeatureCardProps } from "@/components/cards/feature-card";
import { FeatureCardProps } from "@/components/feature-card/feature-card";
import { getOtherProductsForProduct } from "@/constants/other-products";
import { AccordionItemType } from "@/views/tax-provision/end-to-end";
import Image, { ImageProps } from "next/image";

export const heroImageProps: ImageProps = {
  src: "/intangible-valuation/hero-img.png",
  alt: "intangible valuation",
};

export const features: FeatureCardProps[] = [
  {
    title: "Compliance Without the Guesswork.",
    description:
      "SeemaS ensures your intangible asset valuations are accurate, compliant, and globally recognized.",
    content: (
      <div className="relative h-[172px] md:h-full w-full">
        <Image
          fill
          src={"/features/generate-analysis.svg"}
          alt="Feature 1"
          className="object-contain md:object-cover"
        />
      </div>
    ),
  },
  {
    title: "AI-Driven Insights & Risk Radar.",
    description:
      "Know your IP’s value today — and tomorrow. SeemaS uses AI and market benchmarking to spot risks, shifts, and future value drivers, giving you foresight for smarter decisions.",
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
  },
  {
    title: "Turn IP into a Strategic Advantage.",
    description:
      "Don’t let valuation be a burden — make it your edge. SeemaS helps businesses understand, defend, and leverage intangible assets with clarity, agility, and confidence.",
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
  },
  {
    title: "Always Audit-Defensible.",
    description:
      "Valuations that withstand scrutiny. Get transparent, regulator-ready reports for tax, M&A, litigation, and financial reporting.",

    content: (
      <div className="relative h-[172px] md:h-full w-full">
        <Image
          fill
          src={"/features/intangible-valuation-analyses.svg"}
          alt="Feature 4"
          className="object-cover hidden xl:block"
        />
        <Image
          fill
          src={"/features/intangible-valuation-analyses-tablet.svg"}
          alt="Feature 4"
          className="object-cover hidden md:block xl:hidden"
        />
        <Image
          fill
          src={"/features/intangible-valuation-analyses-mobile.svg"}
          alt="Feature 4"
          className="object-contain block md:hidden"
        />
      </div>
    ),
  },
];

export const endToEndItems: AccordionItemType[] = [
  {
    title: "Compliance & Financial Reporting",
    content:
      "Deliver compliance-ready intangible valuations aligned with OECD, IFRS, and US GAAP requirements. From patents to trademarks, generate audit-proof analyses that satisfy regulators and auditors with global consistency.",
  },
  {
    title: "Transaction & Transfer Pricing Valuations",
    content:
      "Support critical business decisions with precision — whether for M&A, restructurings, or intercompany transactions. Seamlessly align fair value analyses with your transfer pricing policy and global tax strategy.",
  },
  {
    title: "Licensing, Royalty & Commercial Valuations",
    content:
      "Structure smarter deals with defensible valuations that guide royalty rates, licensing agreements, and commercialization strategies. Ensure transactions reflect arm’s-length principles while unlocking IP value.",
  },
  {
    title: "Dispute, Litigation & Early-Stage Valuations",
    content:
      "Defend and demonstrate your IP value in disputes, arbitration, or litigation, backed by transparent methodologies. For start-ups and innovators, produce scalable IP valuations that support fundraising, venture capital, and exit strategies.",
  },
];

export const otherProducts: Array<OtherFeatureCardProps> =
  getOtherProductsForProduct("intangible_valuation");
