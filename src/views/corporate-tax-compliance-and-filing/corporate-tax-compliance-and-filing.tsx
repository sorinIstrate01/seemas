import PageWrapper from "@/components/pages/page-wrapper";
import ArticlesCarouselSection from "@/components/pages/sphere/articles-carousel-section";
import { sphereArticles } from "@/constants/sphere/sphere";
import TrySection from "@/views/overview/try-section";
import TaxIQSection from "../sections/tax-iq-section";
import EndToEndSection from "../tax-provision/end-to-end";
import FeaturesSection from "../tax-provision/features-section";
import HeroSection from "../tax-provision/hero-section";
import OtherProductsSection from "../tax-provision/other-products-section";
import {
  accordionItems,
  features,
  otherProducts,
} from "./constants/corporate-tax-compliance-and-filing.constants";

const CorporateTaxComplianceAndFiling = () => {
  return (
    <>
      <PageWrapper>
        <HeroSection
          title="Corporate Tax Compliance & Filings"
          description="AI-powered workflows simplifies the complexity of global tax management."
          badge={{
            text: "Streamlined. Automated. Always Audit-Ready.",
          }}
          titleClassName="md:max-w-[719px] xl:max-w-[958px]"
          descriptionClassName="xl:max-w-[842px]"
        />
        <FeaturesSection
          title="SeemaS: Your Edge in Corporate Tax Compliance & Filing"
          description="SeemaS takes the pain out of corporate tax—making global compliance and filing fast,
simple, and always reliable. Discover the power of one intelligent workflow built for
clarity, confidence, and effortless tax management."
          titleClassName="xl:max-w-[1024px]"
          descriptionClassName="xl:max-w-[1024px]"
          features={features}
        />

        <EndToEndSection
          title="End-to-end Corporate Tax Compliance & Filings"
          description="All your Corporate Tax Compliance & Filings — clearly organized and easily accessible in one platform."
          items={accordionItems}
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
export default CorporateTaxComplianceAndFiling;
