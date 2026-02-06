import { getArticleLink, ISphereArticle } from "@/constants/sphere/sphere";
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import ArticleSnippetPlayIcon from "./article-snippet-play-icon";

const CarouselArticleSnippet = ({
  data,
  className,
  imageWrapperClassName,
}: {
  data: ISphereArticle;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  imageWrapperClassName?: HTMLAttributes<HTMLDivElement>["className"];
}) => {
  return (
    <Link
      className={cn(
        "flex flex-col w-[320px] md:w-[400px] gap-4 group/article",
        className
      )}
      href={getArticleLink(data)}
    >
      <div
        className={cn(
          "w-full relative h-[240px] rounded-xl overflow-hidden border border-zinc-100",
          imageWrapperClassName
        )}
      >
        {data.image ? (
          <>
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
            {data.video && <ArticleSnippetPlayIcon />}
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-zinc-400"
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
      <div className="flex w-full flex-col gap-3">
        <div className="w-full flex justify-between items-center">
          <span className="text-body-s text-blue-primary">{data.type}</span>
          <span className="text-body-s text-zinc-600">
            {formatDate(data.createdAt)}
          </span>
        </div>
        <div className="w-full flex flex-col gap-1">
          <h3 className="text-subtitle-m text-zinc-900 group-hover/article:text-blue-primary transition-colors duration-200">
            {data.title}
          </h3>
          <p className="text-body-s text-zinc-800 w-full line-clamp-2 text-ellipsis">
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
export default CarouselArticleSnippet;
