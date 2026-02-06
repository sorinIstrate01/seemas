import TrySection from "@/views/overview/try-section";
import EndToEndSection from "@/views/tax-provision/end-to-end";
import FeaturesSection from "@/views/tax-provision/features-section";
import HeroSection from "@/views/tax-provision/hero-section";
import OtherProductsSection from "@/views/tax-provision/other-products-section";
import {
  endToEndItems,
  features,
  otherProducts,
} from "./indirect-tax-management.constants";
import PageWrapper from "@/components/pages/page-wrapper";
import ArticlesCarouselSection from "@/components/pages/sphere/articles-carousel-section";
import { sphereArticles } from "@/constants/sphere/sphere";
import TaxIQSection from "@/views/sections/tax-iq-section";

const IndirectTaxManagementPage = () => {
  return (
    <>
      <PageWrapper>
        <HeroSection
          title="Indirect Tax Management"
          description="Low-Touch Compliance. High-Impact Savings."
        />
        <FeaturesSection
          title={`SeemaS: Effortless Indirect Tax Management Built for Modern Compliance.`}
          description="Stay accurate, stay compliant, and automate complexity—globally."
          features={features}
        />
        <EndToEndSection
          title="End-to-end Indirect Tax Management"
          description="All your Indirect Tax Management tailored to your global needs — clearly organized and easily accessible in one platform."
          items={endToEndItems}
        />
        <OtherProductsSection products={otherProducts} />
        <TaxIQSection />
      </PageWrapper>
      <ArticlesCarouselSection
        title="Related Articles"
        articles={sphereArticles.slice(0, 5)}
        desktopHorizontal
      />
      <TrySection />
    </>
  );
};

export default IndirectTaxManagementPage;
