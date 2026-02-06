import * as React from "react";

import { IconProps } from "@tabler/icons-react";
import { ImageProps } from "next/image";

import { Input, InputVariantsType } from "@/components/atoms/inputs/Input";
import { InputWrapper } from "@/components/atoms/inputs/InputWrapper";
import { cn } from "@/lib/utils";

// import { InputLabelBaseProps } from "../InputLabel/InputLabel";
import { FieldEndElements, FieldStartElements } from "../common/FieldElements";
import { FieldWrapper, FieldWrapperProps } from "../common/FieldWrapper";

interface TextFieldProps
  extends Omit<React.ComponentProps<"input">, "id" | "size">,
    Pick<
      FieldWrapperProps,
      "label" | "bottomHint" | "error" | "bottomRightElement"
    >,
    Pick<InputVariantsType, "size"> {
  inputCaption?: string;

  showClear?: boolean;
  startElement?: React.ReactNode;
  StartIcon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;

  startImg?: ImageProps;
  endElement?: React.ReactNode;
  EndIcon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  showInternalSelect?: boolean;
  id?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      // hint,
      // caption,
      inputCaption,
      bottomHint,
      // endButtonConfig,
      error,

      showClear = true,
      startElement,
      StartIcon,
      startImg,
      endElement,
      EndIcon,
      className,
      value,
      size,
      showInternalSelect = true,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Handle both external ref and internal ref
    const handleRef = React.useCallback(
      (element: HTMLInputElement | null) => {
        if (typeof ref === "function") {
          ref(element);
        } else if (ref) {
          ref.current = element;
        }
        inputRef.current = element;
      },
      [ref]
    );

    // Check if there's a value to clear

    const handleClear = React.useCallback(() => {
      // Uncontrolled input - use ref
      if (inputRef.current) {
        inputRef.current.value = "";
        // Trigger input event so React knows the value changed
        inputRef.current.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }, []);

    return (
      <FieldWrapper
        label={label}
        // hint={hint}
        // caption={caption}
        // endButtonConfig={endButtonConfig}
        bottomHint={bottomHint}
        error={error}
      >
        {/* Input */}
        <InputWrapper
          startElement={
            <FieldStartElements
              startElement={startElement}
              StartIcon={StartIcon}
              startImg={startImg}
            />
          }
          endElement={
            <FieldEndElements
              inputCaption={inputCaption}
              endElement={endElement}
              EndIcon={EndIcon}
              showClear={showClear}
              handleClear={handleClear}
              showInternalSelect={showInternalSelect}
            />
          }
          size={size}
          isError={!!error}
          isDisabled={!!props.disabled}
        >
          <Input
            ref={handleRef}
            value={value}
            aria-invalid={!!error}
            className={cn(className)}
            size={size}
            {...props}
          />
        </InputWrapper>
      </FieldWrapper>
    );
  }
);

TextField.displayName = "TextField";

export { TextField, type TextFieldProps };
