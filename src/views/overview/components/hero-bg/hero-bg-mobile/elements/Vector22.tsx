import { cn } from "@/lib/utils";
import * as React from "react";
import { SVGProps } from "react";

const Vector22 = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={2}
    height={313}
    viewBox="0 0 2 313"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("absolute right-[13px] top-[105px]", className)}
    {...props}
  >
    <path
      d="M1 1L0.999986 312"
      stroke="url(#paint0_linear_4985_72020)"
      strokeOpacity={0.15}
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4985_72020"
        x1={0.999987}
        y1={306.081}
        x2={0.999992}
        y2={4.22838}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFAFA" />
        <stop offset={0.3465} stopColor="#266AE9" />
        <stop offset={0.541883} stopColor="#266AE9" />
        <stop offset={1} stopColor="#FAFAFA" />
      </linearGradient>
    </defs>
  </svg>
);
export default Vector22;
