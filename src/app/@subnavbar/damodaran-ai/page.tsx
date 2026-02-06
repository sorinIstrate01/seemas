import SubNav, {
  SubNavProps,
} from "@/components/layout/navbar/elements/sub-nav";
import IconStar from "@/assets/star-outlined.svg";
import { external_links } from "@/config/site";
const data: SubNavProps = {
  platform: {
    name: "Damodaran AI",
    links: [],
    icon: <IconStar fill="none" stroke="currentColor" className="size-6" />,
  },
  actionButtons: {
    mainBtn: {
      children: "Go to Damodaran AI",
      href: external_links.damodaran_ai,
      linkProps: {
        target: "_blank",
      },
    },
    // secondaryBtn: {
    //   children: "Schedule a Demo",
    //   href: "/",
    // },
  },
};
export default function DamodaranAiSubnavbar() {
  return <SubNav data={data} />;
}
