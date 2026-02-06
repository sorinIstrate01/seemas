"use client";

import { Slot } from "@radix-ui/react-slot";
import { usePathname } from "next/navigation";
import React from "react";

interface ActiveLinkWrapperProps {
  href: string | string[];
  children: React.ReactElement;
  activeStateName?: string;
}

const ActiveLinkWrapper = ({
  href,
  children,
  activeStateName = "active",
}: ActiveLinkWrapperProps) => {
  const pathname = usePathname();
  const isActive = Array.isArray(href)
    ? href.some(h => pathname === h)
    : pathname === href;

  return (
    <Slot data-state={isActive ? activeStateName : "inactive"}>{children}</Slot>
  );
};

export default ActiveLinkWrapper;
