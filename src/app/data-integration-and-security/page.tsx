import TrySection from "@/views/overview/try-section";
import EndToEndSection from "@/views/tax-provision/end-to-end";
import FeaturesSection from "@/views/tax-provision/features-section";
import HeroSection from "@/views/tax-provision/hero-section";
import OtherProductsSection from "@/views/tax-provision/other-products-section";
import {
  endToEndItems,
  features,
  otherProducts,
} from "./data-integration-and-security.constants";
import PageWrapper from "@/components/pages/page-wrapper";
import ArticlesCarouselSection from "@/components/pages/sphere/articles-carousel-section";
import { sphereArticles } from "@/constants/sphere/sphere";
import TaxIQSection from "@/views/sections/tax-iq-section";
const DataIntegrationAndSecurityPage = () => {
  return (
    <>
      <PageWrapper>
        <HeroSection
          title="Data Integration & Security"
          description="Reliable, secure data."
        />
        <FeaturesSection
          title={`Unmatched Data Integration & Security. \nTrust Built into Every Click.`}
          description="Protect sensitive financial data with the industry’s most advanced safeguards—so you can focus on compliance with total confidence."
          features={features}
          descriptionClassName="max-w-[764px]"
        />
        <EndToEndSection
          title="End-to-end Data Integration & Security"
          description="All your Data Integration & Security tailored to your global needs — clearly organized and easily accessible in one platform."
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

export default DataIntegrationAndSecurityPage;
