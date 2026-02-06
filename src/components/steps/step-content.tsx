import { cn } from "@/lib/utils";
import { IconPoint } from "@tabler/icons-react";
import { FC } from "react";

export interface StepContentProps {
  stepNumber: number;
  title: string;
  description: React.ReactNode;
  itemsList: string[];
  className?: string;
  pointsListClassName?: string;
  showNumber?: boolean;
}

export const StepContent: FC<StepContentProps> = ({
  stepNumber,
  title,
  description,
  itemsList,
  className,
  pointsListClassName,
  showNumber = true,
}) => (
  <div className={cn("flex flex-col justify-center", className)}>
    <div className="relative pb-4 mb-4 md:pb-6 md:mb-6">
      <h4 className="text-zinc-900 text-subtitle-m md:text-subtitle-xl xl:text-h4 mb-1">
        {showNumber && (
          <span className="text-subtitle-s md:text-subtitle-l xl:text-3xl/[120%] font-medium text-zinc-300">
            {stepNumber}.
          </span>
        )}{" "}
        {title}
      </h4>
      <p className="text-body-s text-zinc-500 whitespace-pre-line md:text-body-m">
        {description}
      </p>
      <div className="absolute bottom-0 w-full h-px bg-zinc-100"></div>
    </div>
    <ul
      className={cn(
        "grid grid-cols-1 gap-1 md:grid-cols-2 xl:grid-cols-1 xl:gap-2",
        pointsListClassName
      )}
    >
      {itemsList.map((item, index) => (
        <li key={index} className="inline-flex gap-1 items-start">
          <IconPoint className="text-zinc-400" />
          <span className="text-body-s md:text-body-m text-zinc-600 text-nowrap">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);
