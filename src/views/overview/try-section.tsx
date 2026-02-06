import { LinkWrapper } from "@/components/custom-ui/link-wrapper";
import Spline from "@splinetool/react-spline/next";
import SectionContainer from "../../components/containers/section-container";
import SectionHeader from "@/components/sections/section-header";
import { Button } from "../../components/ui/button";
import { EClasses } from "@/constants/classes";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/constants/routes";

const TrySection = ({
  title = "Try the SeemaS Platform",
  buttonText = "Book a Demo",
  headingLevel = "h2",
}: {
  title?: string;
  headingLevel?: "h2" | "h3" | "h4" | "h5" | "h6";
  buttonText?: string;
}) => {
  return (
    <section className="bg-white">
      <SectionContainer>
        <div
          className={cn(
            "flex flex-col items-center h-[400px] px-4 relative rounded-2xl overflow-hidden z-10 justify-center",
            EClasses.SECTION_DARK
          )}
        >
          <SectionHeader
            headingLevel={headingLevel}
            title={title}
            description="Harnessing the power of AI, our proprietary solution analyzes your financial data and delivers real-time valuation models benchmarked against appropriate comparables — with speed, precision, and accuracy. Need custom models or different benchmarks? The platform gives you the flexibility to adjust with confidence."
            variant="dark"
            className="md:mb-8 gap-4"
            descriptionClassName="max-w-[642px]"
          />
          <Button variant="ghost" asChild>
            <LinkWrapper href={ROUTES.BOOK_DEMO}>{buttonText}</LinkWrapper>
          </Button>
          <div className="absolute inset-0 z-[-1] bg-[linear-gradient(0deg,rgba(3,3,3,0.75)_0%,rgba(3,3,3,0.75)_100%)] blur-[3px] pointer-events-none">
            <Spline scene="https://prod.spline.design/hNqf223j6iaVS-5b/scene.splinecode" />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default TrySection;
