import SectionWrapper from "@/components/sections/section-wrapper";

import SeemasLogoIcon from "@/assets/seemas-logo.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

export interface QuoteProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImageSrc?: string;
  authorImageAlt?: string;
  authorClassName?: string;
  showLogo?: boolean;
  logo?: ReactNode;
  logoClassName?: string;
  className?: string;
  contentWrapperClassName?: string;
  withSeparator?: boolean;
}

const Quote: FC<QuoteProps> = ({
  quote,
  authorName,
  authorTitle,
  authorImageSrc,
  authorImageAlt,
  authorClassName,
  showLogo = true,
  logo,
  logoClassName,
  className,
  contentWrapperClassName,
  withSeparator = false,
}) => {
const logoIcon = logo ? logo : <SeemasLogoIcon fill="currentColor" className="w-[149px] h-[24px]" />;
  return (
    <SectionWrapper
        className={cn(
        "py-[160px] pb-[240px] md:pb-[200px] md:pt-[100px] xl:py-[224px]",
        className
        )}
        contentWrapperClassName={cn(
        "flex flex-col gap-8 max-w-[1140px]",
        contentWrapperClassName
        )}
    >
        {showLogo && (
        <div className={cn("text-zinc-200 mx-auto", logoClassName)}>
            {logoIcon}
        </div>
        )}
        <p className="text-body-xl md:text-body-xxl text-zinc-900 text-center">
        “{quote}”
        </p>
        {withSeparator && (
            <div className="h-[1px] bg-zinc-200 w-full mx-auto xl:w-[800px]" />
        )}
      <div className="flex items-center gap-4 mx-auto">
        {authorImageSrc && (
          <Image
            src={authorImageSrc}
            alt={authorImageAlt ?? authorName}
            width={56}
            height={56}
            className="size-14 rounded-lg"
          />
        )}
        <div className={cn('flex flex-col', authorClassName)}>
          <p className="text-body-xl text-zinc-700">{authorName}</p>
          <span className="text-body-m text-zinc-400">{authorTitle}</span>
        </div>
      </div>
    </SectionWrapper>
  );
};
export default Quote;
