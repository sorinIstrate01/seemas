"use client";

import SeemasLogo from "@/assets/seemas-logo.svg";
import SectionContainer from "@/components/containers/section-container";
import SectionHeader from "@/components/headers/section-header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { handleReactQueryResponse } from "@/utils/react-query";
import { IconChevronLeft } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import Form from "./elements/form";
import Rectangle3 from "./elements/Rectangle3";
import Rectangle6 from "./elements/Rectangle6";
import SuccessModal from "./elements/success-modal";

const BookDemoModal = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const bookDemo = searchParams.get("book-demo");
  const [open, setOpen] = React.useState(false);
  const [successModalOpen, setSuccessModalOpen] = React.useState(false);
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch("/api/book-demo", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return handleReactQueryResponse(response);
    },
    onSuccess: () => {
      setSuccessModalOpen(true);
      setOpen(false);
    },
  });

  useEffect(() => {
    if (bookDemo === "true") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [bookDemo]);
  const onClose = (isOpen = false) => {
    setOpen(isOpen);
    window.history.replaceState(null, "", pathname);
  };
  return (
    <>
      <SuccessModal
        onClose={onClose}
        open={successModalOpen}
        setOpen={setSuccessModalOpen}
      />
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="w-screen max-w-none rounded-none sm:rounded-none h-dvh bg-white [&>.btn-close]:hidden p-0">
          <DialogHeader className="hidden">
            <DialogTitle />
            <DialogDescription />
          </DialogHeader>

          <ScrollArea className="h-full w-full flex flex-col flex-1  min-h-full">
            <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[15px]">
              <header className="py-4 px-4 md:px-8 xl:max-w-[1140px] w-full box-content mx-auto">
                <DialogClose asChild>
                  <Button
                    variant={"outline"}
                    onClick={() => onClose()}
                    size={"M"}
                  >
                    <IconChevronLeft /> Back to SeemaS
                  </Button>
                </DialogClose>
              </header>
            </div>
            <SectionContainer className="xl:max-w-[1140px] relative z-[2] pt-[116px] md:pt-[128px] pb-6 md:pb-12 xl:pb-[156px]">
              <SectionHeader
                title={
                  <>
                    Book a Demo for the
                    <br />
                    <span className="text-primary-light">SeemaS Platform</span>
                  </>
                }
                description="Powered by AI and founded by world-renowned experts on global taxation and valuation."
                titleClassName="max-w-[652px] md:text-h3"
                className="gap-4 mb-9 md:mb-12 xl:mb-14"
              />
              <div className="flex flex-col xl:flex-row w-full rounded-2xl border border-zinc-100 bg-white relative z-10">
                <div className="flex flex-col w-full xl:w-[520px] px-4 py-6 md:px-14 md:py-14 gap-8">
                  <h5 className="text-subtitle-l">Book a Demo</h5>
                  <Form
                    onSubmit={mutation.mutate}
                    isLoading={mutation.isPending}
                  />
                  {mutation.isError && (
                    <p className="text-red-500 text-center">
                      {mutation.error?.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col flex-1 px-4 py-6 md:px-14 md:py-14 gap-6 self-stretch bg-neutral-25 md:h-[400px] xl:h-auto">
                  <div className="text-zinc-200 flex-1">
                    <SeemasLogo
                      fill={"currentColor"}
                      className="w-[149px] h-[24px]"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <p className="text-body-l text-zinc-900">
                      “Tax compliance has become an increasingly complex process
                      for companies operating across multiple jurisdictions. Our
                      mission is to harness the power of AI to eliminate these
                      pain points, giving companies a trusted, autonomous
                      solution that simplifies compliance while ensuring
                      accuracy”
                    </p>
                    <div className="flex flex-col text-body-m">
                      <span className="text-zinc-900">Atulya Sarin, Ph.D.</span>
                      <span className="text-zinc-400">CEO & Founder</span>
                    </div>
                  </div>
                </div>
              </div>
              <Rectangle3 />
              <Rectangle6 />
            </SectionContainer>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default BookDemoModal;
