import PageWrapper from "@/components/pages/page-wrapper";
import TrySection from "@/views/overview/try-section";
import EndToEndSection from "@/views/tax-provision/end-to-end";
import OtherProductsSection from "@/views/tax-provision/other-products-section";
import {
  endToEndItems,
  features,
  heroImageProps,
  otherProducts,
} from "./financial-instruments.constants";

import ValuationSuiteProductHero from "@/components/heros/valuation-suite-product-hero";
import ArticlesCarouselSection from "@/components/pages/sphere/articles-carousel-section";
import { sphereArticles } from "@/constants/sphere/sphere";
import FeaturesSection from "@/views/tax-provision/features-section";

const FinancialInstrumentsPage = () => {
  return (
    <>
      <PageWrapper>
        <ValuationSuiteProductHero
          heroHeading={{
            title: "Value Financial Instruments with Full Transparency",
            description: `Using proprietary credit analytics and techniques informed by cutting-edge academic research, SeemaS values Financial Instruments - from loans to derivatives.`,
            titleClassName: "max-w-[1036px]",
            descriptionClassName: "max-w-[296px] md:max-w-[842px]",
          }}
          imageProps={heroImageProps}
        />
        <FeaturesSection
          title="The Smarter Way to Value Financial Instruments"
          description="Simplify complex valuations with everything you need in a single, intuitive workflow."
          features={features}
        />

        <EndToEndSection
          title="Complete Solution for all your Valuation Needs"
          description="All your valuation requirements - clearly organized and easily accessible in one platform."
          items={endToEndItems}
        />
        <OtherProductsSection products={otherProducts} />
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

export default FinancialInstrumentsPage;
