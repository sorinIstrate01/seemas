import Image from "next/image";
import HeroHeader from "@/components/headers/hero-header";
import IcIcon from "@/components/icons/ic-icon";
import SectionWrapper from "@/components/sections/section-wrapper";
import LeafShapeIcon from "@/assets/leaf-shape.svg";
import { ROUTES } from "@/constants/routes";

const Hero = () => {
  return (
    <SectionWrapper
      className="pt-[158px] pb-0 h-[1160px] relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #030303 0%, #172A50 84.06%)",
        // background: "black",
      }}
    >
      <HeroHeader
        title="Untangling Corporate Tax Compliance"
        description="Built by world-renowned experts and powered by AI, SeemaS simplifies the most complex areas of international tax, transfer pricing, and valuation."
        badge={{
          text: "Modern Transfer Pricing for Global Teams",
          leftIcon: <IcIcon />,
          className: "text-white",
        }}
        titleClassName="w-[926px] text-white"
        descriptionClassName="w-[788px] text-zinc-100"
        className="text-white"
        buttonConfig={[
          {
            children: "Contact Sales",
            variant: "primary",
            size: "L",
            href: ROUTES.BOOK_DEMO,
          },
          {
            children: "Watch Video",
            variant: "outline",
            size: "L",
            className: "text-white",
          },
        ]}
      />

      <Image
        src="/assets/globe.svg"
        alt="hero-bg"
        width={1179.14}
        height={1131}
        className="absolute bottom-[-580px] right-1/2 translate-x-1/2"
      />
      <div
        className="absolute w-full bottom-0 left-0 h-[385px]"
        style={{
          background:
            "linear-gradient(0deg, #030303 0%, rgba(3, 3, 3, 0.00) 100%)",
        }}
      ></div>
      <div className="absolute flex justify-between left-[-162px] bottom-[-128px] right-[-162px] h-[694px]">
        <LeafShapeIcon
          className="rotate-[-174.513deg] w-[512px] h-[502px] opacity-40"
          fill="none"
          style={{
            filter: "blur(200px)",
            background:
              "linear-gradient(167deg, #5C85D5 46.15%, #C3A7F3 115.1%)",
          }}
        />
        <LeafShapeIcon
          className="w-[512px] h-[502px] opacity-40"
          fill="none"
          style={{
            filter: "blur(200px)",
            background:
              "linear-gradient(167deg, #5C85D5 46.15%, #C3A7F3 115.1%)",
          }}
        />
      </div>
    </SectionWrapper>
  );
};

export default Hero;
