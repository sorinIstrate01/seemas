import { cn } from "@/lib/utils";
import * as React from "react";
import { SVGProps } from "react";
const CardGradientDecor = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={504}
    height={260}
    viewBox="0 0 504 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      "absolute right-[-343px] top-[60px] blur-[120px] pointer-events-none",
      className
    )}
    {...props}
  >
    <path
      opacity={0.2}
      d="M503.121 0H243.121C243.121 0 -56.8789 147.5 9.62109 207.5C65.3715 257.801 243.121 260 243.121 260H503.121V0Z"
      fill="url(#paint0_linear_6002_11171)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_6002_11171"
        x1={11.6211}
        y1={260}
        x2={326.816}
        y2={38.2185}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5C85D5" />
        <stop offset={1} stopColor="#C3A7F3" />
      </linearGradient>
    </defs>
  </svg>
);
export default CardGradientDecor;
