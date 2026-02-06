import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const SectionWidthWrapper = ({
  children,
  className,

  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "mx-auto w-full md:max-w-[704px] xl:max-w-[1280px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default SectionWidthWrapper;
