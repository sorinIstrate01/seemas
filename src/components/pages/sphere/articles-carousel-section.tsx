import SectionWrapper from "@/components/sections/section-wrapper";
import CarouselWrapper from "@/components/custom-ui/carousel-wrapper";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  IconArrowNarrowRight,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { ISphereArticle } from "@/constants/sphere/sphere";
import CarouselArticleSnippet from "./elements/carousel-article-snippet";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const ArticlesCarouselSection = ({
  title,
  articles,
  className,
  desktopHorizontal = false,
  children,
  carouselClassName,
}: {
  title: string;
  articles: ISphereArticle[];
  className?: HTMLAttributes<HTMLDivElement>["className"];
  desktopHorizontal?: boolean;
  children?: React.ReactNode;
  carouselClassName?: HTMLAttributes<HTMLDivElement>["className"];
}) => {
  return (
    <SectionWrapper
      contentWrapperClassName="flex flex-col gap-8 md:gap-14"
      className={cn(
        "relative bg-[#FAF9FB] overflow-x-hidden",
        desktopHorizontal && "xl:overflow-x-visible",
        className
      )}
    >
      <CarouselWrapper
        // isAutoPlay
        className={cn(
          "w-full flex flex-col gap-8 md:gap-14",
          desktopHorizontal && "xl:hidden",
          carouselClassName
        )}
      >
        <div className="w-full flex xl:justify-between items-center">
          <h3 className="text-subtitle-xl md:text-h4 zinc-900">{title}</h3>
          <div className="hidden xl:flex gap-2">
            <CarouselPrevious
              variant={"layer"}
              size={"iconL"}
              className="static translate-y-0"
            >
              <IconChevronLeft size={20} />
            </CarouselPrevious>
            <CarouselNext
              variant={"layer"}
              size={"iconL"}
              className="static translate-y-0"
            >
              <IconChevronRight size={20} />
            </CarouselNext>
          </div>
        </div>

        <CarouselContent containerClassName="overflow-visible">
          {articles.map((article, index) => (
            <CarouselItem
              key={index}
              className="w-full basis-[fit-content] px-4 xl:first:ps-0 xl:last:pe-0"
            >
              <CarouselArticleSnippet data={article} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselWrapper>
      {desktopHorizontal && (
        <>
          <Button
            variant={"secondary"}
            size={"L"}
            className="xl:hidden w-fit self-center"
            asChild
          >
            <Link href={ROUTES.SPHERE}>
              See all articles
              <IconArrowNarrowRight />
            </Link>
          </Button>
          <div className="w-full hidden xl:flex flex-col gap-8 md:gap-14">
            <h3 className="text-subtitle-xl md:text-h4 zinc-900">{title}</h3>

            <div className="w-full flex gap-8 relative">
              <div className="flex-1 sticky top-[112px] h-fit">
                <CarouselArticleSnippet
                  data={articles[0]}
                  className="md:w-full"
                  imageWrapperClassName="h-[680px]"
                />
              </div>{" "}
              <div className="flex flex-col w-[408px] gap-6">
                {" "}
                {articles.map((article, index) => (
                  <CarouselArticleSnippet
                    data={article}
                    key={index}
                    className="md:w-full"
                  />
                ))}
                <Button
                  variant={"secondary"}
                  size={"L"}
                  className="w-full"
                  asChild
                >
                  <Link href={ROUTES.SPHERE}>
                    See all articles
                    <IconArrowNarrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
      {children}
    </SectionWrapper>
  );
};
export default ArticlesCarouselSection;
