"use client";

import { DrawerContent } from "@/components/ui/drawer";

const DrawerContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <DrawerContent className="h-svh w-screen border-0 right-0 rounded-t-none bg-neutral-50 [&_.bg-muted]:hidden">
      <div className="flex flex-col size-full">{children}</div>
    </DrawerContent>
  );
};

export default DrawerContentWrapper;
