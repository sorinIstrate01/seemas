import { StaticRoute } from "@/constants/routes";
import { FC, ReactNode, SVGProps } from "react";

export type TSubLink = {
  label: string;
  description?: string;
  href: StaticRoute;
  disabled?: boolean;
  icon?: any;
};
export type NavigationOption =
  | {
      label: string;
      href?: never;
      dropDown: ReactNode;
      accordion?: ReactNode;
    }
  | {
      label: string;
      href: StaticRoute;
      dropDown?: never;
      accordion?: never;
    };

export type TExternalLoginOption = {
  label: string;
  href: string;
  icon: FC<SVGProps<SVGElement>>;
  iconProps?: SVGProps<SVGElement>;
  className?: string;
};
