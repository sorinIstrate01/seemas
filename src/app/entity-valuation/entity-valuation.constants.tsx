import { OtherFeatureCardProps } from "@/components/cards/feature-card";
import { FeatureCardProps } from "@/components/feature-card/feature-card";
import { getOtherProductsForProduct } from "@/constants/other-products";
import { AccordionItemType } from "@/views/tax-provision/end-to-end";
import Image from "next/image";

export const contentImageProps = {
  src: "/overview/hero-section/business-valuation.png",
  alt: "business valuation",
};

export const features: FeatureCardProps[] = [
  {
    title: "Reduce Time, Lower Advisory Expenses.",
    description:
      "SeemaS generates transparent, defensible reports aligned with global standards.",
    content: (
      <div className="relative h-[172px] md:h-full w-full">
        <Image
          fill
          src={"/features/generate-analysis.svg"}
          alt="Feature 1"
          className="object-cover"
        />
      </div>
    ),
  },
  {
    title: "Adjust the Model.",
    description:
      "Customize assumptions, adjust benchmarks, and tailor every step of the calculation with full transparency.",
    content: (
      <div className="relative h-[172px] md:h-full w-full">
        <Image
          fill
          src={"/features/base-scenario.svg"}
          alt="Feature 2"
          className="object-cover"
        />
      </div>
    ),
  },
  {
    title: "Instant Business Valuation.",
    description:
      "Get a complete, professional-grade valuation report in seconds — no complex formulas, no spreadsheets, no hassle.",
    content: (
      <div className="relative h-[172px] md:h-full w-full">
        <Image
          fill
          src={"/features/lightning.png"}
          alt="Feature 3"
          className="object-cover"
        />
      </div>
    ),
  },
  {
    title: "Benchmark Support. Global Context.",
    description:
      "Leverage comparables and localized data to build defensible models.",
    content: (
      <div className="relative h-[172px] md:h-full w-full">
        <Image
          fill
          src={"/features/continent.png"}
          alt="Feature 4"
          className="object-cover"
        />
      </div>
    ),
  },
];

export const endToEndItems: AccordionItemType[] = [
  {
    title: "Going Concern",
    content:
      "AI-covered business valuations using DCF and relative valuation models — fully customizable.",
    badges: [
      "Intrinsic (DCF) Value",
      "Market Relative Value",
      "Forecast Assumptions",
      "WAAC",
      "Benchmarks",
    ],
  },
  {
    title: "Liquidation",
    content:
      "Assess recovery values in wind-down scenarios with structured, audit-ready methods—designed for clarity and compliance.",
    badges: ["Recovery %", "OLV Value"],
  },
];

export const otherProducts: Array<OtherFeatureCardProps> =
  getOtherProductsForProduct("entity_valuation");
