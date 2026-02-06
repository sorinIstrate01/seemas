import { SVGAttributes } from "react";

const SquareSkewedCurved = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="264"
      height="636"
      viewBox="0 0 264 636"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.6"
        d="M0.65332 626.384C325.318 471.656 12.0512 62.3848 12.0512 62.3848C12.0512 62.3848 134.017 -31.6748 191.54 12.2032C14.9504 71.6696 373.209 442.212 227.333 626.384C139.309 641.166 86.938 635.044 0.65332 626.384Z"
        fill="url(#paint0_linear_2535_791)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2535_791"
          x1="385.769"
          y1="144.88"
          x2="616.421"
          y2="554.594"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5C85D5" />
          <stop offset="1" stopColor="#C3A7F3" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default SquareSkewedCurved;
