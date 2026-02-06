"use client";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button, ButtonProps } from "@/components/ui/button";
import { HTMLAttributes, RefAttributes } from "react";
import { cn } from "@/lib/utils";
import CarouselWrapper from "@/components/custom-ui/carousel-wrapper";
import { TabsTrigger } from "@/components/ui/tabs";
interface Btn {
  label: string;
}
interface CarouselBtnsBaseProps {
  buttonProps?: ButtonProps & RefAttributes<HTMLButtonElement>;
  carouselItemClassName?: HTMLAttributes<HTMLDivElement>["className"];
}
export interface CarouselBtnProps extends CarouselBtnsBaseProps, Btn {}
interface CarouselBtnsProps extends CarouselBtnsBaseProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  btnsList: Btn[];
}
const CarouselBtn = ({
  buttonProps: { onClick, ...buttonProps } = {},
  carouselItemClassName,
  label,
}: CarouselBtnProps) => {
  return (
    <CarouselItem className={cn("basis-[fit-content]", carouselItemClassName)}>
      <Button
        // size={"none"}
        {...buttonProps}
        onClick={() => {
          // @ts-ignore
          onClick?.();
        }}
        asChild
      >
        <TabsTrigger value={label}>{label}</TabsTrigger>
      </Button>
    </CarouselItem>
  );
};
const CarouselBtns = ({
  className,
  buttonProps,
  carouselItemClassName,
  btnsList,
}: CarouselBtnsProps) => {
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
            }}
            label={btn.label}
          />
        ))}
      </CarouselContent>
    </CarouselWrapper>
  );
};
export default CarouselBtns;
