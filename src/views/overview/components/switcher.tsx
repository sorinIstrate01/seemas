"use client";
import { cn } from "@/lib/utils";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

const phrases = [
  "Automate TP",
  "Streamline Compliance",
  "Mitigate Audit Risk",
  "Enhance Visibility",
  "Centralize Information",
  "Strengthen Valuation Support",
];

export default function Switcher({
  className,
  options,
}: {
  className?: string;
  options?: SwiperOptions;
}) {
  const isVertical = options?.direction === "vertical";
  return (
    <Swiper
      modules={[Autoplay]}
      direction="vertical"
      slidesPerView={isVertical ? 5 : "auto"}
      centeredSlides={true}
      loop={true}
      autoplay={{ delay: 1600, disableOnInteraction: false }}
      speed={500}
      allowTouchMove={false}
      simulateTouch={false}
      className={cn(
        "select-none [&_.swiper-slide-active_*]:text-zinc-900 text-subtitle-xl md:text-h4 xl:text-h2 text-zinc-400 relative",
        className
      )}
      spaceBetween={isVertical ? 0 : 24}
      {...options}
    >
      {phrases.map((phrase, index) => (
        <SwiperSlide
          key={index}
          style={{ width: !isVertical ? "auto" : undefined }}
        >
          <div className="h-full flex items-center justify-start whitespace-nowrap">
            {phrase}
          </div>
        </SwiperSlide>
      ))}
      <div
        className="
          absolute inset-0 pointer-events-none z-10"
        style={{
          background: isVertical
            ? "linear-gradient(180deg, #FFF 3%, rgba(255, 255, 255, 0.00) 30.48%, rgba(255, 255, 255, 0.00) 70%, #FFF 97%)"
            : "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.09) 20%, rgba(255, 255, 255, 0.00) 80%, #FFF 100%)",
        }}
      />
    </Swiper>
  );
}
