import { cva } from "class-variance-authority";

export const baseInputStyles = cva(
  `px-3 py-2.5 flex-1 outline-none right-0 rounded-xl border border-gray-200 bg-white typography-body-base placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:bg-neutral-100 aria-disabled:cursor-not-allowed aria-disabled:bg-neutral-100 aria-disabled:border-gray-200 aria-invalid:border-red-500 hover:border-gray-400 focus-visible:border-gray-400 focus-within:border-gray-400 `
);
export const noStylesInputStyles = cva(
  `border-none outline-none flex-1 w-full hover:border-none focus-within:border-none focus-visible:border-none`
);
