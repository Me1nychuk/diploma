"use client";
import React from "react";
import { Dialog, DialogContent } from "../../ui";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";

interface ModalProps {
  className?: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ className, children }) => {
  const router = useRouter();
  return (
    <>
      <Dialog open={true} onOpenChange={() => router.back()}>
        <DialogContent
          className={cn(
            " p-5 max-w-[1200px] w-[95%] max-lg:w-[90%] max-lg:h-[90%] min-h-[500px] bg-background  overflow-hidden rounded-xl border-none",
            className
          )}
        >
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
};

export { Modal };
