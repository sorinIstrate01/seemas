import Card, { CardProps } from "@/components/molecules/Card/Card";
import { FC } from "react";
import SectionContainer from "../../components/containers/section-container";
import SectionHeader from "../../components/headers/section-header";

interface SolutionsSectionProps {
  title: string;
  description: string;
  solutions: Array<CardProps>;
}

const SolutionsSection: FC<SolutionsSectionProps> = ({
  title,
  description,
  solutions,
}) => {
  return (
    <section className="bg-white">
      <SectionContainer>
        <SectionHeader title={title} description={description} />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
          {solutions.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default SolutionsSection;
