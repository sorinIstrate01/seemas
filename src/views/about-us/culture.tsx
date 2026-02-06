import SectionWrapper from "@/components/sections/section-wrapper";
import SectionHeader from "@/components/sections/section-header";
import Image from "next/image";
const Culture = () => {
  return (
    <SectionWrapper className="bg-zinc-50 py-[100px]">
      <SectionHeader
        title="Our Culture"
        description="We are a team of thinkers, builders, and problem‑solvers united by a drive to use technology to tackle the most nuanced challenges in global finance."
        headingLevel="h3"
        className="xl:gap-6 mb-14"
        descriptionClassName="xl:text-body-xl md:w-[611px] xl:w-[822px] mx-auto"
      />
      <div className="mb-6">
        <Image
          src="/about-us/group-photo-1.png"
          alt="group photo"
          width={1280}
          height={628}
          className="h-[176px] w-full object-cover rounded-xl border border-4 border-zinc-200 md:h-full"
        />
      </div>
      <div className="flex gap-8 flex-col md:flex-row">
          <Image
            src="/about-us/group-photo-2.png"
            alt="Group Photo 1"
            width={624}
            height={490}
            className="h-[176px] w-full object-cover rounded-xl border border-4 border-zinc-200 md:h-full"
          />
          <Image
            src="/about-us/group-photo-3.png"
            alt="Group Photo 2"
            width={624}
            height={490}
            className="h-[176px] w-full object-cover rounded-xl border border-4 border-zinc-200 md:h-full"
          />
      </div>
      <div className="flex flex-col gap-3 my-8 md:items-center md:gap-0 md:flex-row md:justify-between xl:my-16">
        <p className="text-zinc-800 text-subtitle-m md:text-subtitle-l md:w-[339px] xl:text-subtitle-xl xl:w-[440px]">
          At SeemaS, the rigor behind our products starts with the rigor behind our culture.
        </p>
        <p className="pr-[14px] text-body-s text-zinc-800 md:pr-0 md:w-[344px] xl:w-[622px] xl:text-body-xl">
          We know exceptional work happens when people are trusted, empowered, and set up to thrive. So we invest in our people with the same discipline and long‑term mindset that we bring to our technology—deliberately, strategically, and sustainably.
        </p>
      </div>
        <Image
          src="/about-us/group-photo-4.png"
          alt="Group Photo 3"
          width={1280}
          height={628}
          className="h-[240px] w-full object-cover rounded-xl border border-4 border-zinc-200 md:h-full"
        /> 
    </SectionWrapper>
  );
};
export default Culture;
