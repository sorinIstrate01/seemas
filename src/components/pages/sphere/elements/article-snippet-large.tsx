import { getArticleLink, ISphereArticle } from "@/constants/sphere/sphere";
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import ArticleSnippetPlayIcon from "./article-snippet-play-icon";

const ArticleSnippetLarge = ({
  data,
  className,
  orientation = "horizontal",
}: {
  data: ISphereArticle;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  orientation?: "horizontal" | "vertical";
}) => {
  return (
    <Link
      className={cn(
        "flex flex-col w-full rounded-2xl border-2 border-neutral-100 bg-neutral-50 overflow-hidden group/article",
        data.image ? "h-[420px] md:h-[580px] xl:h-[720px]" : "",
        className
      )}
      href={getArticleLink(data)}
    >
      <div className={cn("flex-1 w-full relative", !data.image && "min-h-[200px]")}>
        {data.image ? (
          <>
            {data.video && <ArticleSnippetPlayIcon />}
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="flex w-full flex-col p-4 md:p-6 xl:px-8 gap-3 md:gap-4">
        <div className="w-full flex justify-between items-center">
          <span className="text-caption-m md:text-body-s text-blue-primary">
            {data.type}
          </span>
          <span className="text-caption-m md:text-body-s text-zinc-600">
            {formatDate(data.createdAt)}
          </span>
        </div>
        <div
          className={cn(
            "w-full flex flex-col xl:flex-row gap-2 xl:gap-14 items-start xl:items-center",
            orientation === "vertical" && "xl:flex-col xl:items-start xl:gap-1"
          )}
        >
          <h3 className="text-subtitle-s md:text-subtitle-xl text-zinc-900 group-hover/article:text-blue-primary transition-colors duration-200">
            {data.title}
          </h3>
          <p className="text-body-s md:text-body-m text-zinc-600 w-full xl:w-[448px] xl:min-w-[448px] line-clamp-3 text-ellipsis">
            {data.description}
          </p>
        </div>
        {/* <div className="flex flex-wrap gap-1">
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
    </Link>
  );
};
export default ArticleSnippetLarge;
