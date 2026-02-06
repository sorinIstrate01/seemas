import CarouselBtns from "@/components/custom-ui/carousel-btns";
import CarouselWrapper from "@/components/custom-ui/carousel-wrapper";
import SectionHeader from "@/components/sections/section-header";
import SectionWrapper from "@/components/sections/section-wrapper";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";

import ItemMedia from "@/components/pages/home/elements/carousel/item-media";
import { IconBuilding, IconChartLine } from "@tabler/icons-react";
import Slide, { SlideProps } from "./components/slide/Slide";
import { ROUTES } from "@/constants/routes";
import PatentIcon from "@/components/icons/patent-icon";
import { EPlatformProduct } from "@/config/platform";

const btnsList = [
  { label: "Entity Valuation" },
  { label: "Intangible Assets" },
  { label: "Financial Products" },
];
const carouselItems: SlideProps[] = [
  {
    icon: <IconBuilding />,
    title: EPlatformProduct.ENTITY_VALUATION,
    description: [
      "SeemaS simplifies the valuation of businesses — from standalone private companies to subsidiaries of public companies. AI-powered models and real-time data replace manual processes, delivering fast, accurate, and defensible results. You can quickly obtain the value of the entity, along with filing-ready documentation describing the analysis and supporting the conclusion.",
      "SeemaS’s customization features facilitate scenario planning by allowing you to instantly see how the value of the business would change under different forecast and benchmarking assumptions.",
    ],
    badges: ["Going Concern", "Liquidation"],
    buttonConfig: {
      href: ROUTES.ENTITY_VALUATION,
      label: "Learn More",
    },
    children: (
      <ItemMedia
        {...{
          className: "h-[252px]",
          singleMediaImageProps: {
            src: "/assets/horizontal-bar-chart.svg",
            alt: "horizontal bar chart",
            width: 701,
            height: 356,
            className:
              "min-w-[466.667px] h-[245.591px] md:min-w-[700px] md:h-[355px]",
          },
          metricsBoxes: [
            {
              label: "Equity Value",
              value: "$180.2M",
            },
            {
              label: "Adjusted EV",
              value: "$225.6M",
            },
          ],
        }}
      />
    ),
  },
  {
    icon: <PatentIcon />,
    title: EPlatformProduct.INTANGIBLE_VALUATION,
    description: [
      "Eliminate complexity from intangible valuation.",
      "SeemaS unifies your financial, operational, and market data in real time, delivering consistent, defensible valuations without the endless spreadsheets and manual modeling.",
    ],
    badges: [
      "Compliance & Financial Reporting",
      "Transaction & Transfer Pricing Valuations",
      "Licensing, Royalty & Commercial",
      "Dispute, Litigation & Early-Stage",
    ],
    buttonConfig: {
      href: ROUTES.INTANGIBLE_VALUATION,
      label: "Learn More",
    },
    children: (
      <ItemMedia
        {...{
          className: "h-[252px]",
          singleMediaImageProps: {
            src: "/assets/intangible-valuation-chart.svg",
            alt: "horizontal bar chart",
            width: 577,
            height: 352,
            className:
              "min-w-[375px] h-[228px] md:min-w-[577px] md:h-[352px] object-left-top object-contain",
          },
          metricsBoxes: [
            {
              label: "Total IP Value",
              value: "$185.7M",
            },
            {
              label: "Patents & Technology",
              value: "$142.3M",
            },
          ],
        }}
      />
    ),
  },
  {
    icon: <IconChartLine />,
    title: EPlatformProduct.FINANCIAL_INSTRUMENTS,
    description: [
      "Using proprietary credit analytics and techniques informed by cutting-edge academic research, SeemaS values financial instruments to support pricing in intra-company transactions.",
      "You can quickly obtain the value of a security, along with filing-ready documentation describing the analysis and supporting the conclusion.",
    ],
    badges: ["Loans", "Preferred Shares", "Derivative Securities"],
    buttonConfig: {
      href: ROUTES.FINANCIAL_INSTRUMENTS,
      label: "Learn More",
    },
    children: (
      <ItemMedia
        {...{
          singleMediaImageProps: {
            src: "/assets/conventional-loan-table.svg",
            alt: "horizontal bar chart",
            width: 1096,
            height: 656,
            className:
              "min-w-[730px] h-[436.17px] md:min-w-[1095px] md:h-[655px] xl:min-w-[1096px] xl:h-[656px]",
          },
          singleMediaContainerClassName:
            "py-3xs px-2 md:py-4 md:px-3 xl:py-4 xl:px-3",
          singleMediaBlurElementProps: {
            className:
              "top-[140px] h-[107px] md:h-[161px] md:top-[211px] xl:top-auto xl:bottom-0",
          },
          metricsBoxes: [
            {
              label: "Loan Value",
              value: "$94.6M",
            },
            {
              label: "Accrued Interest in Loan Value",
              value: "$0.14M",
            },
          ],
        }}
      />
    ),
  },
];

const ValuationsSuiteSection = () => {
  return (
    <SectionWrapper contentWrapperClassName="flex flex-col gap-8 md:gap-14">
      <SectionHeader
        className="gap-4 mx-auto"
        title="Valuation Suite"
        description="AI-driven valuations for entities, assets, and financial instruments—fast, accurate, and audit-ready. Empowering global teams with seamless, intelligent workflows."
        descriptionClassName="max-w-[662px]"
      />
      <CarouselWrapper className="max-w-[1140px] mx-auto flex flex-col gap-5 md:gap-8 xl:gap-14">
        <CarouselBtns
          btnsList={btnsList}
          buttonProps={{ variant: "tab", className: "" }}
          carouselItemClassName="basis-[fit-content]"
        />
        <div className="hidden xl:block absolute bottom-0 left-0 z-10 h-[520px] w-[calc((100vw-100%)/2)] -translate-x-full bg-[linear-gradient(90deg,#FFF_0.87%,rgba(255,255,255,0.00)_100%)] pointer-events-none" />
        <CarouselContent containerClassName="overflow-visible">
          {carouselItems.map((carouselItem, index) => (
            <CarouselItem key={index} className="basis-[fit-content]">
              <Slide
                className="min-h-[740px] md:min-h-[840px] xl:min-h-[520px] xl:max-h-[520px] w-[360px] md:w-[540px] xl:w-full"
                {...carouselItem}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden xl:block absolute bottom-0 right-0 z-10 h-[520px] w-[calc((100vw-100%)/2)] translate-x-full bg-[linear-gradient(270deg,#FFF_0.87%,rgba(255,255,255,0.00)_100%)] pointer-events-none" />
      </CarouselWrapper>
    </SectionWrapper>
  );
};
export default ValuationsSuiteSection;
