import SectionWrapper from "@/components/sections/section-wrapper";
import SectionHeader from "@/components/sections/section-header";
import Link, { LinkProps } from "next/link";
import { Button, ButtonProps } from "@/components/ui/button";
import Card, { CardProps } from "./elements/card";
import { AnchorHTMLAttributes } from "react";
import { ROUTES } from "@/constants/routes";

const buttons: {
  config: {
    href: string;
    label: string;
    linkProps?: Partial<LinkProps> &
      Partial<AnchorHTMLAttributes<HTMLAnchorElement>>;
  };
  variant: ButtonProps["variant"];
}[] = [
  {
    config: { label: "Learn More", href: ROUTES.DAMODARAN_AI },
    variant: "outline",
  },
];
const cards: CardProps[] = [
  {
    image: "/assets/damodaran-card.png",
    title: "Trained on Decades of Expertise",
    description: `Decades of valuation expertise, now available in seconds. \nAsk and explore — Damodaran AI makes advanced finance feel simple.`,
  },
  {
    image: "/assets/chat-view-card.png",
    title: "Personal AI Valuation Expert",
    description: `Got questions? SeemaS has answers — fast! Just speak, type, or upload, and let the magic happen. Whatever you need, we’ve got you covered.`,
  },
];

interface Section6Props {
  sectionHeadingHeadingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
const Section6 = ({ sectionHeadingHeadingLevel = "h4" }: Section6Props) => {
  return (
    <SectionWrapper
      className="pb-[160px]"
      contentWrapperClassName="flex flex-col gap-8 md:gap-14"
    >
      <SectionHeader
        headingLevel={sectionHeadingHeadingLevel}
        title="Meet Damodaran AI"
        description={`Imagine having a world-class valuation expert just a consult away — anytime you need! \nNow with Damodaran AI, you do!`}
        className="gap-4"
      />
      <div className="flex flex-col xl:flex-row gap-6 justify-center">
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
      <div className="flex gap-3 justify-center">
        {buttons.map((button, i) => (
          <Button key={i} variant={button.variant} size={"L"} asChild>
            <Link href={button.config.href} {...button.config.linkProps}>
              {button.config.label}
            </Link>
          </Button>
        ))}
      </div>
    </SectionWrapper>
  );
};
export default Section6;
