import Hero from "@/components/pages/damodaran-ai/hero";
import Section2 from "@/components/pages/damodaran-ai/section2";
import Section3 from "@/components/pages/damodaran-ai/section3";
import Section4 from "@/components/pages/damodaran-ai/section4";
import PageWrapper from "@/components/pages/page-wrapper";
import QuoteSectionDamodaran from "@/components/pages/damodaran-ai/quote-section-damodaran";

// import Section5 from "@/components/pages/home/section5";
// import Section6 from "@/components/pages/home/section6";
const DamodaranAi = () => {
  return (
    <PageWrapper>
      <Hero />
      <Section2 />
      <Section3 />
      <QuoteSectionDamodaran />
      <Section4 />
      {/* <Section5 />
      <Section6 /> */}
    </PageWrapper>
  );
};
export default DamodaranAi;
