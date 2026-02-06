import SectionHeader from "@/components/sections/section-header";

import SectionWrapper from "@/components/sections/section-wrapper";
import { StepContent } from "@/components/steps/step-content";
import {
  StepItem,
  StepItemContent,
  StepItemImage,
} from "@/components/steps/step-item";
import StepsList from "@/components/steps/sections-steps/steps-list";
import { cn } from "@/lib/utils";

import Image, { ImageProps } from "next/image";

interface StepContentData {
  title: string;
  description: string;
  itemsList: string[];
  className?: string;
}

interface ImageConfiguration {
  className?: string;
  imageProps?: ImageProps;
  imagesProps?: ImageProps[];
  blurElementProps?: React.HTMLAttributes<HTMLDivElement>;
}

interface ListItem {
  contentProps: StepContentData;
  imageProps: ImageConfiguration;
}

const listItems: ListItem[] = [
  {
    contentProps: {
      title: "Trained on Decades of Expertise",
      description:
        "Trained on Prof. Aswath Damodaran's lectures, webinars, and personal insights to deliver authoritative valuation answers instantly.",
      itemsList: ["Webinars", "Lectures", "Personal Materials"],
    },
    imageProps: {
      imagesProps: [
        {
          src: "/assets/damodaran-ai/damodaran-card-xl.png",
          alt: "Damodaran AI",
          className: "object-cover absolute h-full block md:hidden xl:block",
        },
        {
          src: "/assets/damodaran-ai/damodaran-card.png",
          alt: "Damodaran AI",
          className: "object-cover absolute h-full hidden md:block xl:hidden",
        },
      ],
    },
  },
  {
    contentProps: {
      title: "Personal AI Valuation Expert",
      description:
        "Talk, Type, or Upload — Your Choice. Interact effortlessly via voice, text-to-speech, or by uploading documents for contextual analysis.",
      itemsList: ["Voice Mode", "Text to Speech", "Upload Files"],
    },
    imageProps: {
      imagesProps: [
        {
          src: "/assets/damodaran-ai/input-sphere.png",
          alt: "input and sphere",
          className: "object-cover absolute h-full",
        },
      ],
    },
  },
  {
    contentProps: {
      title: "Related Videos",
      description:
        "Explore a vast library of Prof. Damodaran’s valuation lectures, keynotes, and appearances.",
      itemsList: [
        "Get Deeper Context ",
        "Save for Later",
        "Share Insights Easily",
      ],
    },
    imageProps: {
      imageProps: {
        src: "/assets/damodaran-ai/chat-history.svg",
        alt: "chat history",
        width: 600,
        height: 500,
        className:
          "absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-auto md:w-[704px] md:max-w-none md:h-[600px]",
      },
      blurElementProps: {
        className:
          "absolute left-0 right-0 top-0 w-full h-[100px] md:h-[161px] z-10",
        style: {
          background: `linear-gradient(180deg, #FFF 22.64%, rgba(255, 255, 255, 0.70) 63.81%, rgba(255, 255, 255, 0.00) 100%)`,
        },
      },
    },
  },
];

const Section3 = () => {
  return (
    <SectionWrapper
      className="bg-steps-section"
      contentWrapperClassName="flex flex-col gap-14"
    >
      <SectionHeader
        className="gap-4"
        title={`Meet Damodaran AI`}
        description={`What if you could talk to a world-class valuation expert, any time?\n Now you can — with Damodaran AI.`}
        headingLevel="h3"
      />

      <StepsList>
        {listItems.map(
          (
            {
              contentProps: { className, ...contentProps },
              imageProps: {
                className: imageContainerClassName,
                imageProps,
                imagesProps = [],
                blurElementProps,
              },
            },
            index
          ) => {
            // Combine single imageProps with imagesProps array for consistent handling
            const allImageProps = imageProps
              ? [imageProps, ...imagesProps]
              : imagesProps;

            return (
              <StepItem
                key={index}
                index={index}
                className="xl:items-center xl:h-[500px]"
              >
                <StepItemContent className={cn("xl:flex-1", className)}>
                  <StepContent
                    stepNumber={index + 1} // Changed: Fix step numbering to start from 1
                    showNumber={false}
                    {...contentProps}
                  />
                </StepItemContent>
                <StepItemImage
                  className={cn(
                    "w-full h-[320px] md:h-[500px] xl:w-[600px] xl:max-w-[600px] xl:h-[500px] p-0",
                    imageContainerClassName
                  )}
                >
                  <div className={cn("w-full h-full relative")}>
                    {allImageProps.map(
                      (
                        { className: imageClassName, alt, ...restImageProps },
                        imageIndex
                      ) => (
                        <Image
                          key={imageIndex}
                          width={704}
                          height={500}
                          alt={alt}
                          className={cn(imageClassName)}
                          {...restImageProps}
                        />
                      )
                    )}
                  </div>
                  {blurElementProps && <div {...blurElementProps} />}
                </StepItemImage>
              </StepItem>
            );
          }
        )}
      </StepsList>
    </SectionWrapper>
  );
};

export default Section3;
