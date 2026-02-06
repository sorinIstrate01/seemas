import { cn } from "@/lib/utils";
import * as React from "react";
import { SVGProps } from "react";
const Vector24 = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={2}
    height={342}
    viewBox="0 0 2 342"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("absolute top-[-21.82px] left-[22px]", className)}
    {...props}
  >
    <path
      d="M1 341.364L1.00002 1.00011"
      stroke="url(#paint0_linear_4985_72018)"
      strokeOpacity={0.3}
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4985_72018"
        x1={1.00002}
        y1={7.47761}
        x2={1.00002}
        y2={337.831}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFAFA" />
        <stop offset={0.458117} stopColor="#C3A7F3" />
        <stop offset={0.6535} stopColor="#266AE9" stopOpacity={0.5} />
        <stop offset={1} stopColor="#FAFAFA" />
      </linearGradient>
    </defs>
  </svg>
);
export default Vector24;
