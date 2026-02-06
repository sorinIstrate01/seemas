import { cn } from "@/lib/utils";
import Container from "./container";
import MetricsBox, { MetricsBoxProps } from "./metrics-box";
import Image, { ImageProps } from "next/image";

export interface ItemMediaProps {
  metricsBoxes?: MetricsBoxProps[];
  children?: React.ReactNode;
  className?: HTMLDivElement["className"];
  singleMediaContainerClassName?: HTMLDivElement["className"];
  singleMediaImageProps: ImageProps;
  singleMediaBlurElementProps?: React.HTMLAttributes<HTMLDivElement>;
}
const ItemMedia = ({
  metricsBoxes,
  children,
  className,
  singleMediaContainerClassName,
  singleMediaImageProps: {
    className: singleMediaImageClassName,
    children: singleMediaImageChildren,
    ...singleMediaImageRest
  },
  singleMediaBlurElementProps,
}: ItemMediaProps) => {
  const {
    className: blurElementClassName,
    style,
    ...rest
  } = singleMediaBlurElementProps || {};
  return (
    <div
      className={cn(
        "flex flex-col h-[292px] md:h-[440px] xl:h-full overflow-hidden py-3 pr-3 gap-2 w-full px-3 xl:pl-0 md:w-[540px]",
        className
      )}
    >
      {!!metricsBoxes && (
        <div className="flex gap-1.5 md:gap-2">
          {" "}
          {metricsBoxes.map(({ className, ...metrics }, i) => (
            <MetricsBox
              key={i}
              {...metrics}
              className={cn(
                metricsBoxes.length === 2
                  ? ""
                  : "min-w-[142.537px] md:min-w-[215px] xl:min-w-[216px]",
                className
              )}
            />
          ))}
        </div>
      )}
      <Container
        className={cn(
          "w-fit flex-1 xl:overflow-y-hidden relative",
          singleMediaContainerClassName
        )}
      >
        <Image
          className={cn("", singleMediaImageClassName)}
          {...singleMediaImageRest}
          alt={singleMediaImageRest.alt ?? ""}
        />
        {singleMediaImageChildren}
        {singleMediaBlurElementProps && (
          <div
            className={cn(
              "absolute left-0 right-0 w-full h-[70px]",
              blurElementClassName
            )}
            style={{
              background: `linear-gradient(180deg, rgba(250, 250, 250, 0.00) 0%, rgba(250, 250, 250, 0.70) 30.1%, #FAFAFA 89.94%)`,
              ...style,
            }}
            {...rest}
          />
        )}
      </Container>

      {children}
    </div>
  );
};
export default ItemMedia;
