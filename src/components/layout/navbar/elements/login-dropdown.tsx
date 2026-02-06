import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { external_loginOptions } from "@/config/site";
import { cn } from "@/lib/utils";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

const LoginDropdown = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          size={"M"}
          className={cn(
            "inline-flex text-zinc-800 data-[state=open]:bg-white data-[state=open]:outline-zinc-300",
            `group-[.dark-mode]:bg-zinc-900 group-[.dark-mode]:text-white 
        group-[.dark-mode]:hover:bg-zinc-800 
        group-[.dark-mode]:data-[state=open]:bg-zinc-900
        group-[.dark-mode]:disabled:bg-zinc-200 group-[.dark-mode]:disabled:text-zinc-500 group-[.dark-mode]:outline-none`
          )}
        >
          Log In
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-[280px] md:w-[418px] bg-neutral-75 border border-zinc-100 rounded-2xl shadow-none p-1 gap-1 flex items-center"
        sideOffset={8}
      >
        {external_loginOptions.map(subLink => {
          const Icon = subLink.icon;
          return (
            <PopoverClose asChild key={subLink.label}>
              <Link
                href={subLink.href}
                target="_blank"
                className={cn(
                  "px-2 py-3 flex flex-col gap-2 items-center flex-1 rounded-xl bg-white relative group/login-dropdown",
                  subLink.className
                )}
              >
                {Icon && (
                  <div className="size-9 flex items-center justify-center border border-neutral-75 bg-neutral-50 rounded-lg">
                    <Icon {...subLink.iconProps} className="size-5" />
                  </div>
                )}
                <span className="text-body-s font-medium text-zinc-900">
                  {subLink.label}
                </span>
                <IconExternalLink className="size-3 absolute top-3 right-2 text-zinc-400 group-hover/login-dropdown:text-zinc-800 transition-colors duration-300" />
              </Link>
            </PopoverClose>
          );
        })}
      </PopoverContent>
    </Popover>
  );
};
export default LoginDropdown;
