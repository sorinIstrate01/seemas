import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

type GlobalTaxManagementSlideMediaProps = {
  className?: string;
  singleMediaImageProps: ImageProps;
};

const GlobalTaxManagementSlideMedia = ({
  className,
  singleMediaImageProps: {
    className: singleMediaImageClassName,
    alt = "",
    ...singleMediaImageProps
  },
}: GlobalTaxManagementSlideMediaProps) => {
  return (
    <div className={cn("h-full w-full p-3", className)}>
      <Image
        width={516}
        height={496}
        quality={95}
        className={cn("w-full h-full object-cover", singleMediaImageClassName)}
        alt={alt}
        {...singleMediaImageProps}
      />
    </div>
  );
};

export default GlobalTaxManagementSlideMedia;
