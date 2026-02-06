import { cn } from "@/lib/utils";

interface StepsListProps {
  children: React.ReactNode;
  className?: string;
}

const StepsList = ({ children, className }: StepsListProps) => {
  return (
    <div className={cn("flex flex-col gap-16 xl:gap-14", className)}>
      {children}
    </div>
  );
};

export default StepsList;
