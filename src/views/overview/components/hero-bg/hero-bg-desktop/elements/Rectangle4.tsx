import { cn } from "@/lib/utils";
import * as React from "react";
import { SVGProps } from "react";
const Rectangle4 = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={831}
    height={659}
    viewBox="0 0 831 659"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      "absolute top-[-58.439px] left-[-270.195px] rotate-[-75.31deg] blur-[200px]",
      className
    )}
    {...props}
  >
    <path
      opacity={0.3}
      d="M0.686523 555.455C333.687 421.455 618.687 0.561035 618.687 0.561035C618.687 0.561035 771.066 129.406 830.066 167.406C648.942 218.906 585.906 497.978 436.285 657.478C346.001 670.279 89.1865 562.955 0.686523 555.455Z"
      fill="url(#paint0_linear_4985_71805)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4985_71805"
        x1={1158.15}
        y1={128.496}
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
export default Rectangle4;
