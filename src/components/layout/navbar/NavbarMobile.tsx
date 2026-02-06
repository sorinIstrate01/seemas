import { LinkWrapper } from "@/components/custom-ui/link-wrapper";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import DrawerContentWrapper from "./DrawerContentWrapper";
import { navbarClass, NavbarContent, navbarStyle } from "./Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ROUTES } from "@/constants/routes";

const NavbarMobile = () => {
  return (
    <div className="xl:hidden">
      <Drawer direction="top">
        <DrawerTrigger asChild>
          <Button
            variant={"layer"}
            size={"M"}
            className={cn("text-zinc-800 group-[.dark-mode]:hidden px-2 h-fit")}
          >
            <IconMenu2 className="size-4" />
          </Button>
        </DrawerTrigger>
        <DrawerTrigger asChild>
          <Button
            size={"M"}
            variant={"secondary"}
            className="text-white hidden group-[.dark-mode]:flex px-2 h-fit"
          >
            <IconMenu2 className="size-4" />
          </Button>
        </DrawerTrigger>
        <DrawerContentWrapper>
          <DrawerHeader className="hidden">
            <DrawerTitle> </DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>

          <div className={`${navbarClass} bg-neutral-75`} style={navbarStyle}>
            <NavbarContent isInsideDrawer />
          </div>
          <ScrollArea className="overflow-auto flex-1">
            <Accordion type="single" collapsible className="w-full">
              {siteConfig.navigation.main.map((item, i) => {
                if (item.dropDown) {
                  return (
                    <AccordionItem
                      key={i}
                      value={item.label}
                      className="border-neutral-100 bg-neutral-50 text-zinc-800 text-body-m lg:hover:bg-neutral-75"
                    >
                      <AccordionTrigger className="px-4 md:px-8 py-5 text-zinc-800 text-body-m data-[state=open]:pb-3">
                        {item.label}
                      </AccordionTrigger>
                      {item.accordion}
                    </AccordionItem>
                  );
                }

                if (item.href) {
                  return (
                    <DrawerClose asChild key={i}>
                      <Link
                        href={item.href}
                        key={i}
                        className="flex px-4 md:px-8 py-5 w-full border-b border-neutral-100 bg-neutral-50 text-zinc-800 text-body-m lg:hover:bg-neutral-75"
                      >
                        {item.label}
                      </Link>
                    </DrawerClose>
                  );
                }

                return null;
              })}
            </Accordion>
          </ScrollArea>
          <div className="relative w-full flex flex-col px-4 py-6 md:px-8 bg-neutral-75 after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-px after:bg-neutral-100">
            <Button size={"L"} asChild>
              <LinkWrapper href={ROUTES.BOOK_DEMO}>Book a Demo</LinkWrapper>
            </Button>
          </div>
        </DrawerContentWrapper>
      </Drawer>
    </div>
  );
};

export default NavbarMobile;
