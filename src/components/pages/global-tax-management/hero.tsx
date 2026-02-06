import HeroHeader from "@/components/headers/hero-header";
import SectionWrapper from "@/components/sections/section-wrapper";

import { HeroBadgeProps } from "@/components/hero-badge/hero-badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

type HeroProps = {
  title: string;
  description: string;
  heroBadge: HeroBadgeProps;
  cards: {
    title: string;
    icon: React.ElementType;
    titleClassName?: string;
  }[];
};
const Hero = ({ title, description, heroBadge: badge, cards }: HeroProps) => {
  return (
    <SectionWrapper
      className="py-0 md:py-0 xl:md:py-0 h-[700px] md:h-[800px] xl:h-[800px] relative overflow-hidden bg-neutral-50 flex items-center"
      contentWrapperClassName="flex flex-col gap-8 md:gap-14 xl:gap-24"
    >
      <div className="absolute w-full h-[670px] md:h-[766px] xl:h-[766px] xl:pl-[95px] xl:pr-[58px] top-[45px] md:top-[70px] left-0">
        <div className="relative w-full h-full">
          <Image
            src={"/global-tax-management/bg-lines.svg"}
            alt="bg-lines"
            fill
            className="h-full w-full object-contain md:hidden"
          />
          <Image
            src={"/global-tax-management/bg-lines-md.svg"}
            alt="bg-lines"
            fill
            className="h-full w-full object-contain hidden md:block lg:hidden"
          />
          <Image
            src={"/global-tax-management/bg-lines-lg.svg"}
            alt="bg-lines"
            fill
            className="h-full w-full object-contain hidden lg:block xl:hidden"
          />
          <Image
            src={"/global-tax-management/bg-lines-xl.svg"}
            alt="bg-lines"
            fill
            className="h-full w-full object-contain hidden xl:block"
          />
        </div>
      </div>
      <div
        className="absolute w-[80px] h-[649px] md:w-[182px] md:h-[755px] lg:w-[237px] lg:h-[795px] xl:w-[300px] xl:h-[850px] rounded-full -rotate-[10deg] md:-rotate-[21deg] lg:-rotate-[26deg] xl:-rotate-[30deg] top-0 left-[40px] xl:left-[140px] opacity-50 blur-[40px] md:blur-[65px] lg:blur-[100px] xl:blur-[200px]"
        style={{
          background:
            "linear-gradient(168deg, rgba(92, 133, 213, 0.30) 40.23%, rgba(195, 167, 243, 0.30) 100.33%)",
        }}
      />
      <div
        className="absolute w-[80px] h-[649px] md:w-[182px] md:h-[755px] lg:w-[237px] lg:h-[795px] xl:w-[300px] xl:h-[850px] rounded-full rotate-[10deg] md:rotate-[21deg] lg:rotate-[26deg] xl:rotate-[30deg] top-0 right-[40px] xl:right-[140px] opacity-50 blur-[40px] md:blur-[65px] lg:blur-[100px] xl:blur-[200px]"
        style={{
          background:
            "linear-gradient(168deg, rgba(92, 133, 213, 0.30) 40.23%, rgba(195, 167, 243, 0.30) 100.33%)",
        }}
      />

      <HeroHeader
        title={title}
        description={description}
        badge={badge}
        titleClassName="md:text-h3 max-w-[350px] md:max-w-none"
        descriptionClassName="xl:max-w-[896px] md:text-body-l p-0 mb-0 xl:md-0"
        className="text-white relative"
      />
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center gap-3">
        {cards.map((item, i) => (
          <div
            className="flex gap-3 items-center py-2 pl-2 pr-6 bg-[#ffffff33] border-white border rounded-xl w-full md:w-auto"
            style={{
              backdropFilter: "blur(3.5px)",
            }}
            key={i}
          >
            <div className="p-2 rounded-lg bg-white">
              <item.icon
                className="text-zinc-900"
                size={24}
                strokeWidth={1.2}
              />
            </div>
            <span
              className={cn("text-body-s text-zinc-800", item.titleClassName)}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Hero;
