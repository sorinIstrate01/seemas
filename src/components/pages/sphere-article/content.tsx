import SectionWrapper from "@/components/sections/section-wrapper";
import { ISphereArticle } from "@/constants/sphere/sphere";

import { IArticleSection } from "@/types/sphere";
import SocialIcons from "../sphere/elements/social-icons";
import InThisArticle from "../sphere/elements/in-this-article";
import ArticleContent from "../sphere/elements/article-content";
import ArticleSource from "../sphere/elements/article-source";
import MdContent from "../sphere/elements/md-content";
import { cn } from "@/lib/utils";

// TypeScript interfaces for article sections

const Content = ({
  data,
  sections,
  bottomElement,
  relatedArticles,
}: {
  data: ISphereArticle;
  sections: IArticleSection[];
  bottomElement?: React.ReactNode;
  relatedArticles?: React.ReactNode;
}) => {
  return (
    <SectionWrapper
      className="md:py-[80px] relative"
      contentWrapperClassName={cn("flex", relatedArticles && "xl:gap-[67px]")}
    >
      <div
        className={cn(
          "flex flex-col gap-8 md:gap-14 xl:gap-[72px] w-full",
          relatedArticles && "xl:flex-1 xl:sticky xl:top-[80px] xl:h-fit"
        )}
      >
        <div className="flex flex-col xl:flex-row gap-8 md:gap-14 xl:gap-[72px] xl:justify-start relative">
          <div
            className={cn(
              "w-full xl:w-[220px] xl:min-w-[220px] flex flex-col md:flex-row-reverse md:justify-between xl:justify-start xl:flex-col gap-4 md:gap-8 xl:sticky md:top-[80px] pb-8 md:pb-0 xl:top-[112px] h-fit",
              relatedArticles && "xl:static"
            )}
          >
            <SocialIcons />
            {!data.hideInThisArticle && <InThisArticle sections={sections} />}
          </div>
          {/* <div className="w-full flex flex-col gap-8 md:gap-14 xl:gap-[72px]"> */}
          {data.md ? (
            // <></>
            <MdContent md={data.md} />
          ) : (
            // <MdContent md={data.md} />
            <ArticleContent
              data={data}
              sections={sections}
              className="xl:max-w-[720px]"
              subContentWrapperClassName="gap-2 md:gap-2"
            />
          )}
        </div>
        <div className="flex flex-column gap-8 md:gap-14 xl:gap-[72px] w-full">
          <div className="xl:w-[220px] xl:min-w-[220px] hidden xl:block" />
          <div className="flex flex-col gap-8 md:gap-14 xl:gap-[72px] xl:flex-1">
            <ArticleSource data={data.source} />
            {bottomElement}
          </div>
        </div>
      </div>
      {relatedArticles}
    </SectionWrapper>
  );
};
export default Content;
