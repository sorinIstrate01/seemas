import NavigationItem from "@/components/custom-ui/navigation-item";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavbarWrapper from "./NavbarWrapper";
import SeemasLogo from "@/assets/seemas-logo.svg";
import { cn } from "@/lib/utils";
import NavbarMobile from "./NavbarMobile";
import { DrawerClose } from "@/components/ui/drawer";
import { IconX } from "@tabler/icons-react";
import { LinkWrapper } from "@/components/custom-ui/link-wrapper";
import LoginDropdown from "./elements/login-dropdown";
import { ROUTES } from "@/constants/routes";
import type { NavigationOption } from "@/types";
export const navbarClass = "bg-gray-dark-300 w-full";
export const navbarStyle = { backdropFilter: "blur(12.5px)" };

export const NavbarContent = ({
  isInsideDrawer,
  children,
}: {
  isInsideDrawer?: boolean;
  children?: React.ReactNode;
}) => {
  // Ensure "Ask Damodaran" is always present in main navigation on desktop.
  // If it's already in the config, we keep the original order.
  // If it's missing (for any reason in a built bundle), we inject it before "About Us".
  const navItems: NavigationOption[] = (() => {
    const base = siteConfig.navigation.main as NavigationOption[];

    const hasAskDamodaran = base.some(
      (item) => "href" in item && item.href === ROUTES.DAMODARAN_AI
    );
    if (hasAskDamodaran) {
      return base;
    }

    const askItem: NavigationOption = {
      label: "Ask Damodaran",
      href: ROUTES.DAMODARAN_AI,
    };

    const aboutIndex = base.findIndex(
      (item) => item.label === "About Us"
    );

    if (aboutIndex === -1) {
      return [...base, askItem];
    }

    return [
      ...base.slice(0, aboutIndex),
      askItem,
      ...base.slice(aboutIndex),
    ];
  })();

  return (
    <div className="max-w-[1280px] mx-auto py-4 px-4 w-full md:px-8 xl:px-0">
      <div className="flex justify-between items-center w-full">
        <div className="text-zinc-900 group-[.dark-mode]:text-white">
          <Link href={"/"}>
            <SeemasLogo fill="currentColor" width={149} height={24} />
          </Link>
        </div>
        <div className={cn("hidden xl:flex items-center w-fit gap-3")}>
          {navItems.map((item) => (
            <NavigationItem key={item.label} data={item} variant={"light"} />
          ))}
        </div>

        <div className="flex items-center w-fit gap-3">
          <LoginDropdown />

          <Button size={"M"} className="hidden xl:flex" asChild>
            <LinkWrapper href={ROUTES.BOOK_DEMO}>Book a Demo</LinkWrapper>
          </Button>
          {isInsideDrawer ? (
            <DrawerClose asChild>
              <Button
                variant={"layer"}
                size={"M"}
                className={cn("text-zinc-800 group-[.dark-mode]:hidden px-2")}
              >
                <IconX className="size-4" />
              </Button>
            </DrawerClose>
          ) : (
            <NavbarMobile />
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

const Navbar = ({ children }: { children?: React.ReactNode }) => {
  return (
    <NavbarWrapper
      className={`${navbarClass} group fixed top-0 z-50`}
      style={navbarStyle}
    >
      <NavbarContent>{children}</NavbarContent>
    </NavbarWrapper>
  );
};

export default Navbar;
