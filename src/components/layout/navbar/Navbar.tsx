import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavbarWrapper from "./NavbarWrapper";
import SeemasLogo from "@/assets/seemas-logo.svg";
import { cn } from "@/lib/utils";
import NavbarMobile from "./NavbarMobile";
import { DrawerClose } from "@/components/ui/drawer";
import { IconX, IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { LinkWrapper } from "@/components/custom-ui/link-wrapper";
import LoginDropdown from "./elements/login-dropdown";
import { ROUTES } from "@/constants/routes";
import type { NavigationOption } from "@/types";
import { Popover, PopoverTrigger } from "@/components/ui/popover";

// Literal paths to avoid production tree-shaking issues
const NAV_PATHS = {
  PLATFORM_OVERVIEW: "/platform-overview",
  DAMODARAN_AI: "/damodaran-ai",
  ABOUT_US: "/about-us",
} as const;

// Desktop nav link class matching NavigationItem (light variant)
const DESKTOP_NAV_LINK_CLASS =
  "text-zinc-600 hover:bg-white hover:text-zinc-600 data-[state=open]:text-zinc-800 data-[state=open]:bg-white group-[.dark-mode]:text-zinc-300 group-[.dark-mode]:outline-neutral-800 group-[.dark-mode]:hover:bg-neutral-900 group-[.dark-mode]:hover:outline group-[.dark-mode]:data-[state=open]:bg-neutral-900 group-[.dark-mode]:data-[state=open]:outline group-[.dark-mode]:data-[state=open]:text-white [&_svg]:size-4 gap-1 px-3 py-2 rounded-lg bg-transparent";

export const navbarClass = "bg-gray-dark-300 w-full";
export const navbarStyle = { backdropFilter: "blur(12.5px)" };

export const NavbarContent = ({
  isInsideDrawer,
  children,
}: {
  isInsideDrawer?: boolean;
  children?: React.ReactNode;
}) => {
  // Get nav items from config - we'll extract URLs during render to avoid tree-shaking issues
  const navItems = (siteConfig?.navigation?.main as NavigationOption[]) || [];
  
  // Helper to get safe href for a nav item (uses literal paths to avoid production issues)
  const getSafeHref = (item: NavigationOption): string | undefined => {
    // Use label-based mapping first to get literal paths (works even if ROUTES is tree-shaken)
    if (item.label === "Platform Overview") return NAV_PATHS.PLATFORM_OVERVIEW;
    if (item.label === "Ask Damodaran") return NAV_PATHS.DAMODARAN_AI;
    if (item.label === "About Us") return NAV_PATHS.ABOUT_US;
    
    // For items with href property, use it if it's a valid string
    if ("href" in item && item.href && typeof item.href === "string") {
      return item.href;
    }
    
    return undefined;
  };

  return (
    <div className="max-w-[1280px] mx-auto py-4 px-4 w-full md:px-8 xl:px-0">
      <div className="flex justify-between items-center w-full">
        <div className="text-zinc-900 group-[.dark-mode]:text-white">
          <Link href={"/"}>
            <SeemasLogo fill="currentColor" width={149} height={24} />
          </Link>
        </div>
        <div className={cn("hidden xl:flex items-center w-fit gap-3")}>
          {navItems.map((item, index) => {
            // Render dropdown items with Popover
            if (item.dropDown) {
              return (
                <Popover key={item.label}>
                  <PopoverTrigger asChild>
                    <Button
                      className={cn(
                        "[&_svg]:size-4 [&[data-state=closed]&_.up]:hidden [&[data-state=open]&_.down]:hidden",
                        DESKTOP_NAV_LINK_CLASS
                      )}
                      size="content"
                      variant="ghost"
                    >
                      {item.label}
                      <IconChevronUp size={16} className="up" />
                      <IconChevronDown size={16} className="down" />
                    </Button>
                  </PopoverTrigger>
                  {item.dropDown}
                </Popover>
              );
            } 
            
            // Render plain link items (no ActiveLinkWrapper to avoid client component issues)
            const href = getSafeHref(item);
            
            if (href) {
              const buttonKey = `nav-item-${index}-${item.label}`;
              
              // About Us needs to be rendered as direct Link (Button wrapper causes React hydration issues)
              // Apply Button ghost variant classes + DESKTOP_NAV_LINK_CLASS to match other nav items exactly
              if (item.label === "About Us") {
                return (
                  <Link
                    key={buttonKey}
                    href={href}
                    className={cn(
                      "inline-flex items-center justify-center gap-1.5 rounded-md text-button whitespace-nowrap transition-all duration-300 box-border disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:shrink-0 bg-white text-zinc-800 hover:bg-zinc-100 focus-visible:bg-white data-[state=active]:bg-white disabled:bg-zinc-200 disabled:text-zinc-500 data-[active=true]:bg-zinc-200 data-[active=true]:text-zinc-900",
                      DESKTOP_NAV_LINK_CLASS
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }
              
              return (
                <Button
                  key={buttonKey}
                  size="content"
                  variant="ghost"
                  className={cn(DESKTOP_NAV_LINK_CLASS)}
                  asChild
                >
                  <Link href={href}>{item.label}</Link>
                </Button>
              );
            }
            
            return null;
          })}
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
