import React from "react";
import { Dialog } from "../ui";
import { DialogContent } from "../ui/dialog";
import { useRouter } from "next/navigation";
import { cn } from "@/shared/lib/utils";

interface TestModalProps {
  className?: string;
}
export const TestModal = ({ className }: TestModalProps) => {
  const router = useRouter();
  return (
    <>
      <Dialog open={true} onOpenChange={() => router.back()}>
        <DialogContent
          className={cn(
            " p-0 max-w-[1060px] w-[1060px] max-lg:w-[90%] max-lg:h-[90%] min-h-[500px] bg-background  overflow-hidden",
            className
          )}
        >
          <p onClick={() => router.back()}>Test Modal bla bla</p>
        </DialogContent>
      </Dialog>
    </>
  );
};
