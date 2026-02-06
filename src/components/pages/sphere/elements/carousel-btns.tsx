"use client";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button, ButtonProps } from "@/components/ui/button";
import { HTMLAttributes, RefAttributes } from "react";
import { cn } from "@/lib/utils";
import CarouselWrapper from "@/components/custom-ui/carousel-wrapper";

interface CarouselBtnsBaseProps {
  buttonProps?: ButtonProps & RefAttributes<HTMLButtonElement>;
  carouselItemClassName?: HTMLAttributes<HTMLDivElement>["className"];
}
interface CarouselBtnProps extends CarouselBtnsBaseProps, ButtonProps {}
interface CarouselBtnsProps extends CarouselBtnsBaseProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  btnsList: ButtonProps[];
  defaultValue?: number;
}
const CarouselBtn = ({
  buttonProps = {},
  carouselItemClassName,
}: CarouselBtnProps) => {
  return (
    <CarouselItem className={cn("basis-[fit-content]", carouselItemClassName)}>
      <Button
        // size={"none"}
        {...buttonProps}
      />
    </CarouselItem>
  );
};
const CarouselBtns = ({
  className,
  buttonProps,
  carouselItemClassName,
  btnsList,
  defaultValue,
}: CarouselBtnsProps) => {
  return (
    <CarouselWrapper
      className="w-fit"
      opts={{
        align: "start",
        containScroll: "trimSnaps",
        dragFree: true,
        skipSnaps: true,
      }}
      defaultValue={defaultValue}
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
              ...btn,
            }}
          />
        ))}
      </CarouselContent>
    </CarouselWrapper>
  );
};
export default CarouselBtns;
