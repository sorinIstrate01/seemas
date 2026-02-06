import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const PageWrapper = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("flex flex-col flex-1 overflow-x-hidden w-full", className)}
      {...props}
    >
      {children}
    </div>
  );
};
export default PageWrapper;
