import ProfileCard, { ProfileType } from "@/components/cards/profile-card";
import SectionContainer from "@/components/containers/section-container";
import SectionHeader from "@/components/headers/section-header";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import {
  domainTeamMembers,
  leadershipTeamMembers,
  technicalTeamMembers,
} from "./constants";
import CarouselBtns, {
  CarouselBtnProps,
} from "./elements/team-tab-btns-container";

const tabs: (CarouselBtnProps & { members: ProfileType[] })[] = [
  {
    label: "Leadership Team",
    members: leadershipTeamMembers,
  },
  {
    label: "Domain Team",
    members: domainTeamMembers,
  },
  {
    label: "Technical Team",
    members: technicalTeamMembers,
  },
];

const TeamSection = () => {
  return (
    <div className="bg-zinc-50">
      <SectionContainer>
        <SectionHeader
          title="Our Team"
          description={
            <>
              Behind SeemaS is a world-class team of experts{" "}
              <br className="hidden md:inline xl:hidden" /> dedicated to
              reshaping the future of tax compliance.
            </>
          }
          titleClassName="text-h4 md:text-h3"
          descriptionClassName="text-body-m"
          headingLevel="h2"
        />
        <Tabs defaultValue={tabs[0].label} className="flex flex-col gap-14">
          <TabsList className="gap-2">
            <CarouselBtns
              btnsList={tabs}
              buttonProps={{ variant: "tab", className: "" }}
              carouselItemClassName="basis-[fit-content] last:pr-4"
            />
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.label} value={tab.label}>
              <div className="grid xl:flex xl:flex-wrap xl:justify-center grid-cols-4 gap-2 md:gap-8">
                {tab.members.map((item) => (
                  <ProfileCard
                    key={item.name}
                    {...item}
                    className={cn("xl:w-[296px]", "col-span-2", item.className)}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </SectionContainer>
    </div>
  );
};

export default TeamSection;
