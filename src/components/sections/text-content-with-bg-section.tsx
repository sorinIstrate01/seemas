import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SectionHeader, { SectionHeaderProps } from "./section-header";
interface TextContentWithBgSectionProps extends SectionHeaderProps {
  actionBtnProps: Exclude<ButtonProps, "asChild">;
  href: string;
  children?: React.ReactNode;
  containerClassName?: string;
}
const TextContentWithBgSection = ({
  actionBtnProps: { children: buttonChildren, ...actionBtnProps },
  href,
  className,
  containerClassName,
  children,
  ...rest
}: TextContentWithBgSectionProps) => {
  return (
    <div
      className={cn(
        "w-full md:h-[360px] flex flex-col py-16 px-6 xl:px-0 rounded-2xl bg-neutral-25 border border-zinc-100 relative overflow-hidden",
        containerClassName
      )}
    >
      <div className="relative z-10 flex flex-col gap-8 items-center h-full">
        <SectionHeader
          className={cn("max-w-[808px] gap-6", className)}
          {...rest}
        />

        <Button asChild {...actionBtnProps}>
          <Link href={href}>{buttonChildren}</Link>
        </Button>
      </div>

      <svg
        className="absolute bottom-[-276px] left-[143px]"
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="481"
        viewBox="0 0 6 481"
        fill="none"
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
      <svg
        className="absolute top[-39px] left-[27px]"
        xmlns="http://www.w3.org/2000/svg"
        width="674"
        height="6"
        viewBox="0 0 674 6"
        fill="none"
      >
        <g filter="url(#filter0_f_2535_810)">
          <path
            d="M3 3L671 3.00006"
            stroke="url(#paint0_linear_2535_810)"
            strokeOpacity="0.3"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2535_810"
            x="0.5"
            y="0.5"
            width="673"
            height="5.00006"
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
              result="effect1_foregroundBlur_2535_810"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2535_810"
            x1="204.071"
            y1="3.00003"
            x2="3"
            y2="3.00001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FAFAFA" />
            <stop offset="0.534678" stopColor="#266AE9" />
            <stop offset="1" stopColor="#FAFAFA" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="393"
        height="6"
        viewBox="0 0 393 6"
        fill="none"
        className="absolute bottom-[45px] right-[-135px]"
      >
        <g filter="url(#filter0_f_2535_811)">
          <path
            d="M3 3L396 3.00003"
            stroke="url(#paint0_linear_2535_811)"
            strokeOpacity="0.3"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2535_811"
            x="0.5"
            y="0.5"
            width="398"
            height="5"
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
              result="effect1_foregroundBlur_2535_811"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2535_811"
            x1="121.295"
            y1="3.00002"
            x2="3"
            y2="3.00001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FAFAFA" />
            <stop offset="0.534678" stopColor="#266AE9" />
            <stop offset="1" stopColor="#FAFAFA" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        width={636}
        height={264}
        viewBox="0 0 636 264"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[-142px] right-[-465px] rotate-[-3deg] blur-[150px] pointer-events-none"
      >
        <path
          opacity={0.4}
          d="M626.366 263.19C471.638 -61.4749 62.3664 251.792 62.3664 251.792C62.3664 251.792 -31.6933 129.826 12.1848 72.3025C71.6511 248.892 442.193 -109.366 626.366 36.5095C641.147 124.534 635.026 176.905 626.366 263.19Z"
          fill="url(#paint0_linear_6002_11145)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6002_11145"
            x1={144.861}
            y1={-121.926}
            x2={554.576}
            y2={-352.578}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ACA7F3" />
            <stop offset={1} stopColor="#5C85D5" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        width={789}
        height={563}
        viewBox="0 0 789 563"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[78.61px] left-[-716.77px] rotate-[45.789deg] blur-[150px] pointer-events-none"
      >
        <path
          opacity={0.3}
          d="M0 554.894C333 420.894 618 0 618 0C618 0 730 43.8943 789 81.8943C607.876 133.394 382.121 395.394 232.5 554.894C142.216 567.696 88.5 562.394 0 554.894Z"
          fill="url(#paint0_linear_6002_11151)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6002_11151"
            x1={1157.46}
            y1={127.935}
            x2={1234.73}
            y2={593.344}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5C85D5" />
            <stop offset={1} stopColor="#C3A7F3" />
          </linearGradient>
        </defs>
      </svg>
      {children}
    </div>
  );
};
export default TextContentWithBgSection;
