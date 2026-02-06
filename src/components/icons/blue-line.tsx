import * as React from "react";
import { SVGProps } from "react";

const SvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1"
    height="65"
    fill="none"
    viewBox="0 0 1 65"
    {...props}
  >
    <path
      stroke="url(#paint0_linear_7368_59713)"
      strokeLinecap="round"
      strokeOpacity="0.5"
      d="M.5.5v64"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_7368_59713"
        x1="0.5"
        x2="0.5"
        y1="64.5"
        y2="0.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFAFA"></stop>
        <stop offset="0.535" stopColor="#266AE9"></stop>
        <stop offset="1" stopColor="#FAFAFA"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default SvgIcon;