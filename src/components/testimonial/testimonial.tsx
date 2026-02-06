import { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface TestimonialProps {
  text: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
  className?: string;
  textClassName?: string;
}

const Testimonial: FC<TestimonialProps> = ({
  text,
  authorName,
  authorRole,
  authorImage,
  className,
  textClassName,
}) => {
  return (
    <figure
      className={cn("py-[100px] flex flex-col items-center gap-8", className)}
    >
      <blockquote
        className={cn(
          "max-w-[1140px] text-body-xl md:text-body-xxl text-zinc-900 text-center",
          textClassName
        )}
      >
        <p>“{text}”</p>
      </blockquote>

      <figcaption className="flex items-center gap-4">
        <div className="relative size-14 rounded-lg overflow-hidden">
          <Image
            src={authorImage}
            alt={authorName}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-body-l md:text-body-xl text-zinc-700">
            {authorName}
          </span>
          <span className="text-body-s md:text-body-m text-zinc-400">
            {authorRole}
          </span>
        </div>
      </figcaption>
    </figure>
  );
};

export default Testimonial;
