import * as React from "react";
import { SVGProps } from "react";

const Ellipse64 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={326}
    height={688}
    viewBox="0 0 326 688"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-[-4px] right-[121px] blur-[175px] rotate-[24deg]"
    {...props}
  >
    <ellipse
      opacity={0.5}
      cx={142.218}
      cy={354.667}
      rx={142.218}
      ry={354.667}
      transform="matrix(1 0 -0.221676 0.97512 98.9648 -4.04102)"
      fill="url(#paint0_linear_5041_94826)"
      fillOpacity={0.3}
    />
    <defs>
      <linearGradient
        id="paint0_linear_5041_94826"
        x1={396.953}
        y1={137.921}
        x2={608.422}
        y2={543.125}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C3A7F3" />
        <stop offset={1} stopColor="#5C85D5" />
      </linearGradient>
    </defs>
  </svg>
);
export default Ellipse64;
