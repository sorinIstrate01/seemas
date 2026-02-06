import { Button } from "@/components/ui/button";
import TaxIQSectionBg from "./components/tax-iq-section-bg";
import Image from "next/image";
import { LinkWrapper } from "@/components/custom-ui/link-wrapper";
import { external_links } from "@/config/site";

const TaxIQSection = () => {
  return (
    <section className="py-20 md:py-[100px] xl:py-[112px] px-4 md:px-8">
      <div className="relative w-full md:max-w-[704px] xl:max-w-[1280px] h-[488px] md:h-[624px] xl:h-[809px] pt-16 px-3 rounded-xl bg-neutral-50 outline outline-1 outline-neutral-100 -outline-offset-1 mx-auto overflow-hidden">
        <TaxIQSectionBg />
        <div className="relative z-[2] h-full flex flex-col items-center justify-between gap-6">
          <header className="max-w-[310px] md:max-w-[532px] xl:max-w-[642px] text-center">
            <h3 className="text-subtitle-xl md:text-h4 xl:text-h3 text-gray-900 mb-4">
              Meet <span className="text-blue-primary">TaxIQ</span>
            </h3>
            <p className="text-body-s md:text-body-m text-zinc-800 mb-6 md:mb-8">
              Imagine having a world-class global tax expert just a consult away
              — anytime you need! Now with SeemaS TaxIQ, you do!
            </p>
            <LinkWrapper href={external_links.seemas_taxiq}>
              <Button>Try now</Button>
            </LinkWrapper>
          </header>

          <div className="w-full max-w-[334px] md:max-w-[656px] xl:max-w-[1120px] h-[196px] md:h-[320px] xl:h-[495px] px-2 pt-2 md:px-4 md:pt-4 xl:px-6 xl:pt-8 bg-[rgba(255,255,255,0.40)] backdrop-blur-[5px] rounded-t-[10px] md:rounded-t-[20px] border border-b-0 border-white shadow-[0_4px_8px_0_rgba(5,6,27,0.03)_inset]">
            <div className="relative w-full h-full border-x-4 border-t-4 border-gray-50 rounded-t-lg md:rounded-t-2xl shadow-[0_10px_24px_-4px_rgba(16,15,36,0.08),0_4px_16px_-4px_rgba(15,36,17,0.02)] overflow-hidden">
              <Image
                src="/sections/tax-iq/tax-iq.png"
                alt="TaxIQ"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxIQSection;
