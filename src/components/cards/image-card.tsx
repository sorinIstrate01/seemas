import { cn } from "@/lib/utils";
import { FC } from "react";
import { Card, CardProps } from "./card";

import Image, { ImageProps } from "next/image";

interface Source {
  /** URL картинки */
  src: string;
  /** будь-який CSS‐медіавираз, наприклад '(max-width: 640px)' */
  media: string;
}

export interface ImageCardProps extends CardProps {
  image: string;
  imageSources?: Source[];
  imageProps?: Omit<ImageProps, "src">;
  imageClassName?: string;
  imageContainerClassName?: string;
}

const ImageCard: FC<ImageCardProps> = ({
  title,
  description,
  className,
  imageContainerClassName,
  image,
  imageSources,
  imageClassName,
  imageProps,
}) => {
  return (
    <Card title={title} description={description} className={className}>
      <div
        className={cn(
          "h-[calc(43.92vw_+_0.73px)] max-h-[338px] relative",
          imageContainerClassName
        )}
      >
        <picture>
          {imageSources?.map(({ src, media }) => (
            <source key={media} srcSet={src} media={media} />
          ))}

          <Image
            src={image}
            alt={title}
            quality={95}
            fill
            className={cn("object-cover", imageClassName)}
            {...imageProps}
          />
        </picture>
      </div>
    </Card>
  );
};
export default ImageCard;
