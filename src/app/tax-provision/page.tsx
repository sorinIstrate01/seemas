import TrySection from "@/views/overview/try-section";
import EndToEndSection from "@/views/tax-provision/end-to-end";
import FeaturesSection from "@/views/tax-provision/features-section";
import HeroSection from "@/views/tax-provision/hero-section";
import OtherProductsSection from "@/views/tax-provision/other-products-section";
import {
  endToEndItems,
  features,
  otherProducts,
} from "./tax-provision.constants";
import PageWrapper from "@/components/pages/page-wrapper";
import ArticlesCarouselSection from "@/components/pages/sphere/articles-carousel-section";
import { sphereArticles } from "@/constants/sphere/sphere";
import TaxIQSection from "@/views/sections/tax-iq-section";
const TaxProvisionPage = () => {
  return (
    <>
      <PageWrapper>
        <HeroSection
          title="Tax Provision"
          description="Automation of Complex Calculations. Audit Ready Reporting."
        />
        <FeaturesSection
          title={`SeemaS: Your Edge in Effortless Tax Provision Management`}
          description="Reimagine your tax provision process with SeemaS—combining automation, AI, and seamless integration for maximum accuracy and minimum stress."
          features={features}
          descriptionClassName="max-w-[786px]"
        />
        <EndToEndSection
          title="Tax Provision from Start to Finish"
          description="All your Tax Provision tailored to your global needs — clearly organized and easily accessible in one platform."
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

export default TaxProvisionPage;
