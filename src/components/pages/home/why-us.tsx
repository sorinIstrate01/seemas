import SectionWrapper from "@/components/sections/section-wrapper";
import WhyUsAccordion from "@/components/pages/home/components/why-us-accordion";
import WhyUsHighlights from "@/components/pages/home/components/why-us-highlights";
import {
  IconUserCheck,
  IconShieldCheck,
  IconSettings,
  IconUsers,
  IconFileSearch,
  IconDatabase,
  IconBolt,
} from "@tabler/icons-react";
import PatentIcon from "@/components/icons/patent-icon";
import Image from "next/image";
const background = "/assets/Why-us-background.png";
const backgroundTablet = "/assets/Why-us-background-tablet.png";
const backgroundMobile = "/assets/Why-us-background-mobile.png";

const WhyUs = () => {
  return (
    <SectionWrapper className="relative">
        <div className="absolute left-0 top-0 w-full h-full z-[1]">
            <Image src={background} alt="why-us-background" width={1920} height={724} className="w-full h-full object-cover hidden xl:block" />
            <Image src={backgroundTablet} alt="why-us-background-tablet" width={1920} height={724} className="w-full h-full object-cover hidden md:block xl:hidden" />
            <Image src={backgroundMobile} alt="why-us-background-mobile" width={1920} height={724} className="w-full h-full object-cover block md:hidden" />
        </div>
        <div className="relative z-[2] flex justify-between flex-col gap-10 xl:gap-8 xl:flex-row">
          <div className="w-auto md:max-w-[568px] flex flex-col justify-between xl:max-w-[550px]">
            <div className="flex flex-col">
                <h5 id="why-us-title" className="text-subtitle-xl md:text-h4 xl:text-h3 xl:max-w-[428px] mb-4">
                    Why <span className="text-blue-primary">Teams</span> <br className="block md:hidden"/>Choose SeemaS
                </h5>
                <p className="text-body-s xl:text-body-m text-zinc-700 mb-4">
                SeemaS helps tax and finance teams set, analyze, and document
                defensible valuation and transfer pricing terms across global
                operations.
                </p>
                <p className="text-body-s xl:text-body-m text-zinc-700">
                It provides an end-to-end solution that combines intercompany data
                management, economic analysis, and report authoring, using AI to
                streamline and strengthen the accuracy and defensibility of arm’s
                length pricing and valuation outcomes worldwide.
                </p>
            </div>
            <WhyUsHighlights
                items={[
                {
                    title: "Expert validated",
                    description:
                    "Combine AI-driven efficiency with expert-validated results you can trust.",
                    icon: <IconUserCheck size={24} color="#27272A"/>,
                },
                {
                    title: "Trusted by Enterprise Teams",
                    description:
                    "Protect your data with our SOC 2 Type II certified platform.",
                    icon: <IconShieldCheck size={24} color="#27272A"/>,
                },
                ]}
                className="flex gap-8 hidden xl:flex"
            />
          </div>
          <WhyUsAccordion
            items={[
                {
                value: "automation",
                title: "End-to-End Automation",
                description:
                    "Automate valuation and transfer pricing analysis and documentation workflows.",
                icon: <IconSettings size={24} color="#27272A"/>,
                },
                {
                value: "collaboration",
                title: "Cross-Border Collaboration",
                description:
                    "Collaborate seamlessly on intercompany pricing policies across jurisdictions.",
                icon: <IconUsers size={24} color="#27272A"/>,
                },
                {
                value: "monitoring",
                title: "Arm’s Length Monitoring",
                description:
                    "Create AI-powered workflows for setting and monitoring arm's length terms.",
                icon: <IconFileSearch size={24} color="#27272A"/>,
                },
                {
                value: "compliance",
                title: "Built-In Compliance",
                description:
                    "Stay aligned with evolving transfer pricing and valuation rules and standards.",
                icon: <PatentIcon fill="#27272A" size={24} />,
                },
                {
                value: "source-of-truth",
                title: "Single Source of Truth",
                description:
                    "Work from a single source of truth for intercompany data, methods, and policies.",
                icon: <IconDatabase size={24} color="#27272A"/>,
                },
                {
                value: "reporting",
                title: "Faster, Higher-Quality Reporting",
                description:
                    "Reduce report preparation time while improving documentation quality.",
                icon: <IconBolt size={24} color="#27272A"/>,
                },
            ]}
            className="xl:w-[480px]"
            />
            <WhyUsHighlights
                items={[
                {
                    title: "Expert validated",
                    description:
                    "Combine AI-driven efficiency with expert-validated results you can trust.",
                    icon: <IconUserCheck size={24} color="#27272A"/>,
                },
                {
                    title: "Trusted by Enterprise Teams",
                    description:
                    "Protect your data with our SOC 2 Type II certified platform.",
                    icon: <IconShieldCheck size={24} color="#27272A"/>,
                },
                ]}
                className="flex gap-8 flex xl:hidden"
            />
        </div>
    </SectionWrapper>
  );
};
export default WhyUs;
