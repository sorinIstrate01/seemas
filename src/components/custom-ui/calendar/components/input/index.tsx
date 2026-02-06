import React, { FC, useRef } from "react";

import { cn } from "@/lib/utils";

import { CustomInputProps, TextValue } from "./input.types";

const CustomInput: FC<CustomInputProps> = ({
  value,
  type,
  label,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  disabled,
  // labelRightText,
  leftChild,
  rightChild,
  className,
  error,
  // numericFormatProps,
  name,
  inputClassName,
  inputContainerClassName,
  ref,
  ...inputProps
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const inputContainerClasses = cn(
    "flex items-center gap-2 w-full h-10 bg-white px-3 outline outline-1 outline-gray-200 -outline-offset-1 rounded-xl typography-input-value text-gray-800 group cursor-text",
    "hover:outline-gray-400",
    "focus-within:outline-gray-400",
    {
      "bg-gray-100 outline-gray-200 cursor-not-allowed": disabled,
      "outline-red-300 hover:outline-red-400 focus-within:outline-red-700 hover:focus-within:outline-red-700":
        error,
      "outline-red-400": error && value,
    },
    inputContainerClassName
  );

  const inputClasses = cn(
    "outline-none h-full w-full disabled:bg-inherit cursor-[inherit]",
    inputClassName
  );

  const iconClasses = cn(
    "flex items-center justify-center text-gray-400 select-none",
    value && "text-gray-600",
    "group-hover:text-gray-600",
    "group-focus-within:text-gray-600"
  );

  const handleRef: React.RefCallback<HTMLInputElement> = (
    node: HTMLInputElement | null
  ) => {
    inputRef.current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  const handleContainerClick = () => {
    if (disabled) return;
    inputRef.current?.focus();
  };

  return (
    <div className={cn("flex flex-col relative", className)}>
      <div className={inputContainerClasses} onClick={handleContainerClick}>
        {leftChild && <div className={iconClasses}>{leftChild}</div>}

        <input
          ref={handleRef}
          name={name}
          id={label}
          type={type}
          value={value ?? ""}
          className={inputClasses}
          onChange={e => (onChange as (val: TextValue) => void)(e.target.value)}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete="one-time-code"
          {...inputProps}
        />
        {rightChild && <div className={iconClasses}>{rightChild}</div>}
      </div>
    </div>
  );
};

CustomInput.displayName = "CustomInput";

export default React.memo(CustomInput);
