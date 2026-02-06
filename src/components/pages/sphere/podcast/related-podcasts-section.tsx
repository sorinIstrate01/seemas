import { ISphereArticle } from "@/constants/sphere/sphere";
import { HTMLAttributes } from "react";

import ArticlesCarouselSection from "../articles-carousel-section";
import ArticleSnippet from "../elements/article-snippet";

const RelatedPodcastsSection = ({
  title = "Related Podcasts",
  articles,
  className,
}: {
  title?: string;
  articles: ISphereArticle[];
  className?: HTMLAttributes<HTMLDivElement>["className"];
}) => {
  return (
    <ArticlesCarouselSection
      title={title}
      articles={articles}
      className={className}
      carouselClassName="md:hidden"
    >
      <div className="w-full hidden md:flex flex-col gap-8 md:gap-14">
        <h3 className="text-subtitle-xl md:text-h4 zinc-900">{title}</h3>

        <div className="flex flex-col full gap-6">
          {" "}
          {articles.map((article, index) => (
            <ArticleSnippet data={article} key={index} />
          ))}
        </div>
      </div>
    </ArticlesCarouselSection>
  );
};
export default RelatedPodcastsSection;
