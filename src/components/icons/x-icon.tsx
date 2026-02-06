import * as React from "react";
import { FC } from "react";

const XIcon: FC = () => {
return <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
  >
    <mask
      id="mask0_7728_12957"
      width="12"
      height="12"
      x="2"
      y="2"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "luminance" }}
    >
      <path fill="#fff" d="M2 2h12v12H2z"></path>
    </mask>
    <g mask="url(#mask0_7728_12957)">
      <path
        fill="#fff"
        d="M11.45 2.563h1.84L9.27 7.169 14 13.438h-3.703L7.395 9.636l-3.317 3.802H2.236l4.3-4.929L2 2.563h3.797l2.62 3.474zm-.647 9.77h1.02L5.24 3.61H4.146z"
      ></path>
    </g>
  </svg>
};

export default XIcon;
