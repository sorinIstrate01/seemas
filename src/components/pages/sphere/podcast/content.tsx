import SectionWrapper from "@/components/sections/section-wrapper";
import { ISphereArticle } from "@/constants/sphere/sphere";

import { IArticleSection } from "@/types/sphere";
import SocialIcons from "../elements/social-icons";
import ArticleContent from "../elements/article-content";
import CreatedBy from "../elements/created-by";

// TypeScript interfaces for article sections

const Content = ({
  data,
  sections,
}: {
  data: ISphereArticle;
  sections: IArticleSection[];
}) => {
  return (
    <SectionWrapper
      className="md:py-[80px] relative"
      contentWrapperClassName="flex flex-col gap-8 md:gap-14 xl:gap-[72px] xl:justify-start relative"
    >
      <div className="w-full flex flex-col">
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
      <ArticleContent data={data} sections={sections} />
    </SectionWrapper>
  );
};
export default Content;
