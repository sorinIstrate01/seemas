import SectionContainer from "../../components/containers/section-container";
import Switcher from "./components/switcher";

const ChooseSection = () => {
  return (
    <section className="bg-white">
      <SectionContainer className="pt-40">
        <div className="items-center justify-start text-center gap-4 min-[1440px]:grid min-[1440px]:grid-cols-[2fr_1fr] min-[1440px]:text-left">
          <div className="flex flex-col h-full justify-center items-center gap-6 md:gap-8 min-[1440px]:pt-[166px] min-[1440px]:gap-0 min-[1440px]:justify-start min-[1440px]:items-start">
            <div className="self-stretch">
              <h2 className="text-subtitle-xl text-zinc-900 mb-2 md:text-h4 xl:text-h2 min-[1440px]:text-nowrap">
                Choose <span className="text-primary">SeemaS</span> to
              </h2>
              <Switcher
                className="min-[1440px]:!hidden"
                options={{ direction: "horizontal" }}
              />
            </div>
            <p className="max-w-[638px] text-body-s md:text-body-m text-zinc-800 min-[1440px]:mb-6">
              Spend less time guessing and more time delivering solutions.
            </p>
            {/* <div className="flex gap-2.5">
              <Button variant="secondary" size="L" asChild>
                <LinkWrapper href={InternalLinks.book_demo}>
                  Get a Demo
                </LinkWrapper>
              </Button>
              {children}
            </div> */}
          </div>
          <div className="h-[400px] min-[1440px]:!block !hidden relative">
            <Switcher
              className="h-full absolute top-0 left-0 bottom-0"
              options={{ direction: "vertical" }}
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default ChooseSection;
