import { ComponentProps, ReactNode } from "react";

export type TextValue = string;
export type NumberValue = number | null;

interface BaseCustomInputProps extends ComponentProps<"input"> {
  label?: string;
  labelRightText?: string;
  leftChild?: ReactNode;
  rightChild?: ReactNode;
  error?: string;
  inputClassName?: string;
  inputContainerClassName?: string;
}

export interface NumberInputProps
  extends Omit<BaseCustomInputProps, "value" | "onChange"> {
  type: "number";
  value: NumberValue;
  onChange: (value: NumberValue) => void;
}

export interface TextInputProps extends Omit<BaseCustomInputProps, "onChange"> {
  type: Exclude<string, "number">;
  onChange: (value: TextValue) => void;
  numericFormatProps?: never;
}

export type CustomInputProps = NumberInputProps | TextInputProps;
