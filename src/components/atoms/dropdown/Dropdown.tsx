import * as React from "react";

import { IconCheck, IconProps } from "@tabler/icons-react";
import { type VariantProps, cva } from "class-variance-authority";
import Image, { ImageProps } from "next/image";

import { ScrollArea, ScrollAreaProps } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { BaseOption } from "@/types/ui/fields";

const dropdownItemVariants = cva(
  `flex w-full px-2 py-2 items-center justify-start rounded-lg gap-2 cursor-pointer hover:bg-neutral-75 disabled:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors data-[active=true]:bg-blue-200 aria-selected:bg-blue-200 data-[selected=true]:bg-blue-200 data-[state=checked]:bg-blue-200 [[data-selected=true]&_.check-icon]:text-blue-600 [[data-active=true]&_.check-icon]:text-blue-600 [[data-state=checked]&_.check-icon]:text-blue-600 outline-none`,
  {
    variants: {
      variant: {
        default: "text-gray-800",
        destructive: "text-red-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type DropdownItemVariantsType = VariantProps<
  typeof dropdownItemVariants
>;
export interface DropdownItemBaseProps {
  disabled?: boolean;
  StartIcon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  startImg?: ImageProps;
  caption?: string;
}
export interface DropdownItemProps<T extends BaseOption>
  extends React.HTMLAttributes<HTMLButtonElement>,
    DropdownItemVariantsType,
    DropdownItemBaseProps {
  selected?: boolean;
  option: T;
}

const DropdownItem = React.forwardRef<
  HTMLButtonElement,
  DropdownItemProps<BaseOption>
>(
  (
    { className, variant, children, option, StartIcon, startImg, caption, ...props },
    ref
  ) => {
  const combinedStartElement = React.useMemo(() => {
    if (typeof option === "string") return null;
    const resolvedStartIcon = StartIcon ?? option.StartIcon;
    const resolvedStartImg = startImg ?? option.startImg;
    const ResolvedStartIcon = resolvedStartIcon;
    return (
      <>
        {ResolvedStartIcon ? <ResolvedStartIcon size={16} /> : null}

        {resolvedStartImg && (
          <div className="size-5 flex items-center justify-center relative">
            <Image {...resolvedStartImg} alt={resolvedStartImg.alt ?? ""} />
          </div>
        )}
      </>
    );
  }, [StartIcon, option, startImg]);
  return (
    <button
      className={cn(dropdownItemVariants({ variant }), className)}
      ref={ref}
      {...props}
    >
      {combinedStartElement}{" "}
      <span className="flex-1 truncate text-start">{children}</span>
      {(() => {
        const resolvedCaption =
          caption ?? (typeof option !== "string" ? option?.caption : undefined);
        return resolvedCaption ? (
          <span className="typography-input-value text-gray-400">
            {resolvedCaption}
          </span>
        ) : null;
      })()}
      <IconCheck size={16} className="check-icon" />
    </button>
  );
}
);
DropdownItem.displayName = "DropdownItem";
const DropdownScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className, scrollbarClassName, children, ...props }, ref) => {
    const [forceMount, setForceMount] = React.useState<true | undefined>(
      undefined
    );
    const contentRef = React.useRef<HTMLDivElement>(null);
    const scrollAreaRef = React.useRef<HTMLDivElement>(null);

    const checkOverflow = React.useCallback(() => {
      if (!contentRef.current || !scrollAreaRef.current) return;

      try {
        const contentHeight = contentRef.current.scrollHeight;
        const containerHeight = scrollAreaRef.current.clientHeight;
        const hasVerticalOverflow = contentHeight > containerHeight;

        setForceMount(hasVerticalOverflow ? true : undefined);
      } catch (error) {
        // Silently handle any measurement errors
        console.warn("Error checking dropdown overflow:", error);
      }
    }, []);

    React.useEffect(() => {
      if (!contentRef.current || !scrollAreaRef.current) return;

      const resizeObserver = new ResizeObserver(() => {
        // Debounce the callback to improve performance
        const timeoutId = setTimeout(checkOverflow, 10);
        return () => clearTimeout(timeoutId);
      });

      resizeObserver.observe(contentRef.current);
      resizeObserver.observe(scrollAreaRef.current);

      // Initial check
      checkOverflow();

      return () => {
        resizeObserver.disconnect();
      };
    }, [checkOverflow]);
    React.useImperativeHandle(
      ref,
      () => scrollAreaRef.current as HTMLDivElement,
      []
    );
    return (
      <ScrollArea
        className={cn("flex-1 max-h-96", className)}
        // scrollbarClassName={cn("pr-1.5 pl-0.5 w-3", scrollbarClassName)}
        scrollbarProps={{
          className: cn("pr-1.5 pl-0.5 w-3", scrollbarClassName),
          forceMount: true,
        }}
        ref={scrollAreaRef}
        {...props}
      >
        <div
          ref={contentRef}
          className={cn(
            "flex flex-1 flex-col gap-0.5 px-1",
            forceMount && "pr-3"
          )}
        >
          <div className="h-0.5" />

          {children}
          <div className="h-0.5" />
        </div>
      </ScrollArea>
    );
  }
);
DropdownScrollArea.displayName = "DropdownScrollArea";

const dropdownParentStyles = cva(
  `rounded-xl border border-gray-100 bg-white shadow-2xl`
);
const dropdownVariants = cva(``, {
  variants: {
    size: {
      md: "min-w-[294px] max-h-96",
      lg: "min-w-[320px] max-h-[492px]",
      xl: "min-w-[460px] max-h-[492px]",
      none: "",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type DropdownVariantsType = VariantProps<typeof dropdownVariants>;
export type DropdownParentStylesType = VariantProps<
  typeof dropdownParentStyles
>;
export interface DropdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    DropdownVariantsType {}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <div
        className={cn(dropdownVariants({ size }), className)}
        // className={cn(className)}
        ref={ref}
        {...props}
      >
        <DropdownScrollArea>{children}</DropdownScrollArea>
      </div>
    );
  }
);
Dropdown.displayName = "Dropdown";

export {
  DropdownItem,
  dropdownItemVariants,
  Dropdown,
  dropdownVariants,
  dropdownParentStyles,
  DropdownScrollArea,
};
