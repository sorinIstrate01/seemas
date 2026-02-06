import { cn } from "@/lib/utils";
import * as React from "react";
import { SVGProps } from "react";
const Rectangle4 = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={651}
    height={139}
    viewBox="0 0 651 139"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      "absolute top-[127.86px] left-[-318.95px] rotate-[-84.283deg] blur-[100px]",
      className
    )}
    {...props}
  >
    <path
      opacity={0.3}
      d="M0.176937 116.71C257.792 88.647 530.192 0.500977 530.192 0.500977C530.192 0.500977 615.834 27.4843 651.009 35.4425C514.514 46.2279 422.732 104.673 290.147 138.076C224.291 140.757 61.3326 118.281 0.176937 116.71Z"
      fill="url(#paint0_linear_4985_72022)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4985_72022"
        x1={889.033}
        y1={27.2938}
        x2={893.588}
        y2={123.39}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5C85D5" />
        <stop offset={1} stopColor="#C3A7F3" />
      </linearGradient>
    </defs>
  </svg>
);
export default Rectangle4;
