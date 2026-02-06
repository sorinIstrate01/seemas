import { cn } from "@/lib/utils";
import * as React from "react";
import { SVGProps } from "react";

const Vector23 = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={194}
    height={2}
    viewBox="0 0 194 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("absolute left-[-13.2px] bottom-[314.184px]", className)}
    {...props}
  >
    <path
      d="M192.6 1L0.999603 1"
      stroke="url(#paint0_linear_4985_71978)"
      strokeOpacity={0.3}
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4985_71978"
        x1={4.64596}
        y1={1}
        x2={190.611}
        y2={0.999997}
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
export default Vector23;
