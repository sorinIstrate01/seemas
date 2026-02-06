import SectionWrapper from "@/components/sections/section-wrapper";
import { SuiteCard, type SuiteCardItem } from "@/components/suites/suite-card";
import LogoValuation from "@/components/icons/logo-valuation";
import Image from "next/image";
import { cn } from "@/lib/utils";


interface ExploreCardItem extends SuiteCardItem {
    categories?: string[];
}

interface ExploreSectionProps {
    title?: string;
    cards?: ExploreCardItem[];
    wrapperClassName?: string;
}

const cardsNumber = (cards: ExploreCardItem[]) => {
    return cards.length;
}

const exploreBackgroundDesktop = "/valuation-suite/explore-background-desktop.png";
const exploreBackgroundTablet = "/valuation-suite/explore-background-tablet.png";
const exploreBackgroundMobile = "/valuation-suite/explore-background-mobile.png";

const ExploreSection = ({ title, cards, wrapperClassName }: ExploreSectionProps) => {
  return (
    <SectionWrapper className={cn("pt-[160px] md:pt-[200px] xl:pt-[224px] bg-neutral-50", wrapperClassName)}>
        <div className="absolute top-0 left-0 w-full h-full z-[1]">
            <Image src={exploreBackgroundDesktop} alt="explore-background-desktop" width={1920} height={1080} className="w-full h-full object-cover hidden xl:block"/>
            <Image src={exploreBackgroundTablet} alt="explore-background-tablet" width={1920} height={1080} className="w-full h-full object-cover hidden md:block xl:hidden"/>
            <Image src={exploreBackgroundMobile} alt="explore-background-mobile" width={1920} height={1080} className="w-full h-full object-cover block md:hidden"/>
        </div>
        <div className="flex flex-col gap-8 md:gap-14 relative z-[2]">
            <div className="flex justify-between items-center">
                <h2 className={cn("text-subtitle-xl text-zinc-900 w-[222px] md:text-h3 md:w-[355px] xl:w-full", cardsNumber(cards || []) > 4 ? "w-[241px] md:w-[513px]" : "")} dangerouslySetInnerHTML={{ __html: title || "" }} />
                <LogoValuation className="w-[97px] md:w-auto"/>
            </div>
            {cardsNumber(cards || []) <= 4 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6">
                    {cards?.map((card, index) => (
                        <SuiteCard key={index} item={card} className="flex flex-col md:h-[252px] xl:w-full xl:h-[200px]" descriptionClassName="text-zinc-600 xl:text-body-s"/>
                    ))}
                </div>
            ) : cardsNumber(cards || []) > 4 ? (
                <div className="grid grid-cols-2 gap-x-3 gap-y-4 md:gap-4 xl:grid-cols-4">
                    {cards?.map((card, index) => (
                        <SuiteCard key={index} item={card} className="flex flex-col p-3 xl:w-full xl:h-full" descriptionClassName="text-zinc-600 xl:text-body-m" iconWrapperClassName="flex-col items-start md:items-center md:flex-row" titleClassName="text-subtitle-xs md:text-subtitle-s"/>
                    ))}
                </div>
            ) : null} 

        </div>
    </SectionWrapper>
  );
};
export default ExploreSection;
