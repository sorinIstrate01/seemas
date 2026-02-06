import DropItem, { DropItemProps } from "@/components/drop-item/drop-item";
import HeaderItem, {
  HeaderItemProps,
} from "@/components/header-item/header-item";
import { AccordionContent } from "@/components/ui/accordion";
import { DrawerClose } from "@/components/ui/drawer";
import { PopoverClose, PopoverContent } from "@/components/ui/popover";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

const resources: DropItemProps[] = [
  {
    title: "SeemaSphere",
    href: ROUTES.SPHERE,
  },
  {
    title: "FAQ",
    href: ROUTES.FAQ,
  },
  {
    title: "Come Work with Us",
    href: ROUTES.CAREERS,
    className: "justify-between gap-0",
  },
];

const ResourcesDropdown = () => {
  return (
    <PopoverContent
      className={cn(
        "w-[182px] bg-neutral-75 p-1 rounded-xl flex flex-col gap-1 shadow-none border-zinc-100"
      )}
      sideOffset={8}
    >
      {resources.map(item => {
        const { className, ...rest } = item;
        return (
          <PopoverClose asChild key={item.title}>
            <DropItem
              className={cn("opacity-80 hover:opacity-100 px-3", className)}
              textClassName="text-nowrap"
              showArrow
              {...rest}
            />
          </PopoverClose>
        );
      })}
    </PopoverContent>
  );
};

const ResourcesAccordionContent = () => {
  return (
    <AccordionContent className="flex flex-col gap-1 px-4 md:px-8 pb-5">
      {(resources as HeaderItemProps[]).map(item => (
        <DrawerClose asChild key={item.title}>
          <HeaderItem {...item} linkClassName="px-3" />
        </DrawerClose>
      ))}
    </AccordionContent>
  );
};

export { ResourcesAccordionContent, ResourcesDropdown };
