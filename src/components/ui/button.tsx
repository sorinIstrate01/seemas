"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
// import { buttonVariants } from "@/constants/ui/button";

// const buttonVariants = cva(
//   "text-button inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md transition-all focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:shrink-0 duration-300 box-border font-medium leading-[20px]",
//   {
//     variants: {
//       variant: {
//         primary: `bg-primary text-white
//         hover:bg-primary-light
//         focus-visible:bg-primary-dark
//         disabled:bg-zinc-200 disabled:text-zinc-500`,
//         secondary: `bg-zinc-900 text-white
//         hover:bg-zinc-800
//         focus-visible:bg-zinc-900
//         disabled:bg-zinc-200 disabled:text-zinc-500`,
//         ghost: `bg-white text-zinc-800
//         hover:bg-zinc-100
//         focus-visible:bg-white data-[state=active]:bg-white
//         disabled:bg-zinc-200 disabled:text-zinc-500`,
//         layer: `bg-zinc-100 text-zinc-800
//         hover:bg-zinc-50
//         focus-visible:bg-zinc-50
//         disabled:bg-zinc-200 disabled:text-zinc-500`,
//         outline: `bg-transparent outline outline-1 outline-zinc-200 -outline-offset-1 text-zinc-800
//         hover:outline-zinc-100
//         focus-visible:outline-zinc-300
//         disabled:outline-zinc-100 disabled:text-zinc-400`,
//         tab: `bg-transparent outline outline-1 outline-zinc-100 -outline-offset-1 text-zinc-800
//         hover:outline-zinc-200 hover:text-zinc-900
//         focus-visible:outline-gray-100 focus-visible:bg-gray-100 data-[active=true]:bg-gray-100 data-[active=true]:outline-gray-100
//         disabled:outline-zinc-100 disabled:text-zinc-400`,
//       },
//       size: {
//         M: "px-3 py-2 [&_svg]:size-5 rounded-[10px]",
//         L: "px-4 py-[10px] [&_svg]:size-6 rounded-xl",
//         iconS: "size-8 [&_svg]:size-4 rounded-lg",
//         iconM: "p-[10px] [&_svg]:size-4 rounded-[10px]",
//         iconL: "p-[10px] [&_svg]:size-5 rounded-xl",

//         content: "",
//       },
//     },
//     defaultVariants: {
//       variant: "primary",
//       size: "M",
//     },
//   }
// );
const buttonVariants = cva(
  `inline-flex items-center justify-center gap-1.5 rounded-md text-button whitespace-nowrap transition-all duration-300 box-border
  disabled:cursor-not-allowed disabled:opacity-50 
  [&_svg]:shrink-0`,
  {
    variants: {
      variant: {
        primary: `bg-primary text-white 
          hover:bg-primary-light 
          focus-visible:bg-primary-dark
          disabled:bg-zinc-200 disabled:text-zinc-500`,
        secondary: `bg-zinc-900 text-white 
          hover:bg-zinc-800 
          focus-visible:bg-zinc-900
          disabled:bg-zinc-200 disabled:text-zinc-500`,
        ghost: `bg-white text-zinc-800 
          hover:bg-zinc-100 
          focus-visible:bg-white data-[state=active]:bg-white 
          disabled:bg-zinc-200 disabled:text-zinc-500 data-[active=true]:bg-zinc-200 data-[active=true]:text-zinc-900`,
        layer: `bg-zinc-100 text-zinc-800 
          hover:bg-zinc-50  
          focus-visible:bg-zinc-50
          disabled:bg-zinc-200 disabled:text-zinc-500`,
        outline: `bg-transparent outline outline-1 outline-zinc-200 -outline-offset-1 text-zinc-800 
        hover:outline-zinc-100 hover:text-zinc-800
        focus-visible:outline-zinc-300 focus-visible:text-zinc-900
        disabled:outline-zinc-100 disabled:text-zinc-400`,
        tab: `bg-transparent outline outline-1 outline-zinc-100 -outline-offset-1 text-zinc-800 px-4
          hover:outline-zinc-200 hover:text-zinc-900  
          focus-visible:outline-gray-100 focus-visible:bg-gray-100 data-[active=true]:bg-gray-100 data-[active=true]:outline-gray-100
          disabled:outline-zinc-100 disabled:text-zinc-400`,
      },
      size: {
        S: "h-8 px-3 py-2 [&_svg]:size-4 rounded-lg",
        M: "h-9 px-3 py-2 [&_svg]:size-4 rounded-[10px]",
        L: "h-10 px-4 py-[10px] [&_svg]:size-5 rounded-xl",

        iconS: "size-8 [&_svg]:size-4 rounded-lg",
        iconM: "size-9 [&_svg]:size-4 rounded-[10px]",
        iconL: "size-10 [&_svg]:size-5 rounded-xl",

        content: "",
      },
      iconOnly: {
        true: "aspect-square p-0",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "M",
      iconOnly: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, iconOnly, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, iconOnly }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
