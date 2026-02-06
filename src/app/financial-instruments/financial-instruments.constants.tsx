import { OtherFeatureCardProps } from "@/components/cards/feature-card";
import { FeatureCardProps } from "@/components/feature-card/feature-card";
import { getOtherProductsForProduct } from "@/constants/other-products";
import { AccordionItemType } from "@/views/tax-provision/end-to-end";
import Image, { ImageProps } from "next/image";

export const heroImageProps: ImageProps = {
  src: "/financial-instruments/hero-img.png",
  alt: "financial instruments",
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
          className="object-contain md:object-cover"
        />
      </div>
    ),
  },
  {
    title: "Adjust the Model.",
    description:
      "Tailor assumptions, input your own data, and customize every step of the calculation with full transparency.",
    content: (
      <div className="relative h-[172px] md:h-full w-full">
        <Image
          fill
          src={"/features/custom-scenario.svg"}
          alt="Feature 2"
          className="object-contain md:object-cover"
        />
      </div>
    ),
  },
  {
    title: "Instant Loan Insights",
    description:
      "Visualize cash flows, interest payments, and present value across the loan’s entire lifecycle — instantly and accurately.",
    content: (
      <div className="relative h-[172px] md:h-full w-full">
        <Image
          fill
          src={"/features/lightning.png"}
          alt="Feature 3"
          className="object-contain md:object-cover"
        />
      </div>
    ),
  },
  {
    title: "Audit-Ready Outputs",
    description:
      "Access peer comparisons, recovery assumptions, and country-level data for defensible modeling.",
    content: (
      <div className="relative h-[172px] md:h-full w-full">
        <Image
          fill
          src={"/features/financial-instruments-analyses.svg"}
          alt="Feature 4"
          className="object-contain xl:object-cover block md:hidden xl:block"
        />
        <Image
          fill
          src={"/features/financial-instruments-analyses-tablet.svg"}
          alt="Feature 4"
          className="object-cover hidden md:block xl:hidden"
        />
      </div>
    ),
  },
];

export const endToEndItems: AccordionItemType[] = [
  {
    title: "Loans",
    content:
      "Valuate сorporate loans with precision using market-based discount rates, credit data, and transparent model assumptions.",
    badges: [
      "Analysis Overview",
      "Corporate bond data",
      "Discount rate estimate",
      "Interest Rate",
    ],
  },
  {
    title: "Contract Valuation",
    content:
      "Accurately assess contract value using market-aligned models, credit data, and clear valuation logic—for reporting, M&A, and litigation.",
    badges: ["Contract Value", "WACC", "Benchmarks"],
  },
  {
    title: "Preferred Shares",
    content:
      "Generate structured valuations for preference shares — accounting for dividend terms, risk profiles, and capital structure impact.",
  },
  {
    title: "Derivative Securities",
    content:
      "Assess fair value of options, swaps, and other derivatives with flexible inputs and support for market and model-based methods.",
  },
];

export const otherProducts: Array<OtherFeatureCardProps> =
  getOtherProductsForProduct("financial_instruments");
