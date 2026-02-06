import { cn } from "@/lib/utils";
import * as React from "react";
import { SVGProps } from "react";
const Rectangle4Xl = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={831}
    height={659}
    viewBox="0 0 831 659"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      "absolute rotate-[-75.31deg] blur-[200px] hidden xl:block",
      className
    )}
    {...props}
  >
    <path
      opacity={0.1}
      d="M0.686035 555.455C333.686 421.455 618.686 0.560547 618.686 0.560547C618.686 0.560547 771.065 129.405 830.065 167.405C648.942 218.905 585.905 497.978 436.285 657.477C346.001 670.279 89.186 562.955 0.686035 555.455Z"
      fill="url(#paint0_linear_5041_62677)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_5041_62677"
        x1={1158.15}
        y1={128.495}
        x2={1235.42}
        y2={593.905}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5C85D5" />
        <stop offset={1} stopColor="#C3A7F3" />
      </linearGradient>
    </defs>
  </svg>
);
export default Rectangle4Xl;
