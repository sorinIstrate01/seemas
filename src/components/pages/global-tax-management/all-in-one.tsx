import IconContainer from "@/components/containers/icon-container";
import SectionHeader from "@/components/sections/section-header";
import SectionWrapper from "@/components/sections/section-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconArrowNarrowRight, IconPoint } from "@tabler/icons-react";
import Link from "next/link";

type AllInOneProps = {
  title: string;
  description: string;
  cards: {
    title: string;
    description: string;
    icon: React.ElementType;
    points: string[];
    link: string;
  }[];
  cardsClassName?: string;
};

const AllInOne = ({
  title,
  description,
  cards,
  cardsClassName,
}: AllInOneProps) => {
  return (
    <SectionWrapper contentWrapperClassName="flex flex-col gap-8 md:gap-14">
      <SectionHeader
        className="gap-4 mx-auto"
        title={title}
        description={description}
        descriptionClassName="xl:w-[834px] text-body-m"
      />
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-4 gap-x-8 md:gap-x-6 gap-y-8",
          cardsClassName
        )}
      >
        {cards.map((item, index) => {
          const isSingle = cards.length % 2 === 1;

          return (
            <Link
              href={item.link}
              key={index}
              className={cn(
                "h-full md:col-span-2",
                isSingle && "md:last:col-start-2"
              )}
            >
              <div className="flex flex-col gap-4 h-full border border-zinc-100 bg-white p-6 rounded-xl relative overflow-hidden group/item md:col-span-2 grid-cols-subgrid">
                <div className="flex w-full justify-between">
                  <IconContainer className="bg-zinc-50 size-12 [&_svg]:size-6 [&_svg]:stroke-[1.5px] rounded-xl">
                    <item.icon />
                  </IconContainer>
                  <Button
                    variant="layer"
                    size="iconL"
                    className="xl:group-hover/item:opacity-100 xl:opacity-0 xl:transition-opacity duration-100"
                  >
                    <IconArrowNarrowRight size={20} />
                  </Button>
                </div>

                <div className="flex flex-col">
                  <span className="text-subtitle-m text-zinc-900">
                    {item.title}
                  </span>
                  <span className="text-body-m text-blue-primary">
                    {item.description}
                  </span>
                </div>

                <ul className="flex flex-col gap-1">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-body-m text-zinc-700 list-none flex items-center gap-1"
                    >
                      <IconPoint size={16} className="text-zinc-500" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div
                  className="absolute w-[296px] h-[191px] -bottom-[93px] -right-[137px] rotate-[19deg] opacity-10 blur-[75px]"
                  style={{
                    background:
                      "linear-gradient(168deg, #5C85D5 40.23%, #C3A7F3 100.33%)",
                  }}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
export default AllInOne;
