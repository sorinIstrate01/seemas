import Link from "next/link";
import { IArticleSection } from "@/types/sphere";
import { cn } from "@/lib/utils";

// TypeScript interfaces for article sections

const InThisArticle = ({ sections }: { sections: IArticleSection[] }) => {
  const atLeastOneSectionHasTitle = sections.some(section => section.title);
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:gap-3 xl:gap-8",
        !atLeastOneSectionHasTitle && "hidden"
      )}
    >
      <span className="text-body-s text-zinc-400">In this article</span>
      <div className="flex flex-col w-full">
        {sections.map((section, i) => {
          if (!section.title) return null;
          return (
            <div key={i} className="flex flex-col w-full">
              <Link
                href={`#${i}`}
                className="text-body-s text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer text-start"
              >
                {section.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default InThisArticle;
