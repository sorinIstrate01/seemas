import ProfileCard, { ProfileType } from "@/components/cards/profile-card";
import SectionContainer from "@/components/containers/section-container";
import SectionHeader from "@/components/headers/section-header";
// import Testimonial from "@/components/testimonial/testimonial";
import { cn } from "@/lib/utils";

interface InvestorsSectionProps {
  title: string;
  description: string;
  items?: ProfileType[];
}

const InvestorsSection = ({
  title,
  description,
  items = [],
}: InvestorsSectionProps) => {
  return (
    <div className="bg-zinc-50">
      <SectionContainer className="flex flex-col gap-14">
        <SectionHeader
          title={title}
          description={description}
          titleClassName="text-h4 md:text-h3"
          descriptionClassName="text-body-m max-w-[900px]"
          className="mb-0 md:mb-0"
          headingLevel="h2"
        />

        <div className="grid xl:flex xl:flex-wrap xl:justify-center grid-cols-4 gap-2 md:gap-8">
          {items?.map((item: ProfileType) => (
            <ProfileCard
              key={item.name}
              {...item}
              className={cn("xl:w-[296px]", "col-span-2", item.className)}
            />
          ))}
        </div>

        {/* <Testimonial
          text="AI will change the way we think about solving problems. It has the capacity to drive innovation across sectors, including transportation, manufacturing, and finance."
          // textClassName="hidden"
          authorName="Lip-Bu Tan"
          authorRole="SeemaS Investor & Board Member"
          authorImage="/assets/testimonials/lip-bu-tan.png"
        /> */}
      </SectionContainer>
    </div>
  );
};

export default InvestorsSection;
