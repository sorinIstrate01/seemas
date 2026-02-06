import Content from "@/components/pages/sphere-article/content";
import Hero from "@/components/pages/sphere-article/hero";
import ArticlesCarouselSection from "@/components/pages/sphere/articles-carousel-section";
import { caseLaws } from "@/constants/sphere/case-laws";
import { IconEdit } from "@tabler/icons-react";
import { notFound } from "next/navigation";

const CaseLaw = ({ id }: { id: string }) => {
  const article = caseLaws.find(article => article.id === id);
  if (!article) {
    return notFound();
  }
  return (
    <>
      <Hero data={article} />
      <Content
        data={article}
        sections={[]}
        bottomElement={
          <div className="w-full max-w-[720px] p-4 flex flex-col gap-3 rounded-xl border border-neutral-100 bg-neutral-50">
            <div className="flex gap-2 items-center">
              <IconEdit size={20} className="text-gray-800" />
              <span className="text-subtitle-xs text-zinc-800">
                Editorial Note:
              </span>
            </div>
            <p className="italic text-zinc-600">
              Official judgments are always best linked to directly from court
              or sovereign government sites (PDFs or HTML), or through leading
              law firm/academic sources with appropriate commentary and official
              citations. Cases without direct links either are not fully
              published due to confidentiality or are referred to trusted legal
              commentaries.
            </p>
          </div>
        }
      />
      <ArticlesCarouselSection
        title="Related Articles"
        articles={caseLaws.slice(0, 10)}
      />
    </>
  );
};
export default CaseLaw;
