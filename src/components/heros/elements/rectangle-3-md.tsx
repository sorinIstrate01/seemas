import { cn } from "@/lib/utils";
import * as React from "react";
import { SVGProps } from "react";
const Rectangle3Md = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={486}
    height={386}
    viewBox="0 0 486 386"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      "absolute right-[-210px] bottom-[-154px] rotate-[-60.22deg] blur-[100px] block xl:hidden",
      className
    )}
    {...props}
  >
    <path
      opacity={0.1}
      d="M0.87793 324.798C195.461 246.497 361.996 0.554687 361.996 0.554687C361.996 0.554687 451.036 75.8428 485.512 98.0475C379.675 128.141 342.841 291.212 255.413 384.413C202.657 391.893 52.5914 329.18 0.87793 324.798Z"
      fill="url(#paint0_linear_5041_67843)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_5041_67843"
        x1={677.221}
        y1={75.3112}
        x2={722.371}
        y2={347.265}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C3A7F3" />
        <stop offset={1} stopColor="#5C85D5" />
      </linearGradient>
    </defs>
  </svg>
);
export default Rectangle3Md;
