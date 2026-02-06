"use client";
import { PopoverContent } from "@/components/ui/popover";

const FiltersPopoverClientWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <PopoverContent
      className="p-0 w-fit shadow-none"
      onOpenAutoFocus={e => e.preventDefault()}
    >
      {children}
    </PopoverContent>
  );
};
export default FiltersPopoverClientWrapper;
