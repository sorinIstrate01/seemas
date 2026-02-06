import ImageCard, { ImageCardProps } from "@/components/cards/image-card";
import SectionHeader from "../../components/headers/section-header";
import SectionContainer from "../../components/containers/section-container";

const aiCardsContent: Array<Array<ImageCardProps>> = [
  [
    {
      title: "Benchmark Support. Global Context.",
      description:
        "Access peer comparisons, recovery assumptions, and country-level data for defensible modeling.",
      image: "/overview/ai-section/card-1.png",
      imageClassName: "object-[center_60%]",
    },
    {
      title: "Tailor the Model.",
      description:
        "Tailor assumptions, input your own data, and customize every step of the calculation with full transparency.",
      image: "/overview/ai-section/card-2.png",
      imageClassName: "object-left-top",
    },
  ],
  [
    {
      title: "Easy to Use. No Expertise Needed.",
      description:
        "Built with simplicity in mind, SeemaS makes complex tax and valuation processes clear - even for non-experts.",
      image: "/overview/ai-section/card-3.png",
      imageClassName: "object-contain",
    },
    {
      title: "Personal AI Assistant. Always There.",
      description:
        "Ask questions, upload files, or get instant guidance - your AI copilot is embedded across the platform.",
      image: "/overview/ai-section/card-4.png",
    },
  ],
];

const AiSection = () => {
  return (
    <section className="bg-white">
      <SectionContainer>
        <SectionHeader
          title={`Innovative Solutions that Automate\n Complex Economic Analyses.`}
          description="Our AI-powered platform streamlines company-wide data and documentation while ensuring accuracy and defensibility in every compliance process. Companies benefit by reducing the time, costs, and complexity of tax planning, enabling global enterprises to focus on growth."
          titleClassName="whitespace-normal md:whitespace-pre-line"
          className="max-w-[858px]"
        />

        <div className="flex flex-col gap-4">
          {aiCardsContent.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-4 xl:grid-cols-[540fr_724fr] xl:even:grid-cols-[724fr_540fr]"
            >
              {row.map((card, index) => (
                <ImageCard
                  key={index}
                  {...card}
                  imageContainerClassName="h-[calc(0.296296_*_100vw_+_110.4444px)]"
                />
              ))}
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default AiSection;
