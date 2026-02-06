import HeroHeader from "@/components/headers/hero-header";
import SectionWrapper from "@/components/sections/section-wrapper";
import IcIcon from "@/components/icons/ic-icon";

import Image from "next/image";

const Hero = () => {
  return (
    <SectionWrapper
      className="py-0 md:py-0 xl:md:py-0 h-[600px] md:h-[800px] xl:h-[800px] relative overflow-hidden bg-neutral-50 flex items-center"
      contentWrapperClassName="flex flex-col gap-8 md:gap-14 xl:gap-24"
    >
      {/* <HeroLines className="absolute top-0 left-0" /> */}

      <div className="absolute w-full h-[600px] md:h-[766px] xl:h-[766px] xl:pl-[95px] xl:pr-[58px] top-[61px] md:top-[70px] left-0">
        <div className="relative w-full h-full">
          <Image
            src={"/corporate-tax-compliance-and-filing/bg-lines.svg"}
            alt="bg-lines"
            fill
            className="h-full w-full object-contain md:hidden"
          />
          <Image
            src={"/corporate-tax-compliance-and-filing/bg-lines-md.svg"}
            alt="bg-lines"
            fill
            className="h-full w-full object-contain hidden md:block lg:hidden"
          />
          <Image
            src={"/corporate-tax-compliance-and-filing/bg-lines-lg.svg"}
            alt="bg-lines"
            fill
            className="h-full w-full object-contain hidden lg:block xl:hidden"
          />
          <Image
            src={"/corporate-tax-compliance-and-filing/bg-lines-xl.svg"}
            alt="bg-lines"
            fill
            className="h-full w-full object-contain hidden xl:block"
          />
        </div>
      </div>
      <div
        className="absolute w-[101.582px] h-[434.586px] md:w-[155.545px] md:h-[592.8px] lg:w-[217.176px] lg:h-[642.553px] xl:w-[284.434px] xl:h-[709px] rounded-full -rotate-[10deg] md:-rotate-[23.229deg] lg:-rotate-[28.937deg] xl:-rotate-[33.262deg] top-0 left-[40px] xl:left-[140px] opacity-50 blur-[50px] md:blur-[100px] lg:blur-[130px] xl:blur-[175px]"
        style={{
          background:
            "linear-gradient(168deg, rgba(92, 133, 213, 0.30) 40.23%, rgba(195, 167, 243, 0.30) 100.33%)",
        }}
      />
      <div
        className="absolute w-[101.582px] h-[434.586px] md:w-[155.545px] md:h-[592.8px] lg:w-[217.176px] lg:h-[642.553px] xl:w-[284.434px] xl:h-[709px] rounded-full rotate-[10deg] md:rotate-[23.229deg] lg:rotate-[28.937deg] xl:rotate-[33.262deg] top-0 right-[40px] xl:right-[140px] opacity-50 blur-[50px] md:blur-[100px] lg:blur-[130px] xl:blur-[175px]"
        style={{
          background:
            "linear-gradient(168deg, rgba(195, 167, 243, 0.30) 40.23%, rgba(92, 133, 213, 0.30) 100.33%)",
        }}
      />

      <HeroHeader
        title="Corporate Tax Compliance & Filings"
        description="AI-powered workflows simplifies the complexity of global tax management."
        badge={{
          text: "Streamlined. Automated. Always Audit-Ready.",
          leftIcon: <IcIcon />,
        }}
        titleClassName="xl:max-w-[958px]"
        descriptionClassName="xl:max-w-[958px] p-0 mb-0 xl:md-0"
        className="text-white relative"
      />
    </SectionWrapper>
  );
};

export default Hero;
