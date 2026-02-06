import { cn } from "@/lib/utils";
import * as React from "react";
import { SVGProps } from "react";
const Rectangle3 = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={651}
    height={139}
    viewBox="0 0 651 139"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      "absolute top-[74.774px] right-[-315.086px] rotate-[-94.19deg] blur-[100px]",
      className
    )}
    {...props}
  >
    <path
      opacity={0.25}
      d="M0.17596 22.0888C257.791 50.1518 530.191 138.298 530.191 138.298C530.191 138.298 615.833 111.315 651.008 103.356C514.513 92.5709 422.731 34.1261 290.146 0.722723C224.29 -1.95822 61.3316 20.5181 0.17596 22.0888Z"
      fill="url(#paint0_linear_4985_72023)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4985_72023"
        x1={889.032}
        y1={111.505}
        x2={893.587}
        y2={15.4092}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C3A7F3" />
        <stop offset={1} stopColor="#5C85D5" />
      </linearGradient>
    </defs>
  </svg>
);
export default Rectangle3;
