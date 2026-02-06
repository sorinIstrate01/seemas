"use client";
import {
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { HTMLAttributes, RefAttributes } from "react";
import SectionTab from "../tabs/section-tab";
import { ButtonProps } from "../ui/button";
import CarouselWrapper from "./carousel-wrapper";
interface Btn {
  label: string;
}
interface CarouselBtnsBaseProps {
  buttonProps?: ButtonProps & RefAttributes<HTMLButtonElement>;
  carouselItemClassName?: HTMLAttributes<HTMLDivElement>["className"];
}
interface CarouselBtnProps extends CarouselBtnsBaseProps, Btn {}
interface CarouselBtnsProps extends CarouselBtnsBaseProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  btnsList: Btn[];
}
const CarouselBtn = ({
  buttonProps = {},
  carouselItemClassName,
  label,
}: CarouselBtnProps) => {
  return (
    <CarouselItem className={cn("basis-[fit-content]", carouselItemClassName)}>
      <SectionTab {...buttonProps}>{label}</SectionTab>
    </CarouselItem>
  );
};
const CarouselBtns = ({
  className,
  buttonProps,
  carouselItemClassName,
  btnsList,
}: CarouselBtnsProps) => {
  const { api, currentSlide } = useCarousel();
  return (
    <CarouselWrapper
      className="w-fit mx-auto max-w-full"
      opts={{
        align: "start",
        containScroll: "trimSnaps",
        dragFree: true,
        skipSnaps: true,
      }}
    >
      <CarouselContent
        containerClassName="overflow-visible"
        className={cn("items-center", className)}
      >
        {btnsList.map((btn, index) => (
          <CarouselBtn
            key={index}
            carouselItemClassName={cn(carouselItemClassName)}
            buttonProps={{
              ...buttonProps,
              // @ts-ignore
              "data-active": currentSlide === index,
              onClick: () => api?.scrollTo(index),
            }}
            label={btn.label}
          />
        ))}
      </CarouselContent>
    </CarouselWrapper>
  );
};
export default CarouselBtns;
