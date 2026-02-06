import SubNav, {
  SubNavProps,
} from "@/components/layout/navbar/elements/sub-nav";
import { products_navigation, external_links } from "@/config/site";
const data: SubNavProps = {
  platform: {
    name: "SeemaS Platform",
    links: products_navigation,
  },
  actionButtons: {
    mainBtn: {
      children: "Go to Damodaran Valuation",
      href: external_links.platform,
      linkProps: {
        target: "_blank",
      },
    },
  },
};

const PlatformSubnav = () => {
  return <SubNav data={data} />;
};
export default PlatformSubnav;
