import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: HTMLDivElement["className"];
  children: React.ReactNode;
}
const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={cn(
        "p-[5.31px] md:p-2 rounded-xl bg-zinc-50 border border-zinc-100 w-[278px]",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Container;
