import { cn } from "@/lib/utils";
import * as React from "react";
import { SVGProps } from "react";

const OutExpertiseGradientDecor = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={789}
    height={563}
    viewBox="0 0 789 563"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      "absolute left-[-746px] top-[-362px] blur-[150px] rotate-[45.8deg] pointer-events-none",
      className
    )}
    {...props}
  >
    <path
      opacity={0.3}
      d="M0 554.894C333 420.894 618 0 618 0C618 0 730 43.8943 789 81.8943C607.876 133.394 382.121 395.394 232.5 554.894C142.216 567.696 88.5 562.394 0 554.894Z"
      fill="url(#paint0_linear_6003_11194)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_6003_11194"
        x1={1157.46}
        y1={127.935}
        x2={1234.73}
        y2={593.344}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5C85D5" />
        <stop offset={1} stopColor="#C3A7F3" />
      </linearGradient>
    </defs>
  </svg>
);

export default OutExpertiseGradientDecor;
