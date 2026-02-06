// components/ClientHeader.tsx
"use client";

import { EClasses } from "@/constants/classes";
import { useRef, useEffect, HTMLAttributes } from "react";

export default function NavbarWrapper({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const HEADER_ZONE = 68; // px from top
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hdr = headerRef.current;
    if (!hdr) return;

    const onScroll = () => {
      let inDarkZone = false;

      for (const sec of document.querySelectorAll<HTMLElement>(
        `.${EClasses.SECTION_DARK}`
      )) {
        const rect = sec.getBoundingClientRect();
        // intersects the top 68px band if any part of the section
        // sits between y=0 and y=HEADER_ZONE
        if (rect.bottom > 0 && rect.top < HEADER_ZONE) {
          inDarkZone = true;
          break;
        }
      }

      hdr.classList.toggle(EClasses.DARK_MODE, inDarkZone);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check on load

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={headerRef} className={className} {...props}>
      {children}
    </header>
  );
}
