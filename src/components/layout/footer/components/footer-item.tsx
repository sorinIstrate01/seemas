import { LinkWrapper } from "@/components/custom-ui/link-wrapper";

interface FooterItemProps {
  href: string;
  label: string;
}

const FooterItem = ({ href, label }: FooterItemProps) => {
  return (
    <LinkWrapper
      href={href}
      className="text-white text-button hover:text-zinc-300 transition-colors"
    >
      {label}
    </LinkWrapper>
  );
};

export default FooterItem;
