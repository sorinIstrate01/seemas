import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        `max-w-[704px] px-4 py-20 box-content mx-auto md:px-8 md:py-[100px] xl:py-28 xl:max-w-[1280px]`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
