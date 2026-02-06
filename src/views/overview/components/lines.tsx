import * as React from "react";
import { SVGProps } from "react";
const LinesSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={180}
    height={111}
    viewBox="0 0 180 111"
    fill="none"
    className="absolute top-0 right-0"
    {...props}
  >
    <path
      d="M180 25.8096L1 25.8096"
      stroke="url(#paint0_linear_3888_15038)"
      strokeOpacity={0.3}
      strokeLinecap="round"
    />
    <path
      d="M154.19 109.897L154.19 -0.000210486"
      stroke="url(#paint1_linear_3888_15038)"
      strokeOpacity={0.3}
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_3888_15038"
        x1={1}
        y1={25.8096}
        x2={180}
        y2={25.8096}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFAFA" />
        <stop offset={0.534678} stopColor="#266AE9" />
        <stop offset={1} stopColor="#FAFAFA" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_3888_15038"
        x1={154.19}
        y1={-0.000213623}
        x2={154.19}
        y2={109.897}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFAFA" />
        <stop offset={0.534678} stopColor="#266AE9" />
        <stop offset={1} stopColor="#FAFAFA" />
      </linearGradient>
    </defs>
  </svg>
);
export default LinesSVG;
