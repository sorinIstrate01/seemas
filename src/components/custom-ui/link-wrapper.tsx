"use client";

import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, useCallback } from "react";

interface DemoLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export function LinkWrapper({
  children,
  href,
  className,
  ...props
}: DemoLinkProps) {
  const pathname = usePathname();
  const isBookDemo = href === ROUTES.BOOK_DEMO;
  const url = isBookDemo ? `${pathname}${href}` : href;

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (!isBookDemo) return;

      e.preventDefault();

      window.history.pushState(null, "", url);
    },
    [isBookDemo, url]
  );

  return (
    <Link
      href={url}
      className={className}
      scroll={!isBookDemo}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
