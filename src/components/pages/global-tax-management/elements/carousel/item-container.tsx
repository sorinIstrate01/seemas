import { cn } from "@/lib/utils";
interface ItemContainerProps {
  className?: HTMLDivElement["className"];
  children: React.ReactNode;
  index: number;
}
const ItemContainer = ({ className, children }: ItemContainerProps) => {
  return (
    <div
      className={cn(
        "flex flex-col h-[720px] w-[360px] md:h-[840px] xl:h-[520px] xl:flex-row md:w-[540px] xl:w-full overflow-hidden rounded-4 border border-zinc-100 bg-white rounded-2xl relative",
        className
      )}
    >
      {children}
    </div>
  );
};
export default ItemContainer;
