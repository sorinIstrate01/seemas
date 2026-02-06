import SectionHeader from "@/components/sections/section-header";
import SectionWrapper from "@/components/sections/section-wrapper";
import Image, { StaticImageData } from "next/image";



interface ApartCard {
    title: string;
    description: string;
    image: StaticImageData;
}

interface ApartSectionProps {
    cards: ApartCard[];
}

const ApartSection = ({ cards }: ApartSectionProps) => {
  return (
    <SectionWrapper>
        <SectionHeader 
            headingLevel="h4"
            title="SeemaS: What Sets Us Apart" 
            description="Powered by academic rigor, advanced engineering, and proprietary data, SeemaS delivers intelligent, streamlined solutions to the world’s most complex pricing and compliance challenges."
            descriptionClassName="max-w-[744px] mx-auto" 
            className="gap-4 mb-8 md:mb-14"
        />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {cards.map((card: ApartCard, index) => (
                <div key={index} className="flex flex-col bg-neutral-50 rounded-2xl border border-zinc-100 overflow-hidden">
                    <div className="w-full h-fit">
                        <Image src={card.image} alt={card.title} width={628} height={400} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex flex-col gap-1">
                        <p className="text-subtitle-s md:text-subtitle-l text-gray-900">{card.title}</p>
                        <p className="text-body-s text-zinc-700">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </SectionWrapper>
  );
};
export default ApartSection;
