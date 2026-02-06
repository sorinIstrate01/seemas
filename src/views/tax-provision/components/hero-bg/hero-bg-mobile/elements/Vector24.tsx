import * as React from "react";
import { SVGProps } from "react";

const Vector24 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={2}
    height={170}
    viewBox="0 0 2 170"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[42.656px] bottom-[36px]"
    {...props}
  >
    <path
      d="M0.65625 169L0.65624 0.999998"
      stroke="url(#paint0_linear_5041_95715)"
      strokeOpacity={0.3}
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_5041_95715"
        x1={0.65624}
        y1={4.19722}
        x2={0.656248}
        y2={167.256}
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
export default Vector24;
