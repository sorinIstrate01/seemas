import Image from "next/image";
import { cn } from "@/lib/utils";
import { IArticleSection } from "@/types/sphere";
import { ISphereArticle } from "@/constants/sphere/sphere";
import { HTMLAttributes } from "react";

const Content = ({
  data,
  sections,
  className,
  bottomElement,
  subContentWrapperClassName,
}: {
  data: ISphereArticle;
  sections: IArticleSection[];
  className?: HTMLAttributes<HTMLDivElement>["className"];
  bottomElement?: React.ReactNode;
  subContentWrapperClassName?: HTMLAttributes<HTMLDivElement>["className"];
}) => {
  return (
    <div className={cn("flex flex-col w-full gap-8 md:gap-14", className)}>
      {sections.map((section, i) => (
        <div
          key={i}
          className="flex flex-col w-full gap-4 md:gap-5"
          id={i.toString()}
        >
          <h2
            className={cn(
              "text-subtitle-l text-zinc-900 whitespace-pre-line",
              !section.title && "hidden"
            )}
          >
            {section.title}
          </h2>
          <p
            className={cn(
              "text-body-m text-zinc-800 whitespace-pre-line",
              !section.content && "hidden"
            )}
          >
            {section.content}
          </p>
          {section.subsections && (
            <div className="flex flex-col w-full gap-3 md:gap-4">
              {section.subsections.map((subsection, i) => (
                <div key={i} className="flex flex-col w-full gap-3 md:gap-4">
                  <h3 className="text-subtitle-s text-zinc-900">
                    {subsection.title}
                  </h3>
                  <p className="text-body-m text-zinc-800 whitespace-pre-line">
                    {subsection.description}
                  </p>
                </div>
              ))}
            </div>
          )}
          {section.bullets && (
            <ul className="flex flex-col w-full gap-2 list-disc pl-6">
              {section.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-body-m text-zinc-800 whitespace-pre-line"
                >
                  <b>{bullet.title}</b> {bullet.description}
                </li>
              ))}
            </ul>
          )}
          {section.subContent && (
            <div className="flex flex-col w-full gap-3 md:gap-4">
              {section.subContent.map((subContent, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col w-full gap-3 md:gap-4",
                    subContentWrapperClassName
                  )}
                >
                  <h3
                    className={cn(
                      "text-subtitle-s text-zinc-900",
                      !subContent.title && "hidden"
                    )}
                  >
                    {subContent.title}
                  </h3>
                  <p
                    className={cn(
                      "text-body-m text-zinc-800 whitespace-pre-line",
                      !subContent.description && "hidden"
                    )}
                  >
                    {subContent.description}
                  </p>
                  {subContent.bullets && (
                    <ul className="flex flex-col w-full gap-2 list-disc pl-6">
                      {subContent.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="text-body-m text-zinc-800 whitespace-pre-line"
                        >
                          <b>{bullet.title}</b> {bullet.description}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          {section.image && (
            <div className="w-full relative h-[290px] xl:h-[456px] rounded-xl overflow-hidden border border-zinc-100">
              <Image
                src={section.image}
                alt={data.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      ))}
      {bottomElement}
    </div>
  );
};
export default Content;
