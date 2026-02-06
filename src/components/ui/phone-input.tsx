import * as React from "react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  // CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

type PhoneInputProps = Omit<
  React.ComponentProps<"input">,
  "onChange" | "value" | "ref"
> &
  Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void;
  };

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
  React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
    ({ className, onChange, value, ...props }, ref) => {
      return (
        <RPNInput.default
          ref={ref}
          className={cn("flex gap-3", className)}
          flagComponent={FlagComponent}
          countrySelectComponent={CountrySelect}
          inputComponent={InputComponent}
          smartCaret={false}
          value={value || undefined}
          /**
           * Handles the onChange event.
           *
           * react-phone-number-input might trigger the onChange event as undefined
           * when a valid phone number is not entered. To prevent this,
           * the value is coerced to an empty string.
           *
           * @param {E164Number | undefined} value - The entered value
           */
          onChange={value => onChange?.(value || ("" as RPNInput.Value))}
          {...props}
        />
      );
    }
  );
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => (
  <Input className={cn(className)} {...props} ref={ref} />
));
InputComponent.displayName = "InputComponent";

type CountryEntry = { label: string; value: RPNInput.Country | undefined };

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  options: CountryEntry[];
  onChange: (country: RPNInput.Country) => void;
};

const CountrySelect = ({
  disabled,
  value: selectedCountry,
  options: countryList,
  onChange,
}: CountrySelectProps) => {
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  // const [searchValue, setSearchValue] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const selectedContriesPrefix = selectedCountry
    ? RPNInput.getCountryCallingCode(selectedCountry)
    : null;
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen} modal>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="flex gap-2 outline-none outline-0 ring-0 min-h-11 h-11 rounded-xl border border-zinc-200 text-body-s text-zinc-800 focus:z-10 aria-expanded:border-gray-400 group py-2.5 min-w-[112px] w-[112px]"
          disabled={disabled}
        >
          <div className="flex items-center gap-0.5">
            <FlagComponent
              country={selectedCountry}
              countryName={selectedCountry}
            />

            <div className="ml-auto [&>svg]:!size-3">
              <IconChevronDown
                size={12}
                className="group-data-[state=open]:hidden"
              />
              <IconChevronUp
                size={12}
                className="group-data-[state=open]:block hidden"
              />
            </div>
          </div>
          {selectedContriesPrefix && (
            <span className="text-body-s text-zinc-800 flex-1">
              (+{selectedContriesPrefix})
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[256px] h-[256px] p-0 border border-gray-100 rounded-xl">
        <Command>
          {/* <CommandInput
            value={searchValue}
            onValueChange={value => {
              setSearchValue(value);
              setTimeout(() => {
                if (scrollAreaRef.current) {
                  const viewportElement = scrollAreaRef.current.querySelector(
                    "[data-radix-scroll-area-viewport]"
                  );
                  if (viewportElement) {
                    viewportElement.scrollTop = 0;
                  }
                }
              }, 0);
            }}
            placeholder="Search country..."
          /> */}
          <CommandList>
            <ScrollArea ref={scrollAreaRef} className="h-72 w-full">
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup className="">
                {countryList.map(({ value, label }) =>
                  value ? (
                    <CountrySelectOption
                      key={value}
                      country={value}
                      countryName={label}
                      selectedCountry={selectedCountry}
                      onChange={onChange}
                      onSelectComplete={() => setIsOpen(false)}
                    />
                  ) : null
                )}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

interface CountrySelectOptionProps extends RPNInput.FlagProps {
  selectedCountry: RPNInput.Country;
  onChange: (country: RPNInput.Country) => void;
  onSelectComplete: () => void;
}

const CountrySelectOption = ({
  country,
  countryName,
  selectedCountry,
  onChange,
  onSelectComplete,
}: CountrySelectOptionProps) => {
  const handleSelect = () => {
    onChange(country);
    onSelectComplete();
  };

  return (
    <CommandItem
      className={cn(
        "gap-2 py-2 rounded-lg",
        country === selectedCountry ? "bg-[#DFE9FC]" : ""
      )}
      onSelect={handleSelect}
    >
      <FlagComponent country={country} countryName={countryName} />
      <div className="flex-1 text-body-base text-gray-800 text-ellipsis truncate max-w-[155px]">
        {countryName}
      </div>
      <div className="text-caption-base text-gray-400">{`+${RPNInput.getCountryCallingCode(
        country
      )}`}</div>
    </CommandItem>
  );
};

const FlagComponent = ({
  country,
  countryName,
  className,
}: RPNInput.FlagProps & { className?: string }) => {
  const Flag = flags[country];

  return (
    <span
      className={cn(
        "flex h-[15px] w-5 overflow-hidden rounded-sm bg-white [&_svg:not([class*='size-'])]:size-full",
        className
      )}
    >
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

export { PhoneInput };
