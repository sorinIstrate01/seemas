import SectionWrapper from "@/components/sections/section-wrapper";

import { ISphereArticle } from "@/constants/sphere/sphere";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Image from "next/image";
import CreatedBy from "../sphere/elements/created-by";

const Hero = ({ data }: { data: ISphereArticle }) => {
  return (
    <SectionWrapper
      className="pt-[124px] md:pt-[124px] xl:pt-[184px] pb-[80px] md:pb-[80px] xl:pb-[80px] relative overflow-hidden bg-neutral-50"
      contentWrapperClassName="flex flex-col gap-[72px]"
    >
      <div className="absolute h-[406px] md:h-[1650px] xl:h-[1090px] w-[658px] md:w-[1430px] xl:w-full bottom-[35px] md:bottom-auto md:-top-[330px] xl:top-[110px] -left-[160px] md:left-1/2 md:-translate-x-[calc(50%+232px)] xl:left-0 xl:translate-x-0">
        <div className="relative w-full h-full">
          <Image
            src={"/sphere/article/bg-lines.svg"}
            alt="bg-lines"
            fill
            className="h-full w-full object-contain md:hidden"
          />
          <Image
            src={"/sphere/article/bg-lines-md.svg"}
            alt="bg-lines"
            fill
            className="h-full w-full object-contain hidden md:block xl:hidden"
          />

          <Image
            src={"/sphere/article/bg-lines-xl.svg"}
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
      <div className="flex flex-col gap-6 w-full relative">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/sphere">SeemaSphere</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/sphere?type=${data.type}`}>{data.type}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2 className="text-subtitle-xl md:text-h3 xl:text-h2 text-zinc-900 relative">
          {data.title}
        </h2>
        <div className="flex justify-between items-center gap-2 flex-wrap">
          <CreatedBy data={data} />

          {/* <div className="flex flex-wrap gap-1 relative">
            {data.badges.map(badge => (
              <div
                key={badge}
                className="px-2 py-1.5 rounded-md border border-zinc-100 bg-white text-badge-s text-gray-800"
              >
                {badge}
              </div>
            ))}
          </div> */}
        </div>
      </div>
      {!data.hideImage && (
        <div className="w-full p-4 md:p-6 rounded-2xl border border-neutral-100 bg-white relative">
          <div className="w-full relative h-[182px] md:h-[369px] xl:h-[693px] rounded-xl overflow-hidden border-4 border-neutral-100">
            {data.image ? (
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 flex items-center justify-center">
                <div className="text-neutral-400 text-sm md:text-base">No image available</div>
              </div>
            )}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Hero;
