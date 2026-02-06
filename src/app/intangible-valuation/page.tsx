import ValuationSuiteProductHero from "@/components/heros/valuation-suite-product-hero";
import PageWrapper from "@/components/pages/page-wrapper";
import ArticlesCarouselSection from "@/components/pages/sphere/articles-carousel-section";
import { sphereArticles } from "@/constants/sphere/sphere";
import TrySection from "@/views/overview/try-section";
import EndToEndSection from "@/views/tax-provision/end-to-end";
import FeaturesSection from "@/views/tax-provision/features-section";
import OtherProductsSection from "@/views/tax-provision/other-products-section";
import {
  endToEndItems,
  features,
  heroImageProps,
  otherProducts,
} from "./intangible-valuation.constants";

const IntangibleAssetsPage = () => {
  return (
    <>
      <PageWrapper>
        <ValuationSuiteProductHero
          heroHeading={{
            badge: {
              text: "Streamlined. Automated. Always Audit-Ready.",
            },
            title: "Intangible Valuation Made Effortless with SeemaS",
            description: `SeemaS unifies your financial, operational, and market data in real time, delivering consistent, defensible valuations without the endless spreadsheets and manual modeling.`,
            contentWrapperClassName: "max-w-[1140px]",
            descriptionClassName: "md:max-w-[842px]",
          }}
          imageProps={heroImageProps}
        />
        <FeaturesSection
          title="SeemaS: Your Edge in Smart, Seamless Intangible Valuation"
          description="Simplify complex valuations with everything you need in a single, intuitive workflow."
          features={features}
        />
        <EndToEndSection
          title="Complete Solution for all your Valuation Needs"
          description="All your valuation requirements - clearly organized and easily accessible in one platform."
          items={endToEndItems}
        />
        <OtherProductsSection products={otherProducts} />
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

export default IntangibleAssetsPage;
