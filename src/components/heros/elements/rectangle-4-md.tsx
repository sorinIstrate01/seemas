import { cn } from "@/lib/utils";
import * as React from "react";
import { SVGProps } from "react";
const Rectangle4Md = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={451}
    height={358}
    viewBox="0 0 451 358"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      "absolute left-[-280px] bottom-[-132px] rotate-[-37deg] blur-[100px] block xl:hidden",
      className
    )}
    {...props}
  >
    <path
      opacity={0.2}
      d="M0.146484 301.714C180.918 228.972 335.632 0.486328 335.632 0.486328C335.632 0.486328 418.352 70.4305 450.381 91.059C352.056 119.016 317.837 270.512 236.614 357.098C187.603 364.047 48.1893 305.786 0.146484 301.714Z"
      fill="url(#paint0_linear_5041_67842)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_5041_67842"
        x1={628.482}
        y1={69.9366}
        x2={670.427}
        y2={322.587}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5C85D5" />
        <stop offset={1} stopColor="#C3A7F3" />
      </linearGradient>
    </defs>
  </svg>
);
export default Rectangle4Md;
