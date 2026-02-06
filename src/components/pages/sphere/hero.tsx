import HeroHeader from "@/components/headers/hero-header";
import SectionWrapper from "@/components/sections/section-wrapper";

import { IconBookmark } from "@tabler/icons-react";
import { ROUTES } from "@/constants/routes";
import HeroForm from "./elements/hero-form";
import { BorderTrail } from "@/components/ui/border-trail";
import PageWrapper from "../page-wrapper";
import Image from "next/image";

const Hero = () => {
  return (
    <PageWrapper className="flex-none">
      <SectionWrapper className="pt-[128px] md:pt-[128px] xl:pt-[168px] pb-[140px] md:pb-[140px] xl:pb-[140px] h-[700px] md:h-[808px] xl:h-[780px] relative overflow-hidden bg-neutral-50">
        <div className="absolute h-[823px] md:h-[832px] xl:h-[733px] w-[691px] md:w-[836px] xl:w-full xl:pl-[73.5px] xl:pr-[195.5px] top-[70px] md:top-[61px] xl:top-[90px] left-1/2 -translate-x-[calc(50%-118px)] md:left-1/2 md:-translate-x-[calc(50%-27px)] xl:left-0 xl:translate-x-0">
          <div className="relative w-full h-full">
            <Image
              src={"/sphere/bg-lines.svg"}
              alt="bg-lines"
              fill
              className="h-full w-full object-contain md:hidden"
            />
            <Image
              src={"/sphere/bg-lines-md.svg"}
              alt="bg-lines"
              fill
              className="h-full w-full object-contain hidden md:block xl:hidden"
            />

            <Image
              src={"/sphere/bg-lines-xl.svg"}
              alt="bg-lines"
              fill
              className="h-full w-full object-contain hidden xl:block"
            />
          </div>
        </div>
        <div
          className="absolute w-[80px] h-[649px] md:w-[182px] md:h-[755px] lg:w-[237px] lg:h-[795px] xl:w-[300px] xl:h-[850px] rounded-full md:-rotate-[21deg] lg:-rotate-[26deg] xl:-rotate-[30deg] top-[126px] -left-[40px] xl:-left-[80px] blur-[200px] opacity-25 md:opacity-20"
          style={{
            background:
              "linear-gradient(168deg, #5C85D5 40.23%, #C3A7F3 100.33%)",
          }}
        />
        <div
          className="absolute w-[80px] h-[649px] md:w-[182px] md:h-[755px] lg:w-[237px] lg:h-[795px] xl:w-[300px] xl:h-[850px] rounded-full md:rotate-[21deg] lg:rotate-[26deg] xl:rotate-[30deg] top-[126px] right-[-40px] xl:-right-[80px] blur-[200px] opacity-25"
          style={{
            background:
              "linear-gradient(168deg, #C3A7F3 40.23%, #5C85D5 100.33%)",
          }}
        />
        <div className="w-full flex flex-col xl:flex-row xl:items-end gap-6 xl:gap-[120px]">
          <HeroHeader
            title={
              <>
                Seema<span className="text-primary">Sphere</span>
              </>
            }
            description="Your gateway to global financial intelligence — featuring key developments in transfer pricing, tax law, and regulatory guidance."
            badge={{
              text: "Explore Financial Stories",
              leftIcon: (
                <IconBookmark size={16} className="text-blue-primary" />
              ),
              href: ROUTES.TRANSFER_PRICING,
              textClassName: "max-w-[290px] md:max-w-full",
              className: "mb-0 md:mb-0",
            }}
            titleClassName="max-w-[600px] xl:max-w-[872px] text-h4 mb-0 md:mb-0"
            descriptionClassName="p-0 mb-0 md:mb-0 text-left"
            className="text-white relative items-start gap-4"
          />
          <div className="w-full xl:w-[424px] xl:min-w-[424px] h-fit p-4 pt-3 flex flex-col gap-2 rounded-xl border border-[#F7F7F7] bg-white relative">
            <HeroForm />
            <BorderTrail
              style={{
                filter: "blur(10px)",
              }}
              size={40}
            />
          </div>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Hero;
