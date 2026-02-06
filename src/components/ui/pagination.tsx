"use client";
import * as React from "react";

import {
  IconChevronLeft,
  IconChevronRight,
  IconDots,
} from "@tabler/icons-react";

import { ButtonProps } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("flex w-fit justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & ButtonProps &
  LinkProps;

function PaginationLink({
  className,
  isActive,
  href,
  children,
  size = "iconS",
  ...props
}: PaginationLinkProps) {
  return (
    // @ts-ignore
    <Link
      href={href}
      className={cn(
        "text-button block",
        className,
        buttonVariants({ variant: "ghost", size })
      )}
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      {...props}
    >
      {children}
    </Link>
  );
}

function PaginationPrevious({
  className,
  iconOnly = true,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      iconOnly={iconOnly}
      {...props}
    >
      <IconChevronLeft />
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  iconOnly = true,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      iconOnly={iconOnly}
      {...props}
    >
      <IconChevronRight />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex size-7 items-center justify-center text-gray-400",
        className
      )}
      {...props}
    >
      <IconDots size={16} />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
