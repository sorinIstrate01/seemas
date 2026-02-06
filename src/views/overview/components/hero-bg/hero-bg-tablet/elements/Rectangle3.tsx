import { cn } from "@/lib/utils";
import * as React from "react";
import { SVGProps } from "react";

const Rectangle3 = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={640}
    height={271}
    viewBox="0 0 640 271"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      "absolute top-[9.024px] right-[-271.229px] rotate-[-98.2deg] blur-[100px]",
      className
    )}
    {...props}
  >
    <path
      opacity={0.25}
      d="M0.839149 42.9402C254.587 97.7837 510.737 270.047 510.737 270.047C510.737 270.047 602.645 217.314 639.744 201.761C504.449 180.683 424.119 66.4645 297.468 1.18441C231.666 -4.05497 62.7887 39.8706 0.839149 42.9402Z"
      fill="url(#paint0_linear_4985_71982)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4985_71982"
        x1={877.892}
        y1={217.686}
        x2={895.387}
        y2={29.2291}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C3A7F3" />
        <stop offset={1} stopColor="#5C85D5" />
      </linearGradient>
    </defs>
  </svg>
);
export default Rectangle3;
