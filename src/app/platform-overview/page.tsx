import PageWrapper from "@/components/pages/page-wrapper";
import ChooseSection from "@/views/overview/choose-section";
import HeroSection from "@/views/overview/hero-section";
import ScrollableVideoSection from "@/views/overview/scrollable-video-section";
import SuitesSection from "@/components/pages/home/suites-section";
import VideoSection from "@/views/overview/video-section";
import QuoteSection from "@/views/overview/quote-section";
import TrySection from "@/views/overview/try-section";

const PlatformOverviewPage = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <ChooseSection />
      <ScrollableVideoSection />
      <SuitesSection headingLevel="h4" sectionWrapperClassName="pt-[80px] md:pt-[100px] xl:pt-[112px]" />
      <VideoSection />
      <QuoteSection />
      <TrySection headingLevel="h6" />
    </PageWrapper>
  );
};

export default PlatformOverviewPage;
