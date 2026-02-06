import * as React from "react";
import { useCallback } from "react";

import { SelectProps } from "@radix-ui/react-select";
import { IconChevronDown } from "@tabler/icons-react";

import { Icon } from "@/components/Icon/Icon";
import {
  Dropdown,
  DropdownItem,
  dropdownParentStyles,
} from "@/components/atoms/dropdown/Dropdown";
import { inputVariants } from "@/components/atoms/inputs/Input";
import { InputWrapper } from "@/components/atoms/inputs/InputWrapper";
import {
  ItemText,
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { BaseOption, SelectFieldBaseProps } from "@/types/ui/fields";

import { FieldStartElements } from "../common/FieldElements";
import { FieldWrapper } from "../common/FieldWrapper";

interface SelectFieldProps<T extends BaseOption>
  extends SelectFieldBaseProps<T>,
    SelectProps {
  id?: string;
  ref?: React.RefObject<React.FC<SelectProps>>;
  placeholder?: string;
  selectTriggerProps?: Omit<
    React.ComponentProps<typeof SelectTrigger>,
    "children"
  >;
  selectValueProps?: Omit<
    React.ComponentProps<typeof SelectValue>,
    "children" | "placeholder"
  >;
}

function SelectField<T extends BaseOption>({
  label,
  // hint,
  // caption,
  bottomHint,
  // endButtonConfig,
  error,
  // startElement,
  StartIcon,
  startImg,
  options,
  labelKey,
  valueKey,
  placeholder,
  size,
  selectTriggerProps,
  selectValueProps,
  ...props
}: SelectFieldProps<T>) {
  // Combine endElement with clear icon

  const getOptionLabel = useCallback(
    (option: T): string => {
      if (typeof option === "string") return option;
      return String(option[labelKey as keyof T] ?? option["label"]);
    },
    [labelKey]
  );

  const getOptionValue = useCallback(
    (option: T): string => {
      if (typeof option === "string") return option;
      return String(option[valueKey as keyof T] ?? option["value"]);
    },
    [valueKey]
  );
  const selectedOption = React.useMemo(() => {
    return options.find(option => getOptionValue(option) === props.value);
  }, [options, props.value, getOptionValue]);
  const startImage = React.useMemo(() => {
    if (typeof selectedOption === "object" && selectedOption?.startImg) {
      return selectedOption.startImg;
    }
    return startImg;
  }, [selectedOption, startImg]);
  const startIcon = React.useMemo(() => {
    if (typeof selectedOption === "object" && selectedOption?.StartIcon) {
      return selectedOption.StartIcon;
    }
    return StartIcon;
  }, [selectedOption, StartIcon]);

  // const startPadding = React.useMemo(() => {
  //   const isOptionObject = typeof selectedOption === "object";
  //   return (StartIcon || (isOptionObject && selectedOption?.StartIcon)) &&
  //     (startImg || (isOptionObject && selectedOption?.startImg))
  //     ? "pl-16"
  //     : StartIcon ||
  //         (isOptionObject && selectedOption?.StartIcon) ||
  //         startImg ||
  //         (isOptionObject && selectedOption?.startImg)
  //       ? "pl-8"
  //       : "";
  // }, [StartIcon, startImg, selectedOption]);

  return (
    <FieldWrapper
      label={label}
      // hint={hint}
      // caption={caption}
      // endButtonConfig={endButtonConfig}
      bottomHint={bottomHint}
      error={error}
    >
      {/* <InputWrapper
        startElement={
          <FieldStartElements StartIcon={startIcon} startImg={startImage} />
        }
      > */}
      <Select {...props} value={props.value || ""}>
        <SelectTrigger
          {...selectTriggerProps}
          className={cn(
            // "h-11 border border-gray-200 px-4 py-3 gap-2 rounded-2xl focus:border-blue-secondary outline-hidden",
            "px-0",
            inputVariants({ size }),
            selectTriggerProps?.className,
            props.value ? "" : "text-gray-400!",
            "py-0"
          )}
          hideChevron={true}
        >
          <InputWrapper
            startElement={
              <FieldStartElements StartIcon={startIcon} startImg={startImage} />
            }
            endElement={
              <SelectIcon className="chevron-wrapper">
                <Icon
                  icon={IconChevronDown}
                  size={20}
                  className="group-data-[state=open]:rotate-180"
                />
              </SelectIcon>
            }
          >
            <div className="flex-1 w-full">
              <SelectValue
                // aria-label={props.value ?? undefined}
                placeholder={placeholder}
                {...selectValueProps}
              />
            </div>
          </InputWrapper>
        </SelectTrigger>
        <SelectContent
          onCloseAutoFocus={e => {
            e.preventDefault();
          }}
          className={dropdownParentStyles()}
        >
          <Dropdown>
            {options?.map((option, index) => {
              const label = getOptionLabel(option);
              return (
                <SelectItem
                  value={getOptionValue(option)}
                  key={`${label}_${index}`}
                  asChild
                >
                  <DropdownItem option={option}>
                    <ItemText>{label}</ItemText>
                  </DropdownItem>
                </SelectItem>
              );
            })}
          </Dropdown>
        </SelectContent>
      </Select>
      {/* </InputWrapper> */}
    </FieldWrapper>
  );
}

SelectField.displayName = "SelectField";

export { SelectField, type SelectFieldProps };
