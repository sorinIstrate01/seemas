import { cn } from "@/lib/utils";

import * as React from "react";
import { SVGProps } from "react";
const Rectangle3 = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={831}
    height={659}
    viewBox="0 0 831 659"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      "absolute top-[-131.439px] right-[-251.183px] rotate-[-104.69deg] blur-[200px]",
      className
    )}
    {...props}
  >
    <path
      opacity={0.25}
      d="M0.686523 103.643C333.687 237.643 618.687 658.537 618.687 658.537C618.687 658.537 771.066 529.692 830.066 491.692C648.942 440.192 585.906 161.12 436.285 1.62018C346.001 -11.1812 89.1865 96.1427 0.686523 103.643Z"
      fill="url(#paint0_linear_4985_71806)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4985_71806"
        x1={1158.15}
        y1={530.602}
        x2={1235.42}
        y2={65.193}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C3A7F3" />
        <stop offset={1} stopColor="#5C85D5" />
      </linearGradient>
    </defs>
  </svg>
);
export default Rectangle3;
