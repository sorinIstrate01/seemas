import React, { FC } from "react";
import WhatSetsUsApartCardGradientDecor from "./WhatSetsUsApartCardGradientDecor";

export interface WhatSetsUsApartCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  headerRightElement?: React.ReactNode;
  bgDecoration?: React.ReactNode;
}

const WhatSetsUsApartCard: FC<WhatSetsUsApartCardProps> = ({
  title,
  description,
  icon,
  headerRightElement,
  bgDecoration,
}) => {
  return (
    <div className="relative p-4 md:p-6 bg-zinc-50 rounded-xl outline outline-1 outline-zinc-100 -outline-offset-1 overflow-hidden">
      <div className="relative z-10 flex flex-col gap-4 md:gap-6 h-full">
        <header className="relative flex gap-3 items-center justify-between">
          <div className="text-zinc-900 [&_svg]:size-12 xl:[&_svg]:size-14 [&_svg]:stroke-1">
            {icon}
          </div>
          {headerRightElement}
        </header>
        <div className="flex flex-col gap-3">
          <h5 className="text-zinc-900 text-subtitle-s xl:text-subtitle-m">
            {title}
          </h5>
          <p className="text-zinc-700 text-body-s xl:text-body-m">
            {description}
          </p>
        </div>
      </div>

      <WhatSetsUsApartCardGradientDecor />

      {bgDecoration}
    </div>
  );
};

export default WhatSetsUsApartCard;
