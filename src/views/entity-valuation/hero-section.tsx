import SectionContainer from "@/components/containers/section-container";
import HeroHeader from "@/components/headers/hero-header";
import IcIcon from "@/components/icons/ic-icon";
import { ROUTES } from "@/constants/routes";
import Image, { ImageProps } from "next/image";
import { FC } from "react";
interface HeroSectionProps {
  title: React.ReactNode;
  description: React.ReactNode;
  contentImageProps: ImageProps;
  titleClassName?: string;
  descriptionClassName?: string;
}

const HeroSection: FC<HeroSectionProps> = ({
  title,
  description,
  contentImageProps,
  titleClassName,
  descriptionClassName,
}) => {
  return (
    <section className="relative bg-neutral-50 overflow-hidden max-h-[900px] md:max-h-[1000px] xl:max-h-[1300px] ">
      <picture>
        {/* <source
          media="(max-width: 1359.98px)"
          srcSet="/overview/hero-section/overview-hero-small-bg.png"
        /> */}
        <source
          media="(min-width: 1360px)"
          srcSet="/overview/hero-section/overview-hero-bg.png"
        />
        <Image
          src="/overview/hero-section/overview-hero-bg.png"
          alt=""
          fill
          priority
          quality={90}
          className="object-[center_97px] md:object-[center_90px] "
        />
      </picture>

      <SectionContainer className="relative h-full pt-32 pb-0 xl:pt-[184px]">
        <HeroHeader
          className="mb-[72px]"
          title={title}
          description={description}
          badge={{
            text: "Powered by Domain-specific AI",
            leftIcon: <IcIcon />,
          }}
          titleClassName={titleClassName}
          descriptionClassName={descriptionClassName}
          buttonConfig={[
            {
              children: "Contact Sales",
              variant: "primary",
              size: "L",
              href: ROUTES.BOOK_DEMO,
            },
          ]}
        />
        <div className="rounded-2xl bg-white h-full px-6 pt-6 border border-neutral-75 overflow-hidden">
          <div className="relative w-full min-h-[304px] md:min-h-[400px] xl:min-h-[604px] ">
            <Image
              layout="responsive"
              width={486}
              height={304}
              className="min-w-[486px] md:w-full rounded-t-2xl aspect-[243/152] object-cover object-left-top b-auto border-2 md:border-4 border-neutral-100"
              quality={95}
              {...contentImageProps}
              alt={contentImageProps.alt ?? ""}
            />
          </div>
        </div>
      </SectionContainer>
      <div
        className="absolute bottom-0 left-0 right-0 h-[90px] z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(250, 250, 250, 0.00) 0%, #FAFAFA 100%)",
        }}
      />
    </section>
  );
};

export default HeroSection;
