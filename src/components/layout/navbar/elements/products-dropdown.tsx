import { ROUTES } from "@/constants/routes";
import DropItem, { DropItemProps } from "@/components/drop-item/drop-item";
import { AccordionContent } from "@/components/ui/accordion";
import { DrawerClose } from "@/components/ui/drawer";
import { PopoverClose, PopoverContent } from "@/components/ui/popover";
import {
  IconArrowsExchange,
  IconBuilding,
} from "@tabler/icons-react";
import { EPlatformProduct } from "@/config/platform";

const taxProducts: DropItemProps[] = [
  {
    title: EPlatformProduct.TRANSFER_PRICING,
    subtitle: "Scalable. Secure. Built for Global Tax Teams.",
    href: ROUTES.TRANSFER_PRICING,
    icon: <IconArrowsExchange />,
  },
];

const valuationProducts: DropItemProps[] = [
  {
    title: EPlatformProduct.ENTITY_VALUATION,
    subtitle: "Scalable. Secure. Built for Global Tax Teams.",
    href: ROUTES.VALUATION_SUITE,
    icon: <IconBuilding />,
  },
];

const ProductsDropdown = () => {
  return (
    <PopoverContent
      className="w-full gap-5 p-3 rounded-xl bg-white shadow-none border-none"
      sideOffset={8}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {valuationProducts.map((product) => (
            <PopoverClose asChild key={product.title}>
              <DropItem {...product} className="p-2 gap-3" />
            </PopoverClose>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="">
          {taxProducts.map((product) => (
            <PopoverClose asChild key={product.title}>
              <DropItem {...product} className="p-2 gap-3" />
            </PopoverClose>
          ))}
        </div>
      </div>
    </PopoverContent>
  );
};

const ProductsAccordionContent = () => {
  return (
    <AccordionContent className="flex flex-col gap-3 px-4 md:px-8 md:pb-5">
      <div className="flex flex-col gap-3 p-3 bg-white rounded-xl outline outline-1 outline-zinc-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {taxProducts.map((product) => (
            <DrawerClose asChild key={product.title}>
              <DropItem {...product} className="p-2 gap-3" />
            </DrawerClose>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 p-3 bg-white rounded-xl outline outline-1 outline-zinc-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {valuationProducts.map((product) => (
            <DrawerClose asChild key={product.title}>
              <DropItem {...product} className="p-2 gap-3" />
            </DrawerClose>
          ))}
        </div>
      </div>
    </AccordionContent>
  );
};

export { ProductsAccordionContent, ProductsDropdown };
