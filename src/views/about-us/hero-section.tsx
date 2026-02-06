import InfoCard from "@/components/cards/info-card";
import SectionContainer from "@/components/containers/section-container";
import HeroHeader from "@/components/headers/hero-header";
import Logo1 from "@/components/logos/logo-1";
import Logo10 from "@/components/logos/logo-10";
import Logo11 from "@/components/logos/logo-11";
import Logo12 from "@/components/logos/logo-12";
import Logo13 from "@/components/logos/logo-13";
import Logo2 from "@/components/logos/logo-2";
import Logo3 from "@/components/logos/logo-3";
import Logo4 from "@/components/logos/logo-4";
import Logo5 from "@/components/logos/logo-5";
import Logo6 from "@/components/logos/logo-6";
import Logo7 from "@/components/logos/logo-7";
import Logo8 from "@/components/logos/logo-8";
import Logo9 from "@/components/logos/logo-9";
import { Marquee } from "@/components/ui/marquee";
import {
  IconBook,
  IconBriefcase,
  IconCertificate,
  IconWorld,
} from "@tabler/icons-react";
import OutExpertiseGradientDecor from "./elements/OutExpertiseGradientDecor";

const infoCards = [
  {
    icon: <IconBriefcase size={32} />,
    title: "25+ Years Experience",
    description: "Trusted experience in tax compliance and strategy",
  },
  {
    icon: <IconCertificate />,
    title: "Landmark Case Wins",
    description:
      "Successfully defended cases, including at Supreme Court level",
  },
  {
    icon: <IconWorld />,
    title: "World Class Experts",
    description: "PhD economists, lawyers, and certified professionals.",
  },
  {
    icon: <IconBook />,
    title: "Textbook Authors",
    description: "Shaping global tax standards through published work.",
  },
];

const logos = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
  Logo11,
  Logo12,
  Logo13,
];

const HeroSection = () => {
  return (
    <section className="bg-white">
      <SectionContainer className="pt-32 xl:pt-[200px] flex flex-col gap-10 md:gap-14 xl:gap-20">
        <HeroHeader
          title={
            <>
              A Breakthrough in <br className="hidden xl:block" />{" "}
              <span className="text-primary">Tax Compliance</span> Automation
            </>
          }
          description="At SeemaS, we are revolutionizing corporate tax compliance with domain-specific proprietary AI. Our mission is to reduce the time, costs, and complexity of tax planning, enabling global enterprises to focus on growth."
          titleClassName="max-w-[1068px]"
          descriptionClassName="max-w-[896px]"
        />

        <div className="relative grid grid-cols-1 xl:grid-cols-[536px_616px] gap-6 md:gap-8 xl:gap-16 content-start p-4 md:p-8 rounded-2xl bg-neutral-25 outline outline-1 outline-zinc-100 -outline-offset-1 xl:h-[320px] overflow-hidden">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="text-zinc-800 text-subtitle-l">Our Expertise</div>
            <div className="space-y-3 text-zinc-700 text-body-s">
              <p>
                With over 25 years of leadership in tax compliance, our team of
                PhD economists, lawyers, and CFAs has a deep understanding of
                global tax codes and the complexities of transfer pricing. We
                have successfully defended landmark court cases—including before
                the Supreme Court of Canada—and authored widely used finance
                textbooks that helped define best practices in international
                taxation.
              </p>
              <p>
                This expertise enables us to build AI-driven solutions that
                don’t just automate compliance but provide rigorous,
                high-quality economic analysis, ensuring accuracy,
                defensibility, and efficiency in every tax strategy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {infoCards.map(card => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>

          <OutExpertiseGradientDecor />
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-body-s md:text-subtitle-s text-zinc-500 text-center">
            Our team has worked with industry leaders worldwide.
          </p>
          <div className="overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-[180px] z-10 bg-[linear-gradient(270deg,rgba(255,255,255,0.00)_0%,#FFF_100%)]" />
            <Marquee speed={50}>
              {logos.map((Logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start mx-6 md:mx-8 xl:mx-[50px]"
                >
                  <Logo />
                </div>
              ))}
            </Marquee>
            <div className="absolute top-0 right-0 h-full w-[180px] z-10 bg-[linear-gradient(270deg,#FFF_0%,rgba(255,255,255,0.00)_100%)]" />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default HeroSection;
