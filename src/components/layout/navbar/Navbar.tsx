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
import type { StaticRoute } from "@/constants/routes";
import type { NavigationOption } from "@/types";

// Literal path so the nav link is never dropped by production tree-shaking or chunk splitting.
const DAMODARAN_AI_PATH = "/damodaran-ai" as StaticRoute;

export const navbarClass = "bg-gray-dark-300 w-full";
export const navbarStyle = { backdropFilter: "blur(12.5px)" };

export const NavbarContent = ({
  isInsideDrawer,
  children,
}: {
  isInsideDrawer?: boolean;
  children?: React.ReactNode;
}) => {
  // Build nav items ensuring "Ask Damodaran" is always present with correct href.
  // This is independent of config serialization issues in production builds.
  const navItems: NavigationOption[] = (() => {
    // Get base config, handling cases where it might be undefined or malformed
    const configNav = (siteConfig?.navigation?.main as NavigationOption[]) || [];
    
    // Always create the "Ask Damodaran" item with literal path to avoid tree-shaking issues
    const askDamodaranItem: NavigationOption = {
      label: "Ask Damodaran",
      href: DAMODARAN_AI_PATH,
    };

    // Filter out any existing "Ask Damodaran" items (they might have broken hrefs)
    const filteredNav = configNav.filter(
      (item) => item.label !== "Ask Damodaran"
    );

    // Find where to insert "Ask Damodaran" (before "About Us")
    const aboutIndex = filteredNav.findIndex(
      (item) => item.label === "About Us"
    );

    // Insert "Ask Damodaran" before "About Us", or append if "About Us" not found
    if (aboutIndex === -1) {
      return [...filteredNav, askDamodaranItem];
    }

    return [
      ...filteredNav.slice(0, aboutIndex),
      askDamodaranItem,
      ...filteredNav.slice(aboutIndex),
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
