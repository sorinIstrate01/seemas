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
import Video from "@/components/custom-ui/video";

import SocialIcons from "../elements/social-icons";
import ArticleContent from "../elements/article-content";
import CreatedBy from "../elements/created-by";
import { IArticleSection } from "@/types/sphere";
const Hero = ({
  data,
  sections,
}: {
  data: ISphereArticle;
  sections: IArticleSection[];
}) => {
  return (
    <SectionWrapper
      className="pt-[124px] md:pt-[124px] xl:pt-[184px] pb-[80px] md:pb-[80px] xl:pb-[80px] relative overflow-hidden bg-neutral-50"
      contentWrapperClassName="flex flex-col gap-6 md:gap-8"
    >
      <div className="absolute h-[406px] md:h-[calc(100%+250px)] xl:h-[1418px] w-[658px] md:w-[1500px] xl:w-full xl:pl-[26px] xl:pr-[86px] bottom-[35px] md:bottom-auto md:top-0 xl:top-[36px] -left-[160px] md:left-1/2 md:-translate-x-[calc(50%+200px)]  xl:translate-x-0 xl:left-0">
        <div className="relative w-full h-full">
          <Image
            src={"/sphere/podcast/bg-lines-md.svg"}
            alt="bg-lines"
            fill
            className="h-full w-full object-contain hidden lg:block xl:hidden"
          />

          <Image
            src={"/sphere/podcast/bg-lines-xl.svg"}
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
      </div>

      {data.video && (
        <div className="w-full relative xl:h-[720px] rounded-xl overflow-hidden group/video border xl:border-3 border-neutral-100 bg-white">
          <Video
            controls
            poster={data.image}
            className="size-full object-cover"
          >
            <source src={data.video} type="video/mp4" />
          </Video>
        </div>
      )}
      <div className="w-full flex flex-col relative">
        <div className="flex flex-col gap-6 w-full relative">
          <h2 className="text-subtitle-xl md:text-h3 xl:text-h2 text-zinc-900 relative">
            {data.title}
          </h2>
          <div className="flex justify-between items-center gap-2 flex-wrap">
            <CreatedBy data={data} />
            <SocialIcons />
          </div>
        </div>{" "}
      </div>
      <ArticleContent data={data} sections={sections} className="relative" />
    </SectionWrapper>
  );
};

export default Hero;
