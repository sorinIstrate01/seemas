import Hero from "@/components/pages/home/hero";
import SuitesSection from "@/components/pages/home/suites-section";
import SectionPlatform from "@/components/pages/home/section-platform";
import Section6 from "@/components/pages/home/section6";
import PageWrapper from "@/components/pages/page-wrapper";
import WhyUs from "@/components/pages/home/why-us";
import TestimonialsSection from "@/components/pages/home/testimonials-section";
import Section4 from "@/components/pages/home/section4";
import PlatformIcon1 from "@/components/icons/platform-icon-1";
import PlatformIcon2 from "@/components/icons/platform-icon-2";
import PlatformIcon3 from "@/components/icons/platform-icon-3";
import PlatformIcon4 from "@/components/icons/platform-icon-4";

const Home = () => {
  return (
    <PageWrapper>
      <Hero />
      <SuitesSection />
      <SectionPlatform 
        cards=
        {[
            {
                icon: <PlatformIcon1 className="w-10 h-10 md:w-14 md:h-14 xl:w-[72px] xl:h-[72px]"/>,
                title: "Data Intake"
            },
            {
                icon: <PlatformIcon2 className="w-10 h-10 md:w-14 md:h-14 xl:w-[72px] xl:h-[72px]"/>,
                title: "Method Selection"
            },
            {
                icon: <PlatformIcon3 className="w-10 h-10 md:w-14 md:h-14 xl:w-[72px] xl:h-[72px]"/>,
                title: "Analysis"
            },
            {
                icon: <PlatformIcon4 className="w-10 h-10 md:w-14 md:h-14 xl:w-[72px] xl:h-[72px]"/>,
                title: "Report Authoring"
            },
        ]}
      />
      <Section6 />
      <WhyUs />
      <TestimonialsSection />
      <Section4 />
    </PageWrapper>
  );
};
export default Home;
