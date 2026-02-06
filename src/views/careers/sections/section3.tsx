import SectionWrapper from "@/components/sections/section-wrapper";
import { Button } from "@/components/ui/button";
import {
  IconMail,
  IconBrandLinkedinFilled,
  IconListSearch,
  IconExternalLink,
} from "@tabler/icons-react";
import Link from "next/link";
import { SOCIALS, external_links } from "@/config/site";
import CopyBtn from "./CopyBtn";
const items = [
  {
    icon: IconMail,
    content: (
      <>
        Email us at <br className="md:hidden" />
        <Link
          href="mailto:careers@seemas.com"
          className="text-blue-primary hover:underline"
        >
          careers@seemas.com
        </Link>
      </>
    ),
    copyText: "careers@seemas.com",
  },
  {
    icon: IconBrandLinkedinFilled,
    content: "Follow us on LinkedIn",
    href: SOCIALS.linkedin,
  },
  {
    icon: IconListSearch,
    content: "See open positions",
    href: external_links.careers,
  },
];
const Section3 = () => {
  return (
    <SectionWrapper
      contentWrapperClassName="flex flex-col xl:flex-row gap-12 xl:gap-16 xl:max-w-[1080px] p-6 md:p-8 border border-white rounded-xl bg-[#fafafae6] backdrop-blur-[50px] relative overflow-hidden"
      className="xl:py-[180px]"
      id="connect"
    >
      <div
        className="absolute w-[329px] h-[328px] rounded-full -left-[52px] -bottom-[105px] md:-left-[113.5px] md:-bottom-[115px] xl:-left-[110px] xl:-bottom-[150.5px] blur-[50px]"
        style={{
          background:
            "linear-gradient(139deg, rgba(92, 133, 213, 0.10) 20.3%, rgba(195, 167, 243, 0.10) 84.35%)",
        }}
      />
      <div
        className="absolute w-[266px] h-[265px] md:w-[329px] md:h-[328px] rounded-full -right-[133px] -top-[96px] md:-right-[132.5px] md:-top-[183px] xl:top-auto xl:-right-[110px] xl:-bottom-[6.5px] blur-[50px]"
        style={{
          background:
            "linear-gradient(139deg, rgba(92, 133, 213, 0.10) 20.3%, rgba(195, 167, 243, 0.10) 84.35%)",
        }}
      />
      <div className="flex flex-col gap-10 w-full xl:w-[504px] relative">
        <div className="flex flex-col gap-4 w-full">
          <h5 className="text-subtitle-xl md:text-h4 text-zinc-900">
            Connect with us
          </h5>
          <p className="text-zinc-600 text-body-m">
            Think you&apos;re a good fit for the team? Simply send us your
            resume and a short note telling us how and why you can make a
            positive contribution to SeemaS.
            <br />
            <br />
            <span className="text-zinc-900">
              {" "}
              Let&apos;s build the future of global tax & valuation together!
            </span>
          </p>
        </div>
        <Button asChild size={"L"} className="hidden xl:inline-flex w-fit">
          <Link target="_blank" href={external_links.careers}>
            Come Work with Us
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-4 xl:flex-1">
        {items.map((item, i) => {
          const Component = item.href ? Link : "div";
          return (
            <Component
              href={item.href!}
              target={item.href ? "_blank" : undefined}
              key={i}
              className="p-2 pr-4 flex gap-3 items-center rounded-xl bg-[#ffffffb3] border border-white backdrop-blur-[2px] group/careers-item relative overflow-hidden"
            >
              <div
                className="absolute size-[60px] rounded-full -left-[10px] -bottom-[2.5px] blur-[8px]"
                style={{
                  background:
                    "linear-gradient(139deg, rgba(92, 133, 213, 0.10) 20.3%, rgba(195, 167, 243, 0.10) 84.35%)",
                }}
              ></div>
              <div className="flex gap-3 flex-1 items-center relative">
                <div className="p-2 rounded-lg bg-[#ffffff80] w-fit backdrop-blur-[2px] border border-white">
                  <item.icon size={24} className="size-6 text-zinc-800" />
                </div>
                <p className="text-subtitle-xs text-zinc-800">{item.content}</p>
              </div>
              {item.copyText && <CopyBtn text={item.copyText} />}
              {item.href && (
                <IconExternalLink
                  size={20}
                  className="group-hover/careers-item:text-blue-primary relative"
                />
              )}
            </Component>
          );
        })}
      </div>
      <Button asChild size={"L"} className="xl:hidden w-fit">
        <Link target="_blank" href={external_links.careers}>
          Come Work with Us
        </Link>
      </Button>
    </SectionWrapper>
  );
};
export default Section3;
