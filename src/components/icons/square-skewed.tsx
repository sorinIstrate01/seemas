import { SVGAttributes } from "react";

const SquareSkewed = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="790"
      height="564"
      viewBox="0 0 790 564"
      fill="none"
      {...props}
    >
      <path
        d="M0.227539 555.509C333.228 421.509 618.228 0.614624 618.228 0.614624C618.228 0.614624 730.228 44.5089 789.228 82.5089C608.104 134.009 382.348 396.009 232.728 555.509C142.443 568.31 88.7275 563.009 0.227539 555.509Z"
        fill="url(#paint0_linear_2535_790)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2535_790"
          x1="1157.69"
          y1="128.549"
          x2="1234.96"
          y2="593.959"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5C85D5" />
          <stop offset="1" stopColor="#C3A7F3" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default SquareSkewed;
