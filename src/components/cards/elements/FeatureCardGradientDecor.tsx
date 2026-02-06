import { cn } from "@/lib/utils";
import * as React from "react";
import { SVGProps } from "react";

const FeatureCardGradientDecor = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={297}
    height={193}
    viewBox="0 0 297 193"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      "absolute right-[-107px] bottom-[-59px] blur-[75px] rotate-[19.7deg] pointer-events-none",
      className
    )}
    {...props}
  >
    <path
      opacity={0.2}
      d="M0.666016 162.134C119.597 123.045 221.385 0.269043 221.385 0.269043C221.385 0.269043 275.807 37.8535 296.879 48.9382C232.191 63.9609 209.677 145.367 156.24 191.894C123.995 195.628 32.2738 164.321 0.666016 162.134Z"
      fill="url(#paint0_linear_6002_11178)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_6002_11178"
        x1={414.054}
        y1={37.588}
        x2={432.629}
        y2={174.573}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5C85D5" />
        <stop offset={1} stopColor="#C3A7F3" />
      </linearGradient>
    </defs>
  </svg>
);

export default FeatureCardGradientDecor;
