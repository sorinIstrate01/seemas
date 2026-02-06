"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IconCheck } from "@tabler/icons-react";
import React from "react";

const SuccessModal = ({
  open,
  setOpen,
  onClose,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  onClose: () => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[92vw] sm:max-w-[464px] w-full rounded-2xl sm:rounded-2xl bg-white [&>.btn-close]:hidden p-0">
        <DialogHeader className="hidden">
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-10 items-center py-12">
            <div className="size-[88px] inline-flex items-center justify-center text-primary p-6 rounded-full bg-[#F6F9FD] border-y border-[#266ae933]">
              <IconCheck size={40} />
            </div>
            <div className="flex flex-col items-center gap-4">
              <h6 className="text-subtitle-xl text-gray-900">
                You&apos;re all set!
              </h6>
              <p className="text-body-m text-zinc-500 text-center">
                Thank you for reaching out. <br />A team member will be in touch
                shortly.
              </p>
            </div>
          </div>
          <div className="px-6 py-4">
            <DialogClose asChild>
              <Button size="L" className="w-full" onClick={() => onClose()}>
                Got it!
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default SuccessModal;
