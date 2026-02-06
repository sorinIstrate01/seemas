import { cn } from "@/lib/utils";
import * as React from "react";
import { SVGProps } from "react";

const Rectangle4 = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width="640"
    height="271"
    viewBox="0 0 640 271"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      "absolute top-[62.115px] left-[-278.835px] rotate-[-81.8deg] blur-[100px]",
      className
    )}
    {...props}
  >
    <path
      opacity="0.3"
      d="M0.840126 227.858C254.588 173.015 510.738 0.750977 510.738 0.750977C510.738 0.750977 602.646 53.4845 639.745 69.0371C504.449 90.1151 424.12 204.334 297.469 269.614C231.667 274.853 62.7897 230.928 0.840126 227.858Z"
      fill="url(#paint0_linear_4985_71981)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4985_71981"
        x1="877.893"
        y1="53.1121"
        x2="895.388"
        y2="241.569"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5C85D5" />
        <stop offset="1" stopColor="#C3A7F3" />
      </linearGradient>
    </defs>
  </svg>
);
export default Rectangle4;
