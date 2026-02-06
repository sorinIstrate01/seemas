import React from "react";
import { IconChevronsRight, IconChevronsDown } from "@tabler/icons-react";
import { cn } from "@/lib/utils";


export interface PlatformCard {
    icon: React.ReactNode;
    title: string;
    description?: string;
}

export interface PlatformCardsProps {
    cards: PlatformCard[];
    className?: string;
}

// Check if we should render descriptions for this set of cards.
const hasDescription = (cards: PlatformCard[]) => cards.some((card) => card.description);


const PlatformCards = ({ cards, className }: PlatformCardsProps) => {
  const showDescription = hasDescription(cards);

  return (
    <div
      className={cn(
        "flex flex-col gap-[2px] md:items-center w-full md:flex-row",
        showDescription ? "md:items-start xl:items-center md:flex-col xl:flex-row" : "",
        className
      )}
    >
      {cards.map((card, index) => (
        <React.Fragment key={card.title}>
          <div
            className={cn(
              "flex items-center md:justify-center px-4 py-4 w-full gap-3 bg-[#ffffff40] rounded-xl shadow-[inset_4px_4px_20px_0_rgba(255,255,255,0.35)] border border-2 border-white md:px-0 md:flex-col xl:py-8",
              showDescription ? "bg-[#FFFFFFB2] flex-col items-start xl:justify-start gap-0 md:p-4 xl:px-6 xl:py-6 xl:h-[204px]" : ""
            )}
          >
            {showDescription ? (
              <>
                {/* Wrapper ONLY when descriptions are present */}
                <div className="flex items-center gap-3 xl:flex-col xl:items-start">
                  <div className="flex">{card.icon}</div>
                  <p className="text-subtitle-xs xl:text-subtitle-m text-zinc-900">
                    {card.title}
                  </p>
                </div>
                <p className="text-body-s text-zinc-700 mt-3">{card.description}</p>
              </>
            ) : (
              <>
                {/* No wrapper when no descriptions */}
                <div className="flex">{card.icon}</div>
                <p className="text-subtitle-xs xl:text-subtitle-m text-zinc-900">{card.title}</p>
              </>
            )}
          </div>
          {index < cards.length - 1 ? (
            <div
              className={cn(
                "flex",
                showDescription
                  ? // Match mobile: start aligned + left margin on the icon.
                    "items-start justify-start md:items-start md:justify-start"
                  : "md:items-center md:justify-center"
              )}
            >
              {showDescription ? (
                <>
                  {/* Vertical connector for the stacked layout */}
                  <IconChevronsDown className="block ml-[20px] md:block xl:hidden w-[16px] h-[16px] xl:w-[20px] xl:h-[20px] text-gray-400" />
                  {/* Back to horizontal on xl when the cards become a row */}
                  <IconChevronsRight className="hidden xl:block w-[16px] h-[16px] xl:w-[20px] xl:h-[20px] text-gray-400" />
                </>
              ) : (
                <>
                  <IconChevronsRight className="hidden md:block w-[16px] h-[16px] xl:w-[20px] xl:h-[20px] text-gray-400" />
                  <IconChevronsDown className="block ml-[26px] md:hidden w-[16px] h-[16px] xl:w-[20px] xl:h-[20px] text-gray-400" />
                </>
              )}
            </div>
          ) : null}
        </React.Fragment> 
      ))}
    </div>
  );
};

export default PlatformCards;