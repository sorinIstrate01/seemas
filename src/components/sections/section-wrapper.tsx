import { EClasses } from "@/constants/classes";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import SectionWidthWrapper from "./section-width-wrapper";

export interface SectionWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  contentWrapperClassName?: HTMLDivElement["className"];
  isDark?: boolean;
}

const SectionWrapper = ({
  children,
  className,
  contentWrapperClassName,
  isDark,
  ...props
}: SectionWrapperProps) => {
  return (
    <section
      className={cn(
        "py-[80px] md:py-[100px] xl:py-[112px] px-4 md:px-0 bg-white relative",
        !!isDark && EClasses.SECTION_DARK,
        className
      )}
      {...props}
    >
      <SectionWidthWrapper className={contentWrapperClassName}>
        {children}
      </SectionWidthWrapper>
    </section>
  );
};

export default SectionWrapper;
