import SectionWrapper from "@/components/sections/section-wrapper";
import SectionHeader from "@/components/sections/section-header";
import Image from "next/image";
const steps = [
  {
    title: "Choose your focus",
    description:
      "Select from tax management, entity valuation, or financial instruments analysis to get started with your specific needs.",
    image: "/overview/steps-section/image.svg",
    imageMd: "/overview/steps-section/image-md.svg",
  },
  {
    title: "AI-Powered Analysis",
    description:
      "Our intelligent platform processes your data and delivers comprehensive insights with advanced algorithms.",
    image: "/overview/steps-section/image-2.svg",
    imageMd: "/overview/steps-section/image-2-md.svg",
  },

  {
    title: "Get Results",
    description:
      "Receive audit-ready reports and actionable insights tailored specifically for your business requirements.",
    image: "/overview/steps-section/image-3.svg",
    imageMd: "/overview/steps-section/image-3-md.svg",
  },
];

const StepsSection = () => {
  return (
    <SectionWrapper
      className="xl:py-[180px] overflow-hidden bg-neutral-50"
      contentWrapperClassName="flex flex-col gap-8 md:gap-14"
    >
      <div
        className="absolute w-[615.886px] md:w-[779.732px] h-[759.286px] lg:w-[1384.598px] md:h-[1430.163px] lg:h-[1816.794px] xl:w-[1384.598px] xl:h-[888px] rounded-full left-1/2 -translate-x-1/2 -bottom-[376.648px] md:-bottom-[801.163px] lg:-bottom-[1187.794px] xl:-bottom-[461.825px] opacity-15 blur-[200px]"
        style={{
          background: "linear-gradient(187deg, #5C85D5 18.69%, #C3A7F3 51.04%)",
        }}
      ></div>
      <div className="absolute h-[792.191px] w-[1733.38px] -bottom-[11px] left-1/2 -translate-x-1/2">
        <div className="relative w-full h-full">
          <Image
            src={"/overview/steps-section/bg-lines.svg"}
            alt="bg-lines"
            fill
            className="h-full w-full object-contain hidden xl:block"
          />
        </div>
      </div>
      <SectionHeader
        title={
          <>
            All your Global Tax & Valuation Needs Solved in{" "}
            <span className="text-blue-primary">Three Easy Steps</span>
          </>
        }
        description={`SeemaS navigates you through effortless, intelligent tax management and valuation.`}
        titleClassName="md:w-[705px] xl:w-[858px] mx-auto"
        className="gap-4 relative"
      />

      <div className="w-full max-w-[420px] mx-auto md:max-w-none md:mx-0 flex flex-col xl:flex-row items-start xl:items-center gap-4 xl:gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl bg-[#fafafa40] border border-white overflow-hidden flex-1 relative"
          >
            <div className="w-full h-[285px] bg-[#ffffff66] border border-white relative">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="md:hidden xl:block"
              />
              <Image
                src={step.imageMd}
                alt={step.title}
                fill
                className="hidden md:block xl:hidden"
              />
            </div>
            <div className="p-6 flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="text-subtitle-l text-primary-light">
                  {index + 1}.
                </span>
                <span className="text-subtitle-l text-zinc-900">
                  {step.title}
                </span>
              </div>
              <p className="text-body-m text-zinc-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
export default StepsSection;
