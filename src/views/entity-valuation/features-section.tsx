import ImageCard, { ImageCardProps } from "@/components/cards/image-card";
import SectionHeader, {
  SectionHeaderProps,
} from "@/components/headers/section-header";
import SectionContainer from "@/components/containers/section-container";
import { FC } from "react";

interface FeaturesSectionProps extends SectionHeaderProps {
  features: Array<Array<ImageCardProps>>;
}

const FeaturesSection: FC<FeaturesSectionProps> = ({ features, ...rest }) => {
  return (
    <section className="bg-white">
      <SectionContainer>
        <SectionHeader {...rest} />

        <div className="flex flex-col gap-4">
          {features.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-4 xl:grid-cols-[540fr_724fr] xl:even:grid-cols-[724fr_540fr]"
            >
              {row.map((card, index) => (
                <ImageCard key={index} {...card} />
              ))}
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default FeaturesSection;
