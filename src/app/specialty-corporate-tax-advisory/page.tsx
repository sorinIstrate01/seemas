import TrySection from "@/views/overview/try-section";
import EndToEndSection from "@/views/tax-provision/end-to-end";
import FeaturesSection from "@/views/tax-provision/features-section";
import HeroSection from "@/views/tax-provision/hero-section";
import OtherProductsSection from "@/views/tax-provision/other-products-section";
import {
  endToEndItems,
  features,
  otherProducts,
} from "./specialty-corporate-tax-advisory.constants";
import PageWrapper from "@/components/pages/page-wrapper";
import ArticlesCarouselSection from "@/components/pages/sphere/articles-carousel-section";
import { sphereArticles } from "@/constants/sphere/sphere";
import TaxIQSection from "@/views/sections/tax-iq-section";
const SpecialtyCorporateTaxAdvisoryPage = () => {
  return (
    <>
      <PageWrapper>
        <HeroSection
          title="Specialty Corporate Tax Advisory"
          description="One Seamless Tool. Plan with Clarity."
        />
        <FeaturesSection
          title={`SeemaS: The Future of Specialty Corporate Tax Advisory`}
          description="Tackle your Most Complex Tax Challenges — Effortlessly, Intelligently, and at Scale."
          features={features}
        />
        <EndToEndSection
          title="End-to-end Specialty Corporate Tax Advisory"
          description="From strategy to compliance, manage every aspect of your specialty corporate tax needs in one platform."
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

export default SpecialtyCorporateTaxAdvisoryPage;
