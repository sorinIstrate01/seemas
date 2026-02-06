import HeroHeader from "@/components/headers/hero-header";
import SectionWrapper from "@/components/sections/section-wrapper";

import SquareSkewed from "@/components/icons/square-skewed";
import SquareSkewedCurved from "@/components/icons/square-skewed-curved";
import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import { ROUTES } from "@/constants/routes";

const Hero = () => {
  return (
    <SectionWrapper className="pt-[128px] xl:pt-[156px] pb-0 h-[880px] md:h-[867px] xl:h-[1160px] relative overflow-hidden bg-zinc-50">
      <div className="absolute left-1/2 -translate-x-1/2 w-[clamp(510px,209.77px+76.98vw,801px)] h-[clamp(513px,209.67px+77.78vw,807px)] bottom-[clamp(-457px,57.21px-66.93vw,-204px)] xl:w-[1238px] xl:h-[1246px] xl:bottom-[-695px]">
        <div className="w-full h-full absolute inset-0 z-[3]">
          <Image
            src={"/assets/globe-lines.svg"}
            width={1237.14}
            height={1246.22}
            alt="globe-lines"
            className="size-full object-fill"
          />
        </div>
        <div className="size-[142%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
          <Spline
            scene="https://prod.spline.design/nMb6R20z-ZvTsDg4/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="absolute flex justify-between top-[114px] -right-[80px] md:top-0 md:left-0  md:right-auto w-[539px] h-[436px] md:w-[768px] md:h-[500px] md:items-center xl:h-auto xl:w-auto xl:left-[-392.868px] xl:top-[-200px] xl:right-[-33.826px]">
        <SquareSkewed
          className="hidden md:inline-block md:rotate-[46.181deg] xl:rotate-[45.789deg] opacity-60 w-[395px] h-[282px] md:w-[338px] md:h-[238px] xl:w-[790px] xl:h-[564px]"
          style={{
            filter: "blur(150px)",
          }}
        />

        <SquareSkewedCurved
          className="md:hidden rotate-[169.597deg] md:rotate-[-91.773deg] xl:rotate-[-93.044deg] opacity-60 w-[142px] h-[316px] md:w-[136px] md:h-[192px] xl:w-[264px] xl:h-[636px]"
          style={{
            filter: "blur(150px)",
          }}
        />
        <SquareSkewedCurved
          className="-rotate-[169.597deg] md:rotate-[-91.773deg] xl:rotate-[-93.044deg] opacity-60 w-[142px] h-[316px] md:w-[136px] md:h-[192px] xl:w-[264px] xl:h-[636px]"
          style={{
            filter: "blur(150px)",
          }}
        />
      </div>

      <div className="absolute w-full bottom-0 left-0 h-[181px] bg-[linear-gradient(0deg,#FAFAFA_0%,rgba(250,250,250,0)_100%)] z-[4]" />

      <HeroHeader
        title="AI-Powered Valuation & Transfer Pricing"
        subtitle="Deep domain expertise. Built for global compliance."
        description="SeemaS untangles international tax complexity by streamlining data intake, economic analysis, and documentation in one secure platform - empowering multinational teams to improve speed, accuracy, and audit readiness."
        titleClassName="max-w-[600px] xl:max-w-[872px] text-h4"
        descriptionClassName="md:max-w-[575px] p-0 mb-8 xl:mb-6 xl:text-body-l"
        className="text-white relative"
        buttonConfig={[
          {
            children: "Book a Demo",
            variant: "primary",
            size: "L",
            href: ROUTES.BOOK_DEMO,
          },
        ]}
      />
    </SectionWrapper>
  );
};

export default Hero;
