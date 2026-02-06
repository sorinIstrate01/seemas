import SectionWrapper from "@/components/sections/section-wrapper";
import CarouselWrapper from "@/components/custom-ui/carousel-wrapper";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { cn } from "@/lib/utils";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const carouselItems = [
  {
    title: "Anju Singh",
    description: `Anju Singh is Head of U.S. Corporate Tax at a leading semiconductor company, with 25 years of tax consulting experience at PwC, Deloitte, EY, and RSM. She specializes in helping tax departments implement global tax strategies and unlock value through process and technology.\n 
Her work spans financial and tax operations, risk management, and business growth. With a rare blend of accounting, tax, and tech expertise, Anju brings deep experience with systems like S/4HANA, Oracle R12, NetSuite, D365, OneSource, Sabrix, Alteryx, and more.`,
    badges: [
      "Chief Tax Officer",
      "Global Tax leader",
      "Big4/Inhouse specialist",
    ],
    image: "/assets/avatars/anju-singh.png",
  },
  {
    title: "Atulya Sarin, Ph. D.",
    description: `Dr. Atulya Sarin is a recognized expert in global transfer pricing and tax valuation. He has advised the IRS, state, and international tax authorities, and provided expert analyses for leading multinational companies across diverse industries. \n
His work spans the valuation of private companies, subsidiaries, securities, and intangible assets, as well as the economic evaluation of corporate structures and transactions. Dr. Sarin has played a key role in resolving numerous tax cases both at trial and at the IRS appeals level.`,
    badges: ["Chief Executive Officer", "Expert Witness", "Professor at SCU"],
    image: "/assets/avatars/atulya-sarin.png",
  },
];

const Section3 = () => {
  return (
    <SectionWrapper
      contentWrapperClassName="flex flex-col gap-8 md:gap-14"
      className="relative"
    >
      <CarouselWrapper
        // isAutoPlay
        className="w-full hidden xl:flex flex-col gap-8 md:gap-14"
      >
        <div className="w-full flex justify-center xl:justify-between items-center">
          <h3 className="text-h3 zinc-900">Meet our Tax Experts</h3>
          <div className="hidden xl:flex gap-2">
            <CarouselPrevious
              variant={"layer"}
              size={"iconL"}
              className="static translate-y-0"
            >
              <IconChevronLeft size={20} />
            </CarouselPrevious>
            <CarouselNext
              variant={"layer"}
              size={"iconL"}
              className="static translate-y-0"
            >
              <IconChevronRight size={20} />
            </CarouselNext>
          </div>
        </div>
        <div
          className="hidden xl:block absolute -bottom-[25px] left-0 z-10 h-[460px] w-[calc((100vw-1280px)/2)] -translate-x-[calc(100%)] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
          }}
        />
        <CarouselContent containerClassName="overflow-visible">
          {carouselItems.map((carouselItem, index) => (
            <CarouselItem
              key={index}
              className="w-full basis-[fit-content] px-4 xl:basis-[fit-content] xl:first:ps-0 xl:last:pe-0"
            >
              <div
                className={cn(
                  "flex flex-col xl:flex-row overflow-hidden border border-zinc-100 bg-white rounded-2xl relative"
                )}
              >
                <div className="py-8 pl-8 pr-14 flex flex-col w-[602px] gap-6">
                  <span className="text-subtitle-xl text-zinc-900">
                    {carouselItem.title}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {carouselItem.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="text-body-s py-1 px-2 rounded-md border border-neutral-100 bg-neutral-50 text-zinc-800 font-medium text-xs leading-4"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <p className="text-zinc-600 text-body-s whitespace-pre-line">
                    {carouselItem.description}
                  </p>
                </div>
                <div className="p-8">
                  <div className="p-8 rounded-xl relative">
                    <Image
                      src={carouselItem.image}
                      alt={carouselItem.title}
                      width={268}
                      height={282}
                      className="xl:h-[268px] xl:w-[282px] rounded-xl border border-zinc-100"
                    />
                    <Image
                      src={"/global-tax-management/border-partial.svg"}
                      alt="border-partial"
                      fill
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className="hidden xl:block absolute -bottom-[25px] right-0 z-10 h-[460px] w-[calc((100vw-1280px)/2)] translate-x-[calc(100%)] pointer-events-none"
          style={{
            background:
              "linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
          }}
        />
      </CarouselWrapper>
      <div
        // isAutoPlay
        className="w-full flex xl:hidden flex-col gap-8 md:gap-14"
      >
        <div className="w-full flex justify-center xl:justify-between items-center">
          <h3 className="text-subtitle-xl md:text-h4 zinc-900">
            Meet our Tax Experts
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {carouselItems.map((carouselItem, index) => (
            <div
              className={cn(
                "flex flex-col overflow-hidden border border-zinc-100 bg-white rounded-2xl relative p-6"
              )}
              key={index}
            >
              <div className="flex flex-col md:flex-row w-full md:gap-6 md:pb-4 md:border-b border-zinc-100">
                <div className="p-4 rounded-xl relative">
                  <Image
                    src={carouselItem.image}
                    alt={carouselItem.title}
                    width={268}
                    height={282}
                    className="h-[262px] w-[262px] md:h-[138px] md:w-[138px] rounded-xl border border-zinc-100"
                  />
                  <Image
                    src={"/global-tax-management/border-partial.svg"}
                    alt="border-partial"
                    fill
                  />
                </div>
                <div className="flex flex-col flex-1 gap-4 pt-4">
                  <span className="text-subtitle-xl text-zinc-900">
                    {carouselItem.title}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {carouselItem.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="text-body-s py-1 px-2 rounded-md border border-neutral-100 bg-neutral-50 text-zinc-600 font-medium text-xs leading-4"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-zinc-600 text-body-s whitespace-pre-line pt-4">
                {carouselItem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
export default Section3;
