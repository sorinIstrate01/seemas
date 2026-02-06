import Content from "@/components/pages/sphere-article/content";
import Hero from "@/components/pages/sphere-article/hero";
import ArticlesCarouselSection from "@/components/pages/sphere/articles-carousel-section";
import CarouselArticleSnippet from "@/components/pages/sphere/elements/carousel-article-snippet";
import { news } from "@/constants/sphere/news";
import { notFound } from "next/navigation";

const CaseLaw = ({ id }: { id: string }) => {
  const article = news.find(article => article.id === id);
  const relatedArticles = news.slice(0, 10);
  const title = "Related Articles";
  if (!article) {
    return notFound();
  }
  return (
    <>
      <Hero data={article} />
      <Content
        data={article}
        sections={[]}
        relatedArticles={
          <div className="hidden xl:flex flex-col gap-8 md:gap-14 xl:gap-[72px] 2xl:-mr-[87px]">
            {relatedArticles.map((article, index) => (
              <CarouselArticleSnippet
                data={article}
                key={index}
                className="md:w-[320px]"
              />
            ))}
          </div>
        }
      />
      <ArticlesCarouselSection
        title={title}
        articles={relatedArticles}
        className="xl:hidden"
      />
    </>
  );
};
export default CaseLaw;
