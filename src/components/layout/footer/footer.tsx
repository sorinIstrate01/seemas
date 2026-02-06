import LinkedinIcon from "@/components/icons/linkedin-icon";
import { ROUTES } from "@/constants/routes";
import Logo from "../../../../public/footer/logo";
import FooterItem from "./components/footer-item";
import LegalSection from "./components/legal-section";
import SocialIcon from "./components/social-icon";

const socialIcons = [
  {
    icon: <LinkedinIcon />,
    href: "https://www.linkedin.com/company/seemas-ai",
  },
];

const footerLinks = [
  {
    title: "Platform",
    items: [
      { label: "Overview", href: ROUTES.PLATFORM_OVERVIEW },
      { label: "Valuation Suite", href: ROUTES.VALUATION_SUITE },
      {
        label: "Global Tax Management",
        href: ROUTES.GLOBAL_TAX_MANAGEMENT,
      },
      { label: "Damodaran AI", href: ROUTES.DAMODARAN_AI },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: ROUTES.ABOUT_US },
      { label: "Contact Sales", href: ROUTES.BOOK_DEMO },
      { label: "Careers", href: ROUTES.CAREERS },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "FAQ", href: ROUTES.FAQ },
      { label: "SeemaSphere", href: ROUTES.SPHERE },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-background-dark px-4 pt-12 pb-8 md:px-8 md:pt-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col justify-between md:flex-row gap-8 md:gap-12 pb-[31px] md:pb-[47px] border-b border-zinc-800 mb-8">
          <div className="flex flex-col items-center text-center md:text-left md:items-stretch gap-4 pb-[31px] border-b border-zinc-800 md:pb-0 md:border-b-0">
            <Logo />
            <p className="text-zinc-400 text-body-s max-w-[383px]">
              Powered by AI and founded by world-renowned experts on global
              taxation and valuation.
            </p>
            <div className="flex items-center gap-2">
              {socialIcons.map(icon => (
                <SocialIcon key={icon.href} href={icon.href}>
                  {icon.icon}
                </SocialIcon>
              ))}
            </div>
          </div>
          <nav className="flex flex-wrap mx-auto md:mx-0 shrink-0 gap-6 md:gap-8 xl:gap-16 md:pr-8">
            {footerLinks.map(({ title, items }) => (
              <div key={title}>
                <h6 className="text-body-s text-zinc-400 mb-3">{title}</h6>
                <ul className="flex flex-col gap-2">
                  {items.map(({ label, href }) => (
                    <li key={label} className="inline-flex">
                      <FooterItem href={href} label={label} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <LegalSection />
      </div>
    </footer>
  );
};

export default Footer;
