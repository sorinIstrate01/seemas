import NavigationItem from "@/components/custom-ui/navigation-item";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { TSubLink } from "@/types";
import { AnchorHTMLAttributes } from "react";
interface ActionButton {
  children: string;
  href: string;
  linkProps?: Partial<LinkProps> &
    Partial<AnchorHTMLAttributes<HTMLAnchorElement>>;
}
export interface SubNavProps {
  platform: {
    name: string;
    links: TSubLink[];
    icon?: React.ReactNode;
  };
  actionButtons: {
    mainBtn: ActionButton;
    secondaryBtn?: ActionButton;
  };
}

const SubNav = ({ data }: { data: SubNavProps }) => {
  return (
    <>
      <div className="w-full border-t border-neutral-100 group-[.dark-mode]:border-zinc-800 my-3 hidden xl:block"></div>
      <div className="justify-between items-center w-full hidden xl:flex">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 text-zinc-800 group-[.dark-mode]:text-white">
            {data.platform.icon && data.platform.icon}
            <span className="text-badge">{data.platform.name}</span>
          </div>
          <div className="bg-neutral-100 group-[.dark-mode]:bg-neutral-800 rounded-full w-[1px] h-6"></div>
          <div className="flex items-center gap-2">
            {data.platform.links.map((link) => (
              <NavigationItem key={link.label} data={link} />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {data.actionButtons.secondaryBtn && (
            <Button
              variant={"secondary"}
              size={"M"}
              asChild
              className={cn("text-white hidden group-[.dark-mode]:flex")}
            >
              <Link
                href={data.actionButtons.secondaryBtn.href}
                {...data.actionButtons.secondaryBtn.linkProps}
              >
                {data.actionButtons.secondaryBtn.children}
              </Link>
            </Button>
          )}
          {data.actionButtons.mainBtn && (
            <Button size={"M"} asChild className="hidden xl:flex">
              <Link
                href={data.actionButtons.mainBtn.href}
                {...data.actionButtons.mainBtn.linkProps}
              >
                {data.actionButtons.mainBtn.children}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
export default SubNav;
