import ValuationSuiteProductHero from "@/components/heros/valuation-suite-product-hero";
import PageWrapper from "@/components/pages/page-wrapper";
import ArticlesCarouselSection from "@/components/pages/sphere/articles-carousel-section";
import { sphereArticles } from "@/constants/sphere/sphere";
import TrySection from "@/views/overview/try-section";
import EndToEndSection from "@/views/tax-provision/end-to-end";
import OtherProductsSection from "@/views/tax-provision/other-products-section";
import {
  contentImageProps,
  endToEndItems,
  features,
  otherProducts,
} from "./entity-valuation.constants";
import FeaturesSection from "@/views/tax-provision/features-section";

const EntityValuationPage = () => {
  return (
    <>
      <PageWrapper>
        <ValuationSuiteProductHero
          heroHeading={{
            title: (
              <>
                SeemaS Valuation. <br />
                Precise, Fast & Trusted.
              </>
            ),
            description: `SeemaS simplifies entity valuation with AI-driven models and real-time data — delivering fast, accurate, and defensible results.`,
            descriptionClassName: "max-w-[296px] md:max-w-[842px]",
          }}
          imageProps={contentImageProps}
        />
        <FeaturesSection
          title={`Why SeemaS is the Smart Choice for \nEntity Valuation`}
          description="SeemaS provides everything you need to simplify valuation, in one intuitive workflow."
          features={features}
        />
        <EndToEndSection
          title="Complete Solution for all your Valuation Needs"
          description="All your valuation requirements - clearly organized and easily accessible in one platform."
          items={endToEndItems}
          accordionConfig={{
            type: "multiple",
            value: endToEndItems.map((item) => item.title),
          }}
          accordionTriggerClassName="pointer-events-none [&>svg]:hidden"
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

export default EntityValuationPage;
