import * as React from "react";
import { SuiteCard, type SuiteCardItem } from "./suite-card";

export type SuiteTemplateItem = SuiteCardItem;

export interface SuiteTemplateProps {
  items: SuiteTemplateItem[];
  center?: React.ReactNode;
}

/**
 * Unstyled template component for a "suite" panel.
 * Replace text/icons/images and add layout styles later.
 */
const SuiteTemplate = ({ items, center }: SuiteTemplateProps) => {
  const isManyItems = items.length > 4;

  const pairs = React.useMemo(() => {
    const out: SuiteTemplateItem[][] = [];
    for (let i = 0; i < items.length; i += 2) {
      out.push(items.slice(i, i + 2));
    }
    return out;
  }, [items]);

  return (
    <div>
      {!isManyItems ? (
        <div className="mt-[34px] md:mt-[58px] flex flex-col xl:mt-[101px]">
          {/* First row: 2 items */}
          {pairs[0] ? (
            <div className="flex justify-between gap-4 flex-col md:flex-row xl:gap-0 mb-4 xl:mb-0 xl:px-16">
              {pairs[0].map((item, index) => (
                <SuiteCard key={index} item={item} defaultMaxWidthPx={400} />
              ))}
            </div>
          ) : null}

          {/* Second row: center */}
          {center ? <div className="mb-12 flex justify-center order-first xl:mb-14 xl:order-none">{center}</div> : null}

          {/* Remaining rows: 2 items each */}
          {pairs.slice(1).map((pair, rowIndex) => (
            <div className="flex justify-between gap-4 flex-col md:flex-row xl:gap-0 xl:px-16" key={rowIndex}>
              {pair.map((item, index) => (
                <SuiteCard key={index} item={item} defaultMaxWidthPx={400} />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-[34px] md:mt-[58px]">
          {center ? <div className="w-fit h-fit mb-12 mx-auto block xl:hidden">{center}</div> : null}
          {/* Row 1: 2 items */}
          {items.slice(0, 2).length ? (
            <div className="flex justify-between gap-4 xl:gap-0 max-w-[844px] mx-auto mb-4 xl:mb-8">
              {items.slice(0, 2).map((item, index) => (
                <SuiteCard key={index} item={item} defaultMaxWidthPx={340} iconWrapperClassName="flex-col items-start md:flex-row md:items-center" className="flex-1 xl:flex-none"/>
              ))}
            </div>
          ) : null}

          {/* Row 2: 2 left + center + 2 right */}
          <div className="flex justify-between items-center flex-col gap-4 xl:gap-0 xl:flex-row">
            
            <div className="flex gap-4 md:gap-8 xl:flex-col">
              {items.slice(2, 4).map((item, index) => (
                <SuiteCard key={index} item={item} defaultMaxWidthPx={340} iconWrapperClassName="flex-col items-start md:flex-row md:items-center" className="flex-1 xl:flex-none"/>
              ))}
            </div>

            {center ? <div className="w-fit h-fit hidden xl:block">{center}</div> : null}

            <div className="flex gap-4 md:gap-8 xl:flex-col">
              {items.slice(4, 6).map((item, index) => (
                <SuiteCard key={index} item={item} defaultMaxWidthPx={340} iconWrapperClassName="flex-col items-start md:flex-row md:items-center" className="flex-1 xl:flex-none"/>
              ))}
            </div>
          </div>

          {/* Remaining rows: 2 items each */}
          {(() => {
            const rest = items.slice(6);
            const restPairs: SuiteTemplateItem[][] = [];
            for (let i = 0; i < rest.length; i += 2) {
              restPairs.push(rest.slice(i, i + 2));
            }

            return restPairs.map((pair, rowIndex) => (
              <div className="flex justify-between max-w-[844px] mx-auto gap-4 mt-4 xl:gap-0 xl:mt-8" key={rowIndex}>
                {pair.map((item, index) => (
                  <SuiteCard key={index} item={item} defaultMaxWidthPx={340} iconWrapperClassName="flex-col items-start md:flex-row md:items-center" className="flex-1 xl:flex-none"/>
                ))}
              </div>
            ));
          })()}
        </div>
      )}
    </div>
  );
};

export default SuiteTemplate;

