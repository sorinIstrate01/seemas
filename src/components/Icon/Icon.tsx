import { FunctionComponent } from "react";

import { IconProps as IconTablerProps } from "@tabler/icons-react";

const getIconStrokeWidth = (size: number) => {
  return (
    {
      12: 2.5,
      16: 2,
      20: 1.5,
      24: 1.7,
    }[size] ?? 2
  );
};

export type IconType = FunctionComponent<IconTablerProps & {}>;
export interface IconProps extends IconTablerProps {
  icon?: IconType;
}

// Компонент Icon
export const Icon = ({
  icon: IconComponent,
  size = 16,
  className,
  ...props
}: IconProps) => {
  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      size={size}
      strokeWidth={getIconStrokeWidth(Number(size))}
      className={className}
      {...props}
    />
  );
};
