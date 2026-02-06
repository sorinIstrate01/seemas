import {
  IconProps,
  //  IconX
} from "@tabler/icons-react";
import Image, { ImageProps } from "next/image";

import InternalSelect from "@/components/atoms/inputs/InternalSelect";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

interface FieldStartElementsProps {
  startElement?: React.ReactNode;
  StartIcon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;

  startImg?: ImageProps;
}
const FieldStartElements = ({
  startElement,
  StartIcon,
  startImg,
}: FieldStartElementsProps) => {
  return (
    <>
      {startImg && (
        <div className="size-5 min-w-5 flex items-center justify-center relative">
          <Image {...startImg} alt={startImg.alt ?? ""} />
        </div>
      )}
      {StartIcon && <StartIcon size={16} className="min-w-4" />}
      {startElement}
    </>
  );
};
interface FieldEndElementsProps {
  inputCaption?: string;

  showClear?: boolean;

  endElement?: React.ReactNode;
  EndIcon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;

  handleClear?: () => void;

  showInternalSelect?: boolean;
}
const FieldEndElements = ({
  inputCaption,
  endElement,
  EndIcon,
  // showClear,
  // handleClear,
  showInternalSelect = false,
}: FieldEndElementsProps) => {
  return (
    <>
      {inputCaption && (
        <span className="typography-input-value text-gray-400">
          {inputCaption}
        </span>
      )}
      {endElement}
      {showInternalSelect && <InternalSelect />}
      {EndIcon && <EndIcon size={16} className="min-w-4" />}
      {/* {showClear && (
        <Button
          type="button"
          size="S"
          iconOnly
          variant="text-button"
          onClick={handleClear}
          className={cn("size-4 min-w-4")}
          aria-label="Clear input"
        >
          <IconX />
        </Button>
      )} */}
    </>
  );
};

export { FieldStartElements, FieldEndElements };
