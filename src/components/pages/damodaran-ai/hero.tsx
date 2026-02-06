import HeroHeader from "@/components/headers/hero-header";
import SectionWrapper from "@/components/sections/section-wrapper";
import { external_links } from "@/config/site";
import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import DamodaranLogo from "@/components/icons/damodaran-logo";
import BlueLine from "@/components/icons/blue-line";

const DamodaranLogoMiddle = "/assets/Damodaran-logo-middle.svg"

const Hero = () => {
  return (
    <SectionWrapper
      className="py-[128px] xl:py-0 h-[812px] md:h-[1080px] relative overflow-hidden bg-neutral-50"
      contentWrapperClassName="flex flex-col xl:justify-center h-full"
    >
      <div className="absolute w-[457.03px] h-[460px] -bottom-[35px] right-1/2 translate-x-1/2 md:max-w-none md:max-h-none md:w-[769px] md:h-[774px] xl:translate-x-0 xl:bottom-auto xl:-right-[97px] 2xl:right-0 xl:top-[153px] 3xl:right-[calc((100vw-1280px)/2-223px)]">
        <Spline scene="https://prod.spline.design/O2W4zZ1L0iP7wLI4/scene.splinecode" />
      </div>
      <div className="absolute bg-[radial-gradient(44.34%_50.9%_at_50%_62.68%,rgba(250,250,250,0.00)_0%,rgba(250,250,250,0.80)_100%)] w-[404px] h-[397px] right-1/2 translate-x-1/2 -bottom-[18px] md:w-[680px] md:h-[667px] md:bottom-0 xl:w-[970px] xl:h-[952px] xl:right-0 xl:bottom-0 xl:translate-x-0 3xl:right-[calc((100vw-1280px)/2-320px)]" />
      <div className="flex justify-between absolute md:bottom-[20px] xl:-bottom-[200px] md:gap-[400px] md:left-1/2 md:-translate-x-1/2 xl:translate-x-0 xl:gap-0 xl:left-0 xl:right-0">
        {[0, 1].map((item) => (
          <div
            key={item}
            className="h-[600px] w-[220px] bg-[linear-gradient(168deg,#5C85D5_40.23%,#C3A7F3_100.33%)] -rotate-[30deg] blur-[200px] opacity-20"
          ></div>
        ))}
      </div>

      <Image
        src="/assets/lines/damodaran-ai-hero-lines-xl.svg"
        alt="Damodaran AI Hero Lines"
        width={1836}
        height={1074}
        className="absolute top-[234px] xl:right-[100px] 3xl:right-[calc((100vw-1622px)/2-46px)] hidden xl:block"
      />

      <Image
        src="/assets/lines/damodaran-ai-hero-lines-md.svg"
        alt="Damodaran AI Hero Lines"
        width={768.47}
        height={929.9}
        className="absolute top-[98px] left-1/2 -translate-x-[63%] hidden md:block xl:hidden"
      />

      <Image
        src="/assets/lines/damodaran-ai-hero-lines-sm.svg"
        alt="Damodaran AI Hero Lines"
        width={531.91}
        height={641}
        className="absolute min-w-[531.91px] h-[641px] top-[98px] left-[10px] md:hidden"
      />
  
      <div className="flex gap-6 items-center mb-[5px] relative z-10 justify-center xl:justify-start">
        <BlueLine className="h-[35px]"/>
        <DamodaranLogo className="hidden xl:block"/>
        <Image src={DamodaranLogoMiddle} alt="Damodaran Logo Middle" width={140} height={28} className="xl:hidden" />
        <BlueLine className="h-[35px]"/>
      </div>

      <HeroHeader
        title="Built on Deep Expertise. Delivered through AI."
        description="Damodaran AI delivers the clarity, depth, and insight of Professor Aswath Damodaran — transforming complex financial concepts into actionable understanding. Learn how to value what matters with the world’s most trusted voice in corporate finance."
        descriptionClassName="md:text-body-l max-w-[600px] md:max-w-none md:w-[630px] xl:w-[725px] px-0 mb-6"
        className="md:w-[704px] xl:w-[892px] xl:mx-0 xl:items-start xl:text-left relative"
        buttonConfig={[
          {
            children: "Start for Free",
            variant: "primary",
            size: "L",
            href: external_links.damodaran_ai,
            linkProps: {
              target: "_blank",
            },
          },
        ]}
      />
    </SectionWrapper>
  );
};

export default Hero;
