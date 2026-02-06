import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import BlueLine from "@/components/icons/blue-line";


interface HeroContentProps {
  imageProps?: ImageProps;
  logoProps?: ImageProps;
}

const HeroContent = ({
  imageProps,
  logoProps,
}: HeroContentProps) => {
  return (
    <div>
      {logoProps ? (
        <div className="mt-6 mb-9 mx-auto w-fit flex items-center gap-[38px]">
          <BlueLine className="h-[38px] md:h-auto" />
          <Image
            src={logoProps.src}
            alt={logoProps.alt}
            width={logoProps.width ?? 140}
            height={logoProps.height ?? 28}
            className=""
          />
          <BlueLine className="h-[38px] md:h-auto" />
        </div>
      ) : null}
      {imageProps ? (
        <div className="relative  pt-4 px-4 xl:pt-6 xl:px-6 border border-neutral-100 bg-white rounded-t-2xl mx-auto overflow-hidden">
          <div className="relative min-w-[588px] h-[368px] md:h-[430px] xl:h-[660px] rounded-t-xl border-2 xl:border-4 border-b-0 xl:border-b-0 border-neutral-100 shadow-[0_10px_24px_-4px_rgba(16,15,36,0.08),0_4px_16px_-4px_rgba(15,36,17,0.02)] overflow-hidden">
            <Image
              fill
              priority
              quality={100}
              sizes="(max-width: 768px) 200vw"
              className={cn(
                "object-cover object-left-top overflow-hidden",
              )}
              src={imageProps?.src || ""}
              alt={imageProps?.alt || ""}
            />

            <div className="w-[1258px] h-[90px] md:h-[140px] absolute left-1/2 -translate-x-1/2 bottom-0 bg-[linear-gradient(180deg,rgba(250,250,250,0.00)_0%,#FAFAFA_66.83%)]" />
          </div>
        </div>
      ) : null}
    </div>
    
  );
};

export default HeroContent;
