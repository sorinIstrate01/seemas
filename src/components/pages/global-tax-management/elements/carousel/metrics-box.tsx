import { cn } from "@/lib/utils";
import Container from "./container";

export interface MetricsBoxProps {
  label: string;
  value: string;
  className?: HTMLDivElement["className"];
  subContainerClassName?: HTMLDivElement["className"];
  labelClassName?: HTMLDivElement["className"];
  valueClassName?: HTMLDivElement["className"];
}
const MetricsBox = ({
  label,
  value,
  className,
  subContainerClassName,
  labelClassName,
  valueClassName,
}: MetricsBoxProps) => {
  return (
    <Container
      className={cn(
        "text-gray-800 min-w-[184.667px] h-[76.318px] md:min-w-[277px] md:h-[115px] xl:min-w-[278px] xl:h-[116px] overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "w-full px-3xs py-2 md:px-4 md:py-3 h-full flex flex-col justify-between rounded-3xs bg-white border border-gray-100",
          subContainerClassName
        )}
      >
        <span className={cn("text-caption-s md:text-body-m", labelClassName)}>
          {label}
        </span>
        <h6
          className={cn("text-subtitle-m md:text-subtitle-xl", valueClassName)}
        >
          {value}
        </h6>
      </div>
    </Container>
  );
};
export default MetricsBox;
