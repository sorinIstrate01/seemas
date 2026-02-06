import { SVGProps } from "react";

const IconLine = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="481"
      viewBox="0 0 6 481"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_f_2535_812)">
        <path
          d="M3 3L3.00002 478"
          stroke="url(#paint0_linear_2535_812)"
          strokeOpacity="0.3"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2535_812"
          x="0.5"
          y="0.5"
          width="5"
          height="480"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_2535_812"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2535_812"
          x1="2.99999"
          y1="145.977"
          x2="2.99999"
          y2="3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAFAFA" />
          <stop offset="0.534678" stopColor="#266AE9" />
          <stop offset="1" stopColor="#FAFAFA" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default IconLine;
