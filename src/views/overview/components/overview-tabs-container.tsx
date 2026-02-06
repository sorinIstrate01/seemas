"use client";

import {
  IconBuilding,
  IconChartLine,
  IconSettings,
  IconUser,
  IconUsersGroup,
} from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import GroupIcon from "../../../components/icons/group-icon";
import SectionTab from "../../../components/tabs/section-tab";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../components/ui/carousel";
import { Tabs, TabsContent } from "../../../components/ui/tabs";

const tabs = [
  {
    label: "Business Valuation",
    value: "business-valuation",
    icon: <IconBuilding size={16} />,
  },
  {
    label: "Service Valuation",
    value: "service-valuation",
    icon: <IconSettings size={16} />,
  },
  {
    label: "Loan Valuation",
    value: "loan-valuation",
    icon: <IconChartLine size={16} />,
  },
  {
    label: "AI Expert",
    value: "ai-expert",
    icon: <GroupIcon />,
  },
  {
    label: "Your Workspace",
    value: "your-workspace",
    disabled: true,
    icon: <IconUser size={16} />,
  },
  {
    label: "Work in Teams",
    value: "work-in-teams",
    disabled: true,
    icon: <IconUsersGroup size={16} />,
  },
];

const OverviewTabsContainer = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  return (
    <div className="relative z-10 overflow-hidden">
      <Tabs
        value={activeTab}
        className="rounded-2xl bg-white h-full px-4 pt-4 border border-neutral-75 flex flex-col gap-4 md:px-4"
      >
        <Carousel
          opts={{
            dragFree: true,
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent
            className="ml-0 gap-2"
            containerClassName="overflow-visible relative"
          >
            {tabs.map((tab) => (
              <CarouselItem
                key={tab.value}
                className='first:ml-auto last:mr-auto flex-initial min-w-["auto"] pl-0'
              >
                <SectionTab
                  onClick={() => {
                    if (tab.disabled) return;
                    console.log("SectionTab");
                    setActiveTab(tab.value);
                  }}
                  showBadge={tab.disabled}
                  active={activeTab === tab.value}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </SectionTab>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {tabs.map((tab) => (
          <TabsContent
            key={tab.value}
            value={tab.value}
            className="bg-neutral-50 p-4 rounded-2xl md:p-6  overflow-hidden relative"
          >
            <div className="relative w-full min-h-[304px] md:min-h-[400px] xl:min-h-[604px]">
              <Image
                src={`/overview/hero-section/${tab.value}.png`}
                alt={tab.label}
                layout="responsive"
                width={486}
                height={304}
                className=" min-w-[486px] md:w-full rounded-t-2xl aspect-[243/152] object-cover object-left-top b-auto"
                quality={95}
              />
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <div
        className="absolute bottom-0 left-0 right-0 h-[90px] z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(250, 250, 250, 0.00) 0%, #FAFAFA 100%)",
        }}
      />
    </div>
  );
};

export default OverviewTabsContainer;
