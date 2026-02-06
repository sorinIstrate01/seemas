"use client";

import { cn } from "@/lib/utils";
import React from "react";

const StepItemContext = React.createContext<{ isEven: boolean }>({
  isEven: false,
});

interface StepItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  index: number;
}

const StepItem = ({ children, className, index, ...props }: StepItemProps) => {
  const isEven = (index + 1) % 2 === 0;

  return (
    <StepItemContext.Provider value={{ isEven }}>
      <div
        className={cn(
          "grid grid-cols-1 gap-6 md:gap-8 xl:grid-cols-[616fr_600fr] xl:gap-16",
          { "xl:grid-cols-[600fr_616fr]": isEven },
          className
        )}
        {...props}
      >
        {children}
      </div>
    </StepItemContext.Provider>
  );
};

const useStepItem = () => {
  const context = React.useContext(StepItemContext);
  if (!context) {
    throw new Error("useStepItem must be used within a StepItem");
  }
  return context;
};

const StepItemContent = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex flex-col justify-center", className)} {...props}>
      {children}
    </div>
  );
};

const StepItemImage = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { isEven } = useStepItem();
  return (
    <div
      className={cn(
        "max-h-[600px] h-[calc(63.49vw_+_212.38px)] bg-white rounded-2xl p-3 border border-zinc-100 overflow-hidden relative",
        { "xl:col-start-1 xl:row-start-1": isEven },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { StepItem, StepItemContent, StepItemImage };
