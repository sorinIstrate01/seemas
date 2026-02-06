import { cn } from "@/lib/utils";
import * as React from "react";
import { SVGProps } from "react";

const WhatSetsUsApartCardGradientDecor = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <>
      <svg
        width={504}
        height={260}
        viewBox="0 0 504 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "absolute top-[-214px] left-[-218px] blur-[120px] pointer-events-none hidden md:block",
          className
        )}
        {...props}
      >
        <path
          opacity={0.2}
          d="M0 0H260C260 0 560 147.5 493.5 207.5C437.75 257.801 260 260 260 260H0V0Z"
          fill="url(#paint0_linear_6004_11196)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6004_11196"
            x1={491.5}
            y1={260}
            x2={176.305}
            y2={38.2185}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5C85D5" />
            <stop offset={1} stopColor="#C3A7F3" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        width={271}
        height={140}
        viewBox="0 0 271 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "absolute top-[-98px] left-[-136px] blur-[75px] pointer-events-none block md:hidden",
          className
        )}
        {...props}
      >
        <path
          opacity={0.15}
          d="M0 0H140.046C140.046 0 301.637 79.4231 265.817 111.731C235.788 138.816 140.046 140 140.046 140H0V0Z"
          fill="url(#paint0_linear_6004_11200)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6004_11200"
            x1={264.74}
            y1={140}
            x2={95.0012}
            y2={20.527}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5C85D5" />
            <stop offset={1} stopColor="#C3A7F3" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
export default WhatSetsUsApartCardGradientDecor;
