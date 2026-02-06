import * as React from "react";
import { cn } from "@/lib/utils";
import FeatureCardGradientDecor from "@/components/cards/elements/FeatureCardGradientDecor";
import Image from "next/image";

const logo = "/assets/johnson-controls-logo-1.png"

export interface TestimonialCardProps {
  quote: React.ReactNode;
  authorName: React.ReactNode;
  authorTitle?: React.ReactNode;
  /** Bottom-right corner asset (logo, mark, etc.) */
  cornerAsset?: React.ReactNode;
  className?: string;
}

const TestimonialCard = ({
  quote,
  authorName,
  authorTitle,
  cornerAsset,
  className,
}: TestimonialCardProps) => {
  return (
    <article
      className={cn(
        "flex flex-col rounded-2xl bg-white px-6 py-5 outline outline-1 outline-zinc-100 -outline-offset-1 relative overflow-hidden w-full h-[350px] md:h-[280px] md:w-[626px] xl:w-[628px]",
        className
      )}
    >
      <div className="relative z-10 flex flex-col h-full">
        <blockquote>
          <p className="text-body-xl text-zinc-800">{quote}</p>
        </blockquote>

        <footer className="mt-auto flex items-end justify-between gap-6">
          <div>
            <p className="text-body-m text-zinc-800">{authorName}</p>
            {authorTitle ? <p className="text-caption-m text-zinc-400">{authorTitle}</p> : null}
          </div>

          <div aria-hidden="true">
            {cornerAsset ? (
              cornerAsset
            ) : (
              <div>
                <Image src={logo} alt="logo" width={100} height={100} />
              </div>
            )}
          </div>
        </footer>
      </div>

      <FeatureCardGradientDecor />
    </article>
  );
};

export default TestimonialCard;

