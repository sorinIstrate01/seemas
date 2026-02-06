import ValuationSuiteProductHero from "@/components/heros/valuation-suite-product-hero";
import PageWrapper from "@/components/pages/page-wrapper";
import {
  IconFileText,
  IconChartDots3,
  IconBuildingBank,
  IconShieldCheck,
  IconWorld,
  IconMessage,
  IconCalculator,
  IconGitMerge,
  IconFileReport,
  IconLayoutGrid,
  IconFileShredder,
  IconSettings,
  IconChartInfographic,
  IconFileDescription,
} from "@tabler/icons-react";
import ExploreSection from "@/views/valuation-suite/explore-section";
import SectionPlatform from "@/components/pages/home/section-platform";
import ApartSection from "@/views/valuation-suite/apart-section";
import apartImage1 from "../../../public/valuation-suite/apart-image-1.png";
import apartImage2 from "../../../public/valuation-suite/apart-image-2.png";
import apartImage3 from "../../../public/valuation-suite/apart-image-3.png";
import apartImage4 from "../../../public/valuation-suite/apart-image-4.png";
import TrySection from "@/views/overview/try-section";
import TaxIQSection from "@/views/sections/tax-iq-section";

  
const iconSize = 32;
const iconStrokeWidth = 1.8;
const iconStrokeColor = '#266AE9';

const backgroundImageProps = {
  src: "/transfer-pricing/pricing-hero-desktop.png",
  alt: "Transfer Pricing Background",
}

const bottomItems = [
  {
    title: "AI-powered filings across <br class='hidden md:block' />multiple jurisdictions.",
    icon: <IconFileReport size={24} strokeWidth={1.2} color="#18181B" />,
  },
  {
    title: "Real-time dashboards & <br class='hidden md:block' />risk alerts .",
    icon: <IconLayoutGrid size={24} strokeWidth={1.2} color="#18181B" />,
  },
  {
    title: "Built-in support for Pillar Two & <br class='hidden md:block' />OECD compliance .",
    icon: <IconShieldCheck size={24} strokeWidth={1.2} color="#18181B" />,
  },
]

const TransferPricingPage = () => {
  return (
    <>
      <PageWrapper>
        <ValuationSuiteProductHero
          backgroundImageProps={backgroundImageProps}
          wrapperClassName="h-[656px] md:h-[606px] xl:h-[800px]"
          heroHeading={{
            title: " Transfer Pricing Suite",
            badge: {
              text: "Scalable. Secure. Built for Global Tax Teams.",
              leftIcon: <IconWorld size={16} className="text-blue-primary" />,
            },
            description: `SeemaS is redefining how multinational organizations handle tax. Our platform integrates automation, analytics, and regulatory intelligence so global tax teams can file, strategize, and scale with confidence.`,
            descriptionClassName: "text-body-s xl:max-w-[896px] md:text-body-l",
            badgeClassName: "mb-4"
          }}
          bottomItems={bottomItems}
        />
        <ExploreSection 
          title="Explore the <br class='hidden md:block' />Transfer Pricing Suite"
          wrapperClassName="pt-[80px] md:pt-[200px] xl:pt-[112px]"
          cards={[ 
            {
              title: "Master File",
              icon: (
                <IconFileText
                  size={iconSize}
                  strokeWidth={iconStrokeWidth}
                  color={iconStrokeColor}
                  className="size-7 xl:size-8"
                />
              ),
              description:
                "OECD-compliant documentation aligned with transfer pricing policies.",
            },
            {
              title: "Local File",
              icon: (
                <IconBuildingBank
                  size={iconSize}
                  strokeWidth={iconStrokeWidth}
                  color={iconStrokeColor}
                  className="size-7 xl:size-8"
                />
              ),
              description: "Jurisdiction-specific reports with data integrity.",
            },
            {
              title: "CbCR",
              icon: (
                <IconWorld
                  size={iconSize}
                  strokeWidth={iconStrokeWidth}
                  color={iconStrokeColor}
                  className="size-7 xl:size-8"
                />
              ),
              description: "Country-by-country filings with data integrity.",
            },
            {
              title: "Operational TP",
              icon: (
                <IconCalculator
                  size={iconSize}
                  strokeWidth={iconStrokeWidth}
                  color={iconStrokeColor}
                  className="size-7 xl:size-8"
                />
              ),
              description:
                "Transaction-level calculations, reconciliations, and true-ups using AI.",
            },
            {
              title: "Benchmarking",
              icon: (
                <IconChartDots3
                  size={iconSize}
                  strokeWidth={iconStrokeWidth}
                  color={iconStrokeColor}
                  className="size-7 xl:size-8"
                />
              ),
              description:
                "Identify arm’s-length comparables using machine learning.",
            },
            {
              title: "Pillar 2 Compliance",
              icon: (
                <IconShieldCheck
                  size={iconSize}
                  strokeWidth={iconStrokeWidth}
                  color={iconStrokeColor}
                  className="size-7 xl:size-8"
                />
              ),
              description:
                "Manage global minimum tax requirements through AI monitoring.",
            },
            {
              title: "Functional Interviews",
              icon: (
                <IconMessage
                  size={iconSize}
                  strokeWidth={iconStrokeWidth}
                  color={iconStrokeColor}
                  className="size-7 xl:size-8"
                />
              ),
              description:
                "AI interview agents to capture insights from stakeholder discussions.",
            },
            {
              title: "Value Chain Analysis",
              icon: (
                <IconGitMerge
                  size={iconSize}
                  strokeWidth={iconStrokeWidth}
                  color={iconStrokeColor}
                  className="size-7 xl:size-8"
                />
              ),
              description:
                "Map and analyze global value chains with AI-powered transparency.",
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
        <TaxIQSection />
        <TrySection headingLevel="h6" />
      </PageWrapper>{" "}
    </>
  );
};

export default TransferPricingPage;
