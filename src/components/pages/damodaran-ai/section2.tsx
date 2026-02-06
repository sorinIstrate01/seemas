import SectionWrapper from "@/components/sections/section-wrapper";
import Link from "next/link";

import { professor_damodaran_socials } from "@/config/site";
import Image from "next/image";

const Section2 = () => {
  return (
    <SectionWrapper
      className="xl:pt-[256px]"
      contentWrapperClassName="flex flex-col xl:flex-row gap-8 xl:gap-16 items-center"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h2 className="text-subtitle-xl md:text-h4 text-zinc-900">
            Aswath Damodaran
          </h2>
          <p className="text-body-s md:text-body-m text-zinc-800">
            Professor of Finance | NYU Stern School of Business
          </p>
        </div>
        <p className="text-body-s md:text-body-m text-zinc-600 whitespace-pre-line">
          {`Aswath Damodaran is one of the world’s foremost experts in corporate finance, valuation, and investment strategy. A tenured professor at NYU Stern, he has spent over 35 years teaching and researching the art and science of valuing companies—from high-growth startups to global enterprises.\n
Renowned for his ability to make complex financial concepts accessible and practical, Professor Damodaran has authored numerous best-selling books and academic papers, and his valuation models are widely used by professionals, investors, and institutions around the globe. \n
His dedication to open knowledge and education has made him a beloved figure among students and practitioners alike. Through his teaching, writing, and extensive public resources, he has fundamentally transformed how valuation is taught and applied in the real world.`}
        </p>
        <div className="pt-4 flex border-t border-zinc-100 gap-3">
          {professor_damodaran_socials.map(
            ({ icon: Icon, iconProps, ...social }) => (
              <Link
                href={social.href}
                key={social.label}
                target="_blank"
                className="flex py-1 px-4 items-center gap-1 border border-zinc-100 rounded-lg text-button h-8 hover:bg-neutral-50 transition-colors duration-300 text-zinc-800"
                style={{
                  backdropFilter: "blur(5px)",
                }}
              >
                <Icon size={16} className="size-4" {...iconProps} />{" "}
                {social.label}
              </Link>
            )
          )}
        </div>
      </div>
      <div className="w-full h-[280px] xl:min-w-[600px] xl:w-[600px] md:h-[532px] p-4 rounded-2xl bg-neutral-50 border border-zinc-100 relative overflow-hidden">
        <div className="absolute size-[265px] rounded-full bg-[#DFDCF5] -bottom-[100px] -left-[140px] opacity-20 blur-[40px]"></div>

        <div className="size-full relative">
          <Image
            src={"/damodaran-ai/damodaran-pic.png"}
            alt="Aswath Damodaran"
            width={568}
            height={500}
            className="size-full object-cover rounded-xl"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};
export default Section2;
