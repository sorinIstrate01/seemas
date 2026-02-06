import SectionWrapper from "@/components/sections/section-wrapper";
import TextContentWithBgSection from "@/components/sections/text-content-with-bg-section";
import { ROUTES } from "@/constants/routes";
const section4 = () => {
  return (
    <SectionWrapper>
      <TextContentWithBgSection
        actionBtnProps={{
          children: "Try for Free",
          asChild: true,
        }}
        href={ROUTES.DAMODARAN_AI}
        title="Ask Damodaran Today"
        description="Unlock fast, reliable valuation insights powered by decades of expertise. Whether you're a student, investor, or professional — get the valuation clarity you need, when you need it. Start exploring for free."
        containerClassName="px-8"
      />
    </SectionWrapper>
  );
};
export default section4;
