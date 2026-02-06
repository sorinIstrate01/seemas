"use client";
import { Carousel, CarouselProps } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { HTMLAttributes, useMemo } from "react";
import { RefAttributes } from "react";
import Autoplay, { AutoplayOptionsType } from "embla-carousel-autoplay";

const CarouselWrapper = ({
  children,
  className,
  isAutoPlay,
  autoplayOptions,
  opts,
  ...props
}: HTMLAttributes<HTMLDivElement> &
  CarouselProps &
  RefAttributes<HTMLDivElement> & {
    isAutoPlay?: boolean;
    autoplayOptions?: AutoplayOptionsType;
  }) => {
  const carouselAdditionalProps = useMemo(() => {
    if (isAutoPlay) {
      return {
        opts: { loop: true, dragFree: true, ...opts },
        plugins: [Autoplay(autoplayOptions)],
      };
    }
    return { opts };
  }, [isAutoPlay, autoplayOptions, opts]);
  return (
    <Carousel
      className={cn("w-full h-full", className)}
      {...props}
      {...carouselAdditionalProps}
    >
      {children}
    </Carousel>
  );
};
export default CarouselWrapper;
