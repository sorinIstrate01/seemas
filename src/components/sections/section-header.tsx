import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title?: string | React.ReactNode;
  description?: string;
  titleClassName?: HTMLDivElement["className"];
  descriptionClassName?: HTMLDivElement["className"];
  className?: HTMLDivElement["className"];
  variant?: "dark" | "light";
}

const SectionHeader = ({
  headingLevel = "h2",
  title,
  description,
  titleClassName,
  descriptionClassName,
  className,
  variant = "light",
}: SectionHeaderProps) => {
  const HeadingTag = headingLevel;

  return (
    <div className={cn("text-center flex flex-col", className)}>
      <HeadingTag
        className={cn(
          "text-subtitle-xl md:text-h4 xl:text-h3",
          variant === "light" ? "text-zinc-900" : "text-white",
          !title && "hidden",
          titleClassName
        )}
      >
        {title}
      </HeadingTag>
      <p
        className={cn(
          "text-body-s md:text-body-m text-zinc-800 whitespace-pre-line",
          !description && "hidden",
          variant === "light" ? "text-zinc-800" : "text-zinc-200",
          descriptionClassName
        )}
      >
        {description}
      </p>
    </div>
  );
};
export default SectionHeader;
