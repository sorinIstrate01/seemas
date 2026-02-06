import Quote from "@/components/testimonial/quote";
import Image from "next/image";
const QuoteSectionDamodaran = () => {
  return (
    <Quote
      quote="SeemaS gives us complete confidence in our compliance process. Their SOC 2–compliant platform and rigorous data security standards were non-negotiable for us—and they delivered."
      authorName="Sofia Martinez"
      authorTitle="Digital Marketing Specialist"
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
export default QuoteSectionDamodaran;
