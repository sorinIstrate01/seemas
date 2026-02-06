import SectionWrapper from "@/components/sections/section-wrapper";
import PlatformBackground from "./components/platform-background";

import PlatformCards, { PlatformCardsProps } from "./components/platform-cards";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import SectionHeader from "@/components/sections/section-header";
import { cn } from "@/lib/utils";

export interface SectionPlatformProps {
    cards?: PlatformCardsProps["cards"];
    platformCardsClassName?: string;
    platformBackgroundClassName?: string;
    splineClassName?: string;
}

const SectionPlatform = ({ cards, platformCardsClassName, platformBackgroundClassName, splineClassName }: SectionPlatformProps) => {
  return (
    <SectionWrapper>
        <div className="relative bg-[#FAFAFA] rounded-2xl overflow-hidden">
            <div className={cn("absolute inset-0 bg-[linear-gradient(0deg,rgba(250,250,250,0.85)_0%,#FAFAFA_80.45%)] z-[2]", platformBackgroundClassName)}>
                <PlatformBackground platformBackgroundClassName={platformBackgroundClassName} splineClassName={splineClassName} />      
            </div>
            <div className={cn("flex flex-col items-center relative z-[4] px-[25px] py-16 xl:px-20", platformCardsClassName)}>
                <SectionHeader 
                    headingLevel="h3" 
                    title="AI-Powered, End-to-End Solution" 
                    description="SeemaS supports the full tax and valuation lifecycle - from data ingestion and analysis to reporting and review - combining AI automation with expert oversight at every stage."
                    descriptionClassName="xl:max-w-[728px] text-center"
                    className="gap-4" />
                <PlatformCards cards={cards ?? []} className="my-8 md:my-14"/>
                <Button variant="secondary" size="L">
                    <Link href={ROUTES.PLATFORM_OVERVIEW}>Explore Platform</Link>
                </Button>
            </div>
        </div>
    </SectionWrapper>
  );
};
export default SectionPlatform;
