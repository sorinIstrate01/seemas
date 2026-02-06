import { NavigationOption, TExternalLoginOption, TSubLink } from "@/types";

import {
  IconBuilding,
  IconArrowsExchange2,
  IconBrandYoutube,
  IconBrandX,
} from "@tabler/icons-react";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import IconSeemasBubbles from "@/assets/seemas-bubles.svg";
import IconAiOutlined from "@/assets/ai.svg";
import {
  ProductsDropdown,
  ProductsAccordionContent,
} from "@/components/layout/navbar/elements/products-dropdown";
import {
  ResourcesDropdown,
  ResourcesAccordionContent,
} from "@/components/layout/navbar/elements/resources-dropdown";
import { ROUTES } from "@/constants/routes";

export const professor_damodaran_socials = [
  {
    label: "Youtube",
    href: "https://www.youtube.com/@AswathDamodaranonValuation",
    icon: IconBrandYoutube,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aswathdamodaran/",
    iconProps: { fill: "currentColor" },
    icon: LinkedinIcon,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/aswathdamodaran",
    icon: IconBrandX,
  },
];
export const products_navigation: TSubLink[] = [
  {
    label: "Transfer Pricing",
    href: ROUTES.TRANSFER_PRICING,
    icon: IconArrowsExchange2,
  },
  {
    label: "Valuation Suite",
    href: ROUTES.VALUATION_SUITE,
    icon: IconBuilding,
  },
];

const main_navigation: NavigationOption[] = [
  {
    label: "Platform Overview",
    href: ROUTES.PLATFORM_OVERVIEW,
  },
  {
    label: "Products",
    dropDown: <ProductsDropdown />,
    accordion: <ProductsAccordionContent />,
  },
  {
    label: "Ask Damodaran",
    href: ROUTES.DAMODARAN_AI,
  },
  {
    label: "About Us",
    href: ROUTES.ABOUT_US,
  },
  {
    label: "Resources",
    dropDown: <ResourcesDropdown />,
    accordion: <ResourcesAccordionContent />,
  },
];

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/seemas-ai",
  // twitter: "https://twitter.com/seemas",
  // youtube: "https://www.youtube.com/@AswathDamodaranonValuation",
};

export const external_links = {
  platform: "https://mercury.seemas.ai/",
  damodaran_ai: "https://damodaran.seemas.ai/",
  seemas_taxiq: "https://damodaran.dev.seemas.io/?tab=taxiq",
  careers: "https://seemas.bamboohr.com/careers",
};
export const external_loginOptions: TExternalLoginOption[] = [
  {
    label: "SeemaS Platform",
    href: external_links.platform,
    icon: IconSeemasBubbles,
    iconProps: { fill: "currentColor", stroke: "currentColor" },
    className: "hidden xl:flex"
  },
  {
    label: "Ask Damodaran",
    href: external_links.damodaran_ai,
    icon: IconAiOutlined,
    iconProps: { fill: "currentColor", stroke: "currentColor" },
  },
  {
    label: "SeemaS Tax IQ",
    href: external_links.seemas_taxiq,
    icon: IconAiOutlined,
    iconProps: { fill: "currentColor", stroke: "currentColor" },
  },
];

export const siteConfig = {
  name: "SeemaS",
  browser_logo: "/assets/blue-bubbles.svg",
  navigation: {
    main: main_navigation,
    cta: {
      label: "Book a demo",
      href: "mailto:atulya.sarin@seemas.ai",
    },
  },
  external_links,
  valuation_faq: [
    {
      name: "Tangible Assets",
      content: [
        {
          name: "Business Valuation",
          points: ["Going Concern", "Liquidation"],
        },
        { name: "Real Assets", points: ["Goods", "Real States"] },
        {
          name: "Cash Flow Streams",
          points: ["Factoring", "Profit Sharing", "Revenue Sharing"],
        },
      ],
    },
    {
      name: "Intangible Assets",
      content: [
        {
          name: "",
          points: [
            "Brands",
            "Trademarks",
            "Tradenames",
            "Patents",
            "Copyrights",
            "Knowhow",
            "Media Rights",
            "Naming Rights",
          ],
        },
      ],
    },
    {
      name: "Services",
      content: [
        {
          name: "",
          points: [
            "Manufacturing",
            "Selling",
            "Administrative",
            "Distributing",
            "Marketing",
            "R&D",
          ],
        },
      ],
    },
    {
      name: "Financial Products",
      content: [
        {
          name: "",
          points: ["Preferred Shares"],
        },
        {
          name: "Debt",
          points: ["Conventional", "Convertible"],
        },
        {
          name: "Derivatives",
          points: ["Futures", "Options", "Swaps"],
        },
      ],
    },
  ],
} as const;
