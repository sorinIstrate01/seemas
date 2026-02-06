import SectionWrapper from "@/components/sections/section-wrapper";
import TestimonialCard, {
  TestimonialCardProps,
} from "./components/testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const TestimonialsSection = () => {
  const testimonials: TestimonialCardProps[] = [
    {
      quote:
        "“The SeemaS valuation tool provides our organization with accurate, easy to interpret real-time valuations for entities and loans, which has significantly improved our transaction planning and execution process.”",
      authorName: "Scott Yogerst",
      authorTitle: "Director of International Tax Planning",
    },
    {
      quote:
        "“SeemaS gives us complete confidence in our compliance process. Their SOC 2–compliant platform and rigorous data security standards were non-negotiable for us—and they delivered.”",
      authorName: "Jordan Miller",
      authorTitle: "Operations Manager",
    },
    {
      quote:
        "“What used to take our team weeks now takes hours. The AI-powered workflows and automated data ingestion have completely transformed how we approach valuation and transfer pricing.”",
      authorName: "Sofia Martinez",
      authorTitle: "Digital Marketing Specialist",
    },
  ];

  return (
    <SectionWrapper className="relative xl:pt-[224px]">
      <section aria-label="Testimonials">
        <Carousel className="flex flex-col gap-8 md:gap-14">
          <div className="flex items-center gap-2.5">
            <h6 className="grow text-subtitle-xl md:text-h4 text-zinc-900 text-center xl:text-left">
              Testimonials
            </h6>

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
            {testimonials.map((t, index) => (
              <CarouselItem
                key={index}
                className="md:pl-6 basis-full md:basis-auto"
              >
                <TestimonialCard {...t} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </SectionWrapper>
  );
};
export default TestimonialsSection;
