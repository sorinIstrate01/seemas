import SectionWrapper from "@/components/sections/section-wrapper";
import { IconChartBar, IconSettings2, IconUsers } from "@tabler/icons-react";
import Image from "next/image";
const items = [
  {
    icon: IconSettings2,
    content: "Creative thinkers who love solving complex problems.",
  },
  {
    icon: IconUsers,
    content: "People who thrive in collaborative, fast-moving environments.",
  },
  {
    icon: IconChartBar,
    content: "A passion for innovation, accuracy, and client success.",
  },
];
const Section2 = () => {
  return (
    <SectionWrapper
      contentWrapperClassName="flex flex-col gap-10 md:gap-14 xl:gap-24 lg:max-w-[740px] xl:max-w-[1080px]"
      className="xl:pt-[64px] xl:pb-[180px] overflow-hidden"
    >
      <div
        className="absolute w-[615.886px] md:w-[779.732px] h-[759.286px] lg:w-[1384.598px] md:h-[1430.163px] lg:h-[1816.794px] xl:w-[1384.598px] xl:h-[888px] rounded-full left-1/2 -translate-x-1/2 -bottom-[376.648px] md:-bottom-[801.163px] lg:-bottom-[1187.794px] xl:-bottom-[461.825px] opacity-15 blur-[200px]"
        style={{
          background: "linear-gradient(187deg, #5C85D5 18.69%, #C3A7F3 51.04%)",
        }}
      ></div>
      <div className="flex flex-col xl:flex-row xl:justify-between lg:max-w-[704px] lg:mx-auto xl:mx-0 xl:max-w-none gap-5 md:gap-4 relative">
        <h4 className="text-subtitle-xl text-center mx-auto xl:mx-0 xl:text-left md:text-h4 max-w-[362px] md:max-w-none xl:w-[450.461px] text-zinc-900">
          <span className="text-blue-primary">Building the Future</span> of
          Global Tax Management & Valuation Together
        </h4>
        <p className="w-full xl:w-[519.771px] text-body-s md:text-body-m text-zinc-700 text-center xl:text-left">
          We&apos;re always looking for{" "}
          <b>motivated, curious, and talented individuals</b> who want to grow
          with us as we blaze a trail through the future of AI-driven tax tech.
          Whether you&apos;re a talented tax professional, AI engineer, data
          scientist, or software developer and possess nimble, creative
          problem-solving skills, you&apos;ll find room here to stretch and make
          a real impact.
        </p>
      </div>
      <div className="relative w-[358px] mx-auto md:mx-0 md:w-full h-[184px] md:h-[362px] lg:h-[380px] xl:h-[556px]">
        <Image
          src="/about-us/group-photo-1.png"
          alt="group photo"
          width={1216}
          height={628}
          className="rounded-xl w-full h-full object-cover"
          quality={100}
        />
      </div>
      <div className="w-full gap-4 flex flex-col relative">
        <div className="text-zinc-500 text-subtitle-xs text-center w-full">
          What we value:
        </div>
        <div className="flex flex-col md:flex-row gap-3 xl:gap-6 w-full">
          {items.map((item, i) => (
            <div
              key={i}
              className="w-full md:w-auto md:flex-1 gap-3 md:gap-2 xl:gap-3 rounded-xl bg-[#fafafa40] border border-white p-3 pr-6 md:pr-3 flex md:flex-col xl:flex-row"
            >
              <div className="p-2 rounded-lg bg-white w-fit">
                <item.icon size={24} className="size-6 text-zinc-900" />
              </div>
              <p className="text-body-s text-zinc-900">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
export default Section2;
