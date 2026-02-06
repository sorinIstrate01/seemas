"use client";

import { IconSquare } from "@tabler/icons-react";

import {
  Dropdown,
  DropdownItem,
  dropdownParentStyles,
} from "@/components/atoms/dropdown/Dropdown";
import {
  ItemText,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const options = [
  {
    label: "Light",
    value: "light",
  },
  {
    label: "Dark",
    value: "dark",
  },
  {
    label: "System",
    value: "system",
  },
  {
    label: "Custom",
    value: "custom",
  },
  {
    label: "Custom1",
    value: "custom1",
  },
  {
    label: "Custom2",
    value: "custom2",
  },
  {
    label: "Custom3",
    value: "custom3",
  },
  {
    label: "Custom4",
    value: "custom4",
  },
  {
    label: "Custom5",
    value: "custom5",
  },
  {
    label: "Custom6",
    value: "custom6",
  },
];
const InternalSelect = () => {
  return (
    <Select
    // open={open} onOpenChange={(open) => setOpen(true)}
    >
      <SelectTrigger className="w-[110px] min-w-[110px] h-6 px-2 py-1 gap-1 rounded-md border border-gray-100 bg-neutral-25 typography-caption-base truncate text-gray-800 disabled:text-gray-400 disabled:bg-neutral-100 outline-none right-0">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className={dropdownParentStyles()}>
        <Dropdown>
          {options.map(option => (
            <SelectItem
              key={option.value}
              value={option.value}
              showRightIcon
              asChild
            >
              <DropdownItem
                caption="Caption"
                StartIcon={IconSquare}
                option={option}
              >
                <ItemText>{option.label}</ItemText>
              </DropdownItem>
            </SelectItem>
          ))}
        </Dropdown>
      </SelectContent>
    </Select>
  );
};
export default InternalSelect;
