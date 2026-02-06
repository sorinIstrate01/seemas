import * as React from "react";

import { IconProps } from "@tabler/icons-react";
import { ImageProps } from "next/image";

import { DropdownItemBaseProps } from "@/components/atoms/dropdown/Dropdown";
import { InputVariantsType } from "@/components/atoms/inputs/Input";
import { FieldWrapperProps } from "@/components/molecules/common/FieldWrapper";

export type BaseOption = string | (Record<string, any> & DropdownItemBaseProps);
export interface SelectFieldBaseProps<T extends BaseOption>
  extends Omit<FieldWrapperProps, "children">,
    Pick<InputVariantsType, "size"> {
  options: T[];
  labelKey?: T extends string ? never : keyof T;
  valueKey?: T extends string ? never : keyof T;
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
  placeholder?: string;
}
