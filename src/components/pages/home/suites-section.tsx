"use client";

import SectionWrapper from "@/components/sections/section-wrapper";
import SuitesTabs from "@/components/suites/suitesTabs";
import SuiteTemplate from "@/components/suites/suite-template";
import Image from "next/image";
import {
    IconBuilding,
    IconChartLine,
    IconBulb,
    IconSparkles2,
    IconFileText,
    IconChartDots3,
    IconBuildingBank,
    IconShieldCheck,
    IconWorld,
    IconMessage,
    IconCalculator,
    IconGitMerge
} from "@tabler/icons-react";
import SectionHeader from "@/components/sections/section-header";
import { cn } from "@/lib/utils";

const iconSize = 32;
const iconStrokeWidth = 1.8;
const iconStrokeColor = '#266AE9';

const SuitesSection = ({ headingLevel = "h2", sectionWrapperClassName }: { headingLevel?: "h2" | "h3" | "h4" | "h5" | "h6", sectionWrapperClassName?: string }) => {
  return (
    <SectionWrapper className={cn("relative pt-[160px] pb-[80px] md:pt-[200px] md:pb-[100px] xl:pt-[224px] bg-[#FAFAFA]", sectionWrapperClassName)}>
      <div className="absolute top-0 right-0 w-full h-full z-[1]">
        <Image src="/assets/suites-background.jpg" alt="suites-background" width={1920} height={1080}
          className="w-full h-full object-cover hidden md:block"
        />
        <Image src="/assets/Suites-background-mobile.png" alt="suites-background-mobile" width={1920} height={1080}
          className="w-full h-full object-cover block md:hidden"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-[181px] bg-[linear-gradient(0deg,rgba(250,250,250,0)_0%,#FAFAFA_100%)] z-[2]"></div>
      <div className="flex flex-col items-center relative z-[2]">
        <SectionHeader headingLevel={headingLevel} title="SeemaS Suites" description="Purpose-built suites for valuation and transfer pricing workflows across global teams." className="gap-4" />
        <SuitesTabs
          tabs={[
            { title: "Valuation Suite", value: "valuation-suite" },
            { title: "Transfer Pricing Suite", value: "transfer-pricing-suite" },
          ]}
        >
          <SuiteTemplate
            items={[
              {
                title: "Corporate Entities",
                icon: <IconBuilding size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor}/>,
                description:
                  "Uses AI-driven benchmarking and market data to establish defensible, fair market values for reorganizations, capital contributions, and intercompany transfers.",
              },
              {
                title: "Financial Instruments",
                icon: <IconChartLine size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor}/>,
                description:
                  "Employs advanced AI analytics to determine arm’s-length values for loans and structured products.",
              },
              {
                title: "Intangible Assets",
                icon: <IconBulb size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor}/>,
                desktopWidth: 438,
                description:
                  "Leverages an AI-curated database of global license agreements and transaction data to value intellectual property, technology, and brand assets.",
              },
              {
                title: <Image src="/assets/Damodaran-logo.svg" alt="damodaran-logo" width={132} height={26} />,
                icon: <IconSparkles2 size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor}/>,
                description:
                  "Answer complex valuation questions with an AI valuation expert grounded in Professor Damodaran’s trusted methodologies.",
              },
            ]}
            center={
              <Image
                src="/assets/logo-graphic.png"
                alt="logo-graphic"
                className="max-w-[164px] max-h-[80px] md:max-w-[238px] md:max-h-[116px] xl:max-w-[400px] xl:max-h-[195px]"
                width={400}
                height={195}
              />
            }
          />

          <SuiteTemplate
            items={[
              {
                title: "Master File",
                icon: <IconFileText size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor}/>,
                description:
                  "OECD-compliant documentation aligned with transfer pricing policies",
              },
              {
                title: "Benchmarking",
                icon: <IconChartDots3 size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor}/>,
                description:
                  "Identify arm’s-length comparables using machine learning.",
              },
              {
                title: "Local File",
                icon: <IconBuildingBank size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor}/>,
                description:
                  "Jurisdiction-specific reports with data integrity.",
              },
              {
                title: "Pillar 2 Compliance",
                icon: <IconShieldCheck size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor}/>,
                description:
                  "Manage global minimum tax requirements through AI monitoring.",
              },
              {
                title: "CbCR",
                icon: <IconWorld size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor}/>,
                description:
                  "Country-by-country filings with data integrity.",
              },
              {
                title: "Functional Interviews",
                icon: <IconMessage size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor}/>,
                description:
                  "AI interview agents to capture insights from stakeholder discussions.",
              },
              {
                title: "Operational TP",
                icon: <IconCalculator size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor}/>,
                description:
                  "Transaction-level calculations, reconciliations, and true-ups using AI.",
              },
              {
                title: "Value Chain Analysis",
                icon: <IconGitMerge size={iconSize} strokeWidth={iconStrokeWidth} color={iconStrokeColor}/>,
                description:
                  "Map and analyze global value chains with AI-powered transparency.",
              },
            ]}
            center={
              <Image
              src="/assets/logo-graphic.png"
              alt="logo-graphic"
              className="max-w-[164px] max-h-[80px] md:max-w-[238px] md:max-h-[116px] xl:max-w-[400px] xl:max-h-[195px]"
              width={400}
              height={195}
              />
            }
          />
        </SuitesTabs>
      </div>
    </SectionWrapper>
  );
};
export default SuitesSection;
