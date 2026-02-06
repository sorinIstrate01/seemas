import HeroSection from "@/views/about-us/hero-section";
import InvestorsSection from "@/views/about-us/investors-section";
import TeamSection from "@/views/about-us/team-section";
import Culture from "@/views/about-us/culture";
import React from "react";
import PageWrapper from "@/components/pages/page-wrapper";
import SectionQuote from "@/views/about-us/section-quote";

const investors = [
  {
    name: "Lip-Bu Tan",
    role: "Chief Executive Officer",
    image: "/about-us/investors/lip-bu-tan.png",
    bottomCaption: "Intel Corporation",
  },
  {
    name: "Amarjit Gill",
    role: "Venture Capitalist",
    image: "/about-us/investors/amarjit-gill.png",
  },
  {
    name: "Andrew Tan",
    role: "Managing Director",
    image: "/about-us/investors/andrew-tan.png",
    bottomCaption: "A&E Investments",
  },
  {
    name: "Rajiv Khemani",
    role: "Venture Capitalist",
    image: "/about-us/investors/rajiv-khemani.png",
  },
]

const advisoryBoard = [
  {
    name: "Raman Chitkara",
    role: "Former Chief Technology Officer",
    image: "/about-us/investors/raman-chitkara.png",
    bottomCaption: "PwC",
  },
  {
    name: "Jay Kushner",
    role: "Former Head of Tax",
    image: "/about-us/investors/jay-kushner.png",
    bottomCaption: "PepsiCo and Viacom, Inc.",
  },
  {
    name: "Achin Bhowmik",
    role: "Placeholder",
    image: "/about-us/investors/jay-kushner.png",
    bottomCaption: "Placeholder",
  },

]
const AboutUsPage = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <TeamSection />
      <InvestorsSection
        title="Our Investors"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        items={investors}
      />
      <InvestorsSection
        title="Our Advisory Board"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        items={advisoryBoard}
      />
      <SectionQuote />
      <Culture />
    </PageWrapper>
  );
};

export default AboutUsPage;
