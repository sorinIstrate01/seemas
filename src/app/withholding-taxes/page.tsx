import TrySection from "@/views/overview/try-section";
import EndToEndSection from "@/views/tax-provision/end-to-end";
import FeaturesSection from "@/views/tax-provision/features-section";
import HeroSection from "@/views/tax-provision/hero-section";
import OtherProductsSection from "@/views/tax-provision/other-products-section";
import {
  endToEndItems,
  features,
  otherProducts,
} from "./withholding-taxes.constants";
import PageWrapper from "@/components/pages/page-wrapper";
import ArticlesCarouselSection from "@/components/pages/sphere/articles-carousel-section";
import { sphereArticles } from "@/constants/sphere/sphere";
import TaxIQSection from "@/views/sections/tax-iq-section";
const WithholdingTaxesPage = () => {
  return (
    <>
      <PageWrapper>
        <HeroSection
          title="Withholding Taxes"
          description="Automate complexity. Ensure compliance."
          badge={{
            text: "Reduce Burden. Retain Value.",
          }}
        />
        <FeaturesSection
          title={`SeemaS: Effortless \nWithholding Tax Management.`}
          description="Always Accurate, Always On Time. Maximize Confidence — Everywhere you Operate."
          features={features}
        />
        <EndToEndSection
          title="End-to-End Withholding Tax Management"
          description="Manage every aspect of your withholding taxes clearly organized in one platform, tailored to your global needs."
          items={endToEndItems}
        />
        <OtherProductsSection products={otherProducts} />
        <TaxIQSection />
      </PageWrapper>{" "}
      <ArticlesCarouselSection
        title="Related Articles"
        articles={sphereArticles.slice(0, 5)}
        desktopHorizontal
      />
      <TrySection />
    </>
  );
};

export default WithholdingTaxesPage;
