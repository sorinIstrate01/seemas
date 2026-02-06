import {
  IconBriefcase,
  IconCertificate,
  IconCode,
  IconFileDatabase,
} from "@tabler/icons-react";
import SectionContainer from "../../components/containers/section-container";
import SectionHeader from "../../components/headers/section-header";
import WhatSetsUsApartCard, {
  WhatSetsUsApartCardProps,
} from "./components/what-sets-us-apart-card";
import DotsGrid from "./components/dots-grid";
import LinesSVG from "./components/lines";

const cards: WhatSetsUsApartCardProps[] = [
  {
    title: "Developed by Academics with Hands-on Industry Experience",
    description:
      "SeemaS is built by a team of academics who combine extensive theoretical knowledge with hands-on experience in global taxation and valuation, ensuring solutions that are both innovative and grounded in solid, real-world expertise.",
    icon: <IconCertificate />,
    headerRightElement: <DotsGrid />,
  },
  {
    title: "Defensible Solutions for Complex Challenges",
    description:
      "Our core philosophy is to deliver elegant, streamlined solutions to the most complicated global tax and valuation problems, leveraging advanced AI to simplify and automate intricate compliance tasks.",
    icon: <IconBriefcase />,
    bgDecoration: <LinesSVG />,
  },
  {
    title: "Proprietary Global Tax and Valuation Database",
    description:
      "SeemaS maintains a proprietary, expertly curated database designed specifically to address global tax and valuation issues, enabling more accurate, data-driven analysis and recommendations for our clients.",
    icon: <IconFileDatabase />,
    bgDecoration: <LinesSVG />,
  },
  {
    title: "Silicon Valley Engineering Excellence",
    description:
      "Our top-tier engineering team, based in Silicon Valley, brings cutting-edge technology and robust software development practices to every aspect of our platform, ensuring reliability, scalability, and continuous innovation.",
    icon: <IconCode />,
    headerRightElement: <DotsGrid />,
  },
];

const WhatSetsUsApart = () => {
  return (
    <section className="bg-white">
      <SectionContainer>
        <SectionHeader
          title="SeemaS: What Sets Us Apart"
          description="Built on academic expertise, advanced engineering, and proprietary data, SeemaS delivers smart, streamlined solutions to the world’s most complex pricing and compliance challenges."
          className="max-w-[744px]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-x-6 xl:gap-y-8">
          {cards.map((card, index) => (
            <WhatSetsUsApartCard key={index} {...card} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default WhatSetsUsApart;
