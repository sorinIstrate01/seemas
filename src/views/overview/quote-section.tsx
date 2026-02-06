import Quote from "@/components/testimonial/quote";
import Image from "next/image";
const QuoteSection = () => {
  return (
    <Quote
      quote="The SeemaS valuation tool provides our organization with accurate, easy to interpret real-time valuations for entities and loans, which has significantly improved our transaction planning and execution process."
      authorName="Scott Yogerst"
      authorTitle="Director of International Tax Planning"
      logo={
        <Image
          src="/assets/johnson-controls-logo-1.png"
          alt="Johnson Controls"
          width={90}
          height={40}
        />
      }
      withSeparator={true}
      authorClassName="text-center"
      className="pb-[160px] md:pt-[200px] xl:py-[224px]"
    />
  );
};
export default QuoteSection;
