"use client";

import * as React from "react";

export interface SuitesTab {
  title: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface SuitesTabsProps {
  tabs: SuitesTab[];
  /** First tab is the first child. */
  children: React.ReactNode;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  "aria-label"?: string;
}

const SuitesTabs = ({
  tabs,
  children,
  defaultValue,
  onValueChange,
  "aria-label": ariaLabel = "Suites tabs",
}: SuitesTabsProps) => {
  const childPanels = React.Children.toArray(children);

  const initialActive =
    defaultValue && tabs.some((t) => t.value === defaultValue)
      ? defaultValue
      : tabs[0]?.value;

  const [activeValue, setActiveValue] = React.useState<string | undefined>(
    initialActive
  );

  React.useEffect(() => {
    setActiveValue(initialActive);
  }, [initialActive]);

  if (!tabs.length) return null;

  const setActive = (value: string) => {
    setActiveValue(value);
    onValueChange?.(value);
  };

  return (
    <div data-slot="suites-tabs" className="flex flex-col items-center w-full ">
      <div role="tablist" aria-label={ariaLabel} className="flex gap-[2px] p-[2px] bg-white rounded-xl w-fit mt-[56px]">
        {tabs.map((tab) => {
          const isActive = tab.value === activeValue;
          const tabId = `suites-tab-${tab.value}`;
          const panelId = `suites-tabpanel-${tab.value}`;

          return (
            <button
              key={tab.value}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              disabled={tab.disabled}
              onClick={() => setActive(tab.value)}
              data-state={isActive ? "active" : "inactive"}
              className={`font-medium text-zinc-800 py-2 px-3 text-body-s rounded-[10px] hover:bg-gray-100 focus-visible:bg-gray-100 transition-all duration-300 ${isActive ? "bg-gray-100" : ""}`}
            >
              {tab.title}
            </button>
          );
        })}
      </div>

      {tabs.map((tab, index) => {
        const isActive = tab.value === activeValue;
        const tabId = `suites-tab-${tab.value}`;
        const panelId = `suites-tabpanel-${tab.value}`;

        return (
          <div
            key={tab.value}
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId}
            hidden={!isActive}
            data-state={isActive ? "active" : "inactive"}
            className="w-full"
          >
            {childPanels[index] ?? null}
          </div>
        );
      })}
    </div>
  );
};

export default SuitesTabs;