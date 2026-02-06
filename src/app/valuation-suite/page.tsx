import ValuationSuiteProductHero from "@/components/heros/valuation-suite-product-hero";
import PageWrapper from "@/components/pages/page-wrapper";
import {
  contentImageProps,
  logoProps,
} from "./valuation-suite.constants";
import {
  IconBuilding,
  IconBulb,
  IconChartLine,
  IconSparkles2,
  IconWorld,
  IconChartInfographic,
  IconFileDescription,
  IconFileShredder,
  IconSettings,
} from "@tabler/icons-react";
import ExploreSection from "@/views/valuation-suite/explore-section";
import Image from "next/image";
import SectionPlatform from "@/components/pages/home/section-platform";
import ApartSection from "@/views/valuation-suite/apart-section";
import apartImage1 from "../../../public/valuation-suite/apart-image-1.png";
import apartImage2 from "../../../public/valuation-suite/apart-image-2.png";
import apartImage3 from "../../../public/valuation-suite/apart-image-3.png";
import apartImage4 from "../../../public/valuation-suite/apart-image-4.png";
import Section6 from "@/components/pages/home/section6";
import TrySection from "@/views/overview/try-section";

  
const iconSize = 32;
const iconStrokeWidth = 1.8;
const iconStrokeColor = '#266AE9';

const ValuationSuitePage = () => {
  return (
    <>
      <PageWrapper>
        <ValuationSuiteProductHero
          heroHeading={{
            title: "Valuation Suite",
            badge: {
              text: "Scalable. Secure. Built for Global Tax Teams.",
              leftIcon: <IconWorld size={16} className="text-blue-primary" />,
            },
            description: `SeemaS is reimagining global valuation for the modern enterprise. By fusing intelligent automation with economic expertise, our platform empowers tax teams to conduct valuation analysis and documentation that is fast, accurate, and defensible.`,
            descriptionClassName: "text-body-s xl:max-w-[896px] md:text-body-l",
            badgeClassName: "mb-4"
          }}
          imageProps={contentImageProps}
          logoProps={logoProps}
        />
        <ExploreSection 
          title="Explore the Valuation Suite"
          cards={[
            {
              title: "Corporate Entities",
              icon: <IconBuilding size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor} className="size-7 xl:size-8"/>,
              description: "Uses AI-driven benchmarking and market data to establish defensible, fair market values for reorganizations, capital contributions, and intercompany transfers, ensuring alignment with global tax requirements.",
              categories: ["Going Concern", "Liquidation"],
            },
            {
              title: "Financial Instruments",
              icon: <IconChartLine size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor} className="size-7 xl:size-8"/>,
              description: "Employs advanced AI analytics to determine arm’s-length values for loans, derivatives, and structured products, supporting accurate income recognition and regulatory compliance.",
              categories: ["Loans", "Interest Rate", "Contract" , "Preferred Shares"],
            },
            {
              title: "Intangible Assets",
              icon: <IconBulb size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor} className="size-7 xl:size-8"/>,
              description: "Leverages an AI-curated database of global license agreements and transaction data to value intellectual property, technology, and brand assets for transfer pricing and IP migration analyses.",
              categories: ["Proprietary dataset", "IP Valuation"],
            },
            {
              title: <Image src="/assets/Damodaran-logo.svg" alt="Damodaran Logo" width={132} height={26} />,
              icon: <IconSparkles2 size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor} className="size-7 xl:size-8"/>,
              description: "AI-powered valuation expert built on Prof. Aswath Damodaran’s methodologies and knowledge base.",
              categories: ["Knowledge base", "On-demand expert"],
            },
          ]}
        />
        <SectionPlatform 
          cards={[
            {
              icon: <IconFileShredder size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor} className="size-7 xl:size-8"/>,
              title: "Data Intake",
              description: "AI agents parse trial balances and financial statements, extract key information, and retain adjustments.",
            },
            {
              icon: <IconSettings size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor} className="size-7 xl:size-8"/>,
              title: "Method Selection",
              description: "Guardrailed method selection based on engagement context and instrument-specific assumptions.",
            },
            {
              icon: <IconChartInfographic size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor} className="size-7 xl:size-8"/>,
              title: "Analysis",
              description: "Expert model for estimating reliable arm’s length pricing under multiple scenarios.",
            },
            {
              icon: <IconFileDescription size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor} className="size-7 xl:size-8"/>,
              title: "Report Authoring",
              description: "LLM-powered authoring generates reports from enterprise templates with AI-assisted edits.",
            },
          ]}
          platformCardsClassName="px-4 py-14 md:py-16 md:px-6 xl:px-16"
          platformBackgroundClassName="bg-[linear-gradient(0deg,#FAFAFA_35%,rgba(250,250,250,0.90)_125.15%)] md:bg-[linear-gradient(0deg,#FAFAFA_0%,rgba(250,250,250,0.90)_125.15%)]"
          splineClassName="top-[-130px] md:top-0"
        />
        <ApartSection 
          cards={[
            {
              title: "Expert-Built, Expert Validated",
              description: "Developed by domain experts and continuously validated to ensure accuracy, defensibility, and regulatory confidence.",
              image: apartImage1,
            },
            {
              title: "Agentic AI Workflows",
              description: "Workflows that turn messy inputs into structured analysis, apply the right benchmarks, draft narratives, and remember your preferences to ensure consistency.",
              image: apartImage2,
            },
            {
              title: "Curated Datasets",
              description: "Valuation and transfer pricing datasets curated with AI for benchmarking and defensible assumptions, normalized for consistent analysis across methods and industries.",
              image: apartImage3,
            },
            {
              title: "Trusted Platform",
              description: "Cloud-native platform with secure workspaces for global, cross-border collaboration, built to deliver complex valuation and transfer pricing outcomes quickly and reliably.",
              image: apartImage4,
            },
          ]}
        />
        <Section6 sectionHeadingHeadingLevel="h5" />
        <TrySection headingLevel="h6" />
      </PageWrapper>{" "}
    </>
  );
};

export default ValuationSuitePage;
