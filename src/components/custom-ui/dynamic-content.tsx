import { cn } from "@/lib/utils";
import React from "react";

type DynamicContentProps = {
  children: React.ReactNode | string[];
  className?: string;
  containerClassName?: string;
};

const paragraphClassName = "text-body-s text-zinc-600 whitespace-pre-line";

export const DynamicContent: React.FC<DynamicContentProps> = ({
  children,
  className,
  containerClassName,
}) => {
  if (Array.isArray(children)) {
    return (
      <div className={cn("flex flex-col gap-3", containerClassName)}>
        {children.map((paragraph, index) => (
          <p key={index} className={cn(paragraphClassName, className)}>
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  if (typeof children === "string") {
    return <p className={cn(paragraphClassName, className)}>{children}</p>;
  }

  return <>{children}</>;
};
