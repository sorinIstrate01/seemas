import FeatureCard, {
  FeatureCardProps,
} from "@/components/feature-card/feature-card";
import { chunkArray } from "@/utils/array";
import { FC, useMemo } from "react";
import SectionContainer from "../../components/containers/section-container";
import SectionHeader from "../../components/headers/section-header";

type FeaturesSectionProps = {
  title: string;
  description: string;
  features: FeatureCardProps[];
  titleClassName?: string;
  descriptionClassName?: string;
};

const FeaturesSection: FC<FeaturesSectionProps> = ({
  title,
  description,
  features,
  titleClassName,
  descriptionClassName,
}) => {
  const rows = useMemo(() => chunkArray(features, 2), [features]);

  return (
    <section className="bg-white">
      <SectionContainer>
        <SectionHeader
          title={title}
          description={description}
          className="max-w-[1024px]"
          titleClassName={titleClassName}
          descriptionClassName={descriptionClassName}
        />

        <div className="flex flex-col gap-4">
          {rows.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-4 xl:grid-cols-[540fr_724fr] xl:even:grid-cols-[724fr_540fr] md:auto-rows-[474px]"
            >
              {row.map((card, index) => (
                <FeatureCard key={index} {...card} />
              ))}
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default FeaturesSection;
