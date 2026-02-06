import FeatureCard, {
  OtherFeatureCardProps,
} from "@/components/cards/feature-card";
import SectionContainer from "@/components/containers/section-container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { FC } from "react";

type OtherProductsSectionProps = {
  products: Array<OtherFeatureCardProps>;
};

const OtherProductsSection: FC<OtherProductsSectionProps> = ({ products }) => {
  return (
    <section className="relative">
      <SectionContainer>
        <Carousel className="flex flex-col gap-8 md:gap-14">
          <div className="flex items-center gap-2.5">
            <h3 className="grow text-subtitle-xl md:text-h4 text-zinc-900 text-center xl:text-left">
              Other SeemaS Platform Products
            </h3>

            <div className="hidden xl:inline-flex gap-2">
              <CarouselPrevious
                variant="layer"
                size="iconL"
                className="static translate-y-0 translate-x-0"
              >
                <IconChevronLeft />
              </CarouselPrevious>

              <CarouselNext
                variant="layer"
                size="iconL"
                className="static translate-y-0 translate-x-0"
              >
                <IconChevronRight />
              </CarouselNext>
            </div>
          </div>
          <CarouselContent containerClassName="overflow-visible md:-ml-6">
            {products.map((item) => (
              <CarouselItem key={item.title} className="md:pl-6 basis-auto">
                <FeatureCard
                  className="max-w-[348px] md:max-w-[626px] h-full"
                  {...item}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </SectionContainer>
    </section>
  );
};

export default OtherProductsSection;
