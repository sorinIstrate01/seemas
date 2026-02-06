import FeatureCard, {
  OtherFeatureCardProps,
} from "@/components/cards/feature-card";
import { FC } from "react";
import SectionContainer from "../../components/containers/section-container";
import SectionHeader from "../../components/headers/section-header";

interface OtherSolutionsSectionProps {
  title?: string;
  description?: string;
  solutions: Array<OtherFeatureCardProps>;
}

const OtherSolutionsSection: FC<OtherSolutionsSectionProps> = ({
  title = "Other SeemaS Platform Solutions",
  description = "Explore more ways to use the SeemaS platform",
  solutions,
}) => {
  return (
    <section className="bg-white">
      <SectionContainer>
        <SectionHeader title={title} description={description} />
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {solutions?.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default OtherSolutionsSection;
